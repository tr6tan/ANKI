#!/usr/bin/env node
/* Génère l'audio pré-enregistré des énoncés japonais de l'application.
 *
 * Pourquoi pré-enregistrer, alors que la synthèse du navigateur existe : une more
 * isolée dure environ 300 ms, les moteurs en rognent l'attaque, et le résultat
 * dépend des voix installées sur l'appareil. Un utilisateur sans voix japonaise
 * n'entend rien du tout. Un fichier, lui, est identique partout, correctement
 * silencé aux extrémités, et fonctionne hors ligne. La spec §11 le prévoit depuis
 * l'origine, `audioUrl` figurant déjà dans le modèle.
 *
 * Deux fournisseurs, même format de sortie :
 *
 *   --provider=google   voix neuronales, la qualité que rien d'autre n'atteint.
 *                       Exige GOOGLE_TTS_API_KEY dans l'environnement. La clé n'est
 *                       jamais écrite sur le disque ni dans le manifeste.
 *   --provider=local    macOS `say`, gratuit et hors ligne. Même voix que le
 *                       téléphone, mais un silence propre et un niveau constant :
 *                       utile pour valider la chaîne, insuffisant pour la qualité.
 *
 * Usage :
 *   node tools/build-audio.mjs --provider=local
 *   GOOGLE_TTS_API_KEY=... node tools/build-audio.mjs --provider=google
 *   ... --only=kana        limite aux mores isolées, le cas le plus problématique
 *   ... --force            réécrit les fichiers déjà présents
 *
 * Le script est idempotent : un fichier dont le nom existe déjà n'est pas
 * redemandé. Relancer après un ajout de contenu ne coûte que le nouveau contenu.
 */
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import os from "node:os";

const RACINE = path.resolve(import.meta.dirname, "..");
const args = new Map(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, "").split("=");
    return [k, v ?? true];
  }),
);
const provider = args.get("provider") || "local";
const seulement = args.get("only") || "all";
const force = !!args.get("force");
const sortie = path.join(RACINE, "audio");

/* Voix par défaut. Neural2-B est une voix féminine japonaise nette sur les mores
   isolées ; Chirp3-HD est plus naturel sur la phrase mais plus cher en latence. */
const VOIX = args.get("voice") || (provider === "google" ? "ja-JP-Neural2-B" : "Kyoko");

/* ---------- inventaire des énoncés, lu depuis l'application elle-même ---------- */
/* On charge tmp_script.js dans un contexte factice plutôt que de dupliquer les
   données : toute carte ajoutée à l'app entre ainsi automatiquement dans l'audio. */
function chargerCorpus() {
  const el = () => ({
    className: "",
    dataset: {},
    innerHTML: "",
    style: { setProperty() {} },
    addEventListener() {},
    querySelector: () => null,
    querySelectorAll: () => [],
  });
  const ctx = {
    console,
    Date,
    Math,
    JSON,
    URL,
    setTimeout,
    clearTimeout,
    setInterval: () => 0,
    clearInterval() {},
    document: {
      body: el(),
      documentElement: Object.assign(el(), { clientHeight: 800 }),
      visibilityState: "visible",
      addEventListener() {},
      getElementById: () => el(),
    },
    localStorage: { getItem: () => null, setItem() {} },
    navigator: {},
    speechSynthesis: { cancel() {}, getVoices: () => [], speak() {} },
    SpeechSynthesisUtterance: function () {},
  };
  ctx.window = ctx;
  ctx.window.addEventListener = () => {};
  ctx.window.matchMedia = () => ({ matches: false });
  ctx.window.scrollTo = () => {};
  ctx.window.innerHeight = 800;
  ctx.globalThis = ctx;
  vm.createContext(ctx);
  const src = fs.readFileSync(path.join(RACINE, "tmp_script.js"), "utf8");
  vm.runInContext(
    src + "\n;globalThis.__c={ITEMS,WORDCTX,COMPCTX,CTX,toKata};",
    ctx,
  );
  const { ITEMS, WORDCTX, COMPCTX, CTX, toKata } = ctx.__c;

  const enonces = new Map(); // texte -> catégorie
  const add = (t, cat) => {
    const s = String(t || "").trim();
    if (s && !enonces.has(s)) enonces.set(s, cat);
  };
  for (const i of ITEMS) {
    if (i.kind === "glyph")
      add(i.deck === "kata" ? toKata(i.kana) : i.kana, "kana");
    if (i.kind === "name") add(i.ja, "nom");
    if (i.kind === "lex") add(i.read, "mot");
  }
  for (const w of WORDCTX) add(w.word, "mot");
  for (const m of COMPCTX) {
    add(m.word, "mot");
    add(m.read[0], "mot");
  }
  for (const x of CTX) add(x.segs.map((g) => g.t).join(""), "phrase");
  return enonces;
}

/* ---------- débit, aligné sur les trois paliers de l'application ---------- */
const moresDe = (t) =>
  [...t].filter((c) => !"、。ー・ 　".includes(c)).length;
/* Une more isolée a besoin d'air pour que l'attaque et la durée s'entendent ; une
   phrase perd sa prosodie dès qu'on la ralentit, l'accent de hauteur se lisant sur
   le débit naturel. Voir spec §11. */
function debitPour(t) {
  const n = moresDe(t);
  if (provider === "google") return n <= 2 ? 0.78 : n <= 6 ? 0.9 : 1.0;
  return n <= 2 ? 105 : n <= 6 ? 135 : 165; // mots par minute pour `say`
}
/* Les énoncés très courts sont prononcés deux fois : doubler l'information
   acoustique coûte une demi-seconde et change tout sur か/が ou し/ち. */
const repeter = (t) => moresDe(t) <= 2;

const nomFichier = (texte) => {
  const h = createHash("sha256")
    .update(`${texte}|${provider}|${VOIX}|${debitPour(texte)}|${repeter(texte)}`)
    .digest("hex")
    .slice(0, 16);
  return `${h}.${provider === "google" ? "mp3" : "m4a"}`;
};

/* ---------- fournisseur Google ---------- */
async function synthetiserGoogle(texte) {
  const cle = process.env.GOOGLE_TTS_API_KEY;
  if (!cle)
    throw new Error(
      "GOOGLE_TTS_API_KEY absent de l'environnement. Exportez-le le temps de la commande ; il n'est jamais écrit sur le disque.",
    );
  /* SSML plutôt que des virgules idéographiques : les pauses sont déclarées en
     millisecondes au lieu d'être devinées par le moteur. */
  const pause = (ms) => `<break time="${ms}ms"/>`;
  const corps = repeter(texte)
    ? `${pause(250)}${texte}${pause(450)}${texte}${pause(250)}`
    : `${pause(200)}${texte}${pause(200)}`;
  const res = await fetch(
    `https://texttospeech.googleapis.com/v1/text:synthesize?key=${encodeURIComponent(cle)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: { ssml: `<speak>${corps}</speak>` },
        voice: { languageCode: "ja-JP", name: VOIX },
        audioConfig: {
          audioEncoding: "MP3",
          speakingRate: debitPour(texte),
          sampleRateHertz: 24000,
          /* le pic est normalisé par le service : un niveau constant d'un clip à
             l'autre, ce que la synthèse embarquée ne garantit pas */
          volumeGainDb: 0,
        },
      }),
    },
  );
  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Google TTS ${res.status} : ${detail.slice(0, 200)}`);
  }
  const { audioContent } = await res.json();
  if (!audioContent) throw new Error("réponse sans audioContent");
  return Buffer.from(audioContent, "base64");
}

/* ---------- fournisseur local, macOS ---------- */
function synthetiserLocal(texte) {
  const tmp = path.join(os.tmpdir(), `tts-${process.pid}`);
  const aiff = `${tmp}.aiff`,
    wav = `${tmp}.wav`,
    m4a = `${tmp}.m4a`;
  const corps = repeter(texte)
    ? `、、${texte}、、${texte}、、`
    : `、${texte}、`;
  execFileSync("say", ["-v", VOIX, "-r", String(debitPour(texte)), "-o", aiff, corps]);
  /* afconvert refuse l'AAC directement depuis un AIFF gros-boutien : on passe par
     un WAV petit-boutien rééchantillonné. */
  execFileSync("afconvert", ["-f", "WAVE", "-d", "LEI16@44100", aiff, wav]);
  execFileSync("afconvert", ["-f", "m4af", "-d", "aac", "-b", "48000", wav, m4a]);
  const buf = fs.readFileSync(m4a);
  for (const f of [aiff, wav, m4a]) fs.rmSync(f, { force: true });
  return buf;
}

/* ---------- boucle principale ---------- */
/* Vérifié avant tout travail : une clé manquante doit se dire une fois, clairement,
   et non se répéter à chaque énoncé. */
if (provider === "google" && !process.env.GOOGLE_TTS_API_KEY) {
  console.error(
    "GOOGLE_TTS_API_KEY est absent de l'environnement.\n\n" +
      "  cd " + RACINE + "\n" +
      '  read -s "GOOGLE_TTS_API_KEY?Colle ta clé, puis Entrée : "\n' +
      "  export GOOGLE_TTS_API_KEY\n" +
      "  node tools/build-audio.mjs --provider=google --only=kana\n\n" +
      "Passer par `read -s` évite que la clé n'atterrisse dans l'historique du shell.",
  );
  process.exit(1);
}
if (provider !== "google" && provider !== "local") {
  console.error(`Fournisseur inconnu : ${provider}. Attendu google ou local.`);
  process.exit(1);
}
const enonces = chargerCorpus();
const retenus = [...enonces].filter(
  ([, cat]) => seulement === "all" || cat === seulement,
);
fs.mkdirSync(sortie, { recursive: true });

const manifestePath = path.join(sortie, "manifest.json");
const ancien = fs.existsSync(manifestePath)
  ? JSON.parse(fs.readFileSync(manifestePath, "utf8"))
  : { files: {} };

const fichiers = { ...(ancien.files || {}) };
let produits = 0,
  ignores = 0,
  echecs = 0;

for (const [texte, cat] of retenus) {
  const nom = nomFichier(texte);
  const chemin = path.join(sortie, nom);
  if (!force && fs.existsSync(chemin)) {
    fichiers[texte] = `audio/${nom}`;
    ignores++;
    continue;
  }
  try {
    const buf =
      provider === "google"
        ? await synthetiserGoogle(texte)
        : synthetiserLocal(texte);
    fs.writeFileSync(chemin, buf);
    fichiers[texte] = `audio/${nom}`;
    produits++;
    if (produits % 25 === 0)
      process.stdout.write(`  ${produits} produits...\n`);
  } catch (e) {
    echecs++;
    console.warn(`  échec sur « ${texte} » (${cat}) : ${e.message}`);
    /* Une clé invalide ou un quota dépassé échouerait sur tout : inutile de
       marteler le service, on s'arrête net. */
    if (echecs >= 5) {
      console.error("\nCinq échecs consécutifs, arrêt. Rien n'est perdu, le script est idempotent.");
      break;
    }
  }
}

fs.writeFileSync(
  manifestePath,
  JSON.stringify(
    {
      /* Le manifeste ne contient jamais la clé, seulement de quoi rejouer. */
      provider,
      voice: VOIX,
      generatedAt: new Date().toISOString(),
      count: Object.keys(fichiers).length,
      files: fichiers,
    },
    null,
    1,
  ),
);

const octets = Object.values(fichiers)
  .map((f) => path.join(RACINE, f))
  .filter((p) => fs.existsSync(p))
  .reduce((a, p) => a + fs.statSync(p).size, 0);

console.log(
  `\n${produits} produits, ${ignores} déjà présents, ${echecs} en échec.` +
    `\n${Object.keys(fichiers).length} énoncés au manifeste, ${(octets / 1024 / 1024).toFixed(1)} Mo au total.` +
    `\nVoix : ${VOIX} (${provider}).`,
);
