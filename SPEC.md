# Spécification ; application de répétition espacée pour le japonais

**Version 2.0, 18 août 2026.** Remplace la version 1, non datée.

Document de construction. En cas de désaccord avec le code, ce document tranche ; en
cas de désaccord avec `prototype.html`, ce document tranche également, le prototype
contenant des raccourcis assumés listés au §14.

**Ce que le document décrit, et à quel titre.** Les §1 à §13 et le §16 décrivent le
**comportement implémenté** à la version de build `20260824-1429`, vérifié contre le
code. Les §6.2, §15 et §17 décrivent en revanche une **architecture visée** : les types
y sont donnés en TypeScript et l'inventaire en modules, alors que l'implémentation est
un unique fichier JavaScript de 4530 lignes. Cette divergence est assumée et non
masquée, parce qu'un lecteur qui prend §15 pour un état des lieux chercherait des
fichiers qui n'existent pas. Les noms de types et de modules valent comme frontières de
responsabilité, pas comme arborescence.

La règle générale, apprise à ses dépens : **une affirmation non vérifiée est une
affirmation fausse en attente.** La version 1 en contenait plusieurs, reprises telles
quelles pendant neuf mois. Toute assertion chiffrée de ce document a été mesurée contre
le code au moment de l'écriture.

Langue de l'interface : **français**. La version 1 prescrivait l'anglais, l'app a
toujours été en français, et personne n'a arbitré pendant neuf mois : la réalité
gagne. Seul le japonais échappe à cette règle, et les gloses de contexte restent en
anglais parce qu'elles proviennent des données sources.

## Ce que la version 2 corrige

La version 1 était très précise sur ce qui se voit et vague sur ce qui se mesure :
trois pages de typographie, un paragraphe d'ordonnancement. Or l'ordonnancement décide
seul si l'utilisateur apprend.

| § | Changement | Ce que l'omission avait coûté |
|---|---|---|
| 6 | Vocabulaire fermé des quatre états de connaissance | « introduit », « appris » et « maîtrisé » employés pour la même idée ; les portes réglées sur la rétention longue, d'où 121 jours vides par an |
| 6, 8 | Une carte par direction | reconnaissance et production partageaient un intervalle, donc un signal moyenné |
| 10 | Contrat explicite de FSRS | `last_review` jamais transmis, tout intervalle figé à 3 jours à vie |
| 10 | Limite de révisions, plafond de séance, bridage adaptatif | une semaine d'absence produisait 200 cartes ; à 70 % de réussite, 55 cartes pour 30 annoncées |
| 8 | Règle de carte bloquante | une carte jamais obtenue tournait indéfiniment |
| 9 | Liste de conformité des kana | 11 cartes affichaient `fuァiyaa`, 2 étaient inrépondables |
| 13 | Durabilité, synchronisation, export | des mois d'historique sans aucun moyen de les extraire |
| 6 | Donnée minimale par carte | 924 kanji réduits à un glyphe et une glose |
| 12 | Réponse à l'assiduité | interdire la gamification sans rien mettre à la place |

---

## 1. Direction artistique

**原稿用紙, Swiss et International appliqués à la typographie pédagogique japonaise.**
Décision prise, pas une option. Ne pas produire de variante, ne pas proposer de thème
alternatif.

Grille stricte, marges généreuses, filets d'un pixel, aucune ombre portée, aucun
dégradé, aucun arrondi au-dessus de 4 px. La personnalité vient du système
typographique et du module carré, pas de la décoration.

**Signature, le module carré.** Le japonais se compose en chasse fixe pleine largeur,
chaque glyphe occupe un carré. Le compteur d'accueil est un carré, la cellule à
remplir dans une phrase est un carré bordé d'un filet clair avec un point central,
comme une case de papier quadrillé de rédaction.

Interdits explicites : gamification visuelle (badges, confettis, mascotte), cartes
flottantes à ombre douce et coins à 16 px, fond crème avec serif haute-contraste et
accent terracotta. Ce sont des défauts d'époque, pas des choix.

---

## 2. Tokens

```css
:root{
  --paper:#FAFAF8; --surface:#FFFFFF; --rule:#E2E5E1; --grid:#C3D3CA;
  --ink:#16181A; --ink-muted:#5C6260; --ink-faint:#8A918E;
  --shu:#C8402E;    /* vermillon, UNIQUEMENT l'erreur */
  --seiji:#3F6B57;  /* céladon, UNIQUEMENT la réponse juste */
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

Deux couleurs sémantiques, aucune couleur de marque. Le vermillon ne sert jamais de
bouton primaire ni d'accent décoratif : il signifie *tu ne savais pas*. Un deck n'a
pas de couleur. Cette discipline fait plus pour l'absence de distraction que n'importe
quel choix de mise en page.

---

## 3. Typographie

```css
--f-serif:"Noto Serif JP","Hiragino Mincho ProN","Yu Mincho",serif;
--f-jp:"Noto Sans JP","Hiragino Sans","Yu Gothic",sans-serif;
--f-lat:"IBM Plex Sans",system-ui,sans-serif;
--f-mono:"IBM Plex Mono",ui-monospace,monospace;
```

**Mincho au-dessus de 24 px, gothic en dessous.** À 88 px, les empattements du mincho
séparent visuellement les radicaux, ce qui est exactement l'information à apprendre
pour distinguer 待 de 持 et de 特. En dessous de 24 px le mincho devient illisible à
l'écran. En mode sombre, passer le prompt en `font-weight:500` : les traits fins
disparaissent sinon.

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

L'interligne 2.05 sur les phrases n'est pas confortable, il est obligatoire : les
furigana se placent au-dessus de la ligne et se collent à la ligne précédente en
dessous de 1.8.

### Furigana

`<ruby>` natif, jamais des `<span>` positionnés en absolu.

```css
ruby{ruby-position:over}
rt{font-size:.5em;font-family:var(--f-jp);color:var(--ink-muted);
   transition:opacity var(--dur) var(--ease)}
.sentence[data-furi="hidden"] rt{opacity:0}
```

**Piège central, ne jamais masquer avec `display:none` ni `visibility`.** L'espace
reste réservé en permanence et seule l'opacité s'anime. La carte ne doit pas se
déplacer d'un pixel entre la question et la réponse.

Trois modes par deck : `hidden` (révélées avec la réponse), `always`, `never`.

---

## 4. Cadre mobile-first

Le produit se conçoit à 390 px et se dilate ensuite. La contrainte dimensionnante, le
clavier logiciel levé en permanence pendant une session, n'existe qu'en mobile ; une
maquette pensée en desktop puis rétrécie ne lui survit pas.

Budget vertical de référence (390 × 844) :

```
barre système        ~50px
chrome de session     44px   croix + compteur + son
ZONE UTILE          ~380px   question, traduction, révélation
champ de saisie       52px
clavier système     ~300px
```

Conséquences non négociables :

- Contenu ancré en haut, jamais centré verticalement. Le centrage saute à l'ouverture
  du clavier.
- Jamais `100vh` ni `height:100%`. `100dvh` en base, `visualViewport` pour
  repositionner à l'ouverture et à la fermeture du clavier.
- La zone de révélation n'est émise qu'une fois remplie. La version 1 demandait de
  réserver 172 px dès la saisie ; à l'usage, un cadre vide de 172 px au milieu de
  l'écran attire l'œil à la place du champ de réponse. L'immobilité du §3 porte sur la
  question et les furigana, pas sur un conteneur vide.
- Cibles tactiles à 44 px minimum, en particulier « Je ne sais pas » et la croix de
  sortie, les deux plus manquées.

Un seul point d'arrêt, à 768 px. En dessous, colonne pleine largeur, marges de 16 px.
Au-dessus, la même colonne bornée à 420 px et centrée. **Pas de mise en page desktop
distincte pour la session** : elle serait moins bonne et doublerait le coût de
maintenance de l'écran qui compte.

---

## 5. Navigation et écrans

Trois racines : **Étudier**, **Collection**, **Réglages**. Les statistiques ne sont
pas une racine, elles vivent dans le détail d'un deck. Un onglet Stats en navigation
principale est construit en premier, consulté deux fois, et rend l'app anxiogène.

Pendant une session, la navigation disparaît entièrement.

**Étudier**, un objectif : lancer en un tap. Date, carré de comptage exprimé en
**expositions** (§10.2), ventilation nouvelles et révisions, bouton de départ, choix
de la charge du jour, puis les échéances à venir. Aucun tableau de bord, aucune
heatmap annuelle : 365 cases de 11 px avec des infobulles inutilisables au doigt
occupent la moitié de l'écran principal pour une information sur laquelle on ne peut
pas agir. À la place, la seule question utile avant de lancer une séance : combien de
cartes demain, sur sept jours, en circulation.

**Session**, voir §8.

**Résumé**, trois nombres (cartes, précision, durée), les cartes mises de côté s'il y
en a (§8.5), un bouton. Pas de graphe, pas de série de jours, pas de félicitation
écrite.

**Collection**, une ligne par niveau JLPT, chacune dépliée en decks. Chaque deck
affiche ses items maîtrisés, ses cartes en cours et ses cartes dues, avec la condition
de déblocage énoncée dans le vocabulaire du §6.1 : « 0/90 hiragana lisibles »,
« 0/100 hiragana consolidés ». Une condition doit être lisible sans avoir lu ce
document.

**Détail de deck**, onglets Cartes, Réglages, Statistiques, plus un bouton
« Étudier » qui lance une session bornée à ce deck. Le navigateur de cartes est dense,
lignes de 44 px, recherche et filtres en chips. Les filtres portent sur l'item en
interrogeant ses deux directions : une carte dont seule la production est due apparaît
sous « à réviser ». Chaque ligne affiche l'avancement des deux directions, « lire
3/5 · écrire 1/5 », sans quoi on ne verrait pas qu'un caractère se lit sans qu'on
sache l'écrire.

**Statistiques de deck**, la maîtrise et l'avancement comptés en items, l'historique
et la charge comptés en cartes, plus un bloc « par direction » qui donne reconnaissance
et production séparément. Ne jamais mélanger les deux unités dans un même tableau sans
le dire.

**Éditeur de carte**, champs recto et verso, liste des prérequis avec les manquants en
vermillon, l'état des deux directions, et surtout **un aperçu en direct du rendu
final**, furigana comprises, débounce 250 ms. C'est l'aperçu qui évite les cartes
cassées, il n'est pas optionnel. La version 1 annonçait 200 ms, l'implémentation en
applique 250 : le chiffre exact n'a aucune importance, la divergence silencieuse entre
document et code en a.

**Réglages**, muet, thème sombre, notation détaillée, clavier simulé, puis la
synchronisation (§13), la sauvegarde locale (§13), et l'état de la synthèse vocale. Ce
dernier point dit explicitement quelle voix joue, si elle est de haute qualité, et
sinon comment en installer une : c'est le levier de diction le plus efficace, et il
n'est pas dans le code (§11).

---

## 6. Modèle de données

### 6.1 Les quatre états de connaissance

Vocabulaire fermé. La version 1 employait « introduit », « appris » et « maîtrisé »
pour la même idée, et l'implémentation a lu « maîtrisé » là où la règle i+1 voulait
dire « lisible ». Une porte franchissable en une semaine a demandé deux mois, et l'app
est restée 38 jours consécutifs sans rien à proposer au deuxième mois.

| État | Condition sur la carte | Ce que cela signifie |
|---|---|---|
| **introduit** | `reps > 0` | vu au moins une fois |
| **lisible** | `goodReps ≥ 2` et stabilité ≥ 1 j | a passé ses pas d'apprentissage ; on sait le lire |
| **consolidé** | `goodReps ≥ 3` et stabilité ≥ 2 j | a survécu à un intervalle espacé ; utilisable comme base |
| **maîtrisé** | `goodReps ≥ 5` et stabilité ≥ 21 j | retenu durablement ; **exige les deux directions** |

Deux règles qui découlent de ce tableau, et qui sont le cœur de cette version :

> **Les portes se règlent sur la lisibilité ou la consolidation, jamais sur la
> maîtrise.** Une condition de lecture doit être atteinte vite, sinon le contenu se
> tarit avant que la porte s'ouvre.

> **Les attestations se règlent sur la maîtrise.** Ce qu'on affiche comme accompli
> doit être coûteux, sinon l'attestation ne vaut rien.

Les quatre états **redescendent** après une rechute, puisqu'ils dépendent de la
stabilité courante et non d'un compteur cumulé. C'est voulu pour les statistiques. En
revanche **un déblocage est définitif** : sans quoi un hiragana oublié retirerait tout
le deck kanji de l'étude en cours. Les portes sont à sens unique, et les
franchissements sont persistés.

### 6.2 Une carte par direction

Reconnaissance et production sont deux compétences de difficulté différente : on peut
reconnaître し de façon fiable et être incapable de l'écrire depuis « shi ». Tant qu'un
seul état FSRS porte les deux, le planificateur moyenne le signal, donc sur-espace la
direction faible et sous-espace la forte, et l'écart reste invisible.

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
  newPerDay: number;                // PLAFOND réel, voir §10.2
  level: 'n5' | 'n4' | 'n3' | 'n2' | 'n1';
};

type Item = { id: string; deck: string; kind: Deck['kind']; /* champs selon kind */ };

type Card = {
  id: string;              // identifiant d'item, plus le suffixe '#p' en production
  stab: number; diff: number; due: number | null;
  reps: number; goodReps: number; lapses: number;
  lastSeen?: number;       // révision PRÉCÉDENTE, voir le contrat du §10.1
  modifiedAt?: number;     // arbitrage de fusion, §13
  fsrsState?: number; fsrsLearningSteps?: number;
  last: string | null;     // contexte de la répétition précédente
};

type Context = {           // WordContext | CompoundContext | SentenceContext
  id: string; audioUrl?: string;   // §11 : l'audio enregistré bat la synthèse
};
```

**La clé de la carte de reconnaissance est l'identifiant de l'item.** Le suffixe ne
s'applique qu'à la production. C'est ce qui a permis d'introduire le découpage sans
migration : les données existantes et les charges utiles de synchronisation restent
valides, et les cartes de production apparaissent simplement vierges.

Les noms propres, deck Pokémon, n'ont **pas** de carte de production : leurs deux
faces sont déjà des faces de production.

Conséquence à assumer : le corpus passe de 1434 items à 2717 cartes, et la vitesse de
couverture est divisée par deux. Mesuré, le katakana s'ouvre au 21e jour au lieu du
8e. C'est le prix d'un intervalle honnête par compétence.

### 6.3 Donnée minimale par carte

La version 1 spécifiait la graisse de fonte en mode sombre et ne disait pas ce qu'une
carte doit contenir. Résultat, 924 kanji sur 1065 n'ont ni lecture ni composé : un
glyphe et une glose anglaise, sans audio ni contexte possible, dans des decks qui
représentent 64 % du corpus.

Un item est **complet** quand il porte :

| kind | Obligatoire | Sans quoi |
|---|---|---|
| `glyph` | `glyph`, `kana`, `rom` | rien |
| `kanji` | `glyph`, `keyword`, **au moins une lecture** | pas d'audio, pas de face `comp`, auto-évaluation seule |
| `lex` | `surface`, `read`, `gloss`, **trois contextes** | on mémorise la phrase, pas le mot |
| `name` | `ja`, `en`, `type` | rien |

Un item incomplet est admis mais **compté et affiché comme tel** dans les statistiques
du deck. Un deck majoritairement incomplet ne doit pas se présenter comme équivalent à
un deck complet. La validation au démarrage échoue sur un contexte mal formé, et
signale sans échouer les items incomplets.

### 6.4 Inventaire livré

| Deck | kind | answer | grading | items | cartes | complets |
|---|---|---|---|---|---|---|
| Hiragana | glyph | romaji | typed | 104 | 208 | oui |
| Katakana | glyph | romaji | typed | 104 | 208 | oui |
| Kanji N5 | kanji | kana | self | 81 | 162 | 50 sur 81 |
| Phrases N5 | lex | kana | typed | 10 | 20 | oui, 30 phrases |
| Pokémon 151 | name | kana | typed | 151 | 151 | oui |
| Kanji N4 | kanji | kana | self | 182 | 364 | 68 sur 182 |
| Kanji N3 | kanji | kana | self | 292 | 584 | 17 sur 292 |
| Kanji N2 | kanji | kana | self | 285 | 570 | 6 sur 285 |
| Kanji N1 | kanji | kana | self | 225 | 450 | 0 sur 225 |

Contextes disponibles : 106 mots en kana, 157 composés kanji, 30 phrases.

Le déséquilibre est le premier chantier de contenu, et il ne se règle pas par du code.
Priorité : les 31 kanji N5 encore sans lecture, puis N4. Ajouter des kanji
supplémentaires avant d'avoir complété les existants aggrave le problème.

**La politique est une propriété du deck, jamais une règle globale codée en dur.**
C'est ce qui permet aux decks kana d'accepter le romaji en réponse quand tous les
autres attendent du kana, sans exception dans le code.

---

## 7. La règle i+1

Une seule règle pour toute l'application :

> **Une carte n'est introduite, et un contexte n'est utilisé dans la question, que si
> tous les atomes dont il est composé sont LISIBLES au sens du §6.1.**

Lisible, et non maîtrisé : c'est une condition de lecture. C'est le mot que la version
1 laissait flotter, et l'ambiguïté a coûté deux mois de progression.

Les atomes changent selon la provenance, le mécanisme non :

| Objet | Atomes |
|---|---|
| Mot en kana | ses unités kana (digrammes compris, っ et ー exclus) |
| Composé kanji | ses kanji |
| Nom propre | ses katakana |
| Phrase | les kanji qu'elle contient et qui sont eux-mêmes des cartes |

Les atomes ne sont jamais annotés à la main. Ils sont **calculés** par décomposition, à
l'import.

**Trois corollaires, aussi importants que la règle.**

> **Le i+1 contraint la question, pas la révélation.**

Voir un mot dont on ignore un kana ne coûte rien ; devoir y répondre coûte cher. Donc
**chaque carte porte un exemple au dos dès sa première exposition**, y compris quand
ses atomes ne sont pas tous lisibles. Les atomes manquants sont marqués, soulignés en
vermillon, pas cachés.

> **Sur les phrases, le i+1 classe au lieu de bloquer.**

Un item de vocabulaire n'a que trois contextes : les exclure tous le priverait de tout
contexte. On sert donc la phrase la plus lisible d'abord. La version 1 laissait ce cas
indéfini, et l'implémentation avait purement et simplement exempté les phrases de la
règle.

> **La production d'un item ne s'ouvre qu'une fois sa reconnaissance lisible.**

Devoir écrire une graphie qu'on ne reconnaît pas encore n'est pas du rappel, c'est une
devinette. Et la production passe **avant** les nouveaux items dans le budget
quotidien : consolider ce qui est entamé vaut mieux que laisser grossir une dette de
production.

Conséquence à assumer sur le deck Pokémon : il ne démarre pas au premier jour. Un nom
se débloque quand tous ses katakana sont lisibles, ce qui arrive vers le 31e jour pour
le premier. Servir リザードン avant que リ soit lisible est exactement ce que la règle
évite.

---

## 8. La session

Il n'y a **pas d'étape « Révéler »** sur les decks en `grading:'typed'`. Deux états :
saisie, résultat. La note est déduite, jamais demandée.

### 8.1 Faces de carte

La face est choisie à l'exécution selon la **direction de la carte**, le nombre de
répétitions, et la disponibilité d'un contexte i+1. Une carte ne mélange jamais les
deux directions : c'est ce qui permet à son intervalle de ne mesurer qu'une compétence.

**Cartes de reconnaissance**, la graphie est donnée, on produit la lecture ou le sens.

| Face | Question | Réponse attendue | Quand |
|---|---|---|---|
| `glyph` | kana isolé, 88 px | romaji | par défaut |
| `word` | mot en kana, cible soulignée | romaji du mot entier | une fois sur trois, si un mot lisible existe |
| `keyword` | kanji isolé | auto-évaluation | par défaut sur les kanji |
| `comp` | composé, kanji cible souligné | lecture en kana | une fois sur trois, si un composé lisible existe |
| `cloze` | phrase à trous, cellule carrée | lecture du terme élidé | par défaut sur le vocabulaire |
| `bare` | mot nu, sans phrase | lecture | une fois sur trois |
| `name` | nom anglais, numéro, type | katakana | par défaut sur les noms propres |

**Cartes de production**, on part du sens ou du son, et l'on restitue la graphie.

| Face | Question | Réponse attendue | Quand |
|---|---|---|---|
| `glyph-write` | romaji | kana | en alternance |
| `sound` | audio seul | le kana entendu | en alternance |
| `kanji-write` | sens | auto-évaluation du kanji | toujours |
| `lex-write` | sens | mot japonais, auto-évaluation | toujours |
| `sound` | audio du nom | katakana | une fois sur trois, noms propres |

Deux choix à ne pas défaire. `bare` existe parce que le contexte est aussi une
béquille : dans une phrase, le sens se devine sans récupérer l'item en mémoire. Un item
n'est réputé acquis que s'il passe en forme nue. Et `comp` remplace tout drill de
lectures on et kun isolées : la lecture applicable est décidée par le mot, une lecture
apprise hors mot ne transfère pas.

**Enterrement des cartes sœurs.** Jamais les deux directions d'un même item dans la
même session. Voir 山 puis « yama » à quelques cartes d'écart donne la réponse au lieu
de la faire chercher, et les deux intervalles se verrouilleraient sur le même rythme au
lieu de diverger selon la difficulté propre à chaque direction.

### 8.2 Anatomie de l'écran

```
✕                    18 / 47                    ♪
─────────────────────────────────────────────────
  駅で友達を [    ] いる。          question, ancrée en haut

  I'm waiting for a friend...      slot traduction, position FIXE

  ─────────────────────────────    révélation, émise une fois remplie
  待って   まって            ♪
  to wait
  ────────────────────
  何を買ったの。                    contexte au dos (japonais)
  nani o katta no.                 romaji, 12px mono
  What did you buy?                anglais, 12px
                    touchez pour continuer ›
                    je m'étais trompé        correction, §8.4
─────────────────────────────────────────────────
  [ matsu|                    ]    champ, ancré au-dessus du clavier
                    Je ne sais pas
```

**Le slot de traduction est à position fixe et ne bouge jamais.** Ce qui change, c'est
le moment où il se remplit, et cela dépend de la direction de la carte, pas du deck :

- Le sens **est** la question (`cloze`, `bare`, `name`) : traduction visible dès le
  départ.
- La forme **est** la question (les autres) : le slot porte la consigne pendant la
  saisie et bascule sur la traduction au résultat, même place, même taille.

Afficher « blue » au-dessus de あお permettrait de produire « ao » sans lire le kana. Le
slot réservé donne la constance visuelle sans donner la réponse.

Le bloc de contexte au dos est supprimé quand la question le porte déjà (`cloze`,
`word`, `comp`), sinon on verrait deux fois la même chose.

### 8.3 Retour visuel

Le verdict doit être lisible sans lire. **Le champ de saisie reste à l'écran au
résultat**, en lecture seule, avec ce que l'utilisateur a tapé : filet et texte en
`--seiji` si c'est juste, en `--shu` et barré si c'est faux. Pas de ligne « vous avez
tapé » séparée, elle fait doublon.

Le verdict porte `role="status"` et `aria-live="polite"`. Sans cela il n'existe qu'en
couleur et en position, donc pas du tout pour un lecteur d'écran.

Timing asymétrique. Bonne réponse : on peut enchaîner d'un tap. Mauvaise réponse :
**jamais d'avance automatique**, il faut une action. L'écran d'erreur est le seul
moment de la session qui a une valeur d'encodage.

Avancer : tap n'importe où sur le corps de la carte, ou Entrée. Un garde de 500 ms
empêche le tap de validation d'avancer par inadvertance.

Sortie : la croix demande confirmation au-delà de 5 cartes vues, par double tap, la
croix devenant `quitter ?` pendant 3 secondes. `Échap` suit exactement la même règle :
une session perdue par inadvertance coûte plus qu'une touche à presser deux fois. Ne
pas utiliser `confirm()`, bloqué dans les iframes sandbox et hostile en mobile.

### 8.4 Notation

Exact : Su. Faux ou « Je ne sais pas » : Encore, et la carte repart en file selon
§8.5. Aucun bouton dans le chemin principal.

Deux boutons apparaissent dans trois cas seulement : un « presque » (§9.2), le réglage
`detailed`, ou un deck en `grading:'self'`. Toujours deux, jamais quatre.

**Correction après coup.** Après une bonne réponse auto-notée, un lien discret « je
m'étais trompé » requalifie la carte en erreur. Il restaure un instantané pris avant
toute mutation, puis rejoue la validation : ordonnanceur, points et journal du jour
repartent de l'état antérieur, sans correctif approximatif. Sans ce recours, un tap
malheureux notait la carte définitivement.

**« Je ne sais pas » coûte exactement autant qu'une mauvaise réponse.** Les deux
envoient Encore au planificateur, donc la conséquence d'apprentissage est identique.
Tant que l'abandon coûtait moins, le score récompensait le renoncement, alors que c'est
la tentative de récupération, même ratée, qui encode.

### 8.5 Remise en file et cartes bloquantes

Trois règles, dans cet ordre.

**Écart minimal de 4 cartes** avant de revoir une carte ratée. La version 1 disait « en
fin de file » ; en fin de session, cela la remettait au rang suivant, et l'on voyait la
réponse avant de la redemander dans la seconde. Ce n'est plus du rappel, c'est de la
recopie.

**File vide, on ne redemande pas.** La carte est déjà notée et replanifiée en
réapprentissage : Anki termine la séance dans ce cas, nous aussi.

**Carte bloquante.** Au-delà de **3 échecs dans la même session**, la carte est mise de
côté et signalée dans le résumé. Une carte qu'on n'obtient pas après trois tentatives
rapprochées ne s'apprendra pas à la quatrième : elle a besoin d'une nuit, ou d'être
reformulée. Sans cette règle, une session entièrement ratée boucle indéfiniment, ce qui
était le cas.

---

## 9. Validation des réponses

C'est trente lignes de logique qui décident si l'app est utilisable ou insupportable.
Les tester unitairement **avant** d'écrire le reste.

Le romaji est un **mode de saisie**, disponible partout ; c'est le format *attendu* qui
varie selon `deck.answer`. Ne jamais dépendre de l'IME du système : la plupart des
apprenants n'en ont pas et sur mobile cela oblige à changer de clavier à chaque carte.

**Le juge a deux chemins, et c'est essentiel.** Une réponse est acceptée si elle
correspond en kana **ou** en romaji, quel que soit le mode d'affichage. Corollaire
pratique : la table de sortie (kana vers romaji) est aussi critique que la table
d'entrée, parce que c'est elle qui décide si une frappe romaji naturelle est reconnue.
La version 1 ne mentionnait que la saisie.

Pipeline, mode kana :

```
trim → NFKC → suppression des espaces → retrait des signes non prononçables (♀ ♂)
→ katakana vers hiragana → expansion des allongements (ー devient la voyelle
précédente) → comparaison à la liste des réponses acceptées
```

Pipeline, mode romaji : NFKC, minuscules, retrait des macrons et des signes non
prononçables, réduction des variantes (shi et si, chi et ti, tsu et tu, fu et hu, ji et
zi, sha et sya, cha et tya, ja et zya et jya), puis `nn→n`, `ou→o`, `uu→u`, `oo→o`,
`ii→i`. La normalisation s'applique **des deux côtés**.

`ii→i` complète la liste de la version 1. La longueur vocalique est phonémique, mais ce
pipeline a déjà choisi la clémence pour `uu` et `oo` : traiter `ii` autrement était une
incohérence, et elle rendait ケーシィ acceptable en une seule graphie.

`acceptedReadings` est toujours une **liste**, jamais une chaîne : un kanji a plusieurs
lectures, 毎月 se lit まいつき ou まいげつ.

### 9.1 Liste de conformité des kana

La version 1 disait « table romaji maison, environ 90 entrées, incomplète » sans dire ce
qui manquait. Onze cartes affichaient `fuァiyaa` comme lecture et refusaient la frappe
naturelle ; deux, portant ♀ et ♂, étaient inrépondables sur tout clavier de l'app.

Les tables doivent couvrir, **dans les deux sens** :

- le gojūon complet, dakuten et handakuten compris ;
- les digrammes en ゃ ゅ ょ ;
- les **sons étrangers**, par la règle générale « consonne suivie d'une petite
  voyelle » : on retire la voyelle de la consonne et on ajoute celle du petit kana.
  フ+ァ donne fa, テ+ィ donne ti, シ+ェ donne she. Une règle générale vaut mieux qu'une
  énumération, qui sera toujours incomplète ;
- ヴ, absent du gojūon ;
- ー et っ ;
- une ィ derrière un romaji déjà en -i allonge la voyelle : ケーシィ donne keeshii.

Invariant testable, et testé : **aucune lecture romaji du corpus ne contient de
caractère non latin.** C'est le test qui aurait attrapé les onze cartes.

Les signes non prononçables (♀, ♂) sont retirés de la comparaison des deux côtés. Deux
items peuvent alors se normaliser pareil, ce qui est voulu : l'énoncé les distingue, la
graphie attendue non.

L'expansion des allongements n'est pas optionnelle : sans elle リザード refuse tout.
Avec, `rizaado` et `riza-do` passent tous les deux.

### 9.2 Trois résultats

Exact, faux, et *presque* : distance de Levenshtein de 1 sur une réponse d'au moins 4
caractères. Une faute de petit kana (っ ゃ ゅ ょ) n'est jamais un « presque », c'est
précisément ce qu'on apprend. Sur un presque, montrer l'écart et rendre la décision à
l'utilisateur. Ne jamais auto-noter un presque.

Aucune validation pendant la frappe. Pas de bordure qui verdit à la bonne lettre, pas de
complétion : cela transforme le rappel en devinette guidée.

Attributs du champ, non négociables :

```html
<input autocapitalize="none" autocorrect="off" autocomplete="off"
       spellcheck="false" inputmode="text" enterkeyhint="done">
```

L'autocorrection mobile transforme le romaji en mots anglais et rend l'app inutilisable.

### 9.3 Romanisation des phrases

Le romaji des contextes est **calculé**, pas écrit à la main, depuis les lectures des
segments. Deux règles sans lesquelles c'est illisible : un espace aux frontières de
segments, et les particules は を へ romanisées `wa`, `o`, `e`, détectables comme un
segment d'un seul kana sans lecture propre. La ponctuation japonaise devient sa
contrepartie latine. On veut `eki de tomodachi o matte iru.`, pas
`ekidetomodachiwomatteiru。`.

---

## 10. Ordonnancement

**Utiliser `ts-fsrs`. Ne pas réimplémenter FSRS.**

```ts
const scheduler = fsrs({
  request_retention: 0.9,
  enable_short_term: true,   // pas d'apprentissage du jour même
  enable_fuzz: true,
})
```

### 10.1 Le contrat de FSRS

Cette section est la plus importante du document. Son absence en version 1 a coûté neuf
mois d'ordonnancement inerte.

> **`last_review` doit être la révision PRÉCÉDENTE, jamais l'instant courant.**

FSRS en déduit `elapsed_days`, donc la rétrievabilité au moment du rappel, donc tout le
gain de stabilité. Une implémentation qui écrase l'horodatage de la carte avant
d'appeler le planificateur lui fait croire que chaque révision suit la précédente sans
délai : la rétrievabilité vaut 1, le gain est nul, **et tout intervalle reste figé à sa
valeur initiale à vie**. Mesuré sur le code de la version 1 : 3 jours à la première
révision, et 3 jours encore à la cinquième, quel que soit le temps réellement écoulé.

Deux corollaires :

- **L'état et l'index de pas doivent survivre** d'une révision à l'autre
  (`fsrsState`, `fsrsLearningSteps`). Sans eux, une carte en cours d'apprentissage
  repasse pour une carte mûre et saute ses pas courts.
- **Un test d'intervalles croissants est obligatoire**, au même titre que la suite de
  tests du §9. Une doublure de test qui renvoie une stabilité constante ne peut pas voir
  ce défaut : c'est exactement ce qui l'a laissé passer. La doublure doit reproduire la
  propriété qui compte, à savoir qu'une carte revue trop tôt ne consolide pas.

Ce que FSRS apporte, et que l'ordonnanceur jouet du prototype n'a pas : la
rétrievabilité, le retour à la moyenne de la difficulté, une rétention cible réglable,
les pas d'apprentissage du jour même, et le fuzz sans lequel toutes les cartes
introduites le même jour reviennent éternellement le même jour. Aucun de ces apports
n'existe si le contrat ci-dessus n'est pas respecté.

FSRS fonctionne correctement en binaire Encore et Su, donc le choix de deux boutons
n'est pas remis en cause.

### 10.2 Budget, en expositions

Le budget se compte en **expositions**, c'est-à-dire en cartes présentées à l'écran, et
non en cartes distinctes. Une carte neuve est vue deux fois le jour de son introduction,
la présentation puis la reprise du pas d'apprentissage : elle consomme donc deux unités.
Sans cette convention, une journée sans révision servait 30 nouveautés, soit 60 cartes à
l'écran, pour un budget annoncé de 30.

**La charge du jour est réglable** : 15, 30 ou 60 expositions. C'est le premier levier
d'assiduité, et le moins gamifié qui existe. Un budget figé impose la même dose un jour
chargé et un jour disponible, et une séance sautée coûte plus qu'une séance courte.

`newPerDay` est un **plafond par deck**, pas un poids. En version 1 la valeur était
divisée par la somme de tous les decks : un deck réglé à 10 sur un total de 46 recevait
3. Le réglage promettait un nombre que l'application ne servait jamais. L'ordre des
decks, des fondations vers les niveaux hauts, donne la priorité, et le reliquat glisse
vers les decks suivants dès qu'un deck est plafonné, épuisé ou verrouillé.

Conséquence assumée : le budget n'est pas toujours atteint. Une séance sous le plafond
est normale, c'est le réglage qui commande. **L'interface doit dire ce qui borne
réellement**, sinon le sélecteur de charge passe pour cassé quand il ne change rien.

### 10.3 Limites de séance

Trois plafonds, dont deux manquaient entièrement.

**Les révisions dues sont plafonnées par la charge du jour**, les plus en retard
d'abord. En version 1 seules les nouveautés étaient bornées, si bien qu'une semaine
d'absence produisait une séance de deux cents cartes. Les plus en retard passent
d'abord parce que ce sont celles dont la rétention se dégrade le plus. Le surplus reste
dû, revient le lendemain, sans pénalité : FSRS n'a pas de notion de retard. Le report
est affiché.

**Plafond dur de séance à 1,5 fois la charge annoncée.** Les reprises après échec ne se
comptaient dans aucun budget : à 70 % de réussite, « 30 » servait 55 cartes. Passé ce
plafond, on cesse de remettre les cartes en file, celles-ci étant déjà notées et
replanifiées. La charge annoncée devient une promesse tenue à 50 % près au lieu de
80 %.

**Bridage adaptatif des nouveautés.** Sous 85 % de réussite sur les sept derniers
jours, et à partir de 30 réponses d'échantillon, l'apport de nouveautés décroît
linéairement, atteignant son minimum à 70 %, et ne descend jamais sous un plancher de
2 par jour. En dessous de l'échantillon minimal, on ne conclut rien : trois erreurs le
premier jour ne prouvent pas qu'un apprenant est en peine. Mesuré à 70 % sans ce mécanisme :
aucune porte ne s'ouvrait en quatre mois et la séance gonflait, donc l'apprenant en
difficulté recevait plus de charge et moins de progrès.

Le bridage **ne descend jamais à zéro** tant qu'il reste du contenu à introduire. Les
portes se comptent en nombre de caractères lisibles : couper entièrement l'apport les
verrouillerait pour de bon, et punirait deux fois celui qui peine. Un filet d'eau garde
le seuil atteignable tout en ramenant la charge à l'absorbable.

Comme pour le §10.2, **ces trois mécanismes doivent s'énoncer à l'écran**. Un mécanisme
silencieux qui réduit ce que l'utilisateur reçoit est indiscernable d'une panne.

### 10.4 File de session

Pour chaque deck : les cartes dues plafonnées, plus les nouveautés du plan quotidien,
filtrées par le i+1 et par la règle de production du §7. Mélanger, puis enterrer les
cartes sœurs. Le plan quotidien est mémorisé par jour : relancer une session ne
regonfle jamais le quota de nouveautés, ce qui permet de rouvrir une séance dans la
journée sans verrou artificiel.

**Sélection de contexte.** Parmi les contextes d'un item : d'abord exclure celui de la
répétition précédente, puis prendre le nombre d'atomes inconnus le plus bas, puis
départager au hasard. **Trois contextes minimum par item de vocabulaire**, exigence
désormais validée au démarrage. La version 1 posait la règle puis livrait un inventaire
à deux. Sans rotation, on mémorise la phrase et pas le mot, le rappel devient dépendant
de l'indice, et c'est invisible dans les statistiques puisque le taux de réussite reste
excellent.

Note d'implémentation : `Math.random()` dans un comparateur de tri n'est pas transitif,
le résultat dépend de l'implémentation et n'est pas uniforme. Pré-mélanger puis trier de
façon stable. Le hasard ne doit départager que les ex æquo.

---

## 11. Audio

Web Speech API, `lang:'ja-JP'`, voix japonaise sélectionnée explicitement parmi
`speechSynthesis.getVoices()`.

Le son est déclenché à la révélation par défaut (`deck.audio`), et il est **la
question** sur les faces `sound`. Le muet est accessible en un tap dans le chrome de
session et dans les réglages.

**Ce qu'on fait prononcer compte plus que le débit.**

> **Ne jamais envoyer un kanji isolé au moteur.**

日 se lit nichi, hi ou jitsu, et le moteur en choisit un arbitrairement : l'app enseigne
alors une lecture fausse. On passe la lecture d'un **composé** contenant ce kanji,
choisie de façon stable pour ne pas changer d'une exposition à l'autre. Faute de
composé, **on se tait** : ne rien entendre coûte moins qu'apprendre faux. La version 1
énonçait le principe puis laissait l'implémentation parler les glyphes.

Conséquence directe du §6.3 : 924 kanji sur 1065 sont muets faute de lecture dans les
données. Ce n'est pas un défaut d'audio, c'est un défaut de contenu, et il se mesure là.

Autres règles :

- **Kana pour les items isolés, texte en kanji pour les phrases.** Les moteurs se
  trompent sur les kanji ambigus, mais la prosodie d'une phrase est meilleure depuis
  l'écriture normale.
- **Débit selon la longueur de l'énoncé**, trois paliers nommés plutôt que des valeurs
  dispersées : 0,72 pour une ou deux mores, 0,86 pour un mot, 0,98 pour une phrase. Une
  more isolée a besoin d'air pour que l'attaque et la durée s'entendent ; une phrase
  perd sa prosodie dès qu'on la ralentit, parce que l'intonation et l'accent de hauteur
  se lisent sur le débit naturel. Ne pas descendre sous 0,6 : cela déforme les formants
  au lieu d'allonger la voyelle, et la longueur vocalique étant phonémique (おばさん et
  おばあさん), on enseignerait une durée fausse.
- **`pitch` reste à 1.** Le japonais porte du sens dans l'accent de hauteur, et
  déplacer la fondamentale globale brouille ce contraste.
- **Encadrer l'énoncé de pauses.** Une more dure environ 300 ms et les moteurs rognent
  l'attaque le temps d'ouvrir le flux : sur あ, c'est un tiers du signal qui saute. Une
  virgule idéographique de part et d'autre fait tomber la troncature sur le silence.
- **Ne jamais répéter un énoncé automatiquement.** Prononcer deux fois une more isolée
  double l'information acoustique, et l'argument est juste en théorie. Retiré sur
  retour d'usage : la répétition se subit des centaines de fois par jour et devient
  exaspérante. Une gêne répétée coûte plus qu'un gain marginal de netteté, et
  réécouter se fait d'un tap, ce qui laisse la répétition au choix de l'utilisateur
  au lieu de la lui imposer. Vaut aussi pour l'audio pré-enregistré, où la
  répétition serait gravée dans le fichier.
- **Sélection de voix pondérée d'abord sur la qualité du modèle**, avant la
  reconnaissance du nom. L'écart entre une voix compacte et une voix haute qualité
  s'entend surtout sur les mores isolées, où la compacte diphtongue les voyelles
  longues.
- **iOS Safari n'autorise le premier `speak()` que dans la pile d'appel du geste
  utilisateur.** Le différer, même d'un tick, le fait échouer en silence. Quand rien ne
  parle, appeler directement ; quand quelque chose parle, l'audio est débloqué et l'on
  peut différer après `cancel()`, qui est asynchrone. Un jeton de séquence garantit
  qu'une demande plus récente prenne la main.
- **Beaucoup de systèmes n'ont aucune voix japonaise installée.** Les réglages doivent
  le dire explicitement, et dire aussi comment installer une voix de meilleure qualité.
  C'est le gain de diction le plus important disponible, et il n'est pas dans le code.

### 11.1 Audio pré-enregistré

De l'audio enregistré bat la synthèse, et `tools/build-audio.mjs` le produit. Le
script lit le corpus depuis l'application elle-même, de sorte qu'une carte ajoutée
entre automatiquement dans l'audio, et il est idempotent : relancer après un ajout ne
coûte que le nouveau contenu. Volume mesuré, 792 énoncés pour 2405 caractères.

Deux fournisseurs, un seul format de sortie. `--provider=google` donne des voix
neuronales, la seule voie qui améliore le modèle de voix, et déclare ses pauses en
millisecondes par SSML au lieu de les faire deviner par des virgules idéographiques.
`--provider=local` utilise `say` sur macOS : même voix qu'un téléphone, mais un
silence propre et un niveau constant, ce qui suffit à valider la chaîne.

La clé d'API se lit dans l'environnement et n'est jamais écrite, ni sur le disque ni
dans le manifeste.

**L'audio est un supplément, jamais une dépendance.** Le manifeste absent, un énoncé
sans clip, ou un refus de lecture par iOS hors geste utilisateur : chacun de ces cas
replie sur la synthèse embarquée. C'est aussi ce qui rend l'application audible pour
qui n'a aucune voix japonaise installée, cas où elle était muette.

Les noms de fichiers sont des empreintes du contenu, donc immuables : le cache
d'abord du §13 leur convient exactement, et un changement de voix produit de
nouveaux noms sans invalider les anciens.

Note : la règle « aucun son par défaut » d'une version antérieure est annulée. Elle
visait les sons de notification et de gamification, qui restent interdits. La lecture de
la réponse est de l'information, pas de la décoration.

---

## 12. Attention et assiduité

### 12.1 Contraintes anti-distraction

À traiter comme des règles de lint, pas des recommandations.

1. Aucune animation au-dessus de 150 ms, uniquement `opacity` et `transform`.
   `prefers-reduced-motion` respecté.
2. Aucun compteur de série de jours, nulle part. Une heatmap annuelle de l'activité est
   un compteur de série de jours.
3. Aucun badge, niveau, XP, ni barre de progression en pourcentage. Une barre qui
   recule quand les cartes ratées reviennent est démotivante et fausse ; le compteur
   `18 / 47` en `--ink-faint` suffit. Il est admis que ce compteur enfle en cours de
   séance quand des cartes reviennent : c'est honnête, cela reflète le travail restant.
4. Aucune couleur hors palette. Un deck n'a pas de couleur.
5. Aucun son hors audio de carte explicite.
6. Aucun élément qui change de taille au survol.
7. Pas de flip 3D à la révélation. Un fondu d'opacité de 140 ms. Une rotation répétée
   200 fois par session est coûteuse en attention.
8. Le texte japonais n'est jamais en faux gras : graisse réelle de la fonte ou rien, le
   faux gras détruit les caractères denses.

### 12.2 Ce qui porte l'utilisateur au troisième mois

La version 1 interdisait sans rien mettre à la place. Une spécification qui retire les
ressorts habituels doit dire ce qui les remplace, sinon ils repoussent ailleurs, ce qui
est arrivé.

Les trois leviers admis, tous non gamifiés :

- **Le choix de la charge du jour** (§10.2). Adapter la dose est ce qui évite la séance
  sautée, et une séance sautée est le début de l'abandon.
- **L'honnêteté des mécanismes.** Dire pourquoi il n'y a que 10 nouvelles cartes,
  pourquoi des révisions sont reportées, pourquoi l'apport est bridé. Un utilisateur qui
  comprend une limite l'accepte ; une limite muette ressemble à une panne.
- **Les échéances à venir** (§5). Savoir ce qui arrive demain est une raison de
  revenir, et ce n'est ni un score ni une série.

### 12.3 Décision ouverte : la couche de score

**Le code implémente ce que le §12.1 interdit** : points, multiplicateurs de combo,
compteurs de série et de record. Cette divergence n'est pas un bug, c'est un arbitrage
produit non tranché, et ce document ne peut pas le trancher seul. Les deux options
cohérentes :

- **Retirer la couche de score.** Aligne le code sur le §12.1. On perd le seul ressort
  de rétention court terme actuellement en place, et l'on s'appuie entièrement sur le
  §12.2.
- **Assumer la couche de score.** Il faut alors réécrire le §12.1 pour dire ce qui reste
  interdit et pourquoi, et non conserver une interdiction que le produit viole. Une
  règle violée et maintenue perd son autorité sur les huit autres.

Ce qui est déjà tranché, quelle que soit l'option : **la pénalité de « je ne sais pas »
est égale à celle d'une erreur** (§8.4). C'était le seul élément de la couche de score
activement nuisible à l'apprentissage.

---

## 13. Durabilité des données

La version 1 relevait « rien n'est persisté » comme un défaut du prototype et ne
spécifiait ni synchronisation, ni conflit, ni export. Pour une application dont toute la
valeur est un historique de plusieurs mois, c'est l'omission la plus grave par ses
conséquences.

**Trois niveaux, du plus local au plus distant.**

`localStorage` porte l'état complet : cartes, progression, journal quotidien,
déblocages, plan du jour, session en pause. Une session interrompue se reprend, y
compris après fermeture de l'onglet. Un changement de jour efface le plan et la session
en pause, pas la progression.

**Synchronisation** par compte, la clé étant l'identifiant d'authentification et rien
d'autre. Fusion **par carte**, la version la plus récemment modifiée gagne, ce qui
demande un `modifiedAt` par carte. Les charges utiles distantes sont **validées avant
application** : identifiant cohérent, compteurs finis et non négatifs, `goodReps` au
plus égal à `reps`. Une carte invalide est ignorée, pas appliquée partiellement.

Les déblocages fusionnent en **union**, jamais en remplacement : un palier franchi sur
un autre appareil ne doit pas disparaître parce que ce navigateur ne l'avait pas encore
vu.

**Export et import locaux**, au même format que la charge utile de synchronisation.
Deux raisons de ne pas inventer un second format : le chemin de validation est déjà
écrit et éprouvé, et un fichier récupéré côté serveur se relit tel quel. L'import
fusionne selon la même règle que la synchronisation, n'efface rien, et le dit.

**Invariant testable** : un aller-retour export puis import restitue l'état à
l'identique, cartes sœurs et déblocages compris.

---

## 14. Ce que le prototype fait mal et qu'il ne faut pas reproduire

Le prototype est une référence de comportement et de mise en page, pas un modèle
d'architecture.

- **Repeint tout le DOM à chaque `render()`.** Cela tue le focus et la position du
  curseur ; il y a des contournements manuels dans la recherche et dans le champ de
  réponse. Ces bricolages disparaissent gratuitement avec un rendu réconcilié. Ne pas
  les porter.
- **Table romaji maison.** Voir la liste de conformité du §9.1, qui dit précisément ce
  qu'une table doit couvrir. Une bibliothèque éprouvée comme `wanakana` reste
  préférable ; à défaut, la règle générale du §9.1 vaut mieux qu'une énumération.
- **Ordonnanceur jouet.** Remplacer par `ts-fsrs`, et respecter le contrat du §10.1.
- **Segments de phrase écrits à la main.** En production, tokeniser à l'import avec
  `@sglkc/kuromoji`, le `kuromoji.js` d'origine n'étant plus maintenu. Le dictionnaire
  pèse plusieurs mégaoctets : il se charge une fois et se met en cache, acceptable à
  l'import, jamais dans la boucle de révision.
- **Les mots du deck katakana sont des mots hiragana convertis** (すし rendu スシ). C'est
  artificiel, les vrais mots en katakana sont des emprunts. Cela marche pour driller le
  glyphe, mais un deck katakana sérieux mérite sa propre liste d'emprunts ; les noms
  propres jouent déjà ce rôle une fois débloqués. C'est aussi pourquoi le §9.1 compte :
  une vraie liste d'emprunts est pleine de ファ et de ディ.
- **Données Pokémon** dérivées d'un jeu issu de Bulbapedia. Les noms sont des marques de
  The Pokémon Company. Usage personnel, ne pas distribuer.
- **Bypass d'authentification en développement.** Toléré, mais conditionné au nom d'hôte
  local et neutralisant aussi la synchronisation, faute de jeton. Un bypass qui laisse la
  synchronisation tenter des envois remplit le journal d'erreurs.

---

## 15. Inventaire de composants

```
layout/     AppShell, BottomNav, PageHeader
session/    SessionScreen, CardFrame, ClozeCell, RubyText, GlossSlot,
            ContextBlock, AnswerBlock, KanaInput, GradeBar, AtomRow,
            UndoLink, SessionSummary, SetAsideNotice
study/      StudyLauncher, ExposureCounter, LoadPicker, DueOutlook
collection/ LevelList, DeckRow, DeckDetail, CardBrowser, CardRow,
            DirectionProgress, FilterChips
editor/     CardEditor, FieldInput, PrerequisiteList, LivePreview
settings/   ToggleRow, SyncPanel, BackupPanel, VoiceStatus
primitives/ Button, IconButton, Select, Toggle, Rule, Square, Stat, EmptyState
lib/        kana.ts (tables et normalisation, §9.1), romaji.ts, atoms.ts,
            knowledge.ts (les quatre états, §6.1), scheduler.ts (ts-fsrs, §10.1),
            session.ts (limites et remise en file, §8.5, §10.3), tts.ts, judge.ts,
            backup.ts (§13)
```

`Square` est le primitif signature : conteneur à ratio 1:1, filet `--grid`, tailles
`sm | md | lg`. Il sert au compteur d'accueil, à la cellule de phrase à trous, aux
vignettes de stats. Sa réutilisation fait l'unité visuelle du produit.

---

## 16. Clavier et gestes

`Entrée` valide, puis `Entrée` avance. `Entrée` sur champ vide vaut « Je ne sais pas ».
`Échap` quitte, avec la même confirmation que la croix (§8.3). `E` édite la carte
courante. `/` recherche dans le navigateur de cartes. **`1` et `2`** notent quand deux
boutons sont proposés, à savoir sur un presque, en mode détaillé, ou en auto-évaluation.
La version 1 annonçait `1` à `4` tout en interdisant plus de deux boutons : il n'y a que
deux touches parce qu'il n'y a que deux boutons.

Une seule touche fait tourner toute la session. C'est le critère : si la main doit
quitter la rangée de repos, l'ergonomie est ratée.

Mobile : `enterkeyhint="done"`, la touche du clavier système joue les deux rôles. Tap
n'importe où sur le corps pour avancer.

**Pas de retour haptique.** La version 1 le prescrivait « léger au résultat,
désactivable ». `navigator.vibrate` n'existe pas sur iOS Safari, qui est la plateforme
cible de ce produit : la prescription était donc intenable là où elle comptait, et
tenable seulement là où elle importe le moins. Une spécification ne promet pas ce que
la cible ne peut pas rendre. Si le web finit par exposer un retour haptique sur iOS,
cette décision se rouvre.

Clavier simulé : le réglage existe parce que la plupart des apprenants n'ont pas d'IME
japonais. Le pavé de kana propose le gojūon plus une rangée de modificateurs, ゛ et ゜
agissant sur le dernier caractère saisi. Sur les faces où la réponse est un kana unique,
des pastilles de choix sont proposées ; **elles ne le sont jamais sur un mot entier**,
où dix propositions transformeraient un exercice d'écriture en question à choix
multiples, ce qui n'est pas la même compétence.

---

## 17. Ordre d'implémentation

1. Tokens, fontes, `Square`, `RubyText`. Vérifier que le ruby ne fait rien bouger.
2. `lib/kana.ts` et `lib/judge.ts` avec leur suite de tests : chasse pleine et demie,
   pliage katakana, petits kana, allongements, **sons étrangers et liste de conformité
   du §9.1**, okurigana, lectures multiples, bascule kana et romaji.
3. `lib/knowledge.ts`, les quatre états du §6.1, avec les tests qui distinguent lisible
   de maîtrisé. Cette étape avant toute porte, sinon le vocabulaire se dilue.
4. `CardFrame` et l'écran de session complet en boucle, avec un ordonnanceur bouchonné
   et des données factices. **Le tester sur 100 cartes réelles avant d'écrire quoi que
   ce soit d'autre.**
5. `lib/atoms.ts` et la règle i+1, avec un test qui vérifie la courbe de déverrouillage
   du deck de noms propres.
6. `ts-fsrs`, **et immédiatement le test d'intervalles croissants et le test de
   transmission de `last_review`** (§10.1). Ne pas passer à l'étape suivante sans eux :
   c'est l'étape où un défaut reste invisible le plus longtemps.
7. Limites de séance et remise en file (§8.5, §10.3), avec un test qu'une session
   entièrement ratée se termine.
8. Persistance, puis export et import (§13), avec le test d'aller-retour.
9. Collection, détail de deck, éditeur.
10. Pipeline d'import : tokenisation, calcul des atomes, liaison item et contextes,
    **validation de complétude du §6.3**.

Si la typographie et l'immobilité de la carte ne sont pas parfaites à l'étape 4, aucune
autre partie du produit ne rattrapera le défaut. Et si l'étape 6 n'est pas testée, tout
le reste fonctionnera en apparence pendant des mois.

---

## 18. Invariants testables

Récapitulatif de ce qu'une suite de tests doit garantir. Chacun correspond à un défaut
réellement observé, pas à une précaution théorique.

| Invariant | § |
|---|---|
| Les intervalles croissent au fil des révisions réussies | 10.1 |
| Le planificateur reçoit la date de la révision précédente | 10.1 |
| Une rechute retire le statut de maîtrise | 6.1 |
| La lisibilité ne dépend que de la carte de reconnaissance | 6.1 |
| Un item est maîtrisé seulement dans les deux directions | 6.2 |
| Un nom propre n'a pas de carte de production | 6.2 |
| Une session ne présente jamais les deux directions d'un même item | 8.1 |
| Une porte franchie ne se referme pas après une rechute | 6.1 |
| Une porte s'ouvre sur la lisibilité, pas sur la maîtrise | 7 |
| Les révisions dues sont plafonnées par la charge du jour | 10.3 |
| Les plus en retard passent en premier | 10.3 |
| Une précision effondrée bride les nouveautés sans les tarir | 10.3 |
| Un échantillon trop mince ne déclenche aucun bridage | 10.3 |
| Une session entièrement ratée se termine | 8.5 |
| `newPerDay` livre le nombre qu'il annonce | 10.2 |
| Le plan quotidien ne se regonfle pas dans la journée | 10.4 |
| Aucune lecture romaji ne contient de caractère non latin | 9.1 |
| Les sons étrangers se tapent en romaji naturel | 9.1 |
| Aucun kanji isolé n'est envoyé à la synthèse vocale | 11 |
| Le débit suit la longueur de l'énoncé | 11 |
| Trois contextes minimum par item de vocabulaire | 10.4 |
| Un contexte désigne un segment cible valide | 6.3 |
| L'aller-retour export et import restitue l'état à l'identique | 13 |
| La fusion distante garde le plus récent et ignore l'invalide | 13 |
| La synchronisation utilise exclusivement l'identifiant du compte | 13 |
| Une session en pause se sérialise et se restaure | 13 |
| Un changement de jour efface le plan et la session, pas la progression | 13 |
| Un déblocage de nom propre survit à une rechute de son prérequis | 6.1 |
| Les données des decks respectent tous les invariants de forme | 6.3 |

Vingt-sept tests couvrent ces vingt-huit lignes, certaines partageant un même test de
validation des données. Un invariant listé ici sans test correspondant est un défaut du
document, pas une intention : la liste ne doit jamais promettre une couverture qui
n'existe pas.
