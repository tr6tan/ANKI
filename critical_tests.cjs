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
    FSRS: {
      Rating: { Again: 1, Good: 3 },
      State: { New: 0, Review: 2 },
      fsrs() {
        return {
          next(card, reviewedAt, rating) {
            const good = rating === 3;
            const scheduledDays = good ? 3 : 1;
            return {
              card: {
                ...card,
                due: new Date(reviewedAt.getTime() + scheduledDays * 864e5),
                stability: good ? 3 : 0.5,
                difficulty: good ? 4.8 : 6,
                elapsed_days: card.scheduled_days || 0,
                scheduled_days: scheduledDays,
                reps: card.reps + 1,
                lapses: card.lapses + (good ? 0 : 1),
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
  const expose = `\n;globalThis.__appTest = { app, cards, ITEMS, KIDX, known, grade, queueFor, dayKey, normalizeDailyState, localPayload, applyPayload, syncPokemonUnlocks, pokemonUnlockedByKana, validateDeckData, syncUserKey, MASTERY_REPS };`;
  vm.runInContext(source + expose, context, { filename: "tmp_script.js" });
  return context.__appTest;
}

test("les données des decks respectent tous les invariants", () => {
  const api = loadApp();
  assert.deepEqual(Array.from(api.validateDeckData()), []);
});

test("une carte devient maîtrisée après exactement cinq réussites", () => {
  const api = loadApp();
  const card = api.cards.h0;
  for (let count = 0; count < api.MASTERY_REPS - 1; count++)
    api.grade(card, true, 4000, false);
  assert.equal(api.known(card.id), false);
  api.grade(card, true, 4000, false);
  assert.equal(api.known(card.id), true);
  assert.equal(card.fsrsScheduledDays, 3);
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
  assert.equal(planned.length, 30);
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
  for (const id of requiredIds) api.cards[id].goodReps = api.MASTERY_REPS;
  assert.equal(api.pokemonUnlockedByKana(pokemon), true);
  api.syncPokemonUnlocks();
  assert.ok(api.app.pokemonUnlocks[pokemon.id]);
});
