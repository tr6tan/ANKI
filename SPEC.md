# Spécification — application de répétition espacée pour le japonais

Document de construction. Il accompagne `prototype.html`, qui est la référence visuelle et comportementale. En cas de désaccord entre les deux, ce document tranche : le prototype contient des raccourcis assumés, listés au §13.

Langue de l'interface : **anglais**. Tout ce qui n'est pas du japonais s'affiche en anglais.

---

## 1. Direction artistique

**原稿用紙 — Swiss/International appliquée à la typographie pédagogique japonaise.** Décision prise, pas une option. Ne pas produire de variante, ne pas proposer de thème alternatif.

Grille stricte, marges généreuses, filets d'un pixel, aucune ombre portée, aucun dégradé, aucun arrondi au-dessus de 4px. La personnalité vient du système typographique et du module carré, pas de la décoration.

**Signature : le module carré.** Le japonais se compose en chasse fixe pleine largeur, chaque glyphe occupe un carré. Le compteur d'accueil est un carré, la cellule à remplir dans une phrase est un carré bordé d'un filet clair avec un point central, comme une case de papier quadrillé de rédaction.

Interdits explicites : gamification visuelle (badges, séries, confettis, mascotte), cartes flottantes à ombre douce et coins à 16px, fond crème avec serif haute-contraste et accent terracotta. Ce sont des défauts d'époque, pas des choix.

---

## 2. Tokens

```css
:root{
  --paper:#FAFAF8; --surface:#FFFFFF; --rule:#E2E5E1; --grid:#C3D3CA;
  --ink:#16181A; --ink-muted:#5C6260; --ink-faint:#8A918E;
  --shu:#C8402E;    /* vermillon — UNIQUEMENT l'erreur */
  --seiji:#3F6B57;  /* céladon — UNIQUEMENT la réponse juste */
  --s2:8px; --s3:16px; --s4:24px; --s5:32px; --s6:48px; --s7:64px;
  --radius:2px; --dur:140ms; --ease:cubic-bezier(.2,0,.2,1);
}
[data-theme="dark"]{
  --paper:#131619; --surface:#1A1E22; --rule:#2A2F33; --grid:#34423C;
  --ink:#E9E7E2;   /* jamais #FFF : les traits fins de mincho blooment sur OLED */
  --ink-muted:#9AA19E; --ink-faint:#6B7370;
  --shu:#E06C58; --seiji:#7FB39C;
}
```

Deux couleurs sémantiques, aucune couleur de marque. Le vermillon ne sert jamais de bouton primaire ni d'accent décoratif : il signifie *tu ne savais pas*. Un deck n'a pas de couleur. Cette discipline fait plus pour l'absence de distraction que n'importe quel choix de mise en page.

---

## 3. Typographie

```css
--f-serif:"Noto Serif JP","Hiragino Mincho ProN","Yu Mincho",serif;
--f-jp:"Noto Sans JP","Hiragino Sans","Yu Gothic",sans-serif;
--f-lat:"IBM Plex Sans",system-ui,sans-serif;
--f-mono:"IBM Plex Mono",ui-monospace,monospace;
```

**Mincho au-dessus de 24px, gothic en dessous.** À 88px, les empattements du mincho séparent visuellement les radicaux, ce qui est exactement l'information à apprendre pour distinguer 待 / 持 / 特. En dessous de 24px le mincho devient illisible à l'écran. En mode sombre, passer le prompt en `font-weight:500` : les traits fins disparaissent sinon.

| Rôle | Taille | Fonte | Interligne |
|---|---|---|---|
| Glyphe isolé (kana, kanji) | 88px | serif 400 | 1.15 |
| Mot isolé | 64px | serif 400 | 1.2 |
| Phrase japonaise | 24px | serif 400 | **2.05** |
| Réponse révélée (forme) | 26px | serif 400 | 1.3 |
| Réponse révélée (lecture) | 16px | jp 400, `--seiji` | 1.4 |
| Contexte japonais au dos | 17px | jp 400 | 1.6 |
| Romaji du contexte | 12px | mono, `--ink-faint` | 1.5 |
| Traduction, sens | 14px | lat 400, `--ink-muted` | 1.5 |
| Label | 12px, `letter-spacing:.06em`, majuscules | lat 500 | 1.4 |
| Compteur de session | 12px | mono, `--ink-faint` | 1 |

L'interligne 2.05 sur les phrases n'est pas confortable, il est obligatoire : les furigana se placent au-dessus de la ligne et se collent à la ligne précédente en dessous de 1.8.

### Furigana

`<ruby>` natif, jamais des `<span>` positionnés en absolu.

```css
ruby{ruby-position:over}
rt{font-size:.5em;font-family:var(--f-jp);color:var(--ink-muted);
   transition:opacity var(--dur) var(--ease)}
.sentence[data-furi="hidden"] rt{opacity:0}
```

**Piège central : ne jamais masquer avec `display:none` ni `visibility`.** L'espace reste réservé en permanence et seule l'opacité s'anime. La carte ne doit pas se déplacer d'un pixel entre la question et la réponse.

Trois modes par deck : `hidden` (révélées avec la réponse), `always`, `never`.

---

## 4. Cadre mobile-first

Le produit se conçoit à 390px et se dilate ensuite. La contrainte dimensionnante, le clavier logiciel levé en permanence pendant une session, n'existe qu'en mobile ; une maquette pensée en desktop puis rétrécie ne lui survit pas.

Budget vertical de référence (390 × 844) :

```
barre système        ~50px
chrome de session     44px   croix + compteur + son
ZONE UTILE          ~380px   ← question, traduction, révélation
champ de saisie       52px
clavier système     ~300px
```

Conséquences non négociables :

- Contenu ancré en haut, jamais centré verticalement. Le centrage saute à l'ouverture du clavier.
- Jamais `100vh` ni `height:100%`. `100dvh` en base, `visualViewport` pour repositionner à l'ouverture et à la fermeture du clavier.
- La zone de révélation a sa hauteur réservée (172px) dès l'état de saisie. Le résultat ne doit rien pousser.
- Cibles tactiles à 44px minimum, en particulier « I don't know » et la croix de sortie, les deux plus manquées.

Un seul point d'arrêt, à 768px. En dessous, colonne pleine largeur, marges de 16px. Au-dessus, la même colonne bornée à 420px et centrée, plus un rail de navigation à gauche. **Pas de mise en page desktop distincte pour la session** : elle serait moins bonne et doublerait le coût de maintenance de l'écran qui compte.

---

## 5. Navigation et écrans

Trois racines : **Study**, **Collection**, **Settings**. Les statistiques ne sont pas une racine, elles vivent dans le détail d'un deck. Un onglet Stats en navigation principale est construit en premier, consulté deux fois, et rend l'app anxiogène.

Pendant une session, la navigation disparaît entièrement.

**Study** — un objectif : lancer en un tap. Date, carré de comptage, bouton `Start`, puis la liste des decks ayant des cartes dues. Aucun tableau de bord.

**Session** — voir §8.

**Summary** — trois nombres (cartes, précision, durée), un bouton. Pas de graphe, pas de série de jours, pas de félicitation écrite.

**Collection** — une ligne par deck, trois compteurs alignés à droite en chasse fixe : nouvelles, à revoir, dues.

**Deck detail** — onglets Cards / Settings / Stats. Le navigateur de cartes est dense, lignes de 44px, recherche et filtres en chips. Les cartes bloquées par prérequis (§7) affichent `locked` au lieu de leur état.

**Card editor** — champs recto/verso, liste des prérequis avec les manquants en vermillon, et surtout **un aperçu en direct du rendu final**, furigana comprises, débounce 200ms. C'est l'aperçu qui évite les cartes cassées, il n'est pas optionnel.

**Settings** — muet, thème sombre, notation détaillée, plus l'état de la synthèse vocale du système (voix détectée ou non, dit explicitement).

---

## 6. Modèle de données

```ts
type Deck = {
  id: string; name: string;
  kind: 'glyph' | 'kanji' | 'lex' | 'name';
  script?: 'hira' | 'kata';
  answer: 'kana' | 'romaji';       // format attendu dans le champ
  grading: 'typed' | 'self';        // noté par la saisie ou auto-évalué
  audio: 'never' | 'reveal' | 'always';
  furi: 'hidden' | 'always' | 'never';
  ordered: boolean;                 // introduction par index imposé
  newPerDay: number;
};

type Item = { id: string; deck: string; kind: Deck['kind']; /* champs selon kind */ };
type Card = { id: string; stability: number; difficulty: number;
              due: number | null; reps: number; lapses: number;
              lastContext: string | null };
```

**La politique est une propriété du deck, jamais une règle globale codée en dur.** C'est ce qui permet aux decks kana d'accepter le romaji en réponse quand tous les autres attendent du kana, sans exception dans le code. Toutes ces valeurs sont éditables dans l'écran Settings du deck et prennent effet immédiatement.

Decks livrés :

| Deck | kind | answer | grading | items |
|---|---|---|---|---|
| Hiragana | glyph | romaji | typed | 104 |
| Katakana | glyph | romaji | typed | 104 |
| Kanji N5 | kanji | kana | self | 50 |
| Sentences N5 | lex | kana | typed | 10 (21 phrases) |
| Pokémon 151 | name | kana | typed | 151 |

Les contextes sont des entités séparées des items : `WordContext` (mot en kana), `CompoundContext` (composé kanji + lecture), `SentenceContext` (segments avec lectures + traduction). Un item possède plusieurs contextes, la carte est engendrée à l'exécution en en choisissant un.

---

## 7. La règle i+1

Une seule règle pour toute l'application :

> **Une carte n'est introduite, et un contexte n'est utilisé dans la question, que si tous les atomes dont il est composé ont déjà été introduits.**

Les atomes changent selon la provenance, le mécanisme non :

| Objet | Atomes |
|---|---|
| Mot en kana | ses unités kana (digrammes compris ; っ et ー exclus) |
| Composé kanji | ses kanji |
| Nom de Pokémon | ses katakana |
| Phrase | les mots de vocabulaire qu'elle contient |

Les atomes ne sont jamais annotés à la main. Ils sont **calculés** par décomposition, à l'import. La version précédente de ce document utilisait des drapeaux manuels : c'est abandonné.

Conséquences à assumer. Le deck Pokémon ne démarre pas au premier jour ; 30 katakana appris en déverrouillent 4, 60 en déverrouillent 66, 104 les déverrouillent tous. C'est voulu : servir リザードン avant que リ soit lisible est exactement ce que la règle évite. La courbe est visible dans les stats du deck sous la forme d'un compteur `locked by prerequisites`.

**Corollaire, aussi important que la règle :**

> **Le i+1 contraint la question, pas la révélation.**

Voir un mot dont on ignore un kana ne coûte rien ; devoir y répondre coûte cher. Donc **chaque carte porte un exemple au dos, dès sa première exposition**, y compris quand ses atomes ne sont pas tous connus. Les atomes manquants sont marqués (soulignés en vermillon), pas cachés.

---

## 8. La session

Il n'y a **pas d'étape « Révéler »** sur les decks en `grading:'typed'`. Deux états : saisie, résultat. La note est déduite, jamais demandée.

### 8.1 Faces de carte

La face est choisie à l'exécution en fonction du type d'item, du nombre de répétitions, et de la disponibilité d'un contexte i+1.

| Face | Question | Réponse attendue | Quand |
|---|---|---|---|
| `glyph` | kana isolé, 88px | romaji | première exposition, ou aucun mot disponible |
| `word` | mot en kana, cible soulignée | romaji du mot entier | dès qu'un mot i+1 existe |
| `sound` | audio seul (bouton ▶) | le kana entendu | une répétition sur trois |
| `keyword` | kanji isolé | auto-évaluation | première exposition d'un kanji |
| `comp` | composé, kanji cible souligné | lecture en kana | dès qu'un composé i+1 existe |
| `cloze` | phrase à trous, cellule carrée | lecture du terme élidé | par défaut sur le vocabulaire |
| `bare` | mot nu, sans phrase | lecture | une répétition sur quatre |
| `name` | nom anglais + n° + type | katakana | deck Pokémon |

Deux choix à ne pas défaire. `bare` existe parce que le contexte est aussi une béquille : dans une phrase, le sens se devine sans récupérer l'item en mémoire. Un item n'est réputé acquis que s'il passe en forme nue. Et `comp` remplace tout drill de lectures on/kun isolées : la lecture applicable est décidée par le mot, une lecture apprise hors mot ne transfère pas.

### 8.2 Anatomie de l'écran

```
✕                    18 / 47                    ♪
─────────────────────────────────────────────────
  駅で友達を [    ] いる。          ← question, ancrée en haut

  I'm waiting for a friend...      ← slot traduction, position FIXE

  ─────────────────────────────    ← zone de révélation, 172px réservés
  待って   まって            ♪
  to wait
  ────────────────────
  何を買ったの。                    ← contexte au dos (japonais)
  nani o katta no.                 ← romaji, 12px mono
  What did you buy?                ← anglais, 12px
                    tap to continue ›
─────────────────────────────────────────────────
  [ matsu|                    ]    ← champ, ancré au-dessus du clavier
                    I don't know
```

**Le slot de traduction est à position fixe et ne bouge jamais.** Ce qui change, c'est le moment où il se remplit, et cela dépend de la direction de la carte, pas du deck :

- Le sens **est** la question (`cloze`, `bare`, `name`) → traduction visible dès le départ.
- La forme **est** la question (`glyph`, `word`, `comp`, `sound`) → le slot porte la consigne pendant la saisie et bascule sur la traduction au résultat, même place, même taille.

Afficher « blue » au-dessus de あお permettrait de produire « ao » sans lire le kana. Le slot réservé donne la constance visuelle sans donner la réponse.

Le bloc de contexte au dos est supprimé quand la question le porte déjà (`cloze`, `word`, `comp`), sinon on verrait deux fois la même chose.

### 8.3 Retour visuel

Le verdict doit être lisible sans lire. **Le champ de saisie reste à l'écran au résultat**, en lecture seule, avec ce que l'utilisateur a tapé : filet et texte en `--seiji` si c'est juste, en `--shu` et barré si c'est faux. Pas de ligne « you typed » séparée, elle fait doublon. Un champ vidé ou remplacé par un espaceur au résultat est une erreur : l'utilisateur perd son propre repère.

Timing asymétrique. Bonne réponse : avance automatique après 1400ms, avec possibilité de couper court. Mauvaise réponse : **jamais d'avance automatique**, il faut une action. L'écran d'erreur est le seul moment de la session qui a une valeur d'encodage.

Avancer : tap n'importe où sur le corps de la carte (avec `tap to continue ›` discret en bas à droite), ou Entrée au clavier. Ne pas écrire « press enter » sur un écran où il n'y a pas de touche Entrée visible.

Sortie : la croix demande confirmation au-delà de 5 cartes vues, par **double tap** (la croix devient `quit?` pendant 3 secondes). Ne pas utiliser `confirm()` : bloqué dans les iframes sandbox et hostile en mobile.

### 8.4 Notation

Exact → Su. Faux ou « I don't know » → Encore, et la carte repart en fin de file dans la même session. Aucun bouton dans le chemin principal.

Deux boutons apparaissent dans trois cas seulement : un « presque » (§9), le réglage `detailed`, ou un deck en `grading:'self'`. Toujours deux, jamais quatre. Une correction manuelle reste possible pendant deux secondes après une bonne réponse.

Le bouton `Again` porte `--shu` en texte et filet, pas en fond plein. `Got it` porte un fond `--ink`. Le contraste de poids fait la hiérarchie, pas la couleur.

---

## 9. Validation des réponses

C'est trente lignes de logique qui décident si l'app est utilisable ou insupportable. Les tester unitairement **avant** d'écrire le reste.

Saisie : `wanakana` en mode IME lié au champ. Le romaji est un **mode de saisie**, disponible partout ; c'est le format *attendu* qui varie selon `deck.answer`. Ne jamais dépendre de l'IME du système : la plupart des apprenants n'en ont pas et sur mobile ça oblige à changer de clavier à chaque carte.

Pipeline de normalisation, mode kana :
```
trim → NFKC → suppression des espaces → katakana vers hiragana
→ expansion des allongements (ー devient la voyelle précédente)
→ comparaison à la liste des réponses acceptées
```

Pipeline mode romaji : NFKC, minuscules, suppression des macrons, réduction des variantes (shi/si, chi/ti, tsu/tu, fu/hu, ji/zi, sha/sya, cha/tya, ja/zya/jya), puis `nn→n`, `ou→o`, `uu→u`, `oo→o`. La normalisation s'applique **des deux côtés**.

L'expansion des allongements n'est pas optionnelle : sans elle リザード refuse tout. Avec, `rizaado` et `riza-do` passent tous les deux.

Quand `deck.answer === 'romaji'` et que les réponses stockées sont en kana, les convertir par `toRomaji` au moment de la comparaison. C'est ce qui permet de basculer le deck kanji en romaji d'un menu déroulant.

`acceptedReadings` est toujours une **liste**, jamais une chaîne : un kanji a plusieurs lectures, 毎月 se lit まいつき ou まいげつ.

**Trois résultats.** Exact, faux, et *presque* : distance de Levenshtein de 1 sur une réponse d'au moins 4 caractères. Une faute de petit kana (っ ゃ ゅ ょ) n'est jamais un « presque », c'est précisément ce qu'on apprend. Sur un presque, montrer l'écart et rendre la décision à l'utilisateur. Ne jamais auto-noter un presque.

Aucune validation pendant la frappe. Pas de bordure qui verdit à la bonne lettre, pas de complétion : ça transforme le rappel en devinette guidée.

Attributs du champ, non négociables :
```html
<input autocapitalize="none" autocorrect="off" autocomplete="off"
       spellcheck="false" inputmode="text" enterkeyhint="done">
```
L'autocorrection mobile transforme le romaji en mots anglais et rend l'app inutilisable.

### Romanisation des phrases

Le romaji des contextes est **calculé**, pas écrit à la main, depuis les lectures des segments. Deux règles sans lesquelles c'est illisible : un espace aux frontières de segments, et les particules は を へ romanisées `wa` / `o` / `e` (détectables : segment d'un seul kana sans lecture propre). La ponctuation japonaise devient sa contrepartie latine. On veut `eki de tomodachi o matte iru.`, pas `ekidetomodachiwomatteiru。`.

---

## 10. Ordonnancement

**Utiliser `ts-fsrs`. Ne pas réimplémenter FSRS.**

```ts
import { createEmptyCard, fsrs, Rating } from 'ts-fsrs'
const scheduler = fsrs({ request_retention: 0.9, enable_fuzz: true })
const result = scheduler.next(card, new Date(), good ? Rating.Good : Rating.Again)
```

Le modèle de carte du prototype (`stability`, `difficulty`, `due`, `reps`, `lapses`) est déjà celui de FSRS, la bascule est mécanique. L'API bas niveau `next_state({stability, difficulty}, elapsedDays, rating)` puis `next_interval()` existe si on veut garder son propre état.

Le vrai coût d'une réimplémentation n'est pas les formules, c'est de devenir responsable des poids par défaut et de l'optimiseur. Celui-ci vit dans `@open-spaced-repetition/binding` et s'appuie sur l'historique de révisions ; on ne l'écrit pas.

FSRS fonctionne correctement en binaire Again/Good, donc le choix de deux boutons n'est pas remis en cause. Ce qu'il apporte et que le jouet du prototype n'a pas : la rétrievabilité (une carte récupérée de justesse consolide beaucoup plus qu'une carte revue trop tôt), le retour à la moyenne de la difficulté, une rétention cible réglable, et le fuzz sans lequel toutes les cartes introduites le même jour reviennent éternellement le même jour.

**File de session.** Pour chaque deck : les cartes dues, plus jusqu'à `newPerDay` nouvelles filtrées par la règle i+1. Mélanger. Une mauvaise réponse renvoie la carte en fin de file.

**Sélection de contexte.** Parmi les contextes d'un item : d'abord exclure celui de la répétition précédente, puis prendre le nombre d'atomes inconnus le plus bas, puis départager au hasard. Trois contextes minimum par item de vocabulaire. Sans rotation, on mémorise la phrase et pas le mot, le rappel devient dépendant de l'indice, et c'est invisible dans les statistiques puisque le taux de réussite reste excellent.

---

## 11. Audio

Web Speech API, `lang:'ja-JP'`, voix japonaise sélectionnée explicitement parmi `speechSynthesis.getVoices()`.

Le son est déclenché à la révélation par défaut (`deck.audio`), et il est **la question** sur la face `sound`. Le muet est accessible en un tap dans le chrome de session et dans Settings.

Deux règles :
- Passer les **kana** pour les items isolés (les moteurs se trompent de lecture sur les kanji ambigus) et le **texte en kanji** pour les phrases (la prosodie est meilleure).
- Beaucoup de systèmes n'ont aucune voix japonaise installée. L'écran Settings doit le dire explicitement plutôt que de rester silencieux sans explication.

En production, de l'audio enregistré bat la synthèse. Prévoir `audioUrl` sur les contextes dès le modèle.

Note : la règle « aucun son par défaut » d'une version antérieure de ce document est annulée. Elle visait les sons de notification et de gamification, qui restent interdits. La lecture de la réponse est de l'information, pas de la décoration.

---

## 12. Contraintes anti-distraction

À traiter comme des règles de lint, pas des recommandations.

1. Aucune animation au-dessus de 150ms, uniquement `opacity` et `transform`. `prefers-reduced-motion` respecté.
2. Aucun compteur de série de jours, nulle part.
3. Aucun badge, niveau, XP, ni barre de progression en pourcentage. Une barre qui recule quand les cartes ratées reviennent est démotivante et fausse ; le compteur `18 / 47` en `--ink-faint` suffit.
4. Aucune couleur hors palette. Un deck n'a pas de couleur.
5. Aucun son hors audio de carte explicite.
6. Aucun élément qui change de taille au survol.
7. Pas de flip 3D à la révélation. Un fondu d'opacité de 140ms. Une rotation répétée 200 fois par session est coûteuse en attention.
8. Le texte japonais n'est jamais en faux gras : graisse réelle de la fonte ou rien, le faux gras détruit les caractères denses.

---

## 13. Ce que le prototype fait mal et qu'il ne faut pas reproduire

Le prototype est une référence de comportement et de mise en page, pas un modèle d'architecture.

- **Repeint tout le DOM à chaque `render()`.** Ça tue le focus et la position du curseur ; il y a des contournements manuels dans la recherche et dans le champ de réponse. Ces bricolages disparaissent gratuitement avec un rendu réconcilié. Ne pas les porter.
- **Table romaji maison, ~90 entrées.** Incomplète. Remplacer par `wanakana`.
- **Ordonnanceur jouet.** Remplacer par `ts-fsrs` (§10).
- **Segments de phrase écrits à la main.** En production, tokeniser à l'import avec `@sglkc/kuromoji` (le `kuromoji.js` d'origine n'est plus maintenu ; le fork ajoute le support navigateur et service worker). Le dictionnaire pèse plusieurs mégaoctets : il se charge une fois et se met en cache, acceptable à l'import, jamais dans la boucle de révision.
- **Rien n'est persisté.** Un rechargement remet tout à zéro.
- **Les mots du deck katakana sont des mots hiragana convertis** (すし rendu スシ). C'est artificiel, les vrais mots en katakana sont des emprunts. Ça marche pour drill le glyphe mais un deck katakana sérieux mérite sa propre liste d'emprunts ; les Pokémon jouent déjà ce rôle une fois débloqués.
- **Données Pokémon** dérivées d'un jeu issu de Bulbapedia. Les noms sont des marques de The Pokémon Company. Usage personnel ; ne pas distribuer.

---

## 14. Inventaire de composants

```
layout/     AppShell, BottomNav, SideRail, PageHeader
session/    SessionScreen, CardFrame, ClozeCell, RubyText, GlossSlot,
            ContextBlock, AnswerBlock, KanaInput, GradeBar, AtomRow, SessionSummary
study/      StudyLauncher, DueCounter, DeckDueRow
collection/ DeckList, DeckRow, DeckDetail, CardBrowser, CardRow, FilterChips
editor/     CardEditor, FieldInput, PrerequisiteList, LivePreview
primitives/ Button, IconButton, Select, Toggle, Rule, Square, Stat, EmptyState
lib/        kana.ts (wanakana + normalisation), romaji.ts, atoms.ts,
            scheduler.ts (ts-fsrs), tts.ts, judge.ts
```

`Square` est le primitif signature : conteneur à ratio 1:1, filet `--grid`, tailles `sm | md | lg`. Il sert au compteur d'accueil, à la cellule de phrase à trous, aux vignettes de stats. Sa réutilisation fait l'unité visuelle du produit.

---

## 15. Clavier et gestes

`Entrée` valide, puis `Entrée` avance. `Entrée` sur champ vide vaut « I don't know ». `Échap` quitte. `E` édite la carte courante. `/` recherche dans le navigateur. `1`–`4` ne servent que sur un presque ou en auto-évaluation.

Une seule touche fait tourner toute la session. C'est le critère : si la main doit quitter la rangée de repos, l'ergonomie est ratée.

Mobile : `enterkeyhint="done"`, la touche du clavier système joue les deux rôles. Tap n'importe où sur le corps pour avancer. Retour haptique léger au résultat, désactivable.

---

## 16. Ordre d'implémentation

1. Tokens, fontes, `Square`, `RubyText`. Vérifier que le ruby ne fait rien bouger.
2. `lib/judge.ts` et `lib/kana.ts` avec leur suite de tests : chasse pleine et demie, pliage katakana, petits kana, allongements, okurigana, lectures multiples, bascule kana/romaji.
3. `CardFrame` et l'écran de session complet en boucle, avec un ordonnanceur bouchonné et des données factices. **Le tester sur 100 cartes réelles avant d'écrire quoi que ce soit d'autre.**
4. `lib/atoms.ts` et la règle i+1, avec un test qui vérifie la courbe de déverrouillage du deck Pokémon.
5. `ts-fsrs`.
6. Persistance.
7. Collection, détail de deck, éditeur.
8. Pipeline d'import : tokenisation, calcul des atomes, liaison item/contextes.

Si la typographie et l'immobilité de la carte ne sont pas parfaites à l'étape 3, aucune autre partie du produit ne rattrapera le défaut.
