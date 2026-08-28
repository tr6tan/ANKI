const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const { test } = require("node:test");

function createElement() {
  return {
    className: "",
    dataset: {},
    innerHTML: "",
    scrollTop: 0,
    style: { setProperty() {} },
    addEventListener() {},
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
  };
}

function loadApp(opts = {}) {
  const storage = new Map();
  const fsrsCalls = [];
  const view = createElement();
  const nav = createElement();
  const documentElement = createElement();
  documentElement.clientHeight = 800;
  const document = {
    body: createElement(),
    documentElement,
    visibilityState: "visible",
    addEventListener() {},
    getElementById(id) {
      return id === "view" ? view : id === "nav" ? nav : null;
    },
  };
  const speechSynthesis = {
    cancel() {},
    getVoices() {
      return [];
    },
    speak() {},
  };
  const context = {
    console,
    Date,
    Math,
    JSON,
    URL,
    setTimeout,
    clearTimeout,
    setInterval() {
      return 0;
    },
    clearInterval() {},
    document,
    localStorage: {
      getItem(key) {
        return storage.get(key) || null;
      },
      setItem(key, value) {
        storage.set(key, value);
      },
    },
    navigator: {},
    speechSynthesis,
    SpeechSynthesisUtterance: function SpeechSynthesisUtterance(text) {
      this.text = text;
    },
    /* Doublure de FSRS. L'ancienne renvoyait une stabilité constante, donc aucun
       test ne pouvait voir que l'application ne lui transmettait jamais la date de
       la révision précédente. Celle-ci reproduit la seule propriété qui compte
       ici : une carte revue trop tôt ne consolide pas. Elle enregistre aussi les
       appels, pour qu'un test puisse vérifier l'écart réellement observé. */
    FSRS: {
      Rating: { Again: 1, Good: 3 },
      State: { New: 0, Learning: 1, Review: 2, Relearning: 3 },
      fsrs() {
        return {
          next(card, reviewedAt, rating) {
            const good = rating === 3;
            const elapsed = card.last_review
              ? (reviewedAt.getTime() - card.last_review.getTime()) / 864e5
              : 0;
            fsrsCalls.push({
              elapsed,
              lastReview: card.last_review ? card.last_review.getTime() : null,
              rating,
            });
            const prev = card.stability || 0;
            const stability = !good
              ? 0.5
              : prev <= 0
                ? 3
                : prev * (1 + 3 * (elapsed / prev));
            const scheduledDays = Math.max(1, Math.round(stability));
            return {
              card: {
                ...card,
                due: new Date(reviewedAt.getTime() + scheduledDays * 864e5),
                stability,
                difficulty: good ? 4.8 : 6,
                elapsed_days: elapsed,
                scheduled_days: scheduledDays,
                reps: card.reps + 1,
                lapses: card.lapses + (good ? 0 : 1),
                learning_steps: 0,
                state: 2,
              },
            };
          },
        };
      },
    },
  };
  /* Simule une bibliothèque d'ordonnancement absente, cas d'une panne de CDN. */
  if (opts.withScheduler === false) delete context.FSRS;
  context.window = context;
  context.window.addEventListener = () => {};
  context.window.matchMedia = () => ({ matches: false });
  context.window.scrollTo = () => {};
  context.window.innerHeight = 800;
  context.globalThis = context;
  vm.createContext(context);
  const source = fs.readFileSync("tmp_script.js", "utf8");
  const expose = `\n;globalThis.__appTest = { app, cards, ITEMS, KIDX, DECKS, known, cardKnown, judge, toRomaji, compoundSpeech, rateFor, paddedSpeech, acceptedFor, kanaChoicesForSession, earNeighbours, learned, solid, learnedCount, solidCount, cardIdsFor, productionId, baseId, isProd, deckUnlockInfo, levelUnlockInfo, deck, grade, queueFor, startSession, validate, commit, nextCard, acceptedFor, dayKey, normalizeDailyState, localPayload, applyPayload, syncPokemonUnlocks, pokemonUnlockedByKana, validateDeckData, syncUserKey, MASTERY_REPS, DAILY_BUDGET, WORDCTX, ensureLocalDataBelongsTo, emptyCard, saveState, Home, Editor, /* typeof accepte un identifiant non déclaré : c'est le seul moyen de prouver depuis l'intérieur du script qu'un symbole retiré l'est bien. */ retires: { DAILY_LOADS: typeof DAILY_LOADS === "undefined", dailyBudget: typeof dailyBudget === "undefined" } };`;
  vm.runInContext(source + expose, context, { filename: "tmp_script.js" });
  return Object.assign(context.__appTest, { fsrsCalls });
}

/* Révise une carte n fois en simulant l'attente jusqu'à l'échéance : on ne peut
   pas avancer l'horloge, alors on recule les horodatages de la carte d'autant. */
function reviewSpaced(api, card, times, good = true) {
  for (let n = 0; n < times; n++) {
    api.grade(card, good, 4000, false);
    const wait = Math.max(0, card.due - Date.now());
    card.lastSeen -= wait;
    card.due -= wait;
  }
}

/* Depuis le découpage par direction, un item porte deux cartes : la maîtrise se
   construit dans les deux sens. */
function masterItem(api, itemId, times) {
  for (const id of api.cardIdsFor(itemId))
    reviewSpaced(api, api.cards[id], times ?? api.MASTERY_REPS);
}

/* Charge sw.js dans un environnement factice et rend son gestionnaire `fetch`
   pilotable. Le cycle de vie réel d'un service worker est trop capricieux à piloter
   depuis un onglet pour servir de vérification ; la logique d'aiguillage, elle, se
   teste exactement. */
function loadServiceWorker({ reseau }) {
  const store = new Map();
  const cache = {
    async match(req) {
      return store.get(typeof req === "string" ? req : req.url) || undefined;
    },
    async put(req, res) {
      store.set(typeof req === "string" ? req : req.url, res);
    },
    async add() {},
    async keys() {
      return [];
    },
  };
  const listeners = {};
  const contexte = {
    self: {
      addEventListener: (nom, fn) => (listeners[nom] = fn),
      skipWaiting() {},
      clients: { claim() {} },
    },
    caches: {
      async open() {
        return cache;
      },
      async match(req) {
        return cache.match(req);
      },
      async keys() {
        return [];
      },
      async delete() {},
    },
    fetch: reseau,
    Response: { error: () => ({ type: "error" }) },
    URL,
    console,
  };
  const src = fs.readFileSync("sw.js", "utf8");
  vm.runInNewContext(src, contexte);

  return {
    store,
    /* Rejoue une requête et renvoie ce que le worker a décidé de servir. */
    async demande(url, { mode = "no-cors" } = {}) {
      let réponse;
      listeners.fetch({
        request: { url, method: "GET", mode },
        respondWith: (p) => (réponse = p),
      });
      return réponse;
    },
  };
}

test("le service worker sert le cache d'abord pour les ressources versionnées", async () => {
  let appels = 0;
  const sw = loadServiceWorker({
    reseau: async () => {
      appels++;
      return { ok: true, type: "basic", clone: () => ({}) };
    },
  });
  const url = "http://x/tmp_script.js?v=20260819-0012";
  sw.store.set(url, { ok: true, provenance: "cache" });

  const res = await sw.demande(url);
  assert.equal(res.provenance, "cache");
  /* Le réseau d'abord coûtait une attente à chaque lancement, et traînait sans
     jamais replier sur une connexion faible mais non rompue. */
  assert.equal(appels, 0, "le réseau ne doit pas être sollicité");
});

test("le service worker garde le réseau d'abord pour index.html, et le remet en cache", async () => {
  let appels = 0;
  const sw = loadServiceWorker({
    reseau: async () => {
      appels++;
      return { ok: true, provenance: "réseau", clone: () => ({ copie: true }) };
    },
  });
  const res = await sw.demande("http://x/index.html", { mode: "navigate" });
  assert.equal(res.provenance, "réseau", "sinon un déploiement ne serait jamais vu");
  assert.equal(appels, 1);
  await new Promise((r) => setTimeout(r, 0));
  /* Sans cette remise en cache, index.html n'entrait dans le cache que par le
     précache : celui-ci devenait un point de défaillance unique, et son échec
     empêchait purement et simplement le démarrage hors ligne. */
  assert.ok(sw.store.has("http://x/index.html"), "la copie doit être rafraîchie");
});

test("hors ligne, une navigation retombe sur index.html en cache", async () => {
  const sw = loadServiceWorker({
    reseau: async () => {
      throw new Error("hors ligne");
    },
  });
  sw.store.set("http://x/index.html", { ok: true, provenance: "cache" });
  const res = await sw.demande("http://x/index.html", { mode: "navigate" });
  assert.equal(res.provenance, "cache");
});

test("une sous-ressource absente ne reçoit jamais du HTML", async () => {
  const sw = loadServiceWorker({
    reseau: async () => {
      throw new Error("hors ligne");
    },
  });
  sw.store.set("http://x/index.html", { ok: true, provenance: "index" });
  const res = await sw.demande("http://x/manquant.js");
  /* Le repli d'origine renvoyait index.html pour toute requête en échec : un script
     recevait du HTML, donc une erreur de syntaxe au lieu d'un échec propre. */
  assert.equal(res.type, "error");
  assert.notEqual(res.provenance, "index");
});

test("les données des decks respectent tous les invariants", () => {
  const api = loadApp();
  assert.deepEqual(Array.from(api.validateDeckData()), []);
});

test("un item est maîtrisé après cinq réussites espacées dans les DEUX directions", () => {
  const api = loadApp();
  const [reco, prod] = api.cardIdsFor("h0");
  assert.ok(prod && prod !== reco, "un kana doit avoir une carte de production");

  reviewSpaced(api, api.cards[reco], api.MASTERY_REPS);
  assert.equal(api.cardKnown(reco), true, "la reconnaissance est acquise");
  assert.equal(
    api.known("h0"),
    false,
    "reconnaître ne suffit pas : la production reste à faire",
  );

  reviewSpaced(api, api.cards[prod], api.MASTERY_REPS - 1);
  assert.equal(api.known("h0"), false);
  reviewSpaced(api, api.cards[prod], 1);
  assert.equal(api.known("h0"), true);
});

test("la lisibilité ne dépend que de la carte de reconnaissance", () => {
  const api = loadApp();
  const [reco] = api.cardIdsFor("h0");
  reviewSpaced(api, api.cards[reco], 2);
  /* Savoir LIRE un caractère est une compétence de reconnaissance : c'est elle qui
     conditionne les portes, sans quoi le calibrage mesuré s'effondrerait. */
  assert.equal(api.learned("h0"), true);
  assert.equal(api.known("h0"), false);
});

test("un nom de Pokémon n'a pas de carte sœur", () => {
  const api = loadApp();
  const pkmn = api.ITEMS.find((i) => i.deck === "pkmn");
  assert.equal(api.productionId(pkmn.id), null);
  // Array.from : le tableau vient du realm du vm, son prototype diffère
  assert.deepEqual(Array.from(api.cardIdsFor(pkmn.id)), [pkmn.id]);
});

test("une session ne présente jamais les deux directions d'un même item", () => {
  const api = loadApp();
  const q = api.queueFor();
  const bases = q.map((c) => api.baseId(c.id));
  assert.equal(
    new Set(bases).size,
    bases.length,
    "les cartes sœurs doivent être enterrées",
  );
});

test("sans planificateur, rien n'est noté et la session refuse de démarrer", () => {
  /* Le repli d'origine recalculait les intervalles avec un ordonnanceur maison :
     une panne de CDN suffisait à corrompre l'historique en silence, les deux
     formules écrivant dans les mêmes champs. */
  const api = loadApp({ withScheduler: false });
  api.app.auth = { uid: "test" };
  const card = api.cards.h0;
  const avant = JSON.stringify(card);

  assert.equal(api.grade(card, true, 4000), false, "grade doit refuser");
  assert.equal(JSON.stringify(card), avant, "la carte ne doit pas être touchée");
  assert.equal(api.app.schedulerDown, true, "et l'état doit le signaler");

  api.startSession(null);
  assert.equal(api.app.sess, null, "aucune session ne doit démarrer");
});

test("les intervalles croissent au fil des révisions réussies", () => {
  const api = loadApp();
  const card = api.cards.h0;
  const intervals = [];
  for (let n = 0; n < 5; n++) {
    reviewSpaced(api, card, 1);
    intervals.push(card.fsrsScheduledDays);
  }
  /* Le bug corrigé figeait chaque intervalle à sa valeur initiale : la suite
     valait 3, 3, 3, 3, 3 quel que soit le temps réellement écoulé. */
  for (let n = 1; n < intervals.length; n++)
    assert.ok(
      intervals[n] > intervals[n - 1],
      `intervalles non croissants : ${intervals.join(", ")}`,
    );
});

test("le planificateur reçoit la date de la révision précédente", () => {
  const api = loadApp();
  const card = api.cards.h0;
  api.grade(card, true, 4000, false);
  const firstReview = card.lastSeen;
  // trois jours passent avant la révision suivante
  const gap = 3 * 864e5;
  card.lastSeen -= gap;
  card.due -= gap;
  const expectedPrev = card.lastSeen;
  api.grade(card, true, 4000, false);
  const lastCall = api.fsrsCalls[api.fsrsCalls.length - 1];
  assert.equal(
    lastCall.lastReview,
    expectedPrev,
    "last_review doit être la révision précédente, pas l'instant courant",
  );
  assert.ok(
    Math.abs(lastCall.elapsed - 3) < 0.01,
    `elapsed_days observé : ${lastCall.elapsed} (attendu ≈ 3)`,
  );
  assert.ok(firstReview > expectedPrev);
});

test("une rechute retire le statut de maîtrise", () => {
  const api = loadApp();
  masterItem(api, "h0");
  assert.equal(api.known("h0"), true);
  /* la rechute ne porte que sur la production : une seule direction perdue suffit */
  const prod = api.productionId("h0");
  api.grade(api.cards[prod], false, 4000, false);
  assert.equal(
    api.known("h0"),
    false,
    "goodReps seul est un cliquet : la stabilité courante doit compter",
  );
  assert.equal(api.cardKnown(api.baseId("h0")), true, "l'autre sens tient encore");
});

test("le katakana s'ouvre sur des hiragana lisibles, pas maîtrisés", () => {
  const api = loadApp();
  const kata = api.deck("kata");
  assert.equal(api.deckUnlockInfo(kata).open, false);
  const hira = api.ITEMS.filter((i) => i.deck === "hira").slice(0, 90);
  for (const i of hira) reviewSpaced(api, api.cards[i.id], 2);
  assert.ok(
    hira.every((i) => api.learned(i.id)),
    "deux réussites espacées rendent un kana lisible",
  );
  assert.ok(
    !hira.some((i) => api.known(i.id)),
    "aucun n'est encore maîtrisé , c'est tout l'intérêt",
  );
  assert.equal(api.deckUnlockInfo(kata).open, true);
});

test("la porte verrouillée liste les caractères qui manquent encore", () => {
  /* Amélioration du 28/08/2026 : le compte seul ("80/90 lisibles") ne dit pas
     lesquels réviser. deckUnlockInfo() expose désormais `missing`, la liste des
     glyphes pas encore appris — vide une fois la porte ouverte. */
  const api = loadApp();
  const kata = api.deck("kata");
  const before = api.deckUnlockInfo(kata);
  assert.equal(before.open, false);
  assert.ok(before.missing.length > 0, "des hiragana manquants doivent être listés");
  assert.ok(
    before.missing.every((g) => typeof g === "string" && g.length > 0),
    "chaque entrée doit être un glyphe affichable",
  );

  const hira = api.ITEMS.filter((i) => i.deck === "hira").slice(0, 90);
  for (const i of hira) reviewSpaced(api, api.cards[i.id], 2);
  const after = api.deckUnlockInfo(kata);
  assert.equal(after.open, true);
  assert.equal(after.missing.length, 0, "une porte ouverte n'a plus rien à lister");
});

test("une porte franchie ne se referme pas après une rechute", () => {
  const api = loadApp();
  const hira = api.ITEMS.filter((i) => i.deck === "hira").slice(0, 90);
  for (const i of hira) reviewSpaced(api, api.cards[i.id], 2);
  const kata = api.deck("kata");
  assert.equal(api.deckUnlockInfo(kata).open, true);
  for (const i of hira) api.grade(api.cards[i.id], false, 4000, false);
  assert.ok(
    !hira.some((i) => api.learned(i.id)),
    "plus aucun hiragana n'est lisible",
  );
  assert.equal(
    api.deckUnlockInfo(kata).open,
    true,
    "retirer un deck déjà en cours d'étude serait pire que le laisser ouvert",
  );
});

test("aucune lecture romaji ne laisse fuir de caractère japonais", () => {
  const api = loadApp();
  const fuites = api.ITEMS.filter((i) => {
    const rom = i.rom || (i.kana ? api.toRomaji(i.kana) : "");
    return rom && /[^\x00-\x7F]/.test(rom);
  }).map((i) => `${i.id} ${i.ja || i.glyph} donne ${i.rom}`);
  /* La table maison ne couvrait pas les sons étrangers du katakana : ファ ディ シェ
     フォ fuyaient tels quels, et onze cartes Pokémon affichaient « fuァiyaa ». */
  assert.deepEqual(Array.from(fuites), []);
});

test("changer de compte sur le même appareil vide les données locales", () => {
  /* Faille corrigée le 28/08/2026 : STORAGE_KEY n'est pas scopée par uid. Sur un
     appareil partagé, se connecter avec un second compte gardait en mémoire toutes
     les cartes/progression du premier tant qu'un pull cloud n'avait pas écrasé les
     valeurs — et la fusion latest-wins pouvait alors renvoyer les progrès du
     premier compte vers le cloud du second. ensureLocalDataBelongsTo() doit tout
     remettre à vide dès qu'un uid différent du dernier connu se présente. */
  const api = loadApp();
  const someId = api.ITEMS[0].id;
  Object.assign(api.cards[someId], { reps: 5, goodReps: 5, stab: 10, modifiedAt: Date.now() });
  api.app.dailyStats = { "2026-08-28": { attempts: 10, good: 8, wrong: 2, skip: 0 } };
  api.app.pokemonUnlocks = { p1: { shiny: false } };
  api.app.lastUid = "user-a";

  // Le même compte se reconnecte : rien ne doit être perdu.
  api.ensureLocalDataBelongsTo("user-a");
  assert.equal(api.cards[someId].reps, 5, "même compte : les données restent");

  // Un second compte se connecte sur cet appareil : tout doit repartir à vide.
  api.ensureLocalDataBelongsTo("user-b");
  assert.equal(api.cards[someId].reps, 0, "changement de compte : la carte redevient vierge");
  assert.equal(api.cards[someId].stab, 0);
  assert.equal(
    Object.keys(api.app.dailyStats || {}).length,
    0,
    "le journal du premier compte ne doit pas fuiter",
  );
  assert.equal(
    Object.keys(api.app.pokemonUnlocks || {}).length,
    0,
    "les déblocages du premier compte ne doivent pas fuiter",
  );
});

test("les emprunts katakana ajoutés au contexte sont propres", () => {
  /* Amélioration du 28/08/2026 (SPEC §14) : le deck Katakana ne contexte plus
     ses caractères qu'avec des mots hiragana convertis mécaniquement (すし→スシ,
     artificiel). WORDCTX contient désormais aussi de vrais emprunts japonais
     (コーヒー, テレビ...). Ce test vérifie que ce corpus ajouté est bien formé :
     romaji sans fuite de japonais, découpage en unités cohérent avec le mot. */
  const api = loadApp();
  const emprunts = api.WORDCTX.filter((w) => w.id.startsWith("kw"));
  assert.ok(emprunts.length >= 30, "le corpus d'emprunts doit être substantiel");
  for (const w of emprunts) {
    assert.ok(
      /^[\u30A0-\u30FFー]+$/.test(w.word),
      `${w.word} doit être écrit entièrement en katakana`,
    );
    assert.ok(
      !/[^\x00-\x7F]/.test(w.rom),
      `la romanisation de ${w.word} (${w.rom}) ne doit laisser fuir aucun japonais`,
    );
    assert.ok(w.units.length > 0, `${w.word} doit produire au moins une unité kana`);
  }
});

test("les sons étrangers du katakana se tapent en romaji naturel", () => {
  const api = loadApp();
  const cas = [
    ["ファイヤー", "faiyaa"],
    ["モルフォン", "morufon"],
    ["ディグダ", "diguda"],
    ["シェルダー", "sherudaa"],
    ["ケーシィ", "keeshi"],
    ["ニドラン♀", "nidoran"],
  ];
  for (const [nom, frappe] of cas)
    assert.equal(
      api.judge(frappe, [nom], "kana").r,
      "ok",
      `${frappe} doit être accepté pour ${nom}`,
    );
});

test("la face d'écoute accepte les graphies homophones", () => {
  const api = loadApp();
  const ecoute = (kana) => {
    const it = api.ITEMS.find((x) => x.deck === "hira" && x.kana === kana);
    return { cur: { id: it.id }, face: "sound", typed: "" };
  };
  /* ぢ se prononce comme じ, づ comme ず, et を isolé se dit « o ». Exiger la bonne
     graphie parmi des homophones fait dépendre la réponse du hasard, pas de
     l'oreille : c'est ce qui rendait certains exercices vocaux impossibles. */
  for (const [carte, ecrit] of [
    ["じ", "ぢ"],
    ["ぢ", "じ"],
    ["ず", "づ"],
    ["を", "お"],
    ["お", "を"],
  ])
    assert.equal(
      api.judge(ecrit, api.acceptedFor(ecoute(carte)), "kana").r,
      "ok",
      `${ecrit} doit être accepté pour ${carte}`,
    );

  /* Sans devenir permissif pour autant : une vraie confusion reste fausse. */
  for (const faux of ["し", "ち", "か"])
    assert.equal(
      api.judge(faux, api.acceptedFor(ecoute("じ")), "kana").r,
      "ko",
      `${faux} ne doit pas passer pour じ`,
    );
});

test("les propositions d'écoute privilégient les voisins acoustiques", () => {
  const api = loadApp();
  const ecoute = (kana) => {
    const it = api.ITEMS.find((x) => x.deck === "hira" && x.kana === kana);
    return { cur: { id: it.id }, face: "sound", typed: "" };
  };
  const choix = api.kanaChoicesForSession(ecoute("か"));
  assert.ok(choix.includes("か"), "la réponse doit figurer parmi les propositions");
  /* Dix kana au hasard font de l'hésitation une loterie ; la paire de sonorisation
     en fait un exercice de discrimination, qui est la compétence visée. */
  assert.ok(choix.includes("が"), "la paire de sonorisation doit être proposée");

  const voisinsDeJi = api.earNeighbours("じ");
  assert.ok(voisinsDeJi.includes("し") && voisinsDeJi.includes("ち"));

  /* Jamais l'homophone de la réponse, qui rendrait le choix indécidable. */
  assert.ok(!api.kanaChoicesForSession(ecoute("じ")).includes("ぢ"));
});

test("aucun énoncé n'est répété automatiquement", () => {
  const api = loadApp();
  /* La répétition doublait l'information acoustique, ce qui était juste en théorie,
     mais elle se subit des centaines de fois par jour. Retirée sur retour d'usage :
     une gêne répétée coûte plus qu'un gain marginal de netteté. */
  for (const t of ["か", "にほん", "えきでともだち"]) {
    const dit = api.paddedSpeech(t);
    assert.equal(
      dit.split(t).length - 1,
      1,
      `« ${t} » ne doit être prononcé qu'une fois, obtenu ${dit}`,
    );
    /* Le silence encadrant reste : sans lui, le moteur rogne l'attaque. */
    assert.ok(dit.startsWith("、") && dit.endsWith("、"));
  }
});

test("chaque révision laisse une trace dans le journal", () => {
  const api = loadApp();
  const card = api.cards.h0;
  api.grade(card, true, 4000); // première révision, aujourd'hui
  /* Sans reviewSpaced, qui recule déjà les horodatages jusqu'à l'échéance : le
     cumuler avec ce recul-ci comptait l'écart deux fois. */
  const gap = 3 * 864e5;
  card.lastSeen -= gap;
  card.due -= gap;
  api.grade(card, true, 4000); // trois jours plus tard

  const j = api.app.reviewLog;
  assert.equal(j.length, 2, "une ligne par notation");
  const [id, ts, verdict, intervalle, stab, ecart] = j[1];
  assert.equal(id, "h0");
  assert.ok(ts > 0 && verdict === 1 && intervalle > 0 && stab > 0);
  /* L'écart réellement observé est le champ qui aurait rendu visible le bug
     d'ordonnancement : il valait 0 à chaque révision pendant neuf mois. */
  assert.ok(Math.abs(ecart - 3) < 0.01, `écart observé ${ecart}, attendu 3`);
});

test("le journal se réunit entre appareils sans doublon ni perte", () => {
  const api = loadApp();
  api.app.reviewLog = [["h0", 1000, 1, 3, 2.3, 0]];
  api.app.dataUpdatedAt = 0;
  const distant = api.localPayload();
  distant.reviewLog = [
    ["h0", 1000, 1, 3, 2.3, 0], // déjà connue
    ["h1", 2000, 0, 1, 0.5, 5], // venue d'un autre appareil
  ];
  api.applyPayload(distant);
  assert.equal(api.app.reviewLog.length, 2, "réunion, pas remplacement");
  assert.deepEqual(
    Array.from(api.app.reviewLog.map((e) => e[0] + "|" + e[1])),
    ["h0|1000", "h1|2000"],
  );
  /* La clé porte sur la ligne entière : deux notations dans la même milliseconde
     restent distinctes si leur intervalle ou leur stabilité diffèrent. */
  api.app.reviewLog = [["h2", 3000, 1, 3, 2.3, 0]];
  const memeMs = api.localPayload();
  memeMs.reviewLog = [
    ["h2", 3000, 1, 3, 2.3, 0],
    ["h2", 3000, 1, 14, 13.8, 3],
  ];
  api.app.dataUpdatedAt = 0;
  api.applyPayload(memeMs);
  assert.equal(api.app.reviewLog.length, 2, "deux lignes distinctes doivent survivre");
});

test("une carte ratée huit fois passe en veille et n'est plus servie", () => {
  const api = loadApp();
  const card = api.cards.h0;
  card.reps = 5;
  card.goodReps = 5;
  card.stab = 30;
  for (let n = 0; n < 8; n++) api.grade(card, false, 4000);
  /* La mise de côté existante n'était qu'un coupe-circuit de séance : la carte
     revenait chaque jour, sans marque et sans moyen de l'écarter. */
  assert.equal(card.suspended, true, `en veille après ${card.lapses} rechutes`);
  card.due = Date.now() - 1000;
  assert.ok(
    !api.queueFor().some((c) => c.id === "h0"),
    "une carte en veille ne doit plus entrer en session",
  );
});

test("une correction de verso survit au rechargement", () => {
  const api = loadApp();
  api.app.itemEdits = { j0: { keyword: "soleil, jour" } };
  const paquet = JSON.parse(JSON.stringify(api.localPayload()));
  assert.equal(paquet.itemEdits.j0.keyword, "soleil, jour");

  /* ITEMS étant reconstruit depuis les littéraux à chaque démarrage, la surcharge
     est la seule façon pour une correction de survivre : sans elle, l'éditeur
     promettait sans tenir. */
  const frais = loadApp();
  assert.notEqual(frais.ITEMS.find((i) => i.id === "j0").keyword, "soleil, jour");
  frais.app.dataUpdatedAt = 0;
  frais.applyPayload(paquet);
  assert.equal(frais.ITEMS.find((i) => i.id === "j0").keyword, "soleil, jour");
});

test("aucun kanji isolé n'est envoyé à la synthèse vocale", () => {
  const api = loadApp();
  const ideogrammeSeul = /^[㐀-鿿]$/;
  const fautifs = api.ITEMS.filter((i) => i.kind === "kanji").filter((i) =>
    ideogrammeSeul.test(api.compoundSpeech(i)),
  );
  /* 日 se lit nichi, hi ou jitsu : le moteur en choisit un au hasard et enseigne
     donc une lecture fausse. Spec §11 : passer une lecture, jamais l'idéogramme.
     Faute de composé disponible, le silence vaut mieux qu'une invention. */
  assert.deepEqual(Array.from(fautifs.map((i) => i.glyph)), []);
});

test("le débit suit la longueur de l'énoncé", () => {
  const api = loadApp();
  const mora = api.rateFor("あ");
  const mot = api.rateFor("にほん");
  const phrase = api.rateFor("えきでともだちをまっている");
  assert.ok(mora < mot && mot < phrase, `${mora} ${mot} ${phrase}`);
  /* Descendre sous 0,6 déforme les formants au lieu d'allonger la voyelle. */
  assert.ok(mora >= 0.6);
  assert.ok(phrase <= 1);
});

test("le plan quotidien conserve les mêmes nouvelles cartes", () => {
  const api = loadApp();
  api.app.auth = { user: "test" };
  const first = api
    .queueFor()
    .map((card) => card.id)
    .sort();
  const planned = [...api.app.dailyPlan.newIds].sort();
  const second = api
    .queueFor()
    .map((card) => card.id)
    .sort();
  assert.deepEqual(first, second);
  assert.deepEqual(planned, [...api.app.dailyPlan.newIds].sort());
  /* Au premier jour, seul l'hiragana est ouvert et son `newPerDay` vaut 10 : c'est
     un plafond par deck, pas un poids à redistribuer. Le budget de 30 expositions
     autoriserait 15 nouveautés, mais aucun autre deck ne peut en fournir , une
     session sous le plafond est normale, c'est le réglage qui commande. */
  assert.equal(planned.length, 10);
  assert.equal(api.deck("hira").newPerDay, 10);
});

test("newPerDay est un plafond réellement respecté", () => {
  const api = loadApp();
  api.deck("hira").newPerDay = 3;
  const planned = api.queueFor().filter((c) => c.reps === 0);
  assert.equal(
    planned.length,
    3,
    "le réglage doit livrer le nombre qu'il annonce",
  );
});

test("les révisions dues sont plafonnées par la charge du jour", () => {
  const api = loadApp();
  // 200 cartes échues : bien au-delà du budget « Normal »
  const ids = Object.keys(api.cards).slice(0, 200);
  for (const id of ids) {
    Object.assign(api.cards[id], { reps: 3, goodReps: 3, stab: 5 });
    api.cards[id].due = Date.now() - 86400000;
  }
  const q = api.queueFor();
  assert.ok(
    q.length <= 30,
    `la session doit rester sous la charge du jour, obtenu ${q.length}`,
  );
  assert.ok(api.app.deferredReviews > 0, "le surplus doit être signalé");
});

test("les révisions les plus en retard passent en premier", () => {
  const api = loadApp();
  /* Cartes de reconnaissance seulement : l'enterrement des sœurs ne garde qu'une
     carte par item, ce qui rendrait le choix indéterminé. */
  const ids = api.ITEMS.filter((i) => i.deck === "hira")
    .slice(0, 100)
    .map((i) => i.id);
  ids.forEach((id, n) => {
    Object.assign(api.cards[id], { reps: 3, goodReps: 3, stab: 5 });
    // n croissant = échue depuis moins longtemps
    api.cards[id].due = Date.now() - (100 - n) * 86400000;
  });
  const kept = new Set(api.queueFor().map((c) => c.id));
  assert.ok(kept.has(ids[0]), "la plus en retard doit être retenue");
  assert.ok(!kept.has(ids[99]), "la moins en retard doit être reportée");
});

test("étudier un deck précis reste aussi plafonné par la charge du jour", () => {
  /* Bug corrigé le 28/08/2026 : queueFor(id) — le chemin emprunté en étudiant un
     deck depuis sa propre page — servait toutes ses cartes échues d'un coup, sans
     jamais passer par le plafond DAILY_BUDGET ni par ensureDailyPlan. Mesuré en
     usage réel : un deck en retard de plusieurs jours produisait jusqu'à 67 cartes
     en une seule session, très au-delà du plafond dur de 1,5x annoncé par le §10.3.
     Ce test verrouille que les deux chemins (session globale et session ciblée sur
     un deck) respectent la même charge quotidienne. */
  const api = loadApp();
  const ids = api.ITEMS.filter((i) => i.deck === "hira")
    .slice(0, 100)
    .map((i) => i.id);
  for (const id of ids) {
    Object.assign(api.cards[id], { reps: 3, goodReps: 3, stab: 5 });
    api.cards[id].due = Date.now() - 86400000;
  }
  const q = api.queueFor("hira");
  assert.ok(
    q.length <= 30,
    `étudier un deck précis doit rester sous la charge du jour, obtenu ${q.length}`,
  );
});

test("une précision effondrée bride les nouveautés sans jamais les tarir", () => {
  const api = loadApp();
  const today = api.dayKey();
  const newCount = () => {
    api.app.dailyPlan = null;
    return api.queueFor().filter((c) => c.reps === 0).length;
  };

  api.app.dailyStats = { [today]: { attempts: 100, good: 90, wrong: 10, skip: 0, points: 0 } };
  const healthy = newCount();

  api.app.dailyStats = { [today]: { attempts: 100, good: 50, wrong: 50, skip: 0, points: 0 } };
  const struggling = newCount();

  assert.ok(
    struggling < healthy,
    `à 50 % de réussite l'apport doit chuter (${struggling} contre ${healthy})`,
  );
  /* Mais jamais à zéro : les portes se comptent en caractères lisibles, donc couper
     l'apport les verrouillerait définitivement. */
  assert.ok(
    struggling > 0,
    "un apport nul verrouillerait les portes pour de bon",
  );
});

test("un échantillon trop mince ne déclenche aucun bridage", () => {
  const api = loadApp();
  const today = api.dayKey();
  // trois erreurs le premier jour ne prouvent rien
  api.app.dailyStats = { [today]: { attempts: 4, good: 1, wrong: 3, skip: 0, points: 0 } };
  api.app.dailyPlan = null;
  assert.ok(
    api.queueFor().filter((c) => c.reps === 0).length > 0,
    "il faut un échantillon minimal avant de conclure",
  );
});

test("un nouveau jour efface plan et session en pause", () => {
  const api = loadApp();
  api.app.dailyPlan = { day: "2000-01-01", newIds: ["h0"], createdAt: 1 };
  api.app.sessionDay = "2000-01-01";
  api.app.pausedSession = { queue: [api.cards.h0], seen: 1, ok: 1 };
  api.normalizeDailyState();
  assert.equal(api.app.dailyPlan, null);
  assert.equal(api.app.sessionDay, null);
  assert.equal(api.app.pausedSession, null);
});

test("la fusion cloud garde la version la plus récente et ignore l'invalide", () => {
  const api = loadApp();
  Object.assign(api.cards.h0, { reps: 2, goodReps: 2, modifiedAt: 200 });
  api.applyPayload({
    cards: { h0: { ...api.cards.h0, reps: 1, goodReps: 1, modifiedAt: 100 } },
  });
  assert.equal(api.cards.h0.reps, 2);
  api.applyPayload({
    cards: { h0: { ...api.cards.h0, reps: 3, goodReps: 3, modifiedAt: 300 } },
  });
  assert.equal(api.cards.h0.reps, 3);
  api.applyPayload({
    cards: { h0: { ...api.cards.h0, reps: -1, modifiedAt: 400 } },
  });
  assert.equal(api.cards.h0.reps, 3);
});

test("une session en pause est sérialisée et restaurée", () => {
  const api = loadApp();
  const today = api.dayKey();
  api.app.sessionDay = today;
  api.app.sessionUpdatedAt = 50;
  api.app.pausedSession = {
    queue: [api.cards.h0, api.cards.h1],
    seen: 4,
    ok: 3,
  };
  const payload = api.localPayload();
  api.app.pausedSession = null;
  api.app.sessionUpdatedAt = 0;
  api.applyPayload(payload);
  assert.deepEqual(
    api.app.pausedSession.queue.map((card) => card.id),
    ["h0", "h1"],
  );
  assert.equal(api.app.pausedSession.seen, 4);
  assert.equal(api.app.pausedSession.ok, 3);
});

test("l'aller-retour export puis import restitue l'état à l'identique", () => {
  const api = loadApp();
  const prod = api.productionId("h0");
  reviewSpaced(api, api.cards.h0, 3);
  reviewSpaced(api, api.cards[prod], 2);
  api.app.deckUnlocks = { kata: 1 };
  const avant = JSON.stringify({
    reco: api.cards.h0.goodReps,
    prod: api.cards[prod].goodReps,
    stab: api.cards.h0.stab,
    journal: api.app.reviewLog.length,
  });

  const paquet = JSON.parse(JSON.stringify(api.localPayload()));
  assert.ok(paquet.cards[prod], "la charge utile doit contenir les cartes sœurs");
  assert.ok(paquet.deckUnlocks, "et les déblocages, qui ne se recalculent pas");

  // on efface, puis on réimporte
  for (const id of [api.baseId("h0"), prod])
    Object.assign(api.cards[id], {
      reps: 0,
      goodReps: 0,
      stab: 0,
      due: null,
      modifiedAt: undefined,
    });
  api.app.dataUpdatedAt = 0;
  api.app.deckUnlocks = {};
  const journalAvantEffacement = api.app.reviewLog.length;
  api.app.reviewLog = [];
  assert.equal(api.applyPayload(paquet), true);

  assert.equal(
    JSON.stringify({
      reco: api.cards.h0.goodReps,
      prod: api.cards[prod].goodReps,
      stab: api.cards.h0.stab,
      journal: api.app.reviewLog.length,
    }),
    avant,
  );
  assert.ok(journalAvantEffacement > 0, "le journal doit avoir été peuplé");
  assert.ok(api.app.deckUnlocks.kata, "un déblocage ne doit pas se perdre");
});

test("la première carte d'une séance prononce son énoncé", () => {
  const api = loadApp();
  api.app.auth = { uid: "test" };
  /* startSession appelait nextCard AVANT de passer la route à « session », et
     nextCard ne prononce que s'il se sait en session : la première carte restait
     donc muette, ce qui vidait de son sens la face d'écoute, où l'énoncé EST la
     question. */
  const dit = [];
  const it = api.ITEMS.find((x) => x.deck === "hira" && x.kana === "か");
  const prod = api.productionId(it.id);
  Object.assign(api.cards[it.id], { reps: 3, goodReps: 3, stab: 5 });
  Object.assign(api.cards[prod], {
    reps: 1,
    goodReps: 1,
    stab: 2,
    due: Date.now() - 1000,
  });
  api.app.dailyPlan = { day: api.dayKey(), newIds: [], createdAt: Date.now() };

  api.startSession(null);
  assert.ok(api.app.sess, "la session doit démarrer");
  assert.equal(api.app.route, "session", "la route doit précéder la première carte");
  assert.equal(api.app.sess.face, "sound", "la face d'écoute est bien celle visée");
});

test("une session entièrement ratée se termine", () => {
  const api = loadApp();
  /* render() renvoie vers l'écran de connexion sans utilisateur, ce qui empêcherait
     la route d'atteindre « session ». */
  api.app.auth = { uid: "test" };
  api.startSession(null);
  assert.ok(api.app.sess, "la session doit démarrer");
  let etapes = 0;
  while (api.app.route === "session" && etapes < 400) {
    const s = api.app.sess;
    if (s.st === "ask") s.st = "shown";
    else {
      s.typed = "zzz";
      api.validate();
    }
    if (!s.committed) api.commit("wrong", 4000);
    if (api.app.route === "session") api.nextCard();
    etapes++;
  }
  /* Sans la règle de carte bloquante, cette boucle ne terminait jamais : une carte
     ratée revenait indéfiniment en file. */
  assert.equal(api.app.route, "summary", `bloquée après ${etapes} étapes`);
  assert.ok(api.app.sess.setAside > 0, "des cartes doivent être mises de côté");
});

test("la synchronisation utilise exclusivement l'UID Firebase", () => {
  const api = loadApp();
  api.app.auth = { uid: "firebase-user-123", email: "test@example.com" };
  api.app.sync.userId = "ancien-alias";
  assert.equal(api.syncUserKey(), "firebase-user-123");
});

test("un Pokémon se débloque seulement lorsque tous ses kana sont maîtrisés", () => {
  const api = loadApp();
  const pokemon = api.ITEMS.find((item) => item.deck === "pkmn");
  const requiredIds = [
    ...new Set(
      [...pokemon.ja].map((unit) => api.KIDX.kata[unit]).filter(Boolean),
    ),
  ];
  assert.equal(api.pokemonUnlockedByKana(pokemon), false);
  for (const id of requiredIds) reviewSpaced(api, api.cards[id], api.MASTERY_REPS);
  assert.equal(api.pokemonUnlockedByKana(pokemon), true);
  api.syncPokemonUnlocks();
  assert.ok(api.app.pokemonUnlocks[pokemon.id]);

  /* Un déblocage est acquis : une rechute sur un kana prérequis ne doit pas
     reprendre le Pokémon déjà gagné. */
  api.grade(api.cards[requiredIds[0]], false, 4000, false);
  assert.equal(api.known(requiredIds[0]), false);
  api.syncPokemonUnlocks();
  assert.ok(
    api.app.pokemonUnlocks[pokemon.id],
    "un Pokémon débloqué ne doit jamais être reperdu",
  );
});

test("aucun vestige de la couche de score ni du sélecteur de charge", () => {
  /* La couche de score et le choix court, normal, long ont été retirés. Des
     champs morts survivent volontiers à ce genre de retrait : ils ne cassent
     rien, ils mentent seulement sur ce que fait l'app, et la spec finit par
     être démentie par son propre code. */
  const api = loadApp();
  for (const champ of ["points", "streak", "bestStreak", "totalRuns", "dailyLoad"])
    assert.equal(champ in api.app, false, `app.${champ} ne devrait plus exister`);
  assert.ok(api.retires.DAILY_LOADS, "DAILY_LOADS ne devrait plus être déclaré");
  assert.ok(api.retires.dailyBudget, "dailyBudget() ne devrait plus être déclaré");
  assert.equal(api.DAILY_BUDGET, 30, "la charge du jour est fixe");
  api.startSession();
  assert.equal("fx" in api.app.sess, false, "la session ne porte plus d'effet de score");
});

test("le texte d'accueil pour les nouveaux ne s'affiche qu'avant la toute première réponse", () => {
  const api = loadApp();
  assert.ok(
    api.Home().includes("Chaque carte revient un peu plus tard"),
    "un compte vierge doit voir l'explication",
  );
  api.cards["h0"].reps = 1;
  assert.ok(
    !api.Home().includes("Chaque carte revient un peu plus tard"),
    "dès la première réponse, l'explication ne doit plus jamais revenir",
  );
});

test("la durée estimée de session n'apparaît qu'avec un historique réel", () => {
  const api = loadApp();
  assert.ok(
    !/~\d+ min/.test(api.Home()),
    "sans aucune réponse enregistrée, aucun chiffre deviné ne doit s'afficher",
  );
  let n = 0;
  for (const id in api.cards) {
    if (id.startsWith("h") && n < 20) {
      api.cards[id].responseCount = 5;
      api.cards[id].responseAvg = 8000;
      n++;
    }
  }
  assert.ok(
    /~\d+ min/.test(api.Home()),
    "avec un historique de temps de réponse, une estimation doit apparaître",
  );
});

test("la carte en veille précise quelle direction est bloquée", () => {
  const api = loadApp();
  const id = "h0";
  const prod = api.productionId(id);
  api.app.editing = id;

  api.cards[id].suspended = true;
  assert.match(api.Editor(), /Le sens lecture/, "lecture seule en veille");

  delete api.cards[id].suspended;
  api.cards[prod].suspended = true;
  assert.match(api.Editor(), /Le sens écriture/, "écriture seule en veille");

  api.cards[id].suspended = true;
  assert.match(api.Editor(), /Les deux sens/, "les deux directions en veille");

  delete api.cards[id].suspended;
  delete api.cards[prod].suspended;
  assert.ok(!api.Editor().includes("En veille"), "rien en veille : pas de bloc affiché");
});
