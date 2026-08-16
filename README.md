# ANKI Japanese SRS App

This workspace contains a mobile-first Japanese spaced-repetition prototype built as a single-page web app.

## Files

- `prototype.html` — original reference implementation and visual behaviour source.
- `index.html` — working app entrypoint copied from `prototype.html`.
- `SPEC.md` — product specification describing design, interaction, data model and session rules.

## Prompt to recreate the app

Build a mobile-first, single-page Japanese spaced repetition app with a clean paper-style UI inspired by 原稿用紙. The app must use only HTML/CSS/JavaScript and follow these requirements:

- English interface, Japanese content only in the cards.
- Strict typographic design tokens and no decorative gamification.
- Mobile-first responsive layout with a max width of 420px, safe use of `100dvh`, and a keyboard-aware session screen.
- Three main roots: Study, Collection, Settings. Navigation disappears during a session.
- Deck model with properties: id, name, kind, script, answer, grading, audio, furi, ordered, newPerDay.
- Decks: Hiragana, Katakana, Kanji N5, Sentences N5, Pokémon 151.
- Context entities separate from items; items may use sentence, word, or kanji compound contexts.
- i+1 rule: cards or context exposures are only introduced once all atomic prerequisites are already introduced; unknown atoms appear locked.
- Session flow with typed grading and auto-evaluated answers, no extra reveal step for typed decks.
- Card faces: glyph, word, sound, keyword, comp, cloze, bare, name.
- Kana/romaji conversion utilities and answer acceptance for both input forms when appropriate.
- Furigana rendered with native `<ruby>` and animated opacity hide/show.
- Local in-memory progress state with deck statistics and session summary.

Use the prototype and spec as a reference for the exact UI, spacing, and behaviour.

## Tests

Run the critical behavior suite with:

```sh
node --test critical_tests.cjs
```
