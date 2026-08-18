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

function loadApp() {
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
  context.window = context;
  context.window.addEventListener = () => {};
  context.window.matchMedia = () => ({ matches: false });
  context.window.scrollTo = () => {};
  context.window.innerHeight = 800;
  context.globalThis = context;
  vm.createContext(context);
  const source = fs.readFileSync("tmp_script.js", "utf8");
  const expose = `\n;globalThis.__appTest = { app, cards, ITEMS, KIDX, DECKS, known, cardKnown, learned, solid, learnedCount, solidCount, cardIdsFor, productionId, baseId, isProd, deckUnlockInfo, levelUnlockInfo, deck, grade, queueFor, dayKey, normalizeDailyState, localPayload, applyPayload, syncPokemonUnlocks, pokemonUnlockedByKana, validateDeckData, syncUserKey, MASTERY_REPS };`;
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
    "aucun n'est encore maîtrisé — c'est tout l'intérêt",
  );
  assert.equal(api.deckUnlockInfo(kata).open, true);
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
     autoriserait 15 nouveautés, mais aucun autre deck ne peut en fournir — une
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
