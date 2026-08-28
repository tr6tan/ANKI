"use strict";
const BUILD_VERSION = "20260824-1631";
const PK =
  "1 フシギダネ Bulbasaur Grass/Poison,2 フシギソウ Ivysaur Grass/Poison,3 フシギバナ Venusaur Grass/Poison,4 ヒトカゲ Charmander Fire,5 リザード Charmeleon Fire,6 リザードン Charizard Fire/Flying,7 ゼニガメ Squirtle Water,8 カメール Wartortle Water,9 カメックス Blastoise Water,10 キャタピー Caterpie Bug,11 トランセル Metapod Bug,12 バタフリー Butterfree Bug/Flying,13 ビードル Weedle Bug/Poison,14 コクーン Kakuna Bug/Poison,15 スピアー Beedrill Bug/Poison,16 ポッポ Pidgey Normal/Flying,17 ピジョン Pidgeotto Normal/Flying,18 ピジョット Pidgeot Normal/Flying,19 コラッタ Rattata Normal,20 ラッタ Raticate Normal,21 オニスズメ Spearow Normal/Flying,22 オニドリル Fearow Normal/Flying,23 アーボ Ekans Poison,24 アーボック Arbok Poison,25 ピカチュウ Pikachu Electric,26 ライチュウ Raichu Electric,27 サンド Sandshrew Ground,28 サンドパン Sandslash Ground,29 ニドラン♀ Nidoran♀ Poison,30 ニドリーナ Nidorina Poison,31 ニドクイン Nidoqueen Poison/Ground,32 ニドラン♂ Nidoran♂ Poison,33 ニドリーノ Nidorino Poison,34 ニドキング Nidoking Poison/Ground,35 ピッピ Clefairy Fairy,36 ピクシー Clefable Fairy,37 ロコン Vulpix Fire,38 キュウコン Ninetales Fire,39 プリン Jigglypuff Normal/Fairy,40 プクリン Wigglytuff Normal/Fairy,41 ズバット Zubat Poison/Flying,42 ゴルバット Golbat Poison/Flying,43 ナゾノクサ Oddish Grass/Poison,44 クサイハナ Gloom Grass/Poison,45 ラフレシア Vileplume Grass/Poison,46 パラス Paras Bug/Grass,47 パラセクト Parasect Bug/Grass,48 コンパン Venonat Bug/Poison,49 モルフォン Venomoth Bug/Poison,50 ディグダ Diglett Ground,51 ダグトリオ Dugtrio Ground,52 ニャース Meowth Normal,53 ペルシアン Persian Normal,54 コダック Psyduck Water,55 ゴルダック Golduck Water,56 マンキー Mankey Fighting,57 オコリザル Primeape Fighting,58 ガーディ Growlithe Fire,59 ウインディ Arcanine Fire,60 ニョロモ Poliwag Water,61 ニョロゾ Poliwhirl Water,62 ニョロボン Poliwrath Water/Fighting,63 ケーシィ Abra Psychic,64 ユンゲラー Kadabra Psychic,65 フーディン Alakazam Psychic,66 ワンリキー Machop Fighting,67 ゴーリキー Machoke Fighting,68 カイリキー Machamp Fighting,69 マダツボミ Bellsprout Grass/Poison,70 ウツドン Weepinbell Grass/Poison,71 ウツボット Victreebel Grass/Poison,72 メノクラゲ Tentacool Water/Poison,73 ドククラゲ Tentacruel Water/Poison,74 イシツブテ Geodude Rock/Ground,75 ゴローン Graveler Rock/Ground,76 ゴローニャ Golem Rock/Ground,77 ポニータ Ponyta Fire,78 ギャロップ Rapidash Fire,79 ヤドン Slowpoke Water/Psychic,80 ヤドラン Slowbro Water/Psychic,81 コイル Magnemite Electric/Steel,82 レアコイル Magneton Electric/Steel,83 カモネギ Farfetch'd Normal/Flying,84 ドードー Doduo Normal/Flying,85 ドードリオ Dodrio Normal/Flying,86 パウワウ Seel Water,87 ジュゴン Dewgong Water/Ice,88 ベトベター Grimer Poison,89 ベトベトン Muk Poison,90 シェルダー Shellder Water,91 パルシェン Cloyster Water/Ice,92 ゴース Gastly Ghost/Poison,93 ゴースト Haunter Ghost/Poison,94 ゲンガー Gengar Ghost/Poison,95 イワーク Onix Rock/Ground,96 スリープ Drowzee Psychic,97 スリーパー Hypno Psychic,98 クラブ Krabby Water,99 キングラー Kingler Water,100 ビリリダマ Voltorb Electric,101 マルマイン Electrode Electric,102 タマタマ Exeggcute Grass/Psychic,103 ナッシー Exeggutor Grass/Psychic,104 カラカラ Cubone Ground,105 ガラガラ Marowak Ground,106 サワムラー Hitmonlee Fighting,107 エビワラー Hitmonchan Fighting,108 ベロリンガ Lickitung Normal,109 ドガース Koffing Poison,110 マタドガス Weezing Poison,111 サイホーン Rhyhorn Ground/Rock,112 サイドン Rhydon Ground/Rock,113 ラッキー Chansey Normal,114 モンジャラ Tangela Grass,115 ガルーラ Kangaskhan Normal,116 タッツー Horsea Water,117 シードラ Seadra Water,118 トサキント Goldeen Water,119 アズマオウ Seaking Water,120 ヒトデマン Staryu Water,121 スターミー Starmie Water/Psychic,122 バリヤード Mr. Mime Psychic/Fairy,123 ストライク Scyther Bug/Flying,124 ルージュラ Jynx Ice/Psychic,125 エレブー Electabuzz Electric,126 ブーバー Magmar Fire,127 カイロス Pinsir Bug,128 ケンタロス Tauros Normal,129 コイキング Magikarp Water,130 ギャラドス Gyarados Water/Flying,131 ラプラス Lapras Water/Ice,132 メタモン Ditto Normal,133 イーブイ Eevee Normal,134 シャワーズ Vaporeon Water,135 サンダース Jolteon Electric,136 ブースター Flareon Fire,137 ポリゴン Porygon Normal,138 オムナイト Omanyte Rock/Water,139 オムスター Omastar Rock/Water,140 カブト Kabuto Rock/Water,141 カブトプス Kabutops Rock/Water,142 プテラ Aerodactyl Rock/Flying,143 カビゴン Snorlax Normal,144 フリーザー Articuno Ice/Flying,145 サンダー Zapdos Electric/Flying,146 ファイヤー Moltres Fire/Flying,147 ミニリュウ Dratini Dragon,148 ハクリュー Dragonair Dragon,149 カイリュー Dragonite Dragon/Flying,150 ミュウツー Mewtwo Psychic,151 ミュウ Mew Psychic";
const KROWS = [
  "あa いi うu えe おo かka きki くku けke こko さsa しshi すsu せse そso たta ちchi つtsu てte とto なna にni ぬnu ねne のno はha ひhi ふfu へhe ほho まma みmi むmu めme もmo やya ゆyu よyo らra りri るru れre ろro わwa をwo んn",
  "がga ぎgi ぐgu げge ごgo ざza じji ずzu ぜze ぞzo だda ぢji づzu でde どdo ばba びbi ぶbu べbe ぼbo ぱpa ぴpi ぷpu ぺpe ぽpo",
  "きゃkya きゅkyu きょkyo しゃsha しゅshu しょsho ちゃcha ちゅchu ちょcho にゃnya にゅnyu にょnyo ひゃhya ひゅhyu ひょhyo みゃmya みゅmyu みょmyo りゃrya りゅryu りょryo ぎゃgya ぎゅgyu ぎょgyo じゃja じゅju じょjo びゃbya びゅbyu びょbyo ぴゃpya ぴゅpyu ぴょpyo",
];
const KWORDS =
  "あお blue|いえ house|うえ above|あう to meet|あい love|おい nephew|あか red|かお face|いか squid|かう to buy|えき station|あき autumn|いく to go|きく to listen|かき persimmon|こえ voice|ここ here|くうき air|あさ morning|いす chair|すし sushi|せかい world|そこ over there|あし leg|うし cow|おかし sweets|きせつ season|した below|つき moon|て hand|とし year|くつ shoes|あつい hot|いち one|たかい expensive|ちかてつ subway|なつ summer|にく meat|ねこ cat|いぬ dog|なに what|きのこ mushroom|なか inside|はな flower|ひと person|ふね boat|へや room|ほし star|はし bridge|ふゆ winter|ひふ skin|まち town|みみ ear|むし insect|め eye|もり forest|みせ shop|まつ to wait|やま mountain|ゆき snow|よる night|やすい cheap|おゆ hot water|そら sky|とり bird|はる spring|くるま car|これ this|わたし I|わかい young|うみ sea|ほん book|にほん Japan|みかん mandarin|しんぶん newspaper|さくら cherry blossom|たまご egg|かぎ key|めがね glasses|かぞく family|みず water|ちず map|かぜ wind|ぞう elephant|だいがく university|でんき electricity|どこ where|まど window|たべる to eat|ともだち friend|ぶんか culture|べんり convenient|ぼうし hat|かんぱい cheers|えんぴつ pencil|さんぽ a walk|ばんごはん dinner|きゃく guest|きょう today|しゃしん photo|しゅみ hobby|ちゃいろ brown|じゅぎょう class|りょこう travel|びょうき illness|としょかん library";
const KANJI =
  "日 sun, day|月 moon, month|火 fire|水 water|木 tree, wood|金 gold, money|土 earth, soil|山 mountain|川 river|田 rice field|人 person|口 mouth|目 eye|耳 ear|手 hand|足 foot, leg|力 power|男 man|女 woman|子 child|大 big|小 small|上 above, up|下 below, down|中 middle, inside|右 right|左 left|前 front, before|後 behind, after|年 year|時 hour, time|分 minute, part|見 to see|聞 to hear, to ask|行 to go|来 to come|食 to eat|飲 to drink|車 car|電 electricity|気 spirit, energy|本 book, origin|天 heaven|空 sky, empty|雨 rain|先 ahead, previous|生 life, birth|学 to study|校 school|毎 every|一 one|二 two|三 three|四 four|五 five|六 six|七 seven|八 eight|九 nine|十 ten|百 hundred|千 thousand|万 ten thousand|円 yen|何 what|名 name|白 white|半 half|入 to enter|出 to exit|話 to talk|読 to read|書 to write|語 language, word|新 new|古 old|今 now|自 self|文 sentence, text|言 to say|立 to stand";
const COMP =
  "日本 にほん Japan|大人 おとな adult|火山 かざん volcano|学校 がっこう school|先生 せんせい teacher|大学 だいがく university|電車 でんしゃ train|天気 てんき weather|空気 くうき air|毎日 まいにち every day|毎年 まいとし,まいねん every year|毎月 まいつき,まいげつ every month|人口 じんこう population|中学 ちゅうがく middle school|本日 ほんじつ today (formal)|雨天 うてん rainy weather|見学 けんがく study visit|来年 らいねん next year|来月 らいげつ next month|先月 せんげつ last month|上下 じょうげ up and down|左右 さゆう left and right|前後 ぜんご before and after|水力 すいりょく water power|電力 でんりょく electric power|気力 きりょく willpower|手足 てあし hands and feet|学生 がくせい student|月見 つきみ moon viewing|女子 じょし girl|男子 だんし boy|山口 やまぐち Yamaguchi|川口 かわぐち Kawaguchi|小川 おがわ small stream|田中 たなか Tanaka|生年月日 せいねんがっぴ date of birth|小学校 しょうがっこう elementary school|電気 でんき electricity";

/* ===================== kana <-> romaji ===================== */
const KANA = {
  kya: "きゃ",
  kyu: "きゅ",
  kyo: "きょ",
  gya: "ぎゃ",
  gyu: "ぎゅ",
  gyo: "ぎょ",
  sha: "しゃ",
  shu: "しゅ",
  sho: "しょ",
  sya: "しゃ",
  syu: "しゅ",
  syo: "しょ",
  ja: "じゃ",
  ju: "じゅ",
  jo: "じょ",
  jya: "じゃ",
  jyu: "じゅ",
  jyo: "じょ",
  zya: "じゃ",
  zyu: "じゅ",
  zyo: "じょ",
  cha: "ちゃ",
  chu: "ちゅ",
  cho: "ちょ",
  tya: "ちゃ",
  tyu: "ちゅ",
  tyo: "ちょ",
  nya: "にゃ",
  nyu: "にゅ",
  nyo: "にょ",
  hya: "ひゃ",
  hyu: "ひゅ",
  hyo: "ひょ",
  bya: "びゃ",
  byu: "びゅ",
  byo: "びょ",
  pya: "ぴゃ",
  pyu: "ぴゅ",
  pyo: "ぴょ",
  mya: "みゃ",
  myu: "みゅ",
  myo: "みょ",
  rya: "りゃ",
  ryu: "りゅ",
  ryo: "りょ",
  shi: "し",
  chi: "ち",
  tsu: "つ",
  a: "あ",
  i: "い",
  u: "う",
  e: "え",
  o: "お",
  ka: "か",
  ki: "き",
  ku: "く",
  ke: "け",
  ko: "こ",
  ga: "が",
  gi: "ぎ",
  gu: "ぐ",
  ge: "げ",
  go: "ご",
  sa: "さ",
  si: "し",
  su: "す",
  se: "せ",
  so: "そ",
  za: "ざ",
  ji: "じ",
  zi: "じ",
  zu: "ず",
  ze: "ぜ",
  zo: "ぞ",
  ta: "た",
  ti: "ち",
  tu: "つ",
  te: "て",
  to: "と",
  da: "だ",
  di: "ぢ",
  du: "づ",
  de: "で",
  do: "ど",
  na: "な",
  ni: "に",
  nu: "ぬ",
  ne: "ね",
  no: "の",
  ha: "は",
  hi: "ひ",
  fu: "ふ",
  hu: "ふ",
  he: "へ",
  ho: "ほ",
  ba: "ば",
  bi: "び",
  bu: "ぶ",
  be: "べ",
  bo: "ぼ",
  pa: "ぱ",
  pi: "ぴ",
  pu: "ぷ",
  pe: "ぺ",
  po: "ぽ",
  ma: "ま",
  mi: "み",
  mu: "む",
  me: "め",
  mo: "も",
  ya: "や",
  yu: "ゆ",
  yo: "よ",
  ra: "ら",
  ri: "り",
  ru: "る",
  re: "れ",
  ro: "ろ",
  wa: "わ",
  wo: "を",
  /* Sons étrangers, indispensables aux emprunts et aux noms de Pokémon. On n'ajoute
     que des clés libres : « ti » et « di » restent ち et ぢ comme sur un IME, et les
     graphies てぃ でぃ s'obtiennent par thi et dhi. Taper « di » pour ディ reste
     accepté au jugement, qui compare aussi les romaji. */
  fa: "ふぁ",
  fi: "ふぃ",
  fe: "ふぇ",
  fo: "ふぉ",
  she: "しぇ",
  je: "じぇ",
  che: "ちぇ",
  thi: "てぃ",
  dhi: "でぃ",
  twu: "とぅ",
  dwu: "どぅ",
  wi: "うぃ",
  we: "うぇ",
  vu: "ゔ",
  va: "ゔぁ",
  vi: "ゔぃ",
  ve: "ゔぇ",
  vo: "ゔぉ",
};
const toKata = (s) =>
  s.replace(/[\u3041-\u3096]/g, (c) =>
    String.fromCharCode(c.charCodeAt(0) + 0x60),
  );
const toHira = (s) =>
  s.replace(/[\u30A1-\u30F6]/g, (c) =>
    String.fromCharCode(c.charCodeAt(0) - 0x60),
  );
// Dakuten / handakuten modifier maps (hiragana + katakana)
const VOICED_MAP = (() => {
  const m = {};
  [
    ["か", "が"],
    ["き", "ぎ"],
    ["く", "ぐ"],
    ["け", "げ"],
    ["こ", "ご"],
    ["さ", "ざ"],
    ["し", "じ"],
    ["す", "ず"],
    ["せ", "ぜ"],
    ["そ", "ぞ"],
    ["た", "だ"],
    ["ち", "ぢ"],
    ["つ", "づ"],
    ["て", "で"],
    ["と", "ど"],
    ["は", "ば"],
    ["ひ", "び"],
    ["ふ", "ぶ"],
    ["へ", "べ"],
    ["ほ", "ぼ"],
    ["う", "ゔ"],
  ].forEach(([h, v]) => {
    m[h] = v;
    m[toKata(h)] = toKata(v);
  });
  return m;
})();
const SEMIVOICED_MAP = (() => {
  const m = {};
  [
    ["は", "ぱ"],
    ["ひ", "ぴ"],
    ["ふ", "ぷ"],
    ["へ", "ぺ"],
    ["ほ", "ぽ"],
  ].forEach(([h, v]) => {
    m[h] = v;
    m[toKata(h)] = toKata(v);
  });
  return m;
})();
function toKana(s) {
  s = (s || "").toLowerCase();
  let o = "",
    i = 0;
  while (i < s.length) {
    const c = s[i];
    if (c === "-") {
      o += "ー";
      i++;
      continue;
    }
    if (c === "n" && s[i + 1] === "n") {
      o += "ん";
      i += 2;
      continue;
    }
    if (c === "n" && (i + 1 >= s.length || !"aiueoy".includes(s[i + 1]))) {
      o += "ん";
      i++;
      continue;
    }
    if (c === s[i + 1] && !"aiueon".includes(c) && /[a-z]/.test(c)) {
      o += "っ";
      i++;
      continue;
    }
    let m = null;
    for (let L = 3; L >= 1; L--) {
      const t = s.substr(i, L);
      if (KANA[t]) {
        m = KANA[t];
        i += L;
        break;
      }
    }
    if (m) o += m;
    else {
      o += c;
      i++;
    }
  }
  return o;
}
const VOW = {
  ゃ: "あ",
  ゅ: "う",
  ょ: "お",
  ぁ: "あ",
  ぃ: "い",
  ぅ: "う",
  ぇ: "え",
  ぉ: "お",
};
for (const [r, k] of Object.entries(KANA)) {
  const v = r[r.length - 1];
  if ("aiueo".includes(v) && !VOW[k.slice(-1)])
    VOW[k.slice(-1)] = { a: "あ", i: "い", u: "う", e: "え", o: "お" }[v];
}
const expandLong = (s) => {
  let o = "";
  for (const c of s) {
    if (c === "ー" && o) o += VOW[o.slice(-1)] || "";
    else o += c;
  }
  return o;
};
/* Les signes ♀ et ♂ des Nidoran ne se tapent sur aucun clavier de l'application :
   on les retire de la comparaison pour que la carte soit répondable. Les deux
   Nidoran se normalisent alors pareil, ce qui est voulu : l'énoncé anglais les
   distingue, la graphie attendue non. */
const stripDeco = (s) => String(s).replace(/[♀♂]/g, "");
const normKana = (s) =>
  expandLong(
    toHira(stripDeco(String(s).normalize("NFKC")).trim().replace(/\s+/g, "")),
  );

/* romaji canonique construit depuis KROWS (hepburn) */
const K2R = {},
  DIGRAPH = new Set();
KROWS.join(" ")
  .split(" ")
  .filter(Boolean)
  .forEach((tok) => {
    const m = tok.match(/^([\u3041-\u3096]+)([a-z]+)$/);
    if (!m) return;
    K2R[m[1]] = m[2];
    K2R[toKata(m[1])] = m[2];
    /* ゔ / ヴ n'appartient pas au gojūon, donc KROWS ne le fournit pas ; sans lui il
       fuirait tel quel dans la sortie romaji, comme le faisaient ファ et ディ. */
    K2R["ゔ"] = "vu";
    K2R["ヴ"] = "vu";
    if (m[1].length === 2) {
      DIGRAPH.add(m[1]);
      DIGRAPH.add(toKata(m[1]));
    }
  });
function toRomaji(w) {
  let o = "",
    i = 0;
  w = String(w);
  while (i < w.length) {
    const c = w[i];
    if (c === "っ" || c === "ッ") {
      const nx = K2R[w.substr(i + 1, 2)] || K2R[w[i + 1]] || "";
      o += nx[0] || "";
      i++;
      continue;
    }
    if (c === "ー") {
      o += o.slice(-1);
      i++;
      continue;
    }
    const two = w.substr(i, 2);
    if (K2R[two]) {
      o += K2R[two];
      i += 2;
      continue;
    }
    /* Sons étrangers du katakana : consonne suivie d'une petite voyelle. K2R est
       construit depuis le gojūon, donc ファ ディ シェ フォ n'y figuraient pas et le
       caractère fuyait tel quel dans la sortie. Onze cartes Pokémon affichaient
       ainsi « fuァiyaa » comme lecture, et refusaient la frappe « faiyaa ».
       La règle générale : on retire la voyelle de la consonne et on ajoute celle du
       petit kana. フ(fu)+ァ donne fa, テ(te)+ィ donne ti, シ(shi)+ェ donne she. */
    const small = SMALL_VOWEL[w[i + 1]];
    const baseRom = K2R[c];
    if (small && baseRom) {
      /* ィ derrière un romaji déjà en -i allonge la voyelle : ケーシィ donne
         keeshii, et non keeshi. */
      o +=
        small === "i" && baseRom.endsWith("i")
          ? baseRom + "i"
          : baseRom.replace(/[aiueo]$/, "") + small;
      i += 2;
      continue;
    }
    if (K2R[c]) {
      o += K2R[c];
      i++;
      continue;
    }
    /* Les signes ♀ et ♂ des noms de Nidoran ne se romanisent pas et ne figurent sur
       aucun clavier de l'application : on les laisse tomber ici, et normKana les
       retire de la comparaison, de sorte que « nidoran » soit accepté. */
    if (c === "♀" || c === "♂") {
      i++;
      continue;
    }
    o += c;
    i++;
  }
  return o;
}
const RVAR = [
  ["sha", "sya"],
  ["shu", "syu"],
  ["sho", "syo"],
  ["shi", "si"],
  ["cha", "tya"],
  ["chu", "tyu"],
  ["cho", "tyo"],
  ["chi", "ti"],
  ["tsu", "tu"],
  ["jya", "zya"],
  ["jyu", "zyu"],
  ["jyo", "zyo"],
  ["ja", "zya"],
  ["ju", "zyu"],
  ["jo", "zyo"],
  ["ji", "zi"],
  ["fu", "hu"],
];
function normRom(s) {
  let v = String(s)
    .normalize("NFKC")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "")
    .replace(/[āâ]/g, "a")
    .replace(/[īî]/g, "i")
    .replace(/[ūû]/g, "u")
    .replace(/[ēê]/g, "e")
    .replace(/[ōô]/g, "o");
  v = stripDeco(v);
  for (const [a, b] of RVAR) v = v.split(a).join(b);
  /* ii rejoint uu et oo : la longueur vocalique est phonémique, mais ce pipeline a
     déjà choisi la clémence pour les deux autres. Sans quoi ケーシィ n'accepterait
     que « keeshii » et refuserait « keeshi ». */
  return v
    .replace(/nn/g, "n")
    .replace(/ou/g, "o")
    .replace(/uu/g, "u")
    .replace(/oo/g, "o")
    .replace(/ii/g, "i");
}

/* Petites voyelles, hiragana et katakana. ゃゅょ en sont exclus : ils forment des
   digrammes déjà présents dans K2R via KROWS. */
const SMALL_VOWEL = (() => {
  const m = {};
  for (const [k, v] of [
    ["ぁ", "a"],
    ["ぃ", "i"],
    ["ぅ", "u"],
    ["ぇ", "e"],
    ["ぉ", "o"],
  ]) {
    m[k] = v;
    m[toKata(k)] = v;
  }
  return m;
})();

const PUNCT = { "。": ".", "、": ",", "！": "!", "？": "?" };
/* les particules は を へ se romanisent wa / o / e : un segment sans lecture
   propre et réduit à l'un de ces kana est une particule */
const PART = { は: "wa", を: "o", へ: "e" };
function segRomaji(segs) {
  let o = "";
  for (const g of segs) {
    const t = g.r || g.t;
    if (PUNCT[t]) {
      o += PUNCT[t];
      continue;
    }
    const r = !g.r && PART[t] ? PART[t] : toRomaji(t);
    o += (o && !/[.,!?]$/.test(o) ? " " : o ? " " : "") + r;
  }
  return o.trim();
}
function segKana(segs) {
  return segs.map((g) => g.r || g.t).join("");
}

/* découpage en unités kana, en ignorant っ et ー qui ne sont pas des items */
function kanaUnits(w) {
  const out = [];
  let i = 0;
  while (i < w.length) {
    const two = w.substr(i, 2);
    if (DIGRAPH.has(two)) {
      out.push(two);
      i += 2;
      continue;
    }
    const c = w[i];
    if (c === "っ" || c === "ッ" || c === "ー") {
      i++;
      continue;
    }
    out.push(c);
    i++;
  }
  return out;
}

function lev(a, b) {
  const d = [];
  for (let i = 0; i <= a.length; i++) d[i] = [i];
  for (let j = 0; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      d[i][j] = Math.min(
        d[i - 1][j] + 1,
        d[i][j - 1] + 1,
        d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
  return d[a.length][b.length];
}
const SMALL = "っゃゅょぁぃぅぇぉ";
const hasKana = (s) => /[\u3040-\u30ff]/.test(s);
/* la réponse est acceptée en kana OU en romaji, quel que soit l'affichage du champ :
   le mode ne décide que de ce qui s'écrit à l'écran, jamais de ce qui est juste. */
function judge(input, accepted, mode) {
  const raw = String(input || "");
  if (!raw.trim()) return { r: "ko", v: "" };
  const k = normKana(toKana(raw)),
    r = normRom(raw);
  const shown = mode === "romaji" ? r : k;
  for (const a of accepted) {
    if (k === normKana(a)) return { r: "ok", v: shown };
    if (r === normRom(hasKana(a) ? toRomaji(a) : a))
      return { r: "ok", v: shown };
  }
  const t =
    mode === "romaji"
      ? normRom(hasKana(accepted[0]) ? toRomaji(accepted[0]) : accepted[0])
      : normKana(accepted[0]);
  const small =
    mode !== "romaji" &&
    [...t].some((c) => SMALL.includes(c) && !shown.includes(c));
  if (lev(shown, t) === 1 && shown.length >= 4 && !small)
    return { r: "near", v: shown };
  return { r: "ko", v: shown };
}

/* ===================== voix ===================== */
const tts = { ok: "speechSynthesis" in window, voice: null };
/* icône haut-parleur en ligne, plus sobre qu'une note de musique */
const speakerIcon = (size) =>
  `<svg width="${size || 16}" height="${size || 16}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M18.36 5.64a9 9 0 0 1 0 12.72"></path></svg>`;
const muteIcon = (size) =>
  `<svg width="${size || 16}" height="${size || 16}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;
function pickVoice() {
  if (!tts.ok) return;
  const voices = speechSynthesis.getVoices().filter((v) => /^ja/i.test(v.lang));
  if (!voices.length) {
    tts.voice = null;
    return;
  }
  /* La qualité perçue vient d'abord du modèle de voix, pas du débit. Sur iOS et
     macOS, « Kyoko (Enhanced) » et les voix neuronales sont d'un autre ordre que la
     voix compacte par défaut : l'écart s'entend surtout sur les more isolées, où la
     voix compacte diphtongue les voyelles longues. On pondère donc la qualité du
     modèle au-dessus de tout le reste, au lieu de la placer derrière la
     reconnaissance du nom. */
  const score = (v) => {
    const n = String(v.name || "").toLowerCase();
    let s = 0;
    if (/premium|enhanced|neural|natural/.test(n)) s += 20;
    if (v.localService) s += 8;
    if (/^ja-jp$/i.test(String(v.lang || "").replace("_", "-"))) s += 4;
    if (/google|siri|kyoko|otoya|hattori|haruka|japanese|nihongo|日本語/.test(n))
      s += 6;
    return s;
  };
  voices.sort((a, b) => score(b) - score(a));
  tts.voice = voices[0] || null;
  /* Retenu pour l'écran des réglages : proposer d'installer une meilleure voix n'a
     de sens que si celle qui joue n'en est pas déjà une. */
  tts.enhanced = tts.voice
    ? /premium|enhanced|neural|natural/i.test(tts.voice.name || "")
    : false;
}
if (tts.ok) {
  pickVoice();
  speechSynthesis.onvoiceschanged = pickVoice;
}
function prepareSpeechText(text) {
  const raw = String(text || "").trim();
  if (!raw) return "";
  const hasJa = /[\u3040-\u30ff\u3400-\u9fff]/.test(raw);
  const looksRomaji = /^[a-zA-Z\s'\-.,/]+$/.test(raw);
  const base = !hasJa && looksRomaji ? toKana(raw) : raw;
  return base.replace(/\s*\/\s*/g, "、").replace(/·/g, "、");
}
/* Un énoncé d'une more dure ~300 ms, et les moteurs TTS rognent l'attaque le
   temps d'ouvrir le flux audio : sur あ, c'est un tiers du signal qui saute. On
   encadre donc l'énoncé de pauses, pour que la troncature tombe sur le silence
   plutôt que sur le premier phonème. Ralentir ne serait pas une solution :
   descendre le débit sous 0.6 n'allonge pas la voyelle, ça déforme les
   formants ; et comme la longueur vocalique est phonémique en japonais
   (おばさん / おばあさん), étirer une more apprendrait une durée fausse. */
function paddedSpeech(text) {
  /* Le silence encadrant reste : une more dure environ 300 ms et les moteurs rognent
     l'attaque le temps d'ouvrir le flux, si bien que sur あ c'est un tiers du signal
     qui saute. La pause fait tomber la troncature sur le silence.

     La répétition automatique des énoncés courts, elle, est retirée. Elle doublait
     l'information acoustique, ce qui était juste sur le papier, mais elle se subit
     des centaines de fois par jour et devient exaspérante : une gêne répétée coûte
     plus qu'un gain marginal de netteté. Réécouter reste possible d'un tap, ce qui
     met la répétition au choix de l'utilisateur au lieu de la lui imposer. */
  return "、" + text + "、";
}
/* Débit choisi selon la longueur de l'énoncé, et non fixé au hasard par appel.
   Une more isolée a besoin d'air pour que l'attaque et la durée s'entendent ; une
   phrase, au contraire, perd sa prosodie dès qu'on la ralentit, parce que
   l'intonation et l'accent de hauteur du japonais se lisent sur le débit naturel.
   Trois paliers valent mieux que les 0.7, 0.75 et 0.9 dispersés dans le code. */
const SPEECH_RATE = { mora: 0.72, mot: 0.86, phrase: 0.98 };
function rateFor(text) {
  const n = [...String(text)].filter((c) => !"、。ー・ 　".includes(c)).length;
  if (n <= 2) return SPEECH_RATE.mora;
  if (n <= 6) return SPEECH_RATE.mot;
  return SPEECH_RATE.phrase;
}
let speechSeq = 0;
function utter(text, rate) {
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "ja-JP";
  if (tts.voice) u.voice = tts.voice;
  u.rate = rate || rateFor(text);
  /* pitch laissé à 1 : le japonais porte du sens dans l'accent de hauteur, et
     déplacer la fondamentale globale brouille ce contraste. */
  u.pitch = 1.0;
  speechSynthesis.speak(u);
}
/* Audio pré-enregistré, produit par tools/build-audio.mjs. Il prime sur la synthèse
   embarquée pour trois raisons : la qualité d'une voix neuronale, un silence propre
   aux extrémités là où les moteurs rognent l'attaque d'une more, et un résultat
   identique sur tout appareil, y compris ceux qui n'ont aucune voix japonaise
   installée et où l'application était muette. Spec §11.
   Le manifeste absent, tout retombe sur la synthèse : l'audio est un supplément,
   jamais une dépendance. */
let audioManifest = null;
let lecteurAudio = null;
async function loadAudioManifest() {
  try {
    const res = await fetch("audio/manifest.json");
    if (res.ok) audioManifest = await res.json();
  } catch (_) {
    /* rien à signaler : la synthèse reste */
  }
}
function enregistrementPour(text) {
  const f = audioManifest && audioManifest.files;
  if (!f) return null;
  const brut = String(text || "").trim();
  return f[brut] || f[prepareSpeechText(brut)] || null;
}
/* Renvoie false si la lecture n'a pas pu même démarrer, pour que l'appelant
   replie immédiatement au lieu de rester silencieux. */
/* Amorçage. iOS n'ouvre la barrière audio qu'une fois, et seulement depuis la pile
   d'appel d'un geste utilisateur. Or la face d'écoute déclenche le son AU RENDU de la
   carte, pas sur un tap : l'élément n'était donc jamais débloqué, et le repli partant
   d'un minuteur se trouvait lui aussi hors geste, si bien que la synthèse échouait à
   son tour. Résultat, silence complet là où l'énoncé EST la question.

   On franchit donc les deux barrières, audio et synthèse, au premier geste de la
   page, avec un silence inaudible. Tout ce qui suit fonctionne alors, geste ou pas. */
const SILENCE_WAV =
  "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=";
let audioAmorce = false;
function amorcerAudio() {
  if (audioAmorce) return;
  audioAmorce = true;
  try {
    if (!lecteurAudio) lecteurAudio = new Audio();
    lecteurAudio.src = SILENCE_WAV;
    const p = lecteurAudio.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  } catch (_) {
    /* rien à signaler : l'amorçage est une tentative, pas une garantie */
  }
  try {
    if (tts.ok) {
      const u = new SpeechSynthesisUtterance(" ");
      u.volume = 0;
      speechSynthesis.speak(u);
    }
  } catch (_) {
    /* idem */
  }
}
for (const ev of ["pointerdown", "touchstart", "click", "keydown"])
  document.addEventListener(ev, amorcerAudio, { once: true, capture: true });

let audioSeq = 0;
let minuteurAudio = null;
function jouerEnregistrement(url, replier) {
  try {
    if (!lecteurAudio) lecteurAudio = new Audio();
    if (tts.ok) speechSynthesis.cancel();
    const seq = ++audioSeq;
    /* iOS sait résoudre play() sans jamais rien jouer, quand l'élément n'a pas été
       débloqué par un geste ou que le média refuse de démarrer. Aucune exception,
       aucun rejet : le seul témoin fiable est l'événement « playing ». On l'attend,
       et faute de l'avoir vu on replie sur la synthèse plutôt que de rester muet.
       Ne couvre pas l'interrupteur silencieux de l'iPhone, où la lecture démarre
       réellement : c'est le réglage de source audio qui répond à ce cas. */
    let demarre = false;
    /* Le rejet de play() et l'expiration du délai peuvent survenir tous les deux :
       sans ce verrou la synthèse parlerait deux fois, ce qui est précisément la
       répétition qu'on vient de supprimer. */
    let repliFait = false;
    const replierUneFois = () => {
      if (repliFait || seq !== audioSeq) return;
      repliFait = true;
      replier();
    };
    const auDemarrage = () => {
      demarre = true;
    };
    lecteurAudio.addEventListener("playing", auDemarrage, { once: true });
    lecteurAudio.pause();
    lecteurAudio.src = url;
    /* Pas de currentTime = 0 : affecter src remet déjà la position à zéro, et
       écrire currentTime alors que readyState vaut HAVE_NOTHING lève une exception
       sur certains WebKit. */
    const p = lecteurAudio.play();
    if (p && typeof p.catch === "function") p.catch(replierUneFois);
    clearTimeout(minuteurAudio);
    minuteurAudio = setTimeout(() => {
      lecteurAudio.removeEventListener("playing", auDemarrage);
      if (!demarre) replierUneFois();
    }, 400);
    return true;
  } catch (_) {
    return false;
  }
}
/* Une carte de sortie explicite, et voici pourquoi elle est nécessaire.

   Sur iPhone, un fichier audio respecte l'interrupteur silencieux, alors que la
   synthèse vocale l'ignore. Passer aux enregistrements peut donc faire perdre tout
   son à quelqu'un dont le téléphone est en silencieux, et le repli automatique ne
   s'en aperçoit pas : la lecture réussit, elle est simplement inaudible. Aucun
   événement ne distingue « joué » de « joué mais muet », il n'y a donc rien à
   détecter côté code, seulement un choix à laisser. */
const sourceAudioForcee = () => app.audioSource === "synthese";
function speak(text, rate) {
  if (app.mute || !text) return;
  const synthese = () => syntheseVocale(text, rate);
  const url = sourceAudioForcee() ? null : enregistrementPour(text);
  if (url && jouerEnregistrement(url, synthese)) return;
  synthese();
}
function syntheseVocale(text, rate) {
  if (!tts.ok) return;
  const speakText = prepareSpeechText(text);
  if (!speakText) return;
  const padded = paddedSpeech(speakText);
  const run = () => utter(padded, rate);
  const seq = ++speechSeq;
  /* Rien en cours : parler tout de suite. iOS Safari n'autorise le premier
     speak() que dans la pile d'appel du geste utilisateur ; le différer, même
     d'un tick, le fait bloquer en silence. Il n'y a alors rien à annuler. */
  if (!speechSynthesis.speaking && !speechSynthesis.pending) {
    run();
    return;
  }
  /* Quelque chose parle déjà : l'audio est donc débloqué et on peut différer
     sans risque. Il le faut, car cancel() est asynchrone et enchaîner speak()
     dans le même tick laisse Chrome vider la file après coup. Le jeton seq
     garantit qu'une demande plus récente prenne la main sur celle-ci. */
  speechSynthesis.cancel();
  setTimeout(() => {
    if (seq === speechSeq) run();
  }, 0);
}

/* ===================== decks : la politique est une propriété du deck ===================== */
const DECKS = [
  {
    id: "hira",
    name: "Hiragana",
    kind: "glyph",
    script: "hira",
    answer: "romaji",
    ordered: true,
    audio: "reveal",
    grading: "typed",
    furi: "hidden",
    newPerDay: 10,
    level: "n5",
  },
  {
    id: "kata",
    name: "Katakana",
    kind: "glyph",
    script: "kata",
    answer: "romaji",
    ordered: true,
    audio: "reveal",
    grading: "typed",
    furi: "hidden",
    newPerDay: 8,
    level: "n5",
  },
  {
    id: "kanji",
    name: "Kanji N5",
    kind: "kanji",
    answer: "kana",
    ordered: true,
    audio: "reveal",
    grading: "self",
    furi: "hidden",
    newPerDay: 4,
    level: "n5",
  },
  {
    id: "vocab",
    name: "Sentences N5",
    kind: "lex",
    answer: "kana",
    ordered: false,
    audio: "reveal",
    grading: "typed",
    furi: "hidden",
    newPerDay: 4,
    level: "n5",
  },
  {
    id: "pkmn",
    name: "Pokémon 151",
    kind: "name",
    answer: "kana",
    ordered: false,
    audio: "reveal",
    grading: "typed",
    furi: "hidden",
    newPerDay: 4,
    level: "n5",
  },
  {
    id: "kanji-n4",
    name: "Kanji N4",
    kind: "kanji",
    answer: "kana",
    ordered: true,
    audio: "reveal",
    grading: "self",
    furi: "hidden",
    newPerDay: 4,
    level: "n4",
  },
  {
    id: "kanji-n3",
    name: "Kanji N3",
    kind: "kanji",
    answer: "kana",
    ordered: true,
    audio: "reveal",
    grading: "self",
    furi: "hidden",
    newPerDay: 4,
    level: "n3",
  },
  {
    id: "kanji-n2",
    name: "Kanji N2",
    kind: "kanji",
    answer: "kana",
    ordered: true,
    audio: "reveal",
    grading: "self",
    furi: "hidden",
    newPerDay: 4,
    level: "n2",
  },
  {
    id: "kanji-n1",
    name: "Kanji N1",
    kind: "kanji",
    answer: "kana",
    ordered: true,
    audio: "reveal",
    grading: "self",
    furi: "hidden",
    newPerDay: 4,
    level: "n1",
  },
];
const deck = (id) => DECKS.find((d) => d.id === id);
const LEVELS = [
  {
    id: "n5",
    label: "N5",
    deckIds: ["hira", "kata", "kanji", "vocab"],
    prereq: null,
    open: true,
  },
  {
    id: "n4",
    label: "N4",
    deckIds: ["kanji-n4"],
    prereq: "N5 entièrement maîtrisé",
    open: false,
  },
  {
    id: "n3",
    label: "N3",
    deckIds: ["kanji-n3"],
    prereq: "N4 entièrement maîtrisé",
    open: false,
  },
  {
    id: "n2",
    label: "N2",
    deckIds: ["kanji-n2"],
    prereq: "N3 entièrement maîtrisé",
    open: false,
  },
  {
    id: "n1",
    label: "N1",
    deckIds: ["kanji-n1"],
    prereq: "N2 entièrement maîtrisé",
    open: false,
  },
];
const level = (id) => LEVELS.find((l) => l.id === id);
function decksForLevel(levelId) {
  const l = level(levelId);
  if (!l) return [];
  return l.deckIds.map((id) => deck(id)).filter(Boolean);
}
function deckMasteryRate(deckIds) {
  const decks = deckIds.map((id) => deck(id)).filter(Boolean);
  const cardsForDecks = decks.flatMap((d) =>
    ITEMS.filter((i) => i.deck === d.id),
  );
  if (!cardsForDecks.length) return 0;
  const mastered = cardsForDecks.filter((i) => known(i.id)).length;
  return mastered / cardsForDecks.length;
}
/* couverture « consolidée » : sert à ouvrir le niveau suivant */
function deckSolidRate(deckIds) {
  const items = deckIds.flatMap((id) => ITEMS.filter((i) => i.deck === id));
  if (!items.length) return 0;
  return items.filter((i) => solid(i.id)).length / items.length;
}
function levelProgress(levelId) {
  const l = level(levelId);
  if (!l) return 0;
  return deckMasteryRate(l.deckIds);
}
/* Le niveau suivant s'ouvre sur la COUVERTURE CONSOLIDÉE du précédent, pas sur sa
   maîtrise à 95 %. L'argument du verrou est un argument de lisibilité (les kanji
   N4 se combinent avec ceux de N5) et « consolidé » y répond. Exiger trois
   semaines de stabilité sur 95 % des items reproduisait la famine à chaque
   frontière de niveau : le contenu d'un niveau s'épuise en une semaine, sa
   maîtrise demande deux mois. La maîtrise reste ce qu'affiche `progress`, donc ce
   que la Collection présente comme accompli. */
const LEVEL_UNLOCK_COVERAGE = 0.9;
function levelUnlockInfo(levelId) {
  const l = level(levelId);
  if (!l) return { open: false, need: "" };
  if (l.id === "n5")
    return { open: true, need: "", progress: levelProgress("n5") };
  const prev = LEVELS[LEVELS.findIndex((x) => x.id === l.id) - 1];
  const coverage = prev ? deckSolidRate(prev.deckIds) : 0;
  if (coverage >= LEVEL_UNLOCK_COVERAGE) markDeckUnlocked("level:" + l.id);
  const open = coverage >= LEVEL_UNLOCK_COVERAGE || deckUnlocked("level:" + l.id);
  return {
    open,
    need: prev
      ? `${Math.round(coverage * 100)} % de ${prev.label} consolidé (${Math.round(LEVEL_UNLOCK_COVERAGE * 100)} % requis)`
      : "",
    progress: levelProgress(prev ? prev.id : l.id),
    coverage,
  };
}

/* ===================== items ===================== */
const ITEMS = [],
  CTX = [],
  KIDX = { hira: {}, kata: {}, kanji: {} };
KROWS.join(" ")
  .split(" ")
  .filter(Boolean)
  .forEach((tok, n) => {
    const m = tok.match(/^([\u3041-\u3096]+)([a-z]+)$/);
    if (!m) return;
    const hira = m[1],
      kata = toKata(hira),
      rom = m[2];
    ITEMS.push({
      id: "h" + n,
      deck: "hira",
      kind: "glyph",
      idx: n,
      glyph: hira,
      kana: hira,
      rom,
    });
    ITEMS.push({
      id: "k" + n,
      deck: "kata",
      kind: "glyph",
      idx: n,
      glyph: kata,
      kana: hira,
      rom,
    });
    KIDX.hira[hira] = "h" + n;
    KIDX.kata[kata] = "k" + n;
  });
KANJI.split("|").forEach((s, n) => {
  const i = s.indexOf(" ");
  const g = s.slice(0, i);
  ITEMS.push({
    id: "j" + n,
    deck: "kanji",
    kind: "kanji",
    idx: n,
    glyph: g,
    keyword: s.slice(i + 1),
  });
  KIDX.kanji[g] = "j" + n;
});
const KANJI_N4 =
  "会 meeting|事 matter|同 same|自 self|社 company|発 to depart|者 person|地 ground|業 business|方 direction, way|新 new|場 place|員 member|開 to open|問 question|代 to substitute, generation|明 bright|動 to move|京 capital|通 to pass through|言 to say|理 reason|体 body|主 main, master|題 topic|意 meaning, intent|不 not, un-|作 to make|用 use, business|度 degree, times|強 strong|公 public, official|持 to hold|野 field|東 east|高 tall, expensive|少 few|光 light|使 to use|万 ten thousand|全 all, whole|部 part, section|花 flower|世 world, generation|界 boundary|進 to advance|別 separate|感 feeling|育 to raise|教 to teach|音 sound|家 house|病 illness|院 institution|建 to build|説 to explain|送 to send|民 people|決 to decide|定 to determine|特 special|経 to pass through|科 subject|医 doctor|銀 silver|験 test, to experience|質 quality|集 to gather|選 to choose|商 commerce|死 to die|品 goods|直 to fix, direct|番 turn, number|洋 western, ocean|服 clothes|顔 face|私 I, me|対 versus, against|予 in advance|政 politics|治 to govern|法 law|権 authority|若 young|無 nothing|始 to begin|終 to end|住 to live, reside|借 to borrow|貸 to lend|考 to think|思 to think|知 to know|運 to carry, fortune|転 to turn, roll|乗 to ride|降 to descend, get off|歩 to walk|走 to run|止 to stop|買 to buy|売 to sell|店 shop|道 road, way|遠 far|近 near|外 outside|内 inside|広 wide|長 long|短 short|重 heavy|安 cheap, safe|古 old|文 sentence, text|字 character|語 language, word|話 to talk|読 to read|書 to write|勉 diligence, study|習 to learn|覚 to memorize|忘 to forget|待 to wait|入 to enter|出 to exit|帰 to return home|閉 to close|続 to continue|兄 older brother|姉 older sister|弟 younger brother|妹 younger sister|父 father|母 mother|親 parent|族 family, tribe|友 friend|好 to like|朝 morning|昼 noon|夜 night|夕 evening|晩 evening|週 week|曜 weekday|春 spring|夏 summer|秋 autumn|冬 winter|寒 cold weather|暑 hot weather|暖 warm|涼 cool|海 sea|島 island|森 forest|林 grove|米 rice|肉 meat|魚 fish|茶 tea|酒 alcohol|飯 meal|料 fee, material|画 picture|映 to project, reflect|写 to copy|真 truth, photo|歌 song|楽 fun, music|苦 bitter, painful|忙 busy|急 urgent|遅 late|早 early|速 fast|軽 light (weight)|多 many|狭 narrow|深 deep|浅 shallow|低 low|飛 to fly|泳 to swim|着 to wear, to arrive|色 color|赤 red|青 blue|黄 yellow|緑 green|紙 paper";
const KANJI_N3 =
  "仕 to serve|例 example|側 side|信 to trust|価 price|億 hundred million|優 gentle, superior|備 to prepare|働 to work|党 party|共 together|具 tool|典 rule, code|冷 to cool|列 line, row|判 judgment|利 benefit|割 to divide|創 to create|勇 brave|勝 to win|勢 momentum|化 to change|区 ward|印 mark|危 dangerous|原 field, origin|参 to visit, participate|反 to oppose|収 to collect|各 each|向 to face|吸 to inhale|吹 to blow|周 circumference|命 life|和 harmony|喜 to rejoice|営 to manage|器 container|囲 to surround|団 group|困 to be troubled|域 area|城 castle|報 news, reward|境 boundary|増 to increase|夢 dream|奪 to snatch|婚 marriage|嫌 to dislike|季 season|寄 to approach|寺 temple|射 to shoot|将 general|尽 to exhaust|居 to reside|届 to deliver|尾 tail|岩 rock|差 difference|巻 to roll|布 cloth|希 hope, rare|師 teacher, master|席 seat|常 always, normal|幸 happiness|幼 young child|庁 government office|府 government|庭 garden|延 to postpone|建 to build|弱 weak|張 to stretch|強 dup skip|形 shape|影 shadow|役 role, duty|徒 follower|徳 virtue|忘 dup skip|忙 busy|念 concept, wish|怒 to be angry|恐 to fear|恥 shame|息 breath|悩 to worry|愛 love|感 dup skip|慣 to become used to|憎 to hate|懐 nostalgia|戦 war, to fight|戻 to return|払 to pay|批 criticism|承 to consent|技 skill|抜 to pull out|抱 to embrace|招 to invite|拾 to pick up|指 finger, to point|捕 to catch|授 to grant|採 to gather|探 to search|接 to touch|推 to infer|提 to present|揺 to shake|連 to link|関 to relate|必 must|要 necessary|求 to request|込 crowded|確 sure|違 different|在 to exist|様 style|守 to protect|存 to exist|現 present|状 condition|態 condition|準 standard|含 to include|残 to remain|過 to pass|性 nature|局 office|的 target|面 face, surface|議 discussion|論 discourse|展 to develop|象 phenomenon|制 system|複 double|査 to investigate|援 to help|派 group|辺 area|順 order|容 form|案 plan|効 effect|異 different (dup skip)|訳 translation|講 lecture|録 record|述 to state|評 evaluation|談 discussion|費 expense|資 resources|豊 abundant|貴 noble|貨 goods|賃 rent|貿 trade|輸 transport|輪 wheel|輝 to shine|遊 to play|達 to reach|避 to avoid|邦 country|港 harbor|測 to measure|湖 lake|温 warm|漁 fishing|激 intense|災 disaster|炭 charcoal|点 point|然 so|焼 to burn|煙 smoke|熱 heat|燃 to burn|片 piece|版 edition|牛 cow|犬 dog|猫 cat|王 king|球 sphere|畑 field, farm|留 to stay|略 abbreviation|痛 pain|皆 all|皿 plate|益 benefit|相 phase|眠 sleep|眼 eyeball|石 stone|砂 sand|研 to polish|破 to break|硬 hard|示 to show|礼 courtesy|祈 to pray|祖 ancestor|祝 to celebrate|神 god|祭 festival|禁 to prohibit|福 fortune|秀 excellent|秘 secret|移 to shift|税 tax|窓 window|穴 hole|究 to research|突 sudden|竜 dragon|端 edge|竹 bamboo|笑 to smile|笛 flute|符 mark|第 ordinal|筆 brush|筋 muscle|等 grade|答 answer|策 plan|簡 simple|粉 flour|精 refined|糖 sugar|糸 thread|系 lineage|紀 chronicle|約 promise|納 to store|純 pure|級 grade|素 element|細 slender|紹 to introduce|結 to tie|絵 picture|給 salary|統 to unite|絶 to end|継 to inherit|網 net|線 line|締 to tighten|編 to edit|縁 edge|織 to weave|群 group|義 justice|翌 next day|翻 to translate|老 old|耕 to till|聖 holy|職 employment|肌 skin|肩 shoulder|背 back|肺 lung|胃 stomach|胸 chest|能 skill|脂 fat|脈 pulse|脱 to escape|脳 brain|腐 to rot|腕 arm|腰 waist|腹 belly|臣 minister|臨 to face|至 to reach|致 to cause|舌 tongue|舎 shed|舞 to dance|舟 boat|航 to navigate|般 kind";
const KANJI_N2 =
  "与 to give|丘 hill|丈 length, height|与 dup skip|丘 dup|乱 disturbance|乳 milk|乾 to dry|了 finish|互 mutual|井 well|亜 sub-|享 to receive|京 dup skip|仮 temporary|伏 to bow|伐 to cut down|伯 uncle|伴 companion|伸 to stretch|但 however|位 rank|低 low|佐 to help|余 remainder|供 to provide|依 to depend on|価 dup skip|侵 to invade|便 convenience, mail|係 person in charge|保 to preserve|信 dup skip|修 to master|俳 haiku|俵 straw bag|倉 warehouse|個 individual|倍 double|倒 to fall|候 climate|借 dup skip|倣 to imitate|値 value|倹 thrifty|偉 great, admirable|偏 partial, biased|健 healthy|偵 spy|側 dup skip|偶 accidentally|偽 false|傍 side|傑 outstanding|傘 umbrella|催 to hold event|傷 wound|傾 to lean|債 debt|傲 arrogant|僅 slightly|僕 I (male)|僧 monk|儀 ceremony|億 dup skip|儒 Confucian|償 compensation|優 dup skip|允 permit|元 dup skip|兆 sign, trillion|兇 evil|克 to overcome|免 to excuse|党 dup skip|入 dup skip|全 dup skip|共 dup skip|典 dup skip|兼 dual|冒 to risk|冗 excess|冠 crown|冥 dark, hades|冶 to smelt|冷 dup skip|凍 to freeze|凡 mediocre|凡 dup|凶 evil|凸 convex|凹 concave|出 dup skip|函 box|刀 sword|刃 blade|分 dup skip|切 to cut|刈 to reap|刊 publish|刑 punishment|列 dup skip|初 first|判 dup skip|別 dup skip|利 dup skip|刺 to pierce|刻 to carve|剖 to divide|副 secondary|創 dup skip|副 dup skip|勧 to recommend|勘 intuition|募 to recruit|勲 merit|化 dup skip|匹 counter for animals|匿 to hide|匠 artisan|匝 sweep|区 dup skip|医 dup skip|升 measure|卒 to graduate|協 cooperation|博 broad, doctor|印 dup skip|即 immediate|却 to refuse|卵 egg|厚 thick|原 dup skip|双 pair|叔 uncle|受 to receive|吐 to spit|吟 to recite|含 dup skip|吸 dup skip|呉 to give|呑 to swallow|呉 dup skip|周 dup skip|呪 curse|咲 to bloom|哀 sorrow|哲 wisdom|唄 song|唆 to tempt|唇 lips|唯 only|唱 to sing, chant|唾 saliva|啓 to open, enlighten|善 good|喉 throat|喚 to summon|喝 to scold|喪 mourning|嗅 to smell|嗜 hobby|嘆 to lament|噂 rumor|噴 to spout|囚 prisoner|回 to return, times|因 cause|団 dup skip|園 park, garden|土 dup skip|圧 pressure|圭 gem|坂 slope|坊 boy, monk|坑 pit|坪 tsubo (area unit)|垂 to hang down|型 model|埋 to bury|城 dup skip|域 dup skip|培 to cultivate|基 base, foundation|堂 hall|堅 solid|堀 moat|堤 embankment|堪 to endure|報 dup skip|塀 fence|塁 base (baseball)|塊 lump|塑 clay figure|塔 tower|塗 to paint|塾 cram school|境 dup skip|墓 grave|墜 to fall|増 dup skip|墨 ink|墳 mound|壁 wall|壇 platform|壊 to break|壌 soil|士 gentleman, samurai|壮 majestic|声 voice|壱 one (formal)|売 dup skip|変 to change, strange|夏 dup skip|夕 dup skip|外 dup skip|多 dup skip|夜 dup skip|夢 dup skip|大 dup skip|奇 strange|奈 how|奉 to serve|契 pledge|奏 to play music|奥 interior|奨 to encourage|奪 dup skip|奮 to rouse|好 dup skip|如 like, if|妃 princess|妄 delusion|妊 pregnancy|妖 bewitching|妙 exquisite|妨 to disturb|姓 surname|姫 princess|姻 marriage|姿 figure|威 authority|娘 daughter|婆 old woman|婿 son-in-law|媒 medium|嫁 bride|嫉 jealous|嬢 young lady|子 dup skip|存 dup skip|季 dup skip|孤 alone|孫 grandchild|宅 residence|宇 space, universe|守 dup skip|安 dup skip|宗 religion|官 government official|宙 space, universe|宝 treasure|宣 to declare|室 room|宮 palace|宰 to preside|害 damage|宴 banquet|家 dup skip|容 dup skip|宿 inn, to lodge|寂 lonely|寄 dup skip|富 wealth|寛 tolerant|察 to guess|寡 few|寿 congratulations|専 exclusive|将 dup skip|尉 lieutenant|尊 respect|尋 to ask, inquire|導 to lead|封 to seal|射 dup skip|尽 to exhaust|局 dup skip|居 dup skip|履 to wear (shoes)|山 dup skip|岐 branch off|岡 hill|岳 peak|岸 shore|峠 mountain pass|峡 gorge|峰 peak|島 dup skip|崇 to revere|崎 promontory|崩 to collapse|嵐 storm|巡 to patrol|巣 nest|巨 huge|巧 skill|差 dup skip|己 self|巻 dup skip|市 dup skip|布 dup skip|帆 sail|希 dup skip|帝 emperor|帥 commander|師 dup skip|席 dup skip|帽 hat|幅 width|幕 curtain, act|幣 currency|干 dry, to interfere|平 flat, peace|幸 dup skip|幹 trunk, main|幻 illusion|幾 how many|序 order, preface|底 bottom|店 dup skip|府 dup skip|度 dup skip|座 seat|庫 warehouse|庭 dup skip|廊 corridor|廃 to abolish|建 dup skip|弊 evil|式 style|引 to pull|弘 broad|弟 dup skip|弦 string|弧 arc|弱 dup skip|張 dup skip|強 dup skip|弾 bullet, to play strings|当 to hit|録 dup skip|彦 handsome youth|彩 to colour|彫 to carve|彰 clear|影 dup skip|彼 he|往 to head to|征 to conquer|径 diameter|待 dup skip|律 law|徐 slowly|得 to gain|従 to follow|微 minute|徴 sign|徳 dup skip|徹 to penetrate|忍 to endure|志 aspiration|忠 loyalty";
const KANJI_N1 =
  "且 furthermore|丙 third class|丞 to help|乃 whereupon|之 of (classical)|乎 exclamation|乏 scarce|乗 dup skip|乞 to beg|亀 turtle|亙 to extend|亦 also|亭 pavilion|亮 clear|仄 hint|仇 enemy|仔 detailed|仗 stick|仙 hermit|仮 dup skip|仰 to revere|伊 that|伍 five, ally|伎 skill|伏 dup skip|伐 dup skip|伴 dup skip|伶 actor|伽 nursing|佃 cultivated field|佇 to loiter|佑 to help|佐 dup skip|佛 buddha (old)|作 dup skip|佩 to wear|佳 excellent|併 to combine|佼 clever|使 dup skip|來 to come (old)|侃 strong|侍 samurai|侏 dwarf|侑 to help meal|侘 lonely|侠 chivalrous|侯 marquis|侵 dup skip|便 dup skip|係 dup skip|促 to urge|俊 talented|俐 clever|俗 vulgar, custom|俘 captive|俚 rustic|俠 chivalrous|俣 fork|俥 rickshaw|俯 to bow|俳 dup skip|俵 dup skip|倅 son|倆 skill|倉 dup skip|倍 dup skip|倏 quickly|倒 dup skip|倖 luck|候 dup skip|倚 to lean|倣 dup skip|値 dup skip|倭 Yamato|倶 all|倹 dup skip|偃 to lie down|偉 dup skip|偏 dup skip|健 dup skip|偲 to remember|側 dup skip|偵 dup skip|偶 dup skip|偽 dup skip|傀 puppet|傅 tutor|傍 dup skip|傑 dup skip|催 dup skip|傭 employed|傲 dup skip|傳 to transmit (old)|傷 dup skip|傾 dup skip|僅 dup skip|僑 sojourn|僕 dup skip|僚 colleague|僧 dup skip|僻 remote|儀 dup skip|億 dup skip|儒 dup skip|償 dup skip|優 dup skip|允 permit|兆 sign, trillion|克 to overcome|免 to excuse|党 dup skip|兼 dual|冒 to risk|冗 excess|冠 crown|冥 dark, hades|凡 dup skip|凶 evil|凸 convex|凹 concave|刀 sword|刃 blade|切 to cut|刈 to reap|刊 to publish|刑 punishment|初 first|刺 to pierce|刻 dup skip|剖 dup skip|剛 sturdy|剣 sword|剤 medicine dose|剰 surplus|剥 to peel|剪 to prune|勅 imperial edict|勺 shakuunit|匂 fragrance|升 dup skip|卓 table, excellent|卜 divination|卦 divination sign|即 dup skip|却 dup skip|厄 misfortune|厘 rin (unit)|又 also|叉 crotch|叙 to relate, to appoint|叢 clump|吉 good luck|吊 to hang|吏 official|叶 to grant|吐 dup skip|吟 dup skip|呂 spine|呆 amazed|呑 dup skip|哉 how, alas|哨 sentry|唆 dup skip|唖 mute|唸 to hum|嗣 heir|嗜 dup skip|嘉 esteemed|嘆 dup skip|噛 to bite|囂 noisy|嚢 sack|囚 dup skip|団 dup skip|圏 sphere, range|圏 dup skip|坑 dup skip|坤 southwest|垢 dirt|垣 hedge|埃 dust|埠 wharf|堆 heap|堡 fort|塁 dup skip|塑 dup skip|塚 tumulus|塩 salt|塵 dust|塾 dup skip|墟 ruins|墾 to reclaim land|壇 dup skip|壮 dup skip|壱 dup skip|壷 pot, jar|奄 to cover|奉 dup skip|契 dup skip|奢 luxury|奥 dup skip|奨 dup skip|奪 dup skip|妃 dup skip|妄 dup skip|妊 dup skip|妖 dup skip|妨 dup skip|妬 jealous|姑 mother-in-law|姦 wicked|娼 prostitute|媚 to flatter|嫉 dup skip|嫌 dup skip|嫡 legitimate wife|嬉 glad|嬌 charming|孔 hole|孕 to conceive|孟 chief|孤 dup skip|孵 to hatch|宏 broad|宗 dup skip|宛 as if|宣 dup skip|寂 dup skip|寛 dup skip|寡 dup skip|寺 dup skip|寓 to reside temporarily|寧 rather|審 to investigate|寵 favor|寸 sun (unit)|尉 dup skip|尚 esteem|尿 urine|屍 corpse|屠 to butcher|屯 barracks|岡 dup skip|岬 cape (geog)|峨 lofty|峻 severe|崇 dup skip|崖 cliff|嵌 to fit in|嵩 pile up|嵯 towering|嶋 island|嶺 peak|巌 sturdy rock|巫 sorceress|已 already|巳 snake (zodiac)|帆 dup skip|幇 to help|幟 banner|幣 dup skip|幽 seclusion|幾 dup skip|庄 estate|庇 to shelter|庵 hermitage|廟 mausoleum|廠 workshop|廻 to go around|弐 two (formal)|弘 dup skip|弛 to slacken|弥 more and more|弦 dup skip|弧 dup skip|彊 firm|彗 comet|彦 dup skip|彼 dup skip|徊 wander about|徘 wander|徽 badge|忌 to abhor|忘 dup skip|忽 to ignore|怠 idle|怨 grudge|恒 constant|恩 favor, kindness|恫 to threaten|悌 elder brother|悔 to regret|悟 enlightenment|悦 joy|悉 all|悠 leisure|惑 to be confused|惚 to be enchanted|惜 regret|惟 to think|惧 fear|愁 melancholy|愉 pleasure|慄 to tremble|慈 mercy|慕 to yearn|慢 pride, sluggish|憂 melancholy|憎 dup skip|憐 pity|憾 remorse|懇 sociable|懐 dup skip|懲 to punish|懸 to hang|戒 commandment|戚 sad, relative|戦 dup skip|戴 to be crowned with|扇 fan|払 dup skip|扮 to be dressed as|扱 to handle|扶 to help|批 dup skip|抄 selection|抗 to resist|折 to fold, snap|抹 to erase|拉 to pull|拍 to clap|拒 to refuse|拓 to open up|抽 to pull, extract|拘 to arrest|拙 clumsy|拠 to be based on|括 to fasten|拳 fist|挑 to challenge|振 to swing, shake|挿 to insert|捉 to catch|捜 to search";
[
  [KANJI_N4, "kanji-n4", "j4-"],
  [KANJI_N3, "kanji-n3", "j3-"],
  [KANJI_N2, "kanji-n2", "j2-"],
  [KANJI_N1, "kanji-n1", "j1-"],
].forEach(([str, deckId, prefix]) => {
  str.split("|").forEach((s, n) => {
    const i = s.indexOf(" ");
    const g = s.slice(0, i),
      desc = s.slice(i + 1);
    if (!g || desc.includes("dup skip") || KIDX.kanji[g]) return;
    ITEMS.push({
      id: prefix + n,
      deck: deckId,
      kind: "kanji",
      idx: n,
      glyph: g,
      keyword: desc,
    });
    KIDX.kanji[g] = prefix + n;
  });
});
PK.split(",").forEach((s) => {
  const p = s.split(" ");
  ITEMS.push({
    id: "p" + p[0],
    deck: "pkmn",
    kind: "name",
    num: +p[0],
    ja: p[1],
    en: p[2],
    type: p[3].replace("/", " / "),
    /* `kana` et `rom` sont dérivés pour que la face d'écoute fonctionne sans cas
       particulier : un nom est déjà écrit en katakana, donc kana === ja. C'est ce
       qui donne au deck-récompense une seconde face sans dupliquer la machinerie. */
    kana: p[1],
    rom: toRomaji(p[1]),
  });
});

const LEX = [
  ["v1", "待つ", "まつ", "to wait"],
  ["v2", "飲む", "のむ", "to drink"],
  ["v3", "開ける", "あける", "to open"],
  ["v4", "降る", "ふる", "to fall (rain, snow)"],
  ["v5", "買う", "かう", "to buy"],
  ["v6", "食べる", "たべる", "to eat"],
  ["v7", "行く", "いく", "to go"],
  ["a1", "面白い", "おもしろい", "interesting, fun"],
  ["a2", "難しい", "むずかしい", "difficult"],
  ["a3", "静か", "しずか", "quiet"],
];
LEX.forEach(([id, surface, read, gloss]) =>
  ITEMS.push({
    id,
    deck: "vocab",
    kind: "lex",
    surface,
    read,
    acc: [read],
    gloss,
  }),
);
const S = (t, r) => ({ t, r: r || null });
[
  [
    "v1",
    ["まって"],
    "I'm waiting for a friend at the station.",
    [
      S("駅", "えき"),
      S("で"),
      S("友達", "ともだち"),
      S("を"),
      S("待って", "まって"),
      S("いる"),
      S("。"),
    ],
    4,
  ],
  [
    "v1",
    ["まちます"],
    "I'm waiting for the bus.",
    [S("バス"), S("を"), S("待ちます", "まちます"), S("。")],
    2,
  ],
  [
    "v1",
    ["まって"],
    "Please wait a moment.",
    [S("少し", "すこし"), S("待って", "まって"), S("ください"), S("。")],
    1,
  ],
  [
    "v2",
    ["のみます"],
    "I drink coffee every morning.",
    [
      S("毎朝", "まいあさ"),
      S("コーヒー"),
      S("を"),
      S("飲みます", "のみます"),
      S("。"),
    ],
    3,
  ],
  [
    "v2",
    ["のんで"],
    "Please drink some water.",
    [S("水", "みず"), S("を"), S("飲んで", "のんで"), S("ください"), S("。")],
    2,
  ],
  [
    "v3",
    ["あけて"],
    "Please open the bedroom window.",
    [
      S("部屋", "へや"),
      S("の"),
      S("窓", "まど"),
      S("を"),
      S("開けて", "あけて"),
      S("ください"),
      S("。"),
    ],
    4,
  ],
  [
    "v3",
    ["あけます"],
    "We open the shop at nine.",
    [
      S("店", "みせ"),
      S("は"),
      S("九時", "くじ"),
      S("に"),
      S("開けます", "あけます"),
      S("。"),
    ],
    4,
  ],
  [
    "v4",
    ["ふる"],
    "It will probably rain tomorrow.",
    [
      S("明日", "あした"),
      S("、"),
      S("雨", "あめ"),
      S("が"),
      S("降る", "ふる"),
      S("でしょう"),
      S("。"),
    ],
    4,
  ],
  [
    "v4",
    ["ふって"],
    "It is snowing.",
    [S("雪", "ゆき"), S("が"), S("降って", "ふって"), S("います"), S("。")],
    2,
  ],
  [
    "v5",
    ["かいます"],
    "I buy the newspaper in front of the station.",
    [
      S("駅前", "えきまえ"),
      S("で"),
      S("新聞", "しんぶん"),
      S("を"),
      S("買います", "かいます"),
      S("。"),
    ],
    4,
  ],
  [
    "v5",
    ["かった"],
    "What did you buy?",
    [S("何", "なに"), S("を"), S("買った", "かった"), S("の"), S("。")],
    2,
  ],
  [
    "v6",
    ["たべました"],
    "I ate breakfast.",
    [
      S("朝ご飯", "あさごはん"),
      S("を"),
      S("食べました", "たべました"),
      S("。"),
    ],
    2,
  ],
  [
    "v6",
    ["たべたい"],
    "What do you want to eat?",
    [
      S("何", "なに"),
      S("を"),
      S("食べたい", "たべたい"),
      S("です"),
      S("か"),
      S("。"),
    ],
    2,
  ],
  [
    "v7",
    ["いきます"],
    "I'm going to Kyoto next week.",
    [
      S("来週", "らいしゅう"),
      S("、"),
      S("京都", "きょうと"),
      S("へ"),
      S("行きます", "いきます"),
      S("。"),
    ],
    4,
  ],
  [
    "v7",
    ["いこう"],
    "Let's go together.",
    [S("一緒", "いっしょ"), S("に"), S("行こう", "いこう"), S("。")],
    2,
  ],
  [
    "a1",
    ["おもしろい"],
    "This book is interesting.",
    [
      S("この"),
      S("本", "ほん"),
      S("は"),
      S("面白い", "おもしろい"),
      S("です"),
      S("。"),
    ],
    3,
  ],
  [
    "a1",
    ["おもしろかった"],
    "Yesterday's movie was good.",
    [
      S("昨日", "きのう"),
      S("の"),
      S("映画", "えいが"),
      S("は"),
      S("面白かった", "おもしろかった"),
      S("。"),
    ],
    4,
  ],
  [
    "a2",
    ["むずかしい"],
    "Kanji are difficult.",
    [
      S("漢字", "かんじ"),
      S("は"),
      S("難しい", "むずかしい"),
      S("です"),
      S("。"),
    ],
    2,
  ],
  [
    "a2",
    ["むずかしかった"],
    "This problem was difficult.",
    [
      S("この"),
      S("問題", "もんだい"),
      S("は"),
      S("難しかった", "むずかしかった"),
      S("。"),
    ],
    3,
  ],
  [
    "a3",
    ["しずか"],
    "This town is quiet.",
    [
      S("この"),
      S("町", "まち"),
      S("は"),
      S("静か", "しずか"),
      S("です"),
      S("。"),
    ],
    3,
  ],
  [
    "a3",
    ["しずか"],
    "Please be quiet in the library.",
    [
      S("図書館", "としょかん"),
      S("では"),
      S("静か", "しずか"),
      S("に"),
      S("して"),
      S("ください"),
      S("。"),
    ],
    2,
  ],
  /* Troisième contexte pour chaque item : la spec §10 en demande au moins trois,
     sans quoi la rotation retombe toujours sur les deux mêmes phrases et l'on
     mémorise l'indice au lieu du mot ; invisible dans les statistiques, puisque le
     taux de réussite reste excellent. Les formes choisies varient volontairement
     (négation, passé, volitif) pour ne pas répéter la même conjugaison. */
  [
    "v2",
    ["のみません"],
    "Won't you drink some tea?",
    [
      S("お茶", "おちゃ"),
      S("を"),
      S("飲みません", "のみません"),
      S("か"),
      S("。"),
    ],
    2,
  ],
  [
    "v3",
    ["あけないで"],
    "Please don't open the door.",
    [
      S("ドア"),
      S("を"),
      S("開けないで", "あけないで"),
      S("ください"),
      S("。"),
    ],
    2,
  ],
  [
    "v4",
    ["ふりました"],
    "It rained yesterday.",
    [
      S("昨日", "きのう"),
      S("は"),
      S("雨", "あめ"),
      S("が"),
      S("降りました", "ふりました"),
      S("。"),
    ],
    4,
  ],
  [
    "v5",
    ["かいたい"],
    "I want to buy flowers.",
    [S("花", "はな"), S("を"), S("買いたい", "かいたい"), S("です"), S("。")],
    2,
  ],
  [
    "v6",
    ["たべません"],
    "I don't eat fish.",
    [S("魚", "さかな"), S("を"), S("食べません", "たべません"), S("。")],
    2,
  ],
  [
    "v7",
    ["いきました"],
    "I went to school.",
    [
      S("学校", "がっこう"),
      S("へ"),
      S("行きました", "いきました"),
      S("。"),
    ],
    2,
  ],
  [
    "a1",
    ["おもしろくない"],
    "It was a boring movie.",
    [
      S("面白くない", "おもしろくない"),
      S("映画", "えいが"),
      S("でした"),
      S("。"),
    ],
    0,
  ],
  [
    "a2",
    ["むずかしくない"],
    "It isn't difficult.",
    [S("難しくない", "むずかしくない"), S("です"), S("。")],
    0,
  ],
  [
    "a3",
    ["しずかな"],
    "A quiet room would be good.",
    [
      S("静かな", "しずかな"),
      S("部屋", "へや"),
      S("が"),
      S("いい"),
      S("です"),
      S("。"),
    ],
    0,
  ],
].forEach(([lex, ans, en, segs, ti], n) =>
  CTX.push({ id: "s" + n, type: "sentence", lex, ans, en, segs, ti }),
);

/* mots kana : contextes des items glyphe, atomes calculés */
const WORDCTX = [];
KWORDS.split("|").forEach((s, n) => {
  const i = s.indexOf(" ");
  const w = s.slice(0, i),
    en = s.slice(i + 1);
  WORDCTX.push({
    id: "w" + n,
    word: w,
    en,
    units: kanaUnits(w),
    rom: toRomaji(w),
  });
});
/* Vrais emprunts en katakana, distincts des mots hiragana ci-dessus (SPEC §14 : un
   mot hiragana converti mécaniquement en katakana — すし rendu スシ — est artificiel
   et n'entraîne jamais sur ー ni sur les sons composés propres aux emprunts. Ce
   corpus est écrit nativement en katakana : kanaUnits() gère déjà ー/ッ et les
   digrammes, donc aucune conversion n'est nécessaire pour l'alimenter. */
const KATA_WORDS =
  "コーヒー coffee|テレビ television|パン bread|バス bus|ノート notebook|ペン pen|カメラ camera|ホテル hotel|レストラン restaurant|タクシー taxi|メニュー menu|サラダ salad|ジュース juice|ケーキ cake|ピザ pizza|シャツ shirt|カード card|チケット ticket|ボール ball|ゲーム game|ニュース news|テスト test|コップ cup|ナイフ knife|フォーク fork|ドア door|テーブル table|ソファ sofa|ラジオ radio|カレンダー calendar|エレベーター elevator|スーパー supermarket|コンビニ convenience store|デパート department store|アパート apartment|パソコン computer|インターネット internet|メール email|カメラマン photographer|プレゼント present|パーティー party|クラス class|グループ group|チーム team|スポーツ sports|サッカー soccer|テニス tennis|バレエ ballet|ピアノ piano|ギター guitar|アイスクリーム ice cream|チョコレート chocolate|ハンバーガー hamburger|サンドイッチ sandwich|ジャム jam|バター butter|ミルク milk|ヨーグルト yogurt|チーズ cheese|ワイン wine|ビール beer|タオル towel|シャワー shower|トイレ toilet|エアコン air conditioner|カレー curry|スープ soup|サイズ size|カラー color|デザイン design|アイデア idea|イメージ image|システム system|データ data|レベル level|ページ page|ボタン button|マスク mask|ポケット pocket|ズボン trousers|コート coat|セーター sweater|スカート skirt|ジーンズ jeans|ハンカチ handkerchief|バッグ bag|ノック knock|サイン sign|チャンス chance|ストレス stress|エネルギー energy|イベント event|マナー manner|ルール rule|レポート report|ファイル file|プリンター printer|スクリーン screen|ボリューム volume|チャンネル channel";
const KATAWORDCTX = [];
KATA_WORDS.split("|").forEach((s, n) => {
  const i = s.indexOf(" ");
  const w = s.slice(0, i),
    en = s.slice(i + 1);
  KATAWORDCTX.push({
    id: "kw" + n,
    word: w,
    en,
    units: kanaUnits(w),
    rom: toRomaji(w),
  });
});
WORDCTX.push(...KATAWORDCTX);
/* composés kanji : contextes des items kanji */
const COMPCTX = [];
COMP.split("|").forEach((s, n) => {
  const p = s.split(" ");
  COMPCTX.push({
    id: "m" + n,
    word: p[0],
    read: p[1].split(","),
    en: p.slice(2).join(" "),
    kanji: [...p[0]].filter((c) => KIDX.kanji[c]),
  });
});
const COMP_EXT =
  "会社 かいしゃ company|会話 かいわ conversation|家族 かぞく family|勉強 べんきょう study|質問 しつもん question|問題 もんだい problem|意味 いみ meaning|使用 しよう use|使用 しよう usage|運転 うんてん driving|運動 うんどう exercise|自動車 じどうしゃ automobile|新聞 しんぶん newspaper|地図 ちず,ちづ map|世界 せかい world|旅行 りょこう travel|飛行機 ひこうき airplane|映画 えいが movie|音楽 おんがく music|病院 びょういん hospital|医者 いしゃ doctor|銀行 ぎんこう bank|警察 けいさつ police|時間 じかん time|時計 とけい clock|昨日 きのう yesterday|明日 あした,あす tomorrow|今週 こんしゅう this week|来週 らいしゅう next week|先週 せんしゅう last week|全部 ぜんぶ everything|一部 いちぶ one part|部屋 へや room|台所 だいどころ kitchen|居間 いま living room|寝室 しんしつ bedroom|洗面所 せんめんじょ washroom|通行 つうこう passage|通学 つうがく commuting to school|通勤 つうきん commuting to work|開始 かいし start|終了 しゅうりょう end|開店 かいてん shop opening|閉店 へいてん shop closing|入学 にゅうがく school entry|卒業 そつぎょう graduation|高校 こうこう high school|大学 だいがく university|生徒 せいと pupil|学生 がくせい student|先生 せんせい teacher|授業 じゅぎょう class|教室 きょうしつ classroom|試験 しけん exam|経験 けいけん experience|運命 うんめい destiny|同時 どうじ simultaneous|同意 どうい agreement|不安 ふあん anxiety|不思議 ふしぎ mysterious|感謝 かんしゃ gratitude|感動 かんどう emotion|決定 けってい decision|決心 けっしん determination|安心 あんしん peace of mind|安全 あんぜん safety|信用 しんよう trust|信号 しんごう traffic light|商品 しょうひん product|商店 しょうてん store|生産 せいさん production|工業 こうぎょう manufacturing|農業 のうぎょう agriculture|政治 せいじ politics|政府 せいふ government|法律 ほうりつ law|法学 ほうがく law studies|文化 ぶんか culture|文学 ぶんがく literature|文字 もじ letter, character|漢字 かんじ kanji|外国 がいこく foreign country|外国人 がいこくじん foreigner|市民 しみん citizen|国民 こくみん nation, people|民主 みんしゅ democracy|東京 とうきょう Tokyo|京都 きょうと Kyoto|洋服 ようふく western clothes|和服 わふく Japanese clothes|洋食 ようしょく western food|和食 わしょく Japanese food|注意 ちゅうい caution|注文 ちゅうもん order|質問 dup skip|発見 はっけん discovery|発明 はつめい invention|発表 はっぴょう announcement|発展 はってん development|準備 じゅんび preparation|完全 かんぜん complete|完成 かんせい completion|理解 りかい understanding|説明 せつめい explanation|意見 いけん opinion|会議 かいぎ meeting|会員 かいいん member|社員 しゃいん employee|社会 しゃかい society|会長 かいちょう chairman|課長 かちょう section chief|部長 ぶちょう department chief|専門 せんもん specialty|専攻 せんこう major|研究 けんきゅう research|開発 かいはつ development|技術 ぎじゅつ technology|情報 じょうほう information|通信 つうしん communication|木曜日 もくようび Thursday|お金 おかね money|土曜日 どようび Saturday|目 め eye|耳 みみ ear|五分 ごふん five minutes|半分 はんぶん half|飲み物 のみもの a drink|二人 ふたり two people|三日 みっか the third, three days|四月 しがつ April|五十 ごじゅう fifty|六月 ろくがつ June|七月 しちがつ July|八月 はちがつ August|九月 くがつ September|十月 じゅうがつ October|百円 ひゃくえん one hundred yen|千円 せんえん one thousand yen|一万 いちまん ten thousand|何時 なんじ what time|名前 なまえ name|白 しろ white|出口 でぐち exit|読書 どくしょ reading books|日本語 にほんご Japanese language|古本 ふるほん secondhand book|言語 げんご language|国立 こくりつ national";
COMP_EXT.split("|").forEach((s, n) => {
  const p = s.split(" ");
  if (!p[0] || (p[2] === "dup" && p[3] === "skip")) return;
  COMPCTX.push({
    id: "me" + n,
    word: p[0],
    read: p[1].split(","),
    en: p.slice(2).join(" "),
    kanji: [...p[0]].filter((c) => KIDX.kanji[c]),
  });
});

/* ===================== atomes et i+1 ===================== */
/* Une carte par DIRECTION. Reconnaissance et production sont deux compétences de
   difficulté différente : on peut reconnaître し de façon fiable et être incapable
   de l'écrire depuis « shi ». Tant qu'un seul état FSRS portait les deux, le
   planificateur en moyennait le signal, donc sur-espaçait la direction faible et
   sous-espaçait la forte.

   La clé de la carte de reconnaissance reste l'identifiant de l'item : les données
   existantes et les charges utiles de synchro restent valides, aucune migration. La
   carte de production prend un suffixe. */
const PROD_SUFFIX = "#p";
const baseId = (id) => {
  const n = String(id).indexOf(PROD_SUFFIX);
  return n === -1 ? String(id) : String(id).slice(0, n);
};
const isProd = (id) => String(id).endsWith(PROD_SUFFIX);
/* index par identifiant : item() était un balayage linéaire de 1434 entrées appelé
   plusieurs fois par carte affichée, et le doublement des cartes l'aggravait. */
const ITEM_BY_ID = Object.create(null);
for (const i of ITEMS) ITEM_BY_ID[i.id] = i;
/* accepte une clé de carte comme un identifiant d'item : c'est ce qui laisse tous
   les appels existants fonctionner sans les reprendre un par un. */
const item = (id) => ITEM_BY_ID[baseId(id)];
/* Applique les corrections de verso conservées par l'utilisateur. Elles ne portent
   jamais sur le recto : la graphie sert d'index aux prérequis, la modifier
   désynchroniserait KIDX et le calcul des atomes du §7. */
function appliquerSurcharges() {
  for (const id in app.itemEdits || {}) {
    const i = ITEM_BY_ID[id];
    if (!i) continue;
    for (const [champ, valeur] of Object.entries(app.itemEdits[id] || {}))
      if (["gloss", "keyword", "en", "rom"].includes(champ)) i[champ] = valeur;
  }
}
const STORAGE_KEY = "anki-jp-state-v1";
/* une carte n'est un prérequis fiable qu'après plusieurs rappels réussis,
   pas dès la première exposition : évite de débloquer kanji/mots/pokémon
   sur un hiragana vu une seule fois. */
const MASTERY_REPS = 5;
/* goodReps seul est un cliquet : il ne redescend jamais, donc une carte oubliée
   depuis longtemps continuait de compter comme maîtrisée et de débloquer des
   prérequis. On exige donc aussi une stabilité courante d'au moins trois semaines
   ; le même seuil que « mature » dans stateOf. Après une rechute, FSRS effondre la
   stabilité : la carte perd son statut jusqu'à l'avoir reconstruite. */
const MASTERY_STABILITY = 21;

/* ---- trois paliers, parce qu'un seul prédicat servait deux besoins opposés ----
   « Puis-je lire ce caractère ? » conditionne la lisibilité d'une question : ce
   doit être atteint vite, sinon le contenu se tarit. « L'ai-je retenu ? » atteste
   d'un acquis : ce doit être lent, sinon l'attestation ne vaut rien. Les confondre
   verrouillait le contenu derrière une condition de rétention longue de deux mois,
   alors qu'un deck s'épuise en une semaine ; d'où 38 jours consécutifs sans rien
   à étudier au deuxième mois.

     learned  a passé ses pas d'apprentissage         → lisible
     solid    a survécu à un intervalle espacé        → utilisable comme base
     known    cinq réussites et trois semaines stable → maîtrisé (affichage, badges)

   Les trois redescendent après une rechute : c'est voulu pour les statistiques.
   Les déblocages, eux, sont rendus définitifs par syncDeckUnlocks ; une porte
   franchie ne se referme pas, sinon une carte oubliée retirerait du contenu déjà
   en cours d'étude. */
const LEARNED_REPS = 2,
  LEARNED_STABILITY = 1;
const SOLID_REPS = 3,
  SOLID_STABILITY = 2;
const learned = (id) =>
  !!cards[id] &&
  (cards[id].goodReps || 0) >= LEARNED_REPS &&
  (cards[id].stab || 0) >= LEARNED_STABILITY;
const solid = (id) =>
  !!cards[id] &&
  (cards[id].goodReps || 0) >= SOLID_REPS &&
  (cards[id].stab || 0) >= SOLID_STABILITY;
const cardKnown = (id) =>
  !!cards[id] &&
  (cards[id].goodReps || 0) >= MASTERY_REPS &&
  (cards[id].stab || 0) >= MASTERY_STABILITY;
/* Maîtriser un item, c'est le tenir dans LES DEUX directions : le reconnaître et le
   produire. `learned` et `solid` restent au contraire des propriétés de la seule
   carte de reconnaissance ; savoir lire un caractère est une compétence de
   reconnaissance, et c'est elle qui conditionne la lisibilité d'une question. Les
   portes conservent donc exactement le calibrage mesuré. */
const known = (id) => cardIdsFor(id).every(cardKnown);
const allDeckItems = (id) => ITEMS.filter((i) => i.deck === id);
const masteredCount = (id) =>
  allDeckItems(id).filter((i) => known(i.id)).length;
const learnedCount = (id) => allDeckItems(id).filter((i) => learned(i.id)).length;
const solidCount = (id) => allDeckItems(id).filter((i) => solid(i.id)).length;
const totalCount = (id) => allDeckItems(id).length;
function deckUnlockInfo(dk) {
  if (dk.level && dk.level !== "n5") {
    const lvl = levelUnlockInfo(dk.level);
    return {
      stage: dk.level.toUpperCase(),
      open: lvl.open,
      limit: lvl.open ? totalCount(dk.id) : 0,
      label: dk.name,
      need: lvl.need || `unlock ${dk.level.toUpperCase()}`,
    };
  }
  /* Seuils calibrés sur le rythme d'introduction, pas sur la rétention longue.
     Le katakana ne dépend d'aucun hiragana (ses réponses sont en romaji) : le
     retenir n'est qu'un séquencement, on ouvre donc dès que l'hiragana est
     largement lisible. Le kanji, lui, dépend vraiment des kana puisque ses
     lectures se tapent en hiragana ; on exige les deux syllabaires, l'hiragana
     consolidé, pour ne pas faire échouer une carte sur une faute de kana plutôt
     que sur la lecture. */
  const KATA_NEEDS_HIRA = 90;
  const KANJI_NEEDS_HIRA_SOLID = 100;
  const KANJI_NEEDS_KATA = 100;
  const VOCAB_NEEDS_KANJI_SOLID = 30;
  const hiraLearned = learnedCount("hira");
  const hiraSolid = solidCount("hira");
  const kataLearned = learnedCount("kata");
  const kanjiSolid = solidCount("kanji");
  const kanaReady =
    hiraSolid >= KANJI_NEEDS_HIRA_SOLID && kataLearned >= KANJI_NEEDS_KATA;
  /* Le seuil de déblocage est un COMPTE ("90/104 lisibles"), pas une liste figée :
     n'importe quels 90 suffisent. Pour autant, savoir LESQUELS manquent est
     l'information qui aide vraiment à progresser — Collection l'affichait pour
     Pokémon (atomsOf un mot précis) mais pas ici, alors que c'est la même
     mécanique de déblocage. On liste les items pas encore appris, triés pour
     rester lisibles même sur les grands decks. */
  const missingGlyphs = (deckId, pred, cap) =>
    allDeckItems(deckId)
      .filter((i) => !pred(i.id))
      .slice(0, cap)
      .map((i) => i.glyph);
  const gate = (id, rawOpen, label, need, missing) => {
    if (rawOpen) markDeckUnlocked(id);
    const open = rawOpen || deckUnlocked(id);
    return {
      stage: "N5",
      open,
      limit: open ? totalCount(id) : 0,
      label,
      need,
      missing: open ? [] : missing || [],
    };
  };
  if (dk.id === "hira")
    return {
      stage: "N5",
      open: true,
      limit: totalCount("hira"),
      label: "Hiragana",
    };
  if (dk.id === "kata")
    return gate(
      "kata",
      hiraLearned >= KATA_NEEDS_HIRA,
      "Katakana",
      `${Math.min(hiraLearned, KATA_NEEDS_HIRA)}/${KATA_NEEDS_HIRA} hiragana lisibles`,
      missingGlyphs("hira", learned, 12),
    );
  if (dk.id === "kanji")
    return gate(
      "kanji",
      kanaReady,
      "Kanji N5",
      `${Math.min(hiraSolid, KANJI_NEEDS_HIRA_SOLID)}/${KANJI_NEEDS_HIRA_SOLID} hiragana consolidés · ${Math.min(kataLearned, KANJI_NEEDS_KATA)}/${KANJI_NEEDS_KATA} katakana lisibles`,
      hiraSolid < KANJI_NEEDS_HIRA_SOLID
        ? missingGlyphs("hira", solid, 12)
        : missingGlyphs("kata", learned, 12),
    );
  if (dk.id === "vocab")
    return gate(
      "vocab",
      kanaReady && kanjiSolid >= VOCAB_NEEDS_KANJI_SOLID,
      "Sentences N5",
      kanaReady
        ? `${Math.min(kanjiSolid, VOCAB_NEEDS_KANJI_SOLID)}/${VOCAB_NEEDS_KANJI_SOLID} kanji consolidés`
        : `les deux syllabaires d'abord`,
    );
  return pokemonUnlockInfo();
}
const deckVisibleItems = (dk) => {
  const info = deckUnlockInfo(dk);
  const items = allDeckItems(dk.id)
    .slice()
    .sort((a, b) => a.idx - b.idx);
  const limited =
    info.limit >= items.length ? items : items.slice(0, info.limit);
  // Pokémon only enter the pool once their kana prerequisites are genuinely mastered
  if (dk.id === "pkmn")
    return limited.filter(
      (i) => !!(app.pokemonUnlocks && app.pokemonUnlocks[i.id]),
    );
  return limited;
};
const POKEMON_SHINY_RATE = 1 / 32;
/* Condition de déblocage d'un Pokémon : savoir LIRE chaque katakana de son nom.
   Exiger la maîtrise repoussait le premier Pokémon au 128e jour, soit très loin
   après le moment où le nom devient effectivement déchiffrable. */
function pokemonUnlockedByKana(i) {
  return atomsOf(i).every(learned);
}
function pokemonUnlockInfo() {
  const items = allDeckItems("pkmn");
  const unlocked = items.filter(pokemonUnlockedByKana).length;
  const total = items.length;
  return {
    stage: "N5",
    open: true,
    limit: total,
    label: "Pokémon 151",
    need: `${unlocked}/${total} débloqués par les kana`,
    total,
    unlocked,
  };
}
/* Une porte franchie ne se referme jamais. Les trois paliers redescendent après une
   rechute ; c'est souhaitable pour les statistiques, mais si le déblocage en
   dépendait, un hiragana oublié retirerait tout le deck kanji de l'étude en cours.
   On enregistre donc le franchissement. */
function deckUnlocked(id) {
  return !!(app.deckUnlocks && app.deckUnlocks[id]);
}
function markDeckUnlocked(id) {
  if (!app.deckUnlocks) app.deckUnlocks = {};
  if (app.deckUnlocks[id]) return false;
  app.deckUnlocks[id] = Date.now();
  saveState();
  return true;
}
function pokemonMeta(id) {
  return (app.pokemonUnlocks && app.pokemonUnlocks[id]) || null;
}
function syncPokemonUnlocks() {
  if (!app.pokemonUnlocks) app.pokemonUnlocks = {};
  const validIds = new Set(
    allDeckItems("pkmn")
      .filter(pokemonUnlockedByKana)
      .map((i) => i.id),
  );
  let changed = false;
  /* Un déblocage est acquis définitivement. Depuis que known() peut redescendre
     après une rechute, révoquer reprendrait à l'utilisateur un Pokémon déjà gagné, chromatique compris. Le i+1 continue de s'appliquer à ce qui
     n'est pas encore débloqué ; on ne purge donc que les identifiants inconnus. */
  const allPkmnIds = new Set(allDeckItems("pkmn").map((i) => i.id));
  for (const id in app.pokemonUnlocks) {
    if (!allPkmnIds.has(id)) {
      delete app.pokemonUnlocks[id];
      changed = true;
    }
  }
  // Add new unlocks
  for (const id of validIds) {
    if (!app.pokemonUnlocks[id]) {
      app.pokemonUnlocks[id] = {
        unlockedAt: Date.now(),
        shiny: Math.random() < POKEMON_SHINY_RATE,
      };
      changed = true;
    }
  }
  return changed;
}
/* N4 à N1 restent verrouillés pendant des mois d'usage réel (déblocage à 90 % de
   consolidation du niveau précédent) : les afficher en entier, un par un, à
   chaque visite de Collection, c'est beaucoup d'espace pour une information
   qu'on ne peut pas encore utiliser. On les regroupe dans un <details> replié,
   avec un résumé qui dit où on en est sans qu'il faille l'ouvrir — natif HTML,
   pas de nouvel état JS à synchroniser, l'ouverture reste au clavier comme à la
   souris. Reste ouvert de lui-même dès qu'au moins un de ces niveaux est
   accessible : ce n'est plus un horizon lointain, ça mérite la visibilité. */
function beyondN5Html() {
  const beyond = LEVELS.filter((l) => l.id !== "n5");
  const anyOpen = beyond.some((l) => levelUnlockInfo(l.id).open);
  const items = beyond.flatMap((l) => decksForLevel(l.id).flatMap((dk) => allDeckItems(dk.id)));
  const masteredBeyond = items.filter((i) => known(i.id)).length;
  return `<details class="level-card" ${anyOpen ? "open" : ""} style="padding:0">
  <summary style="cursor:pointer;padding:14px 16px;display:flex;align-items:center;justify-content:space-between;gap:12px">
    <span class="level-sub"><strong>N4 → N1</strong> · ${masteredBeyond}/${items.length} maîtrisées${anyOpen ? "" : " · verrouillés"}</span>
    <span class="deck-chevron" style="font-size:16px">▾</span>
  </summary>
  <div style="padding:0 16px 14px">${levelRowsHtml(beyond)}</div>
  </details>`;
}
function levelRowsHtml(levels) {
  return levels.map((l) => {
    const info = levelUnlockInfo(l.id);
    const decks = decksForLevel(l.id);
    const levelItems = decks.flatMap((dk) => allDeckItems(dk.id));
    const mastered = levelItems.filter((i) => known(i.id)).length;
    const total = levelItems.length;
    const subtitle =
      l.id === "n5"
        ? "Hiragana, katakana, kanji et vocabulaire"
        : info.open
          ? "Disponible"
          : `Verrouillé : ${info.need}`;
    const progress = total ? Math.round((mastered / total) * 100) : 0;
    const deckList = decks
      .map((dk) => {
        const dkInfo = deckUnlockInfo(dk);
        const deckItems = allDeckItems(dk.id);
        /* « à réviser » et « en cours » se comptent en CARTES, puisqu'un item en
           porte deux depuis le découpage par direction ; « maîtrisées » se compte en
           items, la maîtrise exigeant les deux sens. */
        const cs = deckCards(dk.id);
        const mastered = deckItems.filter((i) => known(i.id)).length;
        const learning = cs.filter((c) => c.reps > 0 && !cardKnown(c.id)).length;
        const due = cs.filter(
          (c) => c.due !== null && c.due <= Date.now(),
        ).length;
        /* Le compte seul ("80/90 lisibles") ne dit pas QUOI réviser en priorité.
           On affiche les premiers caractères encore manquants, dans le même style
           que les atomes de prérequis déjà utilisés pour Pokémon — la mécanique de
           déblocage est identique, l'affichage doit l'être aussi. */
        const missingHtml = dkInfo.missing?.length
          ? `<div class="atoms">${dkInfo.missing.map((g) => `<span class="new">${esc(g)}</span>`).join("")}${dkInfo.missing.length >= 12 ? `<span class="new" style="border:none;color:var(--ink-faint)">…</span>` : ""}</div>`
          : "";
        /* Bouton de révision directe : jusqu'ici, réviser un deck précis depuis
           Collection exigeait de cliquer la ligne, atterrir sur le détail, puis
           cliquer un second bouton « Étudier · N » — deux écrans pour lancer une
           session ciblée. queueFor(dk.id) est la même fonction que le détail du
           deck utilise pour afficher son propre compteur, donc le nombre annoncé
           ici reste exact. stopPropagation empêche le clic sur le bouton de
           déclencher aussi la navigation portée par la ligne parente. */
        const dueCount = dkInfo.open ? queueFor(dk.id).length : 0;
        const reviewBtn =
          dueCount > 0
            ? `<button class="chip" data-quick-start="${esc(dk.id)}" style="height:32px;flex:none">Réviser · ${dueCount}</button>`
            : "";
        return `<div class="deck-link ${dkInfo.open ? "open" : "locked"}" data-deck="${dk.id}">
      <span class="deck-progress-main"><strong>${esc(dk.name)}</strong><small>${dkInfo.open ? `${mastered}/${deckItems.length} maîtrisées · ${learning} en cours · ${due} à réviser` : `Verrouillé · ${esc(dkInfo.need || "Terminez l'étape précédente")}`}</small>${missingHtml}</span>
       ${reviewBtn}
       <span class="deck-chevron">›</span>
      </div>`;
      })
      .join("");
    return `<div class="level-card ${info.open ? "open" : "locked"}">
   <div class="level-row">
    <div class="level-main">
    <div class="level-top"><span class="level-pill">${l.label}</span><span class="level-title">Collection ${l.label}</span></div>
     <div class="level-sub">${esc(subtitle)}</div>
     <div class="collection-progress"><span style="width:${progress}%"></span></div>
    <div class="level-sub"><strong>${mastered}/${total}</strong> maîtrisées (${progress} %)</div>
    </div>
   </div>
   ${deckList ? `<div class="level-decks">${deckList}</div>` : ""}
  </div>`;
  }).join("");
}
const SMALL_KANA_BASE = {
  ぁ: "あ",
  ぃ: "い",
  ぅ: "う",
  ぇ: "え",
  ぉ: "お",
  ァ: "ア",
  ィ: "イ",
  ゥ: "ウ",
  ェ: "エ",
  ォ: "オ",
};
function kanaPrerequisiteIds(text, index) {
  const ids = kanaUnits(text).flatMap((unit) => {
    if (index[unit]) return [index[unit]];
    return [...unit]
      .filter((char) => /[ぁ-ゖァ-ヶ]/.test(char))
      .map((char) => index[SMALL_KANA_BASE[char] || char])
      .filter(Boolean);
  });
  return [...new Set(ids)];
}
function atomsOf(i) {
  if (i.kind === "glyph") return [];
  if (i.kind === "kanji") return [];
  if (i.kind === "lex") return kanaPrerequisiteIds(i.read, KIDX.hira);
  if (i.kind === "name") return kanaPrerequisiteIds(i.ja, KIDX.kata);
  return [];
}
/* i+1 : la question ne doit contenir que des atomes LISIBLES. C'est une condition
   de lecture, pas de rétention ; exiger la maîtrise ici privait les cartes de tout
   contexte utilisable pendant des semaines. */
const unknownIn = (ids) => ids.filter((id) => !learned(id)).length;

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    const today = dayKey();
    if (stored?.cards) {
      for (const id in stored.cards) {
        if (cards[id]) Object.assign(cards[id], stored.cards[id]);
      }
    }
    if (stored?.app) {
      Object.assign(app, stored.app);
      app.sync = { ...SYNC_DEFAULT, ...(stored.app.sync || {}) };
      if (!app.sync.url) app.sync.url = SYNC_DEFAULT.url;
      if (typeof app.sync.enabled !== "boolean")
        app.sync.enabled = SYNC_DEFAULT.enabled;
    }
    app.dataUpdatedAt =
      app.dataUpdatedAt ||
      Math.max(
        0,
        ...Object.values(cards).map((c) => c.modifiedAt || c.lastSeen || 0),
      );
    app.sessionDay =
      stored?.sessionDay === today
        ? today
        : stored?.sessQueue?.length
          ? today
          : null;
      if (stored?.dailyStats) {
      app.dailyStats = stored.dailyStats;
    }
    if (stored?.pokemonUnlocks) {
      app.pokemonUnlocks = stored.pokemonUnlocks;
    }
    if (stored?.deckUnlocks) {
      app.deckUnlocks = stored.deckUnlocks;
    }
    if (Array.isArray(stored?.reviewLog)) {
      app.reviewLog = stored.reviewLog;
    }
    if (stored?.itemEdits) {
      app.itemEdits = stored.itemEdits;
      appliquerSurcharges();
    }
    app.lastUid = stored?.lastUid || null;
    if (stored?.decks) {
      for (const dk of stored.decks) {
        const target = DECKS.find((d) => d.id === dk.id);
        if (target) Object.assign(target, dk);
      }
    }
    if (stored?.sessQueue?.length && app.sessionDay === today) {
      const q = stored.sessQueue.map((id) => cards[id]).filter(Boolean);
      if (q.length)
        app.pausedSession = {
          queue: q,
          seen: stored.sessSeen || 0,
          ok: stored.sessOk || 0,
        };
    } else {
      app.pausedSession = null;
    }
    const backfilled = syncPokemonUnlocks();
    if (backfilled) saveState();
  } catch (e) {
    console.warn("Failed to load state", e);
  }
}
function saveState() {
  try {
    const decks = DECKS.map((dk) => ({
      id: dk.id,
      answer: dk.answer,
      grading: dk.grading,
      audio: dk.audio,
      furi: dk.furi,
      newPerDay: dk.newPerDay,
    }));
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        cards,
        app: {
          theme: app.theme,
          mute: app.mute,
          detailed: app.detailed,
          kb: app.kb,
          sync: app.sync,
          audioSource: app.audioSource || "enregistrement",
          dataUpdatedAt: app.dataUpdatedAt || 0,
          sessionUpdatedAt: app.sessionUpdatedAt || 0,
          dailyPlan: app.dailyPlan || null,
        },
        sessionDay: app.sessionDay || null,
        decks,
        dailyStats: app.dailyStats || {},
        pokemonUnlocks: app.pokemonUnlocks || {},
        deckUnlocks: app.deckUnlocks || {},
        itemEdits: app.itemEdits || {},
        reviewLog: app.reviewLog || [],
        sessQueue:
          app.pausedSession?.queue?.map((c) => c.id) ||
          (app.sess ? app.sess.queue.map((c) => c.id) : null),
        sessSeen:
          app.pausedSession?.seen ?? (app.sess ? app.sess.seen : undefined),
        sessOk: app.pausedSession?.ok ?? (app.sess ? app.sess.ok : undefined),
        lastUid: app.auth?.uid || app.lastUid || null,
      }),
    );
  } catch (e) {
    console.warn("Failed to save state", e);
  }
}
function flushState() {
  if (!app) return;
  saveState();
  maybeAutoPush();
}
function syncBaseUrl() {
  const raw = ((app.sync && app.sync.url) || "").trim();
  return raw.replace(/\/+$/, "");
}
function syncUserKey() {
  return app.auth?.uid || "";
}
async function syncRequestUrl() {
  const base = syncBaseUrl();
  const key = syncUserKey();
  const token = await firebaseAuth?.currentUser?.getIdToken();
  if (!token) throw new Error("Firebase authentication required");
  return `${base}/anki-sync/${encodeURIComponent(key)}.json?auth=${encodeURIComponent(token)}`;
}
function syncReady() {
  const s = app.sync || {};
  return !!(app.auth?.uid && s.enabled && syncBaseUrl() && syncUserKey());
}
function localPayload() {
  const decks = DECKS.map((dk) => ({
    id: dk.id,
    answer: dk.answer,
    grading: dk.grading,
    audio: dk.audio,
    furi: dk.furi,
    newPerDay: dk.newPerDay,
  }));
  return {
    version: 2,
    cards,
    decks,
    dailyStats: app.dailyStats || {},
    pokemonUnlocks: app.pokemonUnlocks || {},
    deckUnlocks: app.deckUnlocks || {},
    itemEdits: app.itemEdits || {},
    reviewLog: app.reviewLog || [],
    dailyPlan: app.dailyPlan || null,
    session: {
      day: app.sessionDay || null,
      queue:
        app.pausedSession?.queue?.map((c) => c.id) ||
        (app.sess ? app.sess.queue.map((c) => c.id) : []),
      seen: app.pausedSession?.seen ?? app.sess?.seen ?? 0,
      ok: app.pausedSession?.ok ?? app.sess?.ok ?? 0,
      updatedAt: app.sessionUpdatedAt || 0,
    },
    dataUpdatedAt: app.dataUpdatedAt || 0,
    updatedAt: new Date().toISOString(),
  };
}
function validRemoteCard(id, remote) {
  if (!cards[id] || !remote || remote.id !== id) return false;
  const nonNegative = ["reps", "goodReps", "lapses", "stab"];
  if (
    nonNegative.some(
      (key) => !Number.isFinite(remote[key] || 0) || (remote[key] || 0) < 0,
    )
  )
    return false;
  if ((remote.goodReps || 0) > (remote.reps || 0)) return false;
  if (
    remote.due !== null &&
    remote.due !== undefined &&
    !Number.isFinite(remote.due)
  )
    return false;
  return true;
}
function applyPayload(payload) {
  if (!payload || !payload.cards) return false;
  for (const id in payload.cards) {
    const remote = payload.cards[id];
    if (!validRemoteCard(id, remote)) continue;
    const localChanged = cards[id].modifiedAt || cards[id].lastSeen || 0;
    const remoteChanged = remote.modifiedAt || remote.lastSeen || 0;
    if (remoteChanged >= localChanged) Object.assign(cards[id], remote);
  }
  const remoteUpdated =
    payload.dataUpdatedAt || Date.parse(payload.updatedAt) || 0;
  /* Le journal quotidien reste, il alimente le bridage adaptatif du §10.3.
     Les anciennes charges utiles portent encore un bloc `progress` : on l'ignore
     simplement, sans le rejeter, pour qu'une synchro antérieure reste lisible. */
  if (remoteUpdated >= (app.dataUpdatedAt || 0)) {
    app.dailyStats = payload.dailyStats || {};
    app.dataUpdatedAt = remoteUpdated;
  }
  app.pokemonUnlocks = payload.pokemonUnlocks || {};
  /* union, jamais remplacement : un déblocage obtenu sur un autre appareil ne doit
     pas disparaître parce que ce navigateur ne l'avait pas encore vu. */
  app.deckUnlocks = { ...(payload.deckUnlocks || {}), ...(app.deckUnlocks || {}) };
  if (payload.itemEdits) {
    app.itemEdits = { ...(payload.itemEdits || {}), ...(app.itemEdits || {}) };
    appliquerSurcharges();
  }
  /* Le journal est en ajout seul : deux appareils produisent des lignes distinctes
     qu'il faut réunir, et non remplacer. Dédoublonnage sur carte et horodatage. */
  if (Array.isArray(payload.reviewLog)) {
    const vu = new Set();
    const fusion = [];
    for (const e of [...payload.reviewLog, ...(app.reviewLog || [])]) {
      /* Dédoublonnage sur la ligne ENTIÈRE et non sur carte plus horodatage :
         plusieurs notations peuvent tomber dans la même milliseconde, et la clé
         courte les écrasait. Deux lignes rigoureusement identiques désignent le
         même événement synchronisé deux fois, les collapser est donc juste. */
      const cle = JSON.stringify(e);
      if (vu.has(cle)) continue;
      vu.add(cle);
      fusion.push(e);
    }
    fusion.sort((x, y) => (x[1] || 0) - (y[1] || 0));
    app.reviewLog = fusion.slice(-REVIEW_LOG_MAX);
  }
  if (
    payload.dailyPlan?.day === dayKey() &&
    (payload.dailyPlan.createdAt || 0) >= (app.dailyPlan?.createdAt || 0)
  )
    app.dailyPlan = payload.dailyPlan;
  if (Array.isArray(payload.decks)) {
    for (const dk of payload.decks) {
      const target = DECKS.find((d) => d.id === dk.id);
      if (target) Object.assign(target, dk);
    }
  }
  const remoteSession = payload.session;
  if (
    remoteSession?.day === dayKey() &&
    (remoteSession.updatedAt || 0) >= (app.sessionUpdatedAt || 0)
  ) {
    const queue = (remoteSession.queue || [])
      .map((id) => cards[id])
      .filter(Boolean);
    app.sessionDay = remoteSession.day;
    app.sessionUpdatedAt = remoteSession.updatedAt || 0;
    app.pausedSession = queue.length
      ? { queue, seen: remoteSession.seen || 0, ok: remoteSession.ok || 0 }
      : null;
  }
  syncPokemonUnlocks();
  saveState();
  return true;
}
async function cloudPush() {
  if (!syncReady()) throw new Error("Sync config incomplete");
  const payload = localPayload();
  const body = {
    user_id: String(syncUserKey()),
    payload,
    updated_at: new Date().toISOString(),
  };
  const res = await fetch(await syncRequestUrl(), {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Push failed (${res.status})`);
  app.sync.lastSync = Date.now();
  app.sync.lastError = "";
  app.sync.lastDirection = "push";
  saveState();
}
async function cloudPull() {
  if (!syncReady()) throw new Error("Sync config incomplete");
  const res = await fetch(await syncRequestUrl());
  if (!res.ok) throw new Error(`Pull failed (${res.status})`);
  const row = await res.json();
  if (!row || !row.payload) return false;
  const changed = applyPayload(row.payload);
  app.sync.lastSync = Date.now();
  app.sync.lastError = "";
  app.sync.lastDirection = "pull";
  saveState();
  return changed;
}
let syncBusy = false;
let lastAutoPushAt = 0;
let syncHydrated = false;
async function runSync(dir) {
  if (syncBusy) return;
  syncBusy = true;
  try {
    if (dir === "pull") await cloudPull();
    else await cloudPush();
    render();
  } catch (e) {
    app.sync.lastError = String(e.message || e);
    saveState();
    render();
  } finally {
    if (dir === "pull") syncHydrated = true;
    syncBusy = false;
  }
}
function maybeAutoPush() {
  if (!syncHydrated || !syncReady() || !(app.sync && app.sync.auto)) return;
  const now = Date.now();
  if (now - lastAutoPushAt < 45000) return;
  lastAutoPushAt = now;
  runSync("push");
}

/* ===================== ordonnanceur ===================== */
const DAY = 864e5,
  /* en deçà de cet horizon, une carte est encore « du jour » : elle est reprise
     dans la session courante plutôt que reportée au lendemain. */
  LEARNING_HORIZON = 12 * 36e5,
  cards = {};
const emptyCard = (id) => ({
  id,
  stab: 0,
  diff: 5,
  due: null,
  reps: 0,
  goodReps: 0,
  lapses: 0,
  last: null,
});
/* Les noms de Pokémon n'ont pas de carte sœur : leurs deux faces ; anglais →
   katakana, et écoute → katakana ; sont déjà des faces de production. */
const hasProduction = (i) => i.kind !== "name";
const productionId = (itemId) => {
  const i = ITEM_BY_ID[baseId(itemId)];
  return i && hasProduction(i) ? baseId(itemId) + PROD_SUFFIX : null;
};
const cardIdsFor = (itemId) => {
  const p = productionId(itemId);
  return p ? [baseId(itemId), p] : [baseId(itemId)];
};
ITEMS.forEach((i) => {
  cards[i.id] = emptyCard(i.id);
  const p = productionId(i.id);
  if (p) cards[p] = emptyCard(p);
});
/* Isolation multi-compte. `localStorage` n'est pas scopé par utilisateur (une seule
   clé STORAGE_KEY) : sur un appareil partagé, se connecter avec un second compte
   Google chargeait encore les cartes/progression du premier tant qu'un pull cloud
   n'avait pas écrasé les valeurs les plus récentes — et la fusion latest-wins
   d'applyPayload() pouvait alors renvoyer les progrès du premier compte vers le
   cloud du second si ses horodatages étaient plus récents. Corrigé le 28/08/2026 :
   avant tout pull, si l'uid connecté diffère du dernier uid connu localement, on
   repart d'un état vierge — jamais d'un mélange entre deux comptes. */
function ensureLocalDataBelongsTo(uid) {
  if (!uid || !app.lastUid || app.lastUid === uid) return;
  for (const id in cards) Object.assign(cards[id], emptyCard(id));
  app.dailyStats = {};
  app.pokemonUnlocks = {};
  app.deckUnlocks = {};
  app.itemEdits = {};
  app.reviewLog = [];
  app.dailyPlan = null;
  app.pausedSession = null;
  app.dataUpdatedAt = 0;
}
const deckCards = (deckId) =>
  allDeckItems(deckId).flatMap((i) => cardIdsFor(i.id).map((id) => cards[id]));
function stateOf(c) {
  if (c.reps === 0) return "new";
  if (c.lapses && c.stab < 1) return "lrn";
  return c.stab >= 21 ? "mature" : "young";
}
/* enable_short_term : les pas d'apprentissage du jour même. Une carte neuve vue
   une seule fois puis renvoyée à trois jours ne s'encode pas ; FSRS sait gérer
   une reprise à quelques minutes, et la session la redemande (voir commit). */
const fsrsScheduler = globalThis.FSRS
  ? globalThis.FSRS.fsrs({
      request_retention: 0.9,
      enable_short_term: true,
      enable_fuzz: true,
    })
  : null;
function fsrsCard(c, now, prevSeen) {
  const isNew = !c.reps;
  return {
    due: new Date(c.due || now),
    stability: isNew ? 0 : Math.max(0.001, c.stab || 0.001),
    difficulty: isNew ? 0 : Math.min(10, Math.max(1, c.diff || 5)),
    elapsed_days: c.fsrsElapsedDays || 0,
    scheduled_days: c.fsrsScheduledDays || Math.max(0, Math.round(c.stab || 0)),
    reps: c.reps || 0,
    lapses: c.lapses || 0,
    /* l'état et l'index de pas doivent survivre d'une révision à l'autre, sinon
       une carte en cours d'apprentissage repasse pour une carte mûre et saute
       ses pas courts. */
    learning_steps: c.fsrsLearningSteps || 0,
    state: isNew
      ? globalThis.FSRS.State.New
      : (c.fsrsState ?? globalThis.FSRS.State.Review),
    /* last_review est la révision PRÉCÉDENTE : FSRS en tire elapsed_days, donc la
       rétrievabilité, donc tout le gain de stabilité. La lire après avoir écrit
       c.lastSeen la ramenait à « maintenant », elapsed_days restait à 0 et chaque
       intervalle se figeait à sa valeur initiale. */
    last_review: prevSeen ? new Date(prevSeen) : undefined,
  };
}
/* Journal de révisions. L'application ne conservait que l'état agrégé de chaque
   carte, ce qui interdit trois choses : optimiser les poids FSRS, qui se calculent
   sur l'historique complet ; produire une statistique honnête ; et surtout réparer
   après coup un bug d'ordonnancement. On vient d'en vivre un, neuf mois d'intervalles
   corrompus en silence, et sans journal les dégâts étaient définitifs. C'est
   l'assurance qui manquait exactement quand elle aurait servi.

   Une ligne par notation : carte, horodatage, verdict, intervalle attribué,
   stabilité, et écart réellement observé depuis la révision précédente. Ce dernier
   champ est celui qui aurait rendu le bug visible. Format tabulaire et non objet,
   pour que le poids reste raisonnable. */
/* Sangsue. La mise de côté existante n'était qu'un coupe-circuit de séance : une
   carte ratée chaque jour revenait chaque jour, sans marque, sans veille, et sans
   moyen de l'écarter. Anki suspend au bout de huit rechutes ; on fait de même, en
   comptant les rechutes cumulées que FSRS tient déjà. Une carte qu'on échoue huit
   fois n'a pas un problème de planification, elle a un problème d'énoncé. */
const LEECH_TOTAL = 8;
const REVIEW_LOG_MAX = 20000;
function logReview(c, good, prevSeen) {
  if (!app.reviewLog) app.reviewLog = [];
  app.reviewLog.push([
    c.id,
    c.lastSeen,
    good ? 1 : 0,
    c.fsrsScheduledDays ?? null,
    Math.round((c.stab || 0) * 100) / 100,
    prevSeen ? Math.round(((c.lastSeen - prevSeen) / DAY) * 100) / 100 : 0,
  ]);
  /* Plafond glissant : environ 800 Ko au maximum, largement sous la limite du
     stockage local, et les entrées les plus anciennes sont les moins utiles. */
  if (app.reviewLog.length > REVIEW_LOG_MAX)
    app.reviewLog.splice(0, app.reviewLog.length - REVIEW_LOG_MAX);
}
const schedulerReady = () => !!fsrsScheduler;
/* Sans planificateur, on ne note RIEN. L'ancien code retombait sur un ordonnanceur
   maison, celui-là même que la spec §14 dit de remplacer : une panne de CDN
   suffisait à faire calculer les intervalles par la mauvaise formule, sans le
   moindre signal, et les valeurs produites polluaient ensuite l'état FSRS puisque
   les deux écrivaient dans les mêmes champs. La corruption survivait à la panne.
   Refuser franchement vaut mieux que dégrader en silence. */
function grade(c, good, elapsed) {
  if (!schedulerReady()) {
    app.schedulerDown = true;
    return false;
  }
  const reviewedAt = new Date();
  const prevSeen = c.lastSeen;
  if (good) c.goodReps = (c.goodReps || 0) + 1;
  c.lastSeen = reviewedAt.getTime();
  c.modifiedAt = c.lastSeen;
  c.responseCount = (c.responseCount || 0) + 1;
  c.responseAvg =
    ((c.responseAvg || 0) * (c.responseCount - 1) + elapsed) / c.responseCount;
  const rating = good
    ? globalThis.FSRS.Rating.Good
    : globalThis.FSRS.Rating.Again;
  const next = fsrsScheduler.next(
    fsrsCard(c, reviewedAt, prevSeen),
    reviewedAt,
    rating,
  ).card;
  c.reps = next.reps;
  c.lapses = next.lapses;
  c.stab = next.stability;
  c.diff = next.difficulty;
  c.due = next.due.getTime();
  c.fsrsElapsedDays = next.elapsed_days;
  c.fsrsScheduledDays = next.scheduled_days;
  c.fsrsState = next.state;
  c.fsrsLearningSteps = next.learning_steps || 0;
  logReview(c, good, prevSeen);
  if (!good && (c.lapses || 0) >= LEECH_TOTAL && !c.suspended) {
    c.suspended = true;
    c.suspendedAt = c.lastSeen;
    app.leechJustSuspended = c.id;
  }
  saveState();
  return true;
}
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function dayKey(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function normalizeDailyState() {
  const today = dayKey();
  if (app.dailyPlan?.day !== today) app.dailyPlan = null;
  if (app.sessionDay && app.sessionDay !== today && !app.sess) {
    app.sessionDay = null;
    app.pausedSession = null;
    app.sessionUpdatedAt = Date.now();
  }
}
function dailyDefault() {
  return { attempts: 0, good: 0, wrong: 0, skip: 0 };
}
function getDailyStats() {
  if (!app.dailyStats) app.dailyStats = {};
  return app.dailyStats;
}
/* Ne sert plus qu'au bridage adaptatif du §10.3, qui a besoin du taux de réussite
   des sept derniers jours. Aucun point n'y est plus compté. */
function noteDailyProgress(outcome) {
  const stats = getDailyStats();
  const key = dayKey();
  const day = stats[key] || (stats[key] = dailyDefault());
  day.attempts = (day.attempts || 0) + 1;
  day[outcome] = (day[outcome] || 0) + 1;
  app.dailyStats = stats;
}
/* kanji fait figure d'exception : c'est un deck ordonné (non filtré par atomes),
   mais ses lectures sont en hiragana ; donc pas de nouveau kanji tant que la base
   hiragana n'est pas raisonnablement en place. */
const KANJI_UNLOCK_HIRA = 10;
function validateDeckData() {
  const errors = [];
  const seenIds = new Set();
  const seenContent = new Set();
  const deckIds = new Set(DECKS.map((dk) => dk.id));
  const required = {
    glyph: ["glyph", "kana", "rom"],
    kanji: ["glyph", "keyword"],
    lex: ["surface", "read", "gloss"],
    name: ["ja", "en", "type"],
  };

  for (const i of ITEMS) {
    if (seenIds.has(i.id)) errors.push(`Identifiant dupliqué : ${i.id}`);
    seenIds.add(i.id);
    if (!deckIds.has(i.deck))
      errors.push(`${i.id} référence le deck inconnu ${i.deck}`);
    if (!required[i.kind]) errors.push(`${i.id} a un type inconnu : ${i.kind}`);
    for (const field of required[i.kind] || []) {
      if (typeof i[field] !== "string" || !i[field].trim())
        errors.push(`${i.id} n'a pas de valeur ${field}`);
    }
    const primary = i.glyph || i.surface || i.ja;
    const contentKey = `${i.deck}:${i.kind}:${primary}`;
    if (seenContent.has(contentKey))
      errors.push(`Contenu dupliqué dans ${i.deck} : ${primary}`);
    seenContent.add(contentKey);
  }

  for (const dk of DECKS) {
    if (!LEVELS.some((l) => l.id === dk.level))
      errors.push(`${dk.id} référence le niveau inconnu ${dk.level}`);
    if (!ITEMS.some((i) => i.deck === dk.id))
      errors.push(`${dk.id} ne contient aucune carte`);
    if (!Number.isInteger(dk.newPerDay) || dk.newPerDay <= 0)
      errors.push(`${dk.id} a un quota quotidien invalide`);
  }
  for (const l of LEVELS) {
    for (const deckId of l.deckIds) {
      if (!deckIds.has(deckId))
        errors.push(`${l.id} référence le deck inconnu ${deckId}`);
    }
  }

  /* Spec §10 : trois contextes minimum par item de vocabulaire. En deçà, la rotation
     retombe sur les mêmes phrases et l'on mémorise l'indice, pas le mot. */
  const MIN_CONTEXTS = 3;
  for (const i of ITEMS.filter((x) => x.kind === "lex")) {
    const n = CTX.filter((x) => x.lex === i.id).length;
    if (n < MIN_CONTEXTS)
      errors.push(`${i.id} n'a que ${n} contexte(s), ${MIN_CONTEXTS} requis`);
  }
  /* Un contexte doit désigner un segment cible valide, sinon le cloze élide au
     hasard et la réponse attendue ne correspond à rien. */
  for (const x of CTX) {
    if (!Number.isInteger(x.ti) || x.ti < 0 || x.ti >= x.segs.length)
      errors.push(`${x.id} a un index cible invalide (${x.ti})`);
    else {
      const target = x.segs[x.ti];
      const reading = target.r || target.t;
      if (!x.ans.some((a) => normKana(a) === normKana(reading)))
        errors.push(
          `${x.id} : la réponse attendue ne correspond pas au segment cible (${reading})`,
        );
    }
  }
  const unlockThresholds = { hira: 30, kata: 30, kanji: 10 };
  for (const [deckId, threshold] of Object.entries(unlockThresholds)) {
    const count = ITEMS.filter((i) => i.deck === deckId).length;
    if (count < threshold)
      errors.push(`${deckId} ne permet pas d'atteindre le seuil ${threshold}`);
  }
  for (const i of ITEMS.filter((entry) => entry.deck === "pkmn")) {
    for (const unit of kanaUnits(i.ja)) {
      const kana = [...unit].filter((char) => /[ァ-ヶ]/.test(char));
      if (
        kana.length &&
        !KIDX.kata[unit] &&
        kana.some((char) => !KIDX.kata[SMALL_KANA_BASE[char] || char])
      )
        errors.push(`${i.id} utilise le kana non mappé ${unit}`);
    }
  }
  return errors;
}
/* Renvoie des CLÉS DE CARTE, plus des items : depuis le découpage par direction, un
   même item fournit deux cartes à introduire, à deux moments différents. */
function unseenPool(dk) {
  const items = deckVisibleItems(dk);
  const fresh = items.filter(
    (i) => cards[i.id].reps === 0 && !cards[i.id].suspended,
  );
  const ordered = dk.ordered
    ? fresh.slice().sort((a, b) => a.idx - b.idx)
    : // pré-mélange puis tri stable : voir pickCtx
      shuffle(
        fresh.map((i) => ({
          item: i,
          unknown: unknownIn(atomsOf(i)),
          len: (i.surface || i.ja || i.glyph || "").length,
        })),
      )
        .sort((a, b) => a.unknown - b.unknown || a.len - b.len)
        .map((x) => x.item);
  /* La production ne s'ouvre qu'une fois la reconnaissance acquise : devoir écrire
     une graphie qu'on ne reconnaît pas encore n'est pas du rappel, c'est une
     devinette. Et elle passe AVANT les nouveaux items ; consolider ce qui est déjà
     entamé vaut mieux que laisser grossir une dette de production. */
  const siblings = items
    .map((i) => productionId(i.id))
    .filter(
      (p) => p && cards[p].reps === 0 && !cards[p].suspended && learned(baseId(p)),
    );
  let pool = [...siblings, ...ordered.map((i) => i.id)];
  /* Garde-fou : les lectures de kanji se tapent en hiragana. Redondant avec la
     porte du deck, mais il protège le cas où le deck a été débloqué puis les
     hiragana oubliés ; le déblocage est définitif, la lisibilité ne l'est pas. */
  if (dk.id === "kanji" && learnedCount("hira") < KANJI_UNLOCK_HIRA) pool = [];
  return pool;
}
function newFor(dk, limit) {
  const n = limit === undefined ? dk.newPerDay : limit;
  return unseenPool(dk)
    .slice(0, n)
    .map((id) => cards[id]);
}
/* `newPerDay` est désormais un vrai PLAFOND par deck, pas un poids. Avant, la
   valeur était divisée par la somme de tous les decks : un deck réglé à 10 sur un
   total de 46 recevait 10/46 des places, soit 3. Le réglage promettait donc un
   nombre que l'application ne servait jamais. Il borne maintenant ce que le deck
   peut recevoir ; l'ordre des decks (des fondations vers les niveaux hauts) donne
   la priorité, et le reliquat glisse vers les decks suivants dès qu'un deck est
   plafonné, épuisé ou verrouillé. */
function allocateNewBudget(remaining) {
  const avail = {};
  for (const dk of DECKS) avail[dk.id] = unseenPool(dk).length;
  const alloc = {};
  let left = remaining;
  for (const dk of DECKS) {
    const give = Math.min(dk.newPerDay, avail[dk.id], Math.max(0, left));
    alloc[dk.id] = give;
    left -= give;
  }
  return alloc;
}
/* Charge quotidienne FIXE, exprimée en expositions, donc en cartes à l'écran.
   Un sélecteur court, normal, long a existé : retiré à la demande, parce qu'une
   habitude tient sur la constance, et qu'un choix quotidien est une décision de plus
   à prendre avant même d'avoir commencé. Même dose chaque jour. */
const DAILY_BUDGET = 30;
/* Une carte neuve est vue deux fois le jour de son introduction : la présentation,
   puis la reprise du pas d'apprentissage. Le budget se compte en expositions, donc
   une nouveauté en consomme deux ; sans quoi une journée sans révision servait
   30 nouveautés, soit 60 cartes à l'écran. */
const EXPOSURES_PER_NEW_CARD = 2;
/* Régime dégradé. Mesuré à 70 % de précision : aucune porte ne s'ouvrait en quatre
   mois et la session gonflait à 55 cartes, parce que les échecs se rejouent en
   séance pendant que de nouvelles cartes continuent d'entrer. L'apprenant qui a le
   plus besoin d'aide reçoit donc plus de charge et moins de progrès.

   La réponse n'est pas d'abaisser les portes (quelqu'un qui rate 30 % de ses kana
   n'est pas prêt pour le katakana) mais de tarir l'apport de nouveautés pour lui
   laisser consolider l'existant. Le mécanisme est auto-correcteur : moins de
   nouveautés, donc plus de répétitions sur les cartes en cours, donc la stabilité
   remonte, donc la porte finit par s'ouvrir. C'est aussi le conseil constant de la
   communauté Anki : devant un taux d'échec élevé, on coupe les nouvelles cartes. */
const ACCURACY_WINDOW_DAYS = 7;
const ACCURACY_MIN_SAMPLE = 30;
/* FSRS vise 90 % de rétention : 70 % est déjà très dégradé, d'où un bridage qui
   mord tôt et fort. */
const THROTTLE_FLOOR = 0.7;
const THROTTLE_START = 0.85;
/* Mais jamais zéro tant qu'il reste du contenu à introduire : les portes se
   comptent en nombre absolu de caractères lisibles, donc couper complètement
   l'apport les verrouillerait pour de bon ; l'apprenant en difficulté serait puni
   deux fois. Un filet d'eau garantit que le seuil reste atteignable, tout en
   ramenant la charge à ce qu'il peut absorber. */
const THROTTLE_MIN_NEW = 2;
function recentAccuracy() {
  const stats = getDailyStats();
  let good = 0,
    attempts = 0;
  const now = new Date();
  for (let n = 0; n < ACCURACY_WINDOW_DAYS; n++) {
    const d = new Date(now);
    d.setDate(d.getDate() - n);
    const day = stats[dayKey(d)];
    if (!day) continue;
    good += day.good || 0;
    attempts += day.attempts || 0;
  }
  // en dessous de l'échantillon minimal, on ne conclut rien
  if (attempts < ACCURACY_MIN_SAMPLE) return null;
  return good / attempts;
}
function newCardFactor() {
  const acc = recentAccuracy();
  if (acc === null || acc >= THROTTLE_START) return 1;
  if (acc <= THROTTLE_FLOOR) return 0;
  return (acc - THROTTLE_FLOOR) / (THROTTLE_START - THROTTLE_FLOOR);
}
function ensureDailyPlan(dueCount) {
  const today = dayKey();
  if (app.dailyPlan?.day === today) return app.dailyPlan;
  const room = Math.max(0, DAILY_BUDGET - dueCount);
  const full = Math.floor(room / EXPOSURES_PER_NEW_CARD);
  const factor = newCardFactor();
  const slots =
    factor < 1 && full > 0
      ? Math.max(THROTTLE_MIN_NEW, Math.floor(full * factor))
      : full;
  const alloc = allocateNewBudget(Math.min(full, slots));
  const newIds = [];
  for (const dk of DECKS)
    newIds.push(...newFor(dk, alloc[dk.id]).map((c) => c.id));
  app.dailyPlan = { day: today, newIds, createdAt: Date.now() };
  saveState();
  return app.dailyPlan;
}
function queueFor(id) {
  const now = Date.now();
  let due = [];
  const targets = id ? [deck(id)] : DECKS;
  for (const dk of targets)
    for (const i of deckVisibleItems(dk))
      for (const cardId of cardIdsFor(i.id)) {
        const c = cards[cardId];
        // une carte en veille ne revient pas d'elle-même : voir LEECH_TOTAL
        if (c && !c.suspended && c.due !== null && c.due <= now) due.push(c);
      }
  /* Les révisions dues n'étaient bornées par rien : seules les nouveautés
     l'étaient. Après une semaine d'absence, « Normal · 30 » servait donc deux
     cents cartes. On plafonne, en commençant par les PLUS EN RETARD ; ce sont
     celles dont la rétention se dégrade le plus, et les reporter coûte davantage
     que de reporter une carte tout juste échue. Le surplus reste dû et revient
     demain, sans pénalité : FSRS n'a pas de notion de retard.

     Corrigé le 28/08/2026 : cette règle ne s'appliquait qu'à la session globale
     (queueFor() sans deck). Étudier un deck précis depuis sa page (queueFor(id))
     contournait entièrement le plafond et le bridage adaptatif — un deck en
     retard de plusieurs jours servait toutes ses cartes dues d'un coup (mesuré :
     jusqu'à 67 cartes en une session, sans coupure). Le même plafond s'applique
     désormais aux deux chemins. */
  due.sort((a, b) => a.due - b.due);
  const budget = DAILY_BUDGET;
  const kept = due.slice(0, budget);
  app.deferredReviews = due.length - kept.length;
  if (id) {
    const factor = newCardFactor();
    const room = Math.max(0, budget - kept.length);
    const dk = deck(id);
    const cap = Math.min(dk.newPerDay, room);
    const slots =
      factor < 1 && cap > 0 ? Math.max(THROTTLE_MIN_NEW, Math.floor(cap * factor)) : cap;
    return burySiblings(shuffle([...kept, ...newFor(dk, Math.max(0, slots))]));
  }
  const plan = ensureDailyPlan(kept.length);
  const existing = new Set(kept.map((c) => c.id));
  const out = kept.slice();
  for (const cardId of plan.newIds) {
    const card = cards[cardId];
    if (card && card.reps === 0 && !existing.has(cardId)) out.push(card);
  }
  return burySiblings(shuffle(out));
}
/* Enterrement des cartes sœurs : jamais les deux directions d'un même item dans la
   même session. Voir 山 → « yama » puis « yama » → 山 à quelques cartes d'écart
   donne la réponse au lieu de la faire chercher, et les deux intervalles se
   verrouilleraient sur le même rythme au lieu de diverger selon la difficulté
   propre à chaque direction. */
function burySiblings(queue) {
  const seenItems = new Set();
  const out = [];
  for (const c of queue) {
    const base = baseId(c.id);
    if (seenItems.has(base)) continue;
    seenItems.add(base);
    out.push(c);
  }
  return out;
}

/* sélection de contexte : le moins d'atomes inconnus, jamais celui de la répétition précédente */
function pickCtx(c, pool, atoms) {
  if (!pool.length) return null;
  /* pré-mélange puis tri stable : Math.random() dans un comparateur n'est pas
     transitif, le résultat dépend de l'implémentation de sort et n'est pas
     uniforme. Le hasard ne doit départager que les ex æquo. */
  return shuffle(
    pool.map((x) => ({
      x,
      // baseId : les atomes sont des identifiants d'item, la carte peut être une sœur
      u: unknownIn(atoms(x).filter((a) => a !== baseId(c.id))),
      r: x.id === c.last ? 1 : 0,
    })),
  ).sort((a, b) => a.r - b.r || a.u - b.u)[0];
}
function ctxForGlyph(c) {
  const i = item(c.id),
    map = KIDX[i.deck];
  const pool = WORDCTX.filter(
    (w) => w.units.includes(i.kana) && w.units.length > 1,
  );
  return pickCtx(c, pool, (w) =>
    w.units.map((u) => map[i.deck === "kata" ? toKata(u) : u]).filter(Boolean),
  );
}
function ctxForKanji(c) {
  const i = item(c.id);
  const pool = COMPCTX.filter((m) => m.kanji.includes(i.glyph));
  return pickCtx(c, pool, (m) =>
    m.kanji.map((k) => KIDX.kanji[k]).filter(Boolean),
  );
}
/* Atomes d'une phrase : les kanji qu'elle contient et qui sont eux-mêmes des
   cartes. Sans cela ctxForLex passait une fonction vide, u valait toujours 0, et
   toute phrase était réputée lisible : le seul deck où le i+1 compte vraiment en
   était exempté. On classe ici du plus lisible au moins lisible sans jamais
   bloquer ; un item de vocabulaire n'a que deux ou trois phrases, les exclure
   toutes le priverait de contexte, et la spec ne contraint que la question. */
function sentenceAtoms(x) {
  const ids = [];
  for (const g of x.segs)
    for (const ch of g.t) {
      const id = KIDX.kanji[ch];
      if (id && !ids.includes(id)) ids.push(id);
    }
  return ids;
}
function ctxForLex(c) {
  return pickCtx(
    c,
    CTX.filter((x) => x.lex === c.id),
    sentenceAtoms,
  );
}

/* Le i+1 contraint la QUESTION, pas la révélation : voir un mot dont on ignore
   des kana ne coûte rien, y répondre coûte cher. Donc tout item porte un contexte
   au dos, même à sa première exposition. */
function ctxBlockFor(i, f) {
  if (["cloze", "word", "comp"].includes(f)) return null;
  if (i.kind === "glyph") {
    const pool = WORDCTX.filter(
      (w) => w.units.includes(i.kana) && w.units.length > 1,
    );
    if (!pool.length) return null;
    const w = pool[Math.abs(hash(i.id)) % pool.length];
    const kata = i.deck === "kata",
      tgt = kata ? toKata(i.kana) : i.kana;
    const word = kata ? toKata(w.word) : w.word;
    return {
      ja: word.replace(tgt, "\u0001" + tgt + "\u0002"),
      kana: word,
      rom: w.rom,
      en: w.en,
    };
  }
  if (i.kind === "kanji") {
    const pool = COMPCTX.filter((m) => m.kanji.includes(i.glyph));
    if (!pool.length) return null;
    const m = pool[Math.abs(hash(i.id)) % pool.length];
    return {
      ja: m.word.replace(i.glyph, "\u0001" + i.glyph + "\u0002"),
      kana: m.read.join(" / "),
      rom: toRomaji(m.read[0]),
      en: m.en,
    };
  }
  if (i.kind === "lex") {
    const pool = CTX.filter((x) => x.lex === i.id);
    if (!pool.length) return null;
    const x = pool[Math.abs(hash(i.id)) % pool.length];
    return {
      ja: x.segs
        .map((g, n) => (n === x.ti ? "\u0001" + g.t + "\u0002" : g.t))
        .join(""),
      kana: segKana(x.segs),
      rom: segRomaji(x.segs),
      en: x.en,
    };
  }
  if (i.kind === "name")
    return {
      ja: "\u0001" + i.ja + "\u0002",
      kana: i.ja,
      rom: toRomaji(i.ja),
      en: i.type,
    };
  return null;
}
function hash(s) {
  let h = 0;
  for (let n = 0; n < s.length; n++) h = (h * 31 + s.charCodeAt(n)) | 0;
  return h;
}
const ctxHTML = (t) =>
  esc(t).split("\u0001").join("<em>").split("\u0002").join("</em>");
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCXUHF_DMUni9dUnhK8VitdpouFLuqMUFU",
  authDomain: "flashcard-1d3b9.firebaseapp.com",
  databaseURL:
    "https://flashcard-1d3b9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "flashcard-1d3b9",
  appId: "1:688878772243:web:30063782e65f6641c05fe6",
};
let firebaseAuth = null;
const SYNC_DEFAULT = {
  enabled: true,
  auto: true,
  url: "https://flashcard-1d3b9-default-rtdb.europe-west1.firebasedatabase.app/",
  lastSync: 0,
  lastError: "",
  lastDirection: "",
};

/* ===================== état ===================== */
const app = {
  route: "home",
  deck: null,
  editing: null,
  tab: "cards",
  filter: "all",
  q: "",
  kb: true,
  detailed: false,
  mute: false,
  theme: "light",
  sess: null,
  sync: { ...SYNC_DEFAULT },
  auth: null,
  loginError: "",
  sessionDay: null,
  sessionUpdatedAt: 0,
  dataUpdatedAt: 0,
  dailyPlan: null,
};
const view = document.getElementById("view"),
  navEl = document.getElementById("nav");
function esc(s) {
  s = String(s);
  s = s.replace(/&/g, "&amp;");
  s = s.replace(/</g, "&lt;");
  s = s.replace(/>/g, "&gt;");
  s = s.replace(/"/g, "&quot;");
  return s;
}
function segHTML(s, furi) {
  if (!s.r) return esc(s.t);
  if (furi) return "<ruby>" + esc(s.t) + "<rt>" + esc(s.r) + "</rt></ruby>";
  return esc(s.t);
}
function go(r, o = {}) {
  Object.assign(app, { route: r }, o);
  render();
}
function render() {
  if (!app.auth) app.route = "login";
  document.documentElement.dataset.theme = app.theme;
  const inSess = app.route === "session" || app.route === "summary";
  const inLogin = app.route === "login";
  if (navEl) {
    navEl.className = inSess || inLogin ? "hide" : "";
    navEl.innerHTML =
      inSess || inLogin
        ? ""
        : [
            ["home", "学", "Étudier"],
            ["collection", "集", "Collection"],
            ["settings", "設", "Réglages"],
          ]
            .map(
              ([r, g, l]) =>
                `<button data-go="${r}" class="${app.route === r || (r === "collection" && ["deck", "editor"].includes(app.route)) ? "on" : ""}"><span class="ic">${g}</span>${l}</button>`,
            )
            .join("");
  }
  if (view) {
    view.innerHTML = {
      home: Home,
      collection: Collection,
      deck: Deck,
      editor: Editor,
      settings: Settings,
      session: Session,
      summary: Summary,
      login: Login,
    }[app.route]();
    bind();
  }
}

/* ===================== écrans ===================== */
function Login() {
  const err = app.loginError || "";
  return `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:var(--s3);min-height:100%;box-sizing:border-box">
    <div style="font-size:72px;line-height:1;margin-bottom:10px;font-family:var(--f-jp)">学</div>
    <p class="muted" style="font-size:12px;margin:0 0 44px;letter-spacing:.12em">JLPT STUDY</p>
    <div style="width:100%;max-width:300px">
      ${err ? `<p style="color:var(--shu);font-size:13px;margin:6px 0 0">${esc(err)}</p>` : ""}
      <button class="btn" data-login="" style="margin-top:20px">Continuer avec Google</button>
    </div>
  </div>`;
}
/* Durée estimée d'une session : moyenne du temps de réponse réellement observé
   sur les cartes déjà vues (c.responseAvg, en ms), pondérée par leur nombre de
   réponses. Sans historique, aucune estimation n'est affichée : un chiffre
   deviné de mémoire serait une fausse information, pas une aide. */
function estimatedMinutes(expositions) {
  if (!expositions) return null;
  let totalMs = 0,
    totalCount = 0;
  for (const id in cards) {
    const c = cards[id];
    if (c.responseCount > 0) {
      totalMs += c.responseAvg * c.responseCount;
      totalCount += c.responseCount;
    }
  }
  if (!totalCount) return null;
  const avgMs = totalMs / totalCount;
  const minutes = Math.round((avgMs * expositions) / 60000);
  return minutes < 1 ? "moins d'une minute" : `~${minutes} min`;
}
function Home() {
  normalizeDailyState();
  const reprise = !!app.pausedSession?.queue?.length;
  const file = reprise ? app.pausedSession.queue : queueFor();
  const restantes = file.length;
  const neuves = file.filter((c) => c.reps === 0).length;
  const revisions = restantes - neuves;
  /* Une nouveauté est vue deux fois le jour de son introduction : on annonce donc
     des expositions, pas des cartes distinctes. Voir §10.2. */
  const expositions = neuves * EXPOSURES_PER_NEW_CARD + revisions;
  const jour = new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  const aVenir = dueOutlook();

  /* Un seul objectif ici : lancer en un tap (§5). Tout ce qui n'aide pas à décider
     de lancer a été retiré ou réduit à une ligne. Les trois lignes d'échéances sont
     devenues une phrase, la ventilation deux rangées bordées est devenue une ligne
     grise, et les explications ne s'affichent que lorsqu'elles expliquent vraiment
     quelque chose. */
  return `<div class="scroll pad" style="position:relative">
  <span class="mono faint" style="position:absolute;top:10px;right:0;font-size:11px;letter-spacing:.04em">v${BUILD_VERSION}</span>
  <p class="label" style="margin-top:24px">${esc(jour)}</p>

  ${
    !aVenir.circulating
      ? `<p class="faint" style="font-size:13px;line-height:1.7;margin:16px 0 0;text-align:center">Chaque carte revient un peu plus tard à chaque bonne réponse, et plus vite après une erreur. Rien à régler : le rythme s'ajuste tout seul à mesure que vous répondez.</p>`
      : ""
  }

  <div style="display:flex;justify-content:center;margin:44px 0 14px">
   <div class="sq" style="width:146px"><span class="mono" style="font-size:60px">${reprise ? restantes : expositions}</span></div>
  </div>
  <p class="muted" style="text-align:center;font-size:14px;margin:0 0 4px">${reprise ? "cartes restantes" : "cartes à voir"}</p>
  ${
    restantes && !reprise
      ? `<p class="faint" style="text-align:center;font-size:12px;margin:0 0 28px">${neuves} nouvelle${neuves > 1 ? "s" : ""}${revisions ? ` · ${revisions} révision${revisions > 1 ? "s" : ""}` : ""}${(() => { const est = estimatedMinutes(expositions); return est ? ` · ${est}` : ""; })()}</p>`
      : `<div style="height:24px"></div>`
  }

  ${
    !schedulerReady()
      ? `<div class="empty" style="padding:0;color:var(--shu)">Planificateur indisponible : sans lui aucune révision ne peut être datée. Reconnectez-vous une fois au réseau, il sera mis en cache. Votre progression est intacte.</div>`
      : reprise
        ? `<button class="btn" data-start="resume">Reprendre</button>`
        : restantes
          ? `<button class="btn" data-start="">Commencer</button>`
          : `<div class="empty" style="padding:0">Rien à réviser. Les prochaines cartes reviendront à leur échéance.</div>`
  }

  ${
    !reprise && loadNote(neuves, revisions)
      ? `<p class="faint" style="font-size:12px;line-height:1.6;margin:10px 0 0;text-align:center">${esc(loadNote(neuves, revisions))}</p>`
      : ""
  }

  <p class="faint" style="font-size:12px;line-height:1.7;margin:28px 0 0;text-align:center">${
    aVenir.circulating
      ? `Demain ${aVenir.tomorrow} · sur sept jours ${aVenir.week}` +
        (app.deferredReviews
          ? `<br>${app.deferredReviews} révision${app.deferredReviews > 1 ? "s" : ""} reportée${app.deferredReviews > 1 ? "s" : ""} à demain, les plus en retard passent d'abord.`
          : "")
      : "Aucune carte encore commencée."
  }</p>
  <div style="height:24px"></div></div>`;
}
/* Remplace la heatmap annuelle : 365 cases de 11 px avec des infobulles
   inutilisables au doigt occupaient la moitié de l'écran principal pour une
   information sur laquelle on ne peut pas agir ; et c'était, littéralement, le
   compteur de série de jours que la spec §12.2 interdit. Ici on répond à la seule
   question utile avant de lancer une session : ce qui arrive ensuite. */
/* Le budget n'est pas toujours ce qui borne la session : au démarrage, seul
   l'hiragana est ouvert et son plafond vaut 10, donc « Long · 60 » ne change rien.
   Sans explication, le réglage passerait pour cassé ; on dit donc ce qui borne
   réellement, et où le régler. */
function loadNote(newCount, reviewCount) {
  /* Le régime dégradé passe avant : c'est l'explication la plus utile, et la plus
     susceptible d'être prise pour une panne. */
  const acc = recentAccuracy();
  const factor = newCardFactor();
  if (factor < 1)
    return `Nouveautés réduites : ${Math.round(acc * 100)} % de réussite sur sept jours, pour ${Math.round(THROTTLE_START * 100)} % attendus. Mieux vaut consolider que d'empiler.`;
  const slots = Math.floor(
    Math.max(0, DAILY_BUDGET - reviewCount) / EXPOSURES_PER_NEW_CARD,
  );
  if (newCount >= slots) return "";
  let capped = 0,
    available = 0;
  for (const dk of DECKS) {
    const pool = unseenPool(dk).length;
    available += pool;
    capped += Math.min(dk.newPerDay, pool);
  }
  /* Court, parce que c'est l'écran de lancement : le détail vit dans les réglages du
     deck, là où l'on va justement pour changer le plafond. */
  if (available > capped) return "Plafonné par les réglages de chaque deck.";
  return "Tout le contenu ouvert est déjà en cours.";
}
function dueOutlook() {
  const now = Date.now();
  /* en cartes, pas en items : c'est la charge à venir qu'on annonce, et les deux
     directions se planifient séparément */
  let circulating = 0,
    tomorrow = 0,
    week = 0;
  for (const id in cards) {
    const c = cards[id];
    if (c.reps > 0) circulating++;
    if (c.due === null || c.due <= now) continue;
    if (c.due <= now + DAY) tomorrow++;
    if (c.due <= now + 7 * DAY) week++;
  }
  const hint = circulating
    ? `${masteredCount("hira") + masteredCount("kata")} kana maîtrisés sur 208. Une carte réussie s'éloigne, une carte ratée revient vite : c'est normal que ces nombres bougent.`
    : "Aucune carte encore commencée. La première session en introduit quelques-unes.";
  return { tomorrow, week, circulating, hint };
}

function face(i) {
  if (i.kind === "lex") return [i.surface, i.gloss];
  if (i.kind === "glyph") return [i.glyph, i.rom];
  if (i.kind === "kanji") return [i.glyph, i.keyword];
  return [i.ja, i.en];
}
function Collection() {
  const pkmn = pokemonUnlockInfo();
  const studied = ITEMS.filter((i) =>
    cardIdsFor(i.id).some((id) => cards[id].reps > 0),
  ).length;
  const mastered = ITEMS.filter((i) => i.deck !== "pkmn" && known(i.id)).length;
  const shinyCount = app.pokemonUnlocks
    ? Object.values(app.pokemonUnlocks).filter((x) => x.shiny).length
    : 0;
  return `<div class="hdr"><h1>Collection</h1></div><div class="scroll pad">
  <div class="collection-overview">
  <div><strong class="mono">${studied}</strong><span>étudiées</span></div>
  <div><strong class="mono">${mastered}</strong><span>maîtrisées</span></div>
  <p>Une carte est maîtrisée après ${MASTERY_REPS} réussites espacées, quand son intervalle dépasse ${MASTERY_STABILITY} jours. Un caractère devient lisible bien avant : c'est ce qui débloque la suite.</p>
  </div>
  <div class="label" style="margin:12px 0 10px">Collections JLPT</div>
  ${levelRowsHtml(LEVELS.filter((l) => l.id === "n5"))}
  ${beyondN5Html()}
  <div class="label" style="margin:22px 0 10px">Pokémon collection</div>
  <div class="level-card ${pkmn.open ? "open" : "locked"}" data-deck="pkmn">
   <div class="level-row">
    <div class="level-main">
     <div class="level-top"><span class="level-pill">151</span><span class="level-title">Pokémon</span></div>
    <div class="level-sub"><strong>${pkmn.unlocked}/${pkmn.total}</strong> débloqués${shinyCount ? ` · ${shinyCount} chromatique${shinyCount > 1 ? "s" : ""}` : ""}</div>
     <div class="level-sub">Condition : maîtriser chaque katakana du nom japonais.</div>
    </div>
    <span class="deck-chevron">›</span>
   </div>
  </div>
  <div style="height:24px"></div></div>`;
}

function Deck() {
  const dk = deck(app.deck);
  /* startSession(id) gérait déjà la session ciblée sur un deck, mais aucun écran
     n'en offrait le déclencheur. Utile pour reprendre un deck précis sans attendre
     que le plan du jour veuille bien en servir. */
  const targeted = queueFor(dk.id).length;
  return `<div class="hdr"><button class="back" data-go="collection">←</button><h1>${esc(dk.name)}</h1>
  ${targeted ? `<button class="chip" data-start="${dk.id}" style="height:32px">Étudier · ${targeted}</button>` : ""}</div>
 <div class="tabs">${[
   ["cards", "Cartes"],
   ["settings", "Réglages"],
   ["stats", "Statistiques"],
 ]
   .map(
     ([t, l]) =>
       `<button data-tab="${t}" class="${app.tab === t ? "on" : ""}">${l}</button>`,
   )
   .join("")}</div>
 ${{ cards: DeckCards, settings: DeckSettings, stats: DeckStats }[app.tab](dk)}`;
}
function reviewTimingLabel(c) {
  if (c.due === null) return "pas encore planifiée";
  const remaining = c.due - Date.now();
  if (remaining <= 0) return "à réviser maintenant";
  const hours = Math.ceil(remaining / 36e5);
  if (hours < 24) return `dans ${hours} h`;
  const days = Math.ceil(remaining / DAY);
  return `dans ${days} j`;
}
function DeckCards(dk) {
  /* Les filtres portent sur l'ITEM, en interrogeant ses deux directions : une carte
     dont seule la production est due doit apparaître sous « à réviser ». */
  const anyCard = (i, pred) => cardIdsFor(i.id).some((id) => pred(cards[id]));
  const F = {
    all: () => true,
    new: (i) => cardIdsFor(i.id).every((id) => cards[id].reps === 0),
    learning: (i) => !known(i.id) && anyCard(i, (c) => c.reps > 0),
    due: (i) => anyCard(i, (c) => c.due !== null && c.due <= Date.now()),
    veille: (i) => anyCard(i, (c) => !!c.suspended),
  };
  if (!F[app.filter]) app.filter = "all";
  const info = deckUnlockInfo(dk);
  // For pkmn, show all 151 items so the user can see which kana they still need
  const baseItems =
    dk.id === "pkmn"
      ? allDeckItems("pkmn")
          .slice()
          .sort((a, b) => a.idx - b.idx)
      : deckVisibleItems(dk);
  const list = baseItems
    .filter((i) => {
      if (!app.q) return true;
      const [a, b] = face(i);
      return (a + b).toLowerCase().includes(app.q.toLowerCase());
    })
    .filter((i) => F[app.filter](i));
  if (!info.open)
    return `<div class="scroll pad"><div style="height:12px"></div><div class="empty">Verrouillé pour le moment.<br>${esc(info.need || "Maîtrisez d'abord les decks de base.")}.</div><div style="height:24px"></div></div>`;
  return `<div class="scroll pad">
  <div class="field" style="margin:12px 0"><input id="q" placeholder="Rechercher" value="${esc(app.q)}"></div>
  <div class="chips" style="margin-bottom:8px">${[
    ["all", "Toutes"],
    ["new", "Pas commencées"],
    ["learning", "En cours"],
    ["due", "À réviser"],
    ["veille", "En veille"],
  ]
    .map(
      ([value, label]) =>
        `<button class="chip ${app.filter === value ? "on" : ""}" data-filter="${value}">${label}</button>`,
    )
    .join("")}</div>
  ${
    list.length
      ? list
          .map((i) => {
            const c = cards[i.id],
              [a, b] = face(i),
              meta = i.deck === "pkmn" ? pokemonMeta(i.id) : null;
            const prod = productionId(i.id);
            /* On affiche l'avancement des deux directions : c'est la seule façon de
               voir qu'un caractère se lit sans qu'on sache l'écrire. */
            const enVeille = cardIdsFor(i.id).some((id) => cards[id].suspended);
            const entamee = cardIdsFor(i.id).some((id) => cards[id].reps > 0);
            const cells = (n) =>
              `<span class="cells">${Array.from(
                { length: MASTERY_REPS },
                (_, k) =>
                  `<span class="${k < n ? "filled" : ""}"></span>`,
              ).join("")}</span>`;
            const status = enVeille
              ? "en veille"
              : known(i.id)
                ? "maîtrisée"
                : entamee
                  ? `<span class="item-progress">${
                      prod
                        ? `<span class="dirs"><span class="dir-label">L</span>${cells(cards[i.id].goodReps || 0)}</span><span class="dirs"><span class="dir-label">É</span>${cells(cards[prod].goodReps || 0)}</span>`
                        : cells(c.goodReps || 0)
                    }</span>`
                  : "pas commencée";
            /* échéance la plus proche des deux directions */
            const nextDue = cardIdsFor(i.id)
              .map((id) => cards[id])
              .filter((x) => x.due !== null)
              .sort((x, y) => x.due - y.due)[0];
            // For pkmn, show prerequisite kana with mastery coloring
            const prereqs = i.deck === "pkmn" ? atomsOf(i) : [];
            const prereqHtml = prereqs.length
              ? `<div class="atoms" style="margin:2px 0 0;gap:3px">${prereqs.map((id) => `<span class="${known(id) ? "known" : "new"}" style="font-size:11px;height:20px;min-width:20px">${esc(item(id)?.glyph || "?")}</span>`).join("")}</div>`
              : "";
            const pkmnUnlocked =
              i.deck === "pkmn" && app.pokemonUnlocks?.[i.id];
            return `<div class="row${meta?.shiny ? " shiny" : ""}" data-edit="${i.id}" style="min-height:44px;align-items:flex-start;padding:8px 0">
    <div style="flex:1;overflow:hidden">
      <div style="font-family:var(--f-jp);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(a)}<span class="faint" style="font-size:13px"> ${esc(b)}</span>${meta?.shiny ? ` <span class="tag-shiny">shiny</span>` : ""}</div>
      ${prereqHtml}
    </div>
    <span class="faint" style="font-size:12px;padding-top:2px">${i.deck === "pkmn" ? (pkmnUnlocked ? "débloqué" : "verrouillé") : status}</span>
    <span class="faint mono" style="font-size:11px;min-width:92px;text-align:right;padding-top:2px">${reviewTimingLabel(nextDue || c)}</span></div>`;
          })
          .join("")
      : '<div class="empty">Aucune carte ne correspond à ce filtre.</div>'
  }
  <div style="height:24px"></div></div>`;
}
function DeckSettings(dk) {
  const sel = (k, opts) =>
    `<label class="field"><span class="label">${k.label}</span><select data-dk="${k.key}">${opts
      .map(
        ([v, l]) =>
          `<option value="${v}"${dk[k.key] === v ? " selected" : ""}>${l}</option>`,
      )
      .join("")}</select></label>`;
  return `<div class="scroll pad"><div style="height:12px"></div>
 ${sel({ label: "Saisie", key: "answer" }, [
   ["kana", "conversion en kana pendant la saisie"],
   ["romaji", "conserver les romaji"],
 ])}
 ${sel({ label: "Évaluation", key: "grading" }, [
   ["typed", "réponse saisie"],
   ["self", "auto-évaluation"],
 ])}
 ${sel({ label: "Audio", key: "audio" }, [
   ["reveal", "à l'affichage de la réponse"],
   ["always", "question et réponse"],
   ["never", "jamais"],
 ])}
 ${sel({ label: "Furigana", key: "furi" }, [
   ["hidden", "affichés avec la réponse"],
   ["always", "toujours visibles"],
   ["never", "jamais"],
 ])}
 <label class="field"><span class="label">Nouvelles cartes par jour</span>
  <input type="number" min="0" max="50" value="${dk.newPerDay}" data-dk="newPerDay"></label>
 <p class="faint" style="font-size:13px;line-height:1.7">${
   dk.kind === "glyph"
     ? "La saisie reste en romaji car la cible est un son. Les réponses équivalentes sont acceptées en kana ou en romaji."
     : dk.kind === "kanji"
       ? "Saisissez la lecture en romaji ou en kana. La lecture pertinente est apprise dans les mots composés."
       : dk.kind === "name"
         ? "Chaque nom rejoint les sessions dès que tous les katakana de son écriture sont lisibles."
         : "Les phrases changent entre les révisions pour apprendre le mot, pas une réponse figée."
 }</p>
 <p class="faint" style="font-size:12px;line-height:1.6">Chaque carte est interrogée dans les deux directions, reconnaissance et production, avec un intervalle propre à chacune.</p>
 <div style="height:24px"></div></div>`;
}
function DeckStats(dk) {
  const info = deckUnlockInfo(dk);
  const deckItems = allDeckItems(dk.id);
  /* Deux unités à ne pas confondre : l'item, qui est ce qu'on apprend, et la carte,
     qui est une direction d'interrogation. L'historique et la charge se comptent en
     cartes ; la maîtrise et l'avancement, en items. */
  const cs = deckCards(dk.id);
  const total = deckItems.length;
  const mastered = deckItems.filter((i) => known(i.id)).length;
  const learning = deckItems.filter(
    (i) => !known(i.id) && cardIdsFor(i.id).some((id) => cards[id].reps > 0),
  ).length;
  const notStarted = total - mastered - learning;
  const dueNow = cs.filter((c) => c.due !== null && c.due <= Date.now()).length;
  const attempts = cs.reduce((sum, c) => sum + c.reps, 0);
  const successes = cs.reduce((sum, c) => sum + (c.goodReps || 0), 0);
  const mistakes = cs.reduce((sum, c) => sum + (c.lapses || 0), 0);
  const recoDone = deckItems.filter((i) => cardKnown(baseId(i.id))).length;
  const prodDone = deckItems.filter((i) => {
    const p = productionId(i.id);
    return p ? cardKnown(p) : cardKnown(i.id);
  }).length;
  const successRate = attempts ? Math.round((successes / attempts) * 100) : 0;
  const masteryRate = total ? Math.round((mastered / total) * 100) : 0;
  const rows = [
    [
      "Maîtrisées",
      `les deux directions, ${MASTERY_REPS} réussites chacune`,
      mastered,
      "t-due",
    ],
    ["En cours", "Entamées, pas encore maîtrisées", learning, "t-lrn"],
    ["Pas commencées", "Jamais affichées", notStarted, "muted"],
  ];
  return `<div class="scroll pad"><div style="height:20px"></div>
 <div style="display:flex;justify-content:center;margin:12px 0 10px">
  <div class="sq" style="width:132px"><span class="mono" style="font-size:36px">${mastered}<span class="faint" style="font-size:16px">/${total}</span></span></div>
 </div>
 <p class="muted" style="text-align:center;font-size:13px;margin:0 0 28px">maîtrisées · ${masteryRate} % terminé</p>
 <div class="label" style="margin-bottom:6px">Progression</div>
 ${rows
   .map(
     ([label, help, value, tone]) => `<div class="row">
   <div><div style="font-size:14px">${label}</div><div class="faint" style="font-size:12px;margin-top:3px">${help}</div></div>
   <span class="mono ${tone}" style="font-size:18px">${value}</span>
  </div>`,
   )
   .join("")}
 <div class="label" style="margin:26px 0 6px">Prochaine session</div>
 <div class="row"><div><div style="font-size:14px">Prêtes à réviser</div><div class="faint" style="font-size:12px;margin-top:3px">${dueNow ? "Présentes dans la prochaine session" : "Aucune révision actuellement"}</div></div><span class="mono t-due" style="font-size:18px">${dueNow}</span></div>
 <p class="faint" style="font-size:12px;line-height:1.6;margin:12px 0 0">Une réponse correcte retire la carte de la session. Cinq réussites s'étalent généralement sur une douzaine de jours. Une erreur raccourcit le prochain délai.</p>
 <div class="label" style="margin:26px 0 6px">Par direction</div>
 <div class="row"><div><div style="font-size:14px">Reconnaissance</div><div class="faint" style="font-size:12px;margin-top:3px">Lire la graphie</div></div><span class="mono" style="font-size:18px">${recoDone}<span class="faint" style="font-size:13px">/${total}</span></span></div>
 <div class="row"><div><div style="font-size:14px">Production</div><div class="faint" style="font-size:12px;margin-top:3px">Écrire depuis le sens ou le son</div></div><span class="mono" style="font-size:18px">${prodDone}<span class="faint" style="font-size:13px">/${total}</span></span></div>
 <p class="faint" style="font-size:12px;line-height:1.6;margin:10px 0 0">Chaque direction a son propre intervalle : reconnaître un caractère et savoir l'écrire ne s'oublient pas au même rythme.</p>
 <div class="label" style="margin:26px 0 6px">Historique</div>
 <div class="row"><span class="muted">Réponses</span><span class="mono">${attempts}</span></div>
 <div class="row"><span class="muted">Réussite</span><span class="mono">${successRate}%</span></div>
 <div class="row"><span class="muted">Erreurs</span><span class="mono">${mistakes}</span></div>
 ${info.open ? "" : `<p class="faint" style="font-size:12px;margin-top:16px">Deck verrouillé : ${esc(info.need || "terminez l'étape précédente")}.</p>`}
 <div style="height:24px"></div></div>`;
}

function Editor() {
  const i = item(app.editing);
  if (!i) return Collection();
  const [a, b] = face(i),
    c = cards[i.id];
  const at = atomsOf(i);
  const prev =
    i.kind === "lex"
      ? (() => {
          const x = CTX.find((y) => y.lex === i.id);
          return `<div class="sentence" style="font-size:20px;margin:0">${x.segs
            .map((g, n) =>
              n === x.ti
                ? '<span class="cell" style="min-width:3.6em"></span>'
                : segHTML(g, true),
            )
            .join("")}</div>
   <p class="hint" style="margin-top:12px;font-size:14px">${esc(x.en)}</p>`;
        })()
      : `<div class="solo sm" style="margin:0">${esc(a)}</div><p class="hint mid" style="font-size:14px">${esc(b)}</p>`;
  return `<div class="hdr"><button class="back" data-go="deck">←</button><h1>Carte</h1>
  <button class="faint" data-speak="${esc(i.kana || i.read || i.ja || i.glyph)}">${speakerIcon(18)}</button></div>
 <div class="scroll pad"><div style="height:16px"></div>
 <label class="field"><span class="label">Recto</span><input id="e-a" value="${esc(a)}" style="font-family:var(--f-jp)" readonly></label>
 <p class="note" style="margin-top:-16px">Le recto n'est pas modifiable : la graphie sert d'index aux prérequis du §7, et la changer désynchroniserait le calcul des atomes.</p>
 <label class="field" style="margin-top:20px"><span class="label">Verso</span><input id="e-b" value="${esc(b)}"></label>
 <p class="note" style="margin-top:-16px">Modifié ici, le verso est conservé. Les corrections survivent au rechargement et suivent la synchronisation.</p>
 ${
   at.length
     ? `<p class="label">Prérequis</p><div class="atoms">${at
         .map(
           (id) =>
             `<span class="${known(id) ? "known" : "new"}">${esc(item(id).glyph)}</span>`,
         )
         .join("")}</div>
  <p class="note">${unknownIn(at) ? unknownIn(at) + " prérequis encore inconnus." : "Tous maîtrisés."}</p>`
     : ""
 }
 ${
   cardIdsFor(i.id).some((id) => cards[id].suspended)
     ? `<hr class="rule"><p class="label">En veille</p>
  <p class="note">Cette carte a été ratée ${LEECH_TOTAL} fois et ne revient plus d'elle-même. Une carte qu'on échoue autant n'a pas un problème de planification : corrigez le verso, ou remettez-la en circulation.</p>
  <button class="btn ghost" style="height:44px;margin-top:10px" data-reactiver="${esc(i.id)}">Remettre en circulation</button>`
     : ""
 }
 <hr class="rule"><p class="label" style="margin-bottom:12px">Aperçu</p>
 <div style="border:1px solid var(--rule);border-radius:var(--radius);padding:16px">${prev}</div>
 <p class="note">Reconnaissance ${c.goodReps || 0}/${MASTERY_REPS} · ${reviewTimingLabel(c)}</p>
 ${
   productionId(i.id)
     ? (() => {
         const p = cards[productionId(i.id)];
         return `<p class="note" style="margin-top:4px">Production ${p.goodReps || 0}/${MASTERY_REPS} · ${reviewTimingLabel(p)}</p>`;
       })()
     : ""
 }
 <div style="height:24px"></div></div>`;
}

/* Panneau d'essai audio. Il existe pour une raison précise : juger une diction
   demande d'écouter la même chose deux fois, une fois enregistrée et une fois
   synthétisée, et de le faire sur les paires qui posent réellement problème. Sans
   ça il faut lancer une session et attendre que la bonne carte tombe. */
const PAIRES_DIFFICILES = [
  { titre: "Sonorisation", kana: ["か", "が"] },
  { titre: "Sifflantes", kana: ["し", "ち", "じ"] },
  { titre: "つ contre す", kana: ["つ", "す", "ず"] },
  { titre: "は contre わ", kana: ["は", "わ"] },
];
function AudioTest() {
  const source = (t) => (enregistrementPour(t) ? "enregistré" : "synthèse");
  const pastille = (t) =>
    `<button class="chip" data-essai="${esc(t)}" style="height:40px;min-width:44px;font-family:var(--f-jp);font-size:20px;color:var(--ink)">${esc(t)}</button>`;
  return `<hr class="rule">
 <span class="label">Essayer l'audio</span>
 <p class="faint" style="font-size:12px;line-height:1.6;margin:6px 0 10px">Touchez un caractère pour l'entendre. Ces paires sont celles que l'oreille confond ; si vous les distinguez ici, la face d'écoute ne devrait plus vous piéger.</p>
 ${PAIRES_DIFFICILES.map(
   (p) => `<div style="margin-bottom:10px">
   <div class="faint" style="font-size:11px;letter-spacing:.06em;text-transform:uppercase;margin-bottom:4px">${p.titre}</div>
   <div class="chips">${p.kana.map(pastille).join("")}</div>
  </div>`,
 ).join("")}
 <div class="faint" style="font-size:11px;letter-spacing:.06em;text-transform:uppercase;margin:14px 0 4px">Mot et phrase</div>
 <div class="chips">${["むし", "にほん", "駅で友達を待っている。"].map(
   (t) =>
     `<button class="chip" data-essai="${esc(t)}" style="height:40px;font-family:var(--f-jp);font-size:15px;color:var(--ink)">${esc(t.length > 8 ? t.slice(0, 8) + "…" : t)}</button>`,
 ).join("")}</div>
 <div class="faint" style="font-size:11px;letter-spacing:.06em;text-transform:uppercase;margin:14px 0 4px">Comparer sur し</div>
 <div class="chips">
  <button class="chip" data-essai="し" style="height:40px;color:var(--ink)">Enregistrement</button>
  <button class="chip" data-essai-synthese="し" style="height:40px;color:var(--ink)">Synthèse du système</button>
 </div>
 <p class="faint" style="font-size:12px;line-height:1.6;margin:10px 0 0">${
   app.audioTestNote
     ? esc(app.audioTestNote)
     : `Prêt. « し » est actuellement servi par : ${source("し")}.`
 }</p>
 ${
   app.mute
     ? `<p style="font-size:12px;line-height:1.6;margin:8px 0 0;color:var(--shu)">Le son est coupé pour les sessions, mais ces essais restent audibles.</p>`
     : ""
 }`;
}
function Settings() {
  const sw = (k, l, on) =>
    `<div class="sw"><span>${l}</span><button class="tg ${on ? "on" : ""}" data-tg="${k}"><i></i></button></div>`;
  const sync = app.sync || SYNC_DEFAULT;
  const syncStamp = sync.lastSync
    ? new Date(sync.lastSync).toLocaleString("fr-FR")
    : "jamais";
  return `<div class="hdr"><h1>Réglages</h1></div><div class="scroll pad"><div style="height:8px"></div>
 ${sw("mute", "Couper le son", app.mute)}
 ${sw("theme", "Thème sombre", app.theme === "dark")}
 ${sw("detailed", "Évaluation détaillée", app.detailed)}
 <hr class="rule">
 ${sw("sync-enabled", "Synchronisation cloud", sync.enabled)}
 ${sw("sync-auto", "Envoi cloud automatique", sync.auto)}
 <div style="display:flex;gap:10px;margin:8px 0 0">
  <button class="btn ghost" style="height:44px" data-sync="pull">Récupérer</button>
  <button class="btn ghost" style="height:44px" data-sync="push">Envoyer</button>
 </div>
 <hr class="rule">
 <span class="label">Sauvegarde locale</span>
 <p class="faint" style="font-size:13px;line-height:1.7;margin:6px 0 10px">Un historique de répétition espacée ne se reconstitue pas : c'est lui qui a de la valeur, pas les cartes. Le fichier exporté contient toutes vos cartes, votre progression et votre journal, et se relit sur n'importe quel appareil.</p>
 <div style="display:flex;gap:10px">
  <button class="btn ghost" style="height:44px" data-export="">Exporter</button>
  <button class="btn ghost" style="height:44px" data-import="">Importer</button>
 </div>
 <input id="import-file" type="file" accept="application/json,.json" style="display:none">
 <p class="faint" style="font-size:12px;line-height:1.6;margin:8px 0 0">L'import fusionne : pour chaque carte, la version la plus récemment modifiée est retenue. Rien n'est effacé.</p>
 ${app.importNote ? `<p style="font-size:13px;line-height:1.6;margin:8px 0 0;color:var(--seiji)">${esc(app.importNote)}</p>` : ""}
 ${sync.lastError ? `<p class="faint" style="font-size:12px;line-height:1.6;margin-top:10px;color:var(--shu)">Erreur de synchronisation : ${esc(sync.lastError)}</p>` : ""}
 <details style="margin-top:10px"${app.settingsDetailsOpen ? " open" : ""}>
  <summary class="faint" style="font-size:12px;cursor:pointer">Détails techniques</summary>
  <p class="faint" style="font-size:12px;line-height:1.6;margin-top:6px">Dernière synchronisation : ${esc(syncStamp)}${sync.lastDirection ? ` · ${esc(sync.lastDirection)}` : ""}</p>
  <p class="faint" style="font-size:12px;line-height:1.6">Compte Google : ${esc(app.auth?.email || "")}</p>
 </details>
 <hr class="rule">
 <span class="label">Audio</span>
 <div class="chips" style="margin:8px 0 10px">
  ${[
    ["enregistrement", "Enregistrements"],
    ["synthese", "Synthèse du système"],
  ]
    .map(
      ([v, l]) =>
        `<button class="chip ${(app.audioSource || "enregistrement") === v ? "on" : ""}" data-source-audio="${v}">${l}</button>`,
    )
    .join("")}
 </div>
 <p class="faint" style="font-size:12px;line-height:1.6;margin:0 0 10px"><strong>Plus de son du tout ?</strong> Sur iPhone, un fichier audio respecte l'interrupteur silencieux, alors que la synthèse vocale l'ignore. Vérifiez d'abord ce petit interrupteur sur la tranche du téléphone, ou le volume. Sinon, basculez sur la synthèse ci-dessus : c'est le comportement d'avant les enregistrements.</p>
 <p class="faint" style="font-size:13px;line-height:1.7">${
   sourceAudioForcee()
     ? "La synthèse du système est forcée : les énoncés pré-enregistrés sont ignorés."
     : audioManifest && audioManifest.count
       ? `<strong>${audioManifest.count} énoncés pré-enregistrés</strong> sont joués en priorité : la lecture est ainsi identique sur tous les appareils, avec un silence propre là où les moteurs rognent l'attaque d'une more. La synthèse du système ne sert que pour le reste.`
       : "Aucun énoncé pré-enregistré : tout passe par la synthèse du système."
 }</p>
 <p class="faint" style="font-size:13px;line-height:1.7;margin-top:10px">${
   !tts.ok
     ? "Synthèse vocale indisponible dans ce navigateur."
     : !tts.voice
       ? "Aucune voix japonaise installée sur cet appareil : hors des énoncés pré-enregistrés, la lecture sera muette."
       : `Voix du système : ${esc(tts.voice.name)}${tts.enhanced ? " (haute qualité)" : " (version compacte)"}.`
 }${
   tts.ok && tts.voice && !tts.enhanced
     ? `<br><br><strong>Une voix haute qualité est gratuite chez Apple</strong>, sans compte, et elle change nettement la diction : la version compacte diphtongue les voyelles longues, ce qui s'entend surtout sur les kana isolés.<br><br>Sur iPhone : Réglages, Accessibilité, Contenu énoncé, Voix, Japonais, puis une voix marquée « Qualité supérieure ».<br><br>Sur Mac : Réglages Système, Accessibilité, Contenu énoncé, Voix du système, Gérer les voix, Japonais.<br><br>L'application la reprendra d'elle-même : la sélection pondère la qualité du modèle avant tout le reste.`
     : ""
 }</p>
 ${AudioTest()}
 <p class="faint" style="font-size:13px;line-height:1.7;margin-top:16px">La progression, les réglages et l'historique sont conservés dans ce navigateur. Les noms Pokémon sont utilisés uniquement pour l'étude personnelle.</p>
 <hr class="rule">
 <button class="btn ghost" data-logout="" style="height:44px">Se déconnecter</button>
 <hr class="rule">
 <button class="btn ghost" style="border-color:var(--shu);color:var(--shu);margin-top:4px" data-reset="">Réinitialiser la progression</button>
 <div style="height:24px"></div></div>`;
}

/* ===================== session ===================== */
function contextFor(c) {
  const i = item(c.id);
  if (i.kind === "lex") return ctxForLex(c);
  if (i.kind === "glyph") return ctxForGlyph(c);
  if (i.kind === "kanji") return ctxForKanji(c);
  return null;
}
/* le contexte n'est retenu que s'il ne contient aucun atome inconnu : c'est le i+1 */
function faceFor(c, g) {
  const i = item(c.id),
    usable = !!g && g.u === 0;
  /* Carte de production : on part du sens ou du son, et l'on doit restituer la
     graphie japonaise. Les faces d'une carte ne mélangent plus les deux directions,
     de sorte que chaque intervalle mesure une seule compétence. */
  if (isProd(c.id)) {
    if (i.kind === "glyph") return c.reps % 2 === 1 ? "sound" : "glyph-write";
    if (i.kind === "kanji") return "kanji-write";
    return "lex-write";
  }
  /* Carte de reconnaissance : la graphie est donnée, on en produit la lecture ou le
     sens. Une face sur trois passe au contexte, quand un contexte lisible existe. */
  const varied = c.reps > 0 && c.reps % 3 === 2;
  if (i.kind === "lex") return varied ? "bare" : "cloze";
  if (i.kind === "glyph") return varied && usable ? "word" : "glyph";
  if (i.kind === "kanji") return varied && usable ? "comp" : "keyword";
  /* Le deck Pokémon n'avait qu'une face : anglais → katakana, 151 fois. C'était le
     seul deck sans alternance, alors que c'est le deck-récompense. On intercale une
     face d'écoute, entendre le nom japonais et l'écrire, qui exerce le lien son →
     graphie, absent de la face d'origine. */
  return varied ? "sound" : "name";
}
function startSession(id) {
  /* Sans planificateur, une séance n'enregistrerait rien : autant ne pas la
     commencer plutôt que faire travailler pour rien. */
  if (!schedulerReady()) {
    app.schedulerDown = true;
    render();
    return;
  }
  normalizeDailyState();
  // Resume paused session if no specific deck was requested
  if (!id && app.pausedSession?.queue?.length && app.sessionDay === dayKey()) {
    const ps = app.pausedSession;
    app.sessionDay = dayKey();
    app.sessionUpdatedAt = Date.now();
    app.pausedSession = null;
    app.sess = {
      queue: ps.queue,
      seen: ps.seen,
      ok: ps.ok,
      t0: Date.now(),
      st: "typing",
      typed: "",
      committed: false,
      cur: null,
      face: null,
      ctx: null,
      kanaChoices: null,
      timer: null,
      startTime: null,
      feedback: null,
      exposureCap: Math.round(DAILY_BUDGET * SESSION_OVERSHOOT),
    };
    /* La route AVANT nextCard : celui-ci ne rend et ne prononce l'énoncé que s'il
       se sait déjà en session, si bien que la première carte d'une séance n'a
       jamais reçu son audio. C'est ce qui rendait la face d'écoute muette, où
       l'énoncé EST la question. */
    app.route = "session";
    nextCard();
    return;
  }
  /* Plus de verrou « une session par jour ». Il rendait muet le bouton
     « Continuer » du résumé et interdisait toute reprise alors que des cartes
     restaient dues. Rien ne se regonfle : ensureDailyPlan mémorise le plan du
     jour, et queueFor n'en reprend que les cartes encore à reps 0. */
  app.sessionDay = dayKey();
  app.sessionUpdatedAt = Date.now();
  app.pausedSession = null;
  const q = queueFor(id || null);
  if (!q.length) return;
  app.sess = {
    queue: q,
    seen: 0,
    ok: 0,
    t0: Date.now(),
    st: "typing",
    typed: "",
    committed: false,
    cur: null,
    face: null,
    ctx: null,
    kanaChoices: null,
    timer: null,
    startTime: null,
    feedback: null,
    exposureCap: Math.round(DAILY_BUDGET * SESSION_OVERSHOOT),
  };
  app.route = "session"; // voir la note ci-dessus sur l'ordre
  nextCard();
}
function nextCard() {
  const s = app.sess;
  clearTimeout(s.timer);
  if (!s.queue.length) {
    s.dur = Date.now() - s.t0;
    go("summary");
    return;
  }
  s.cur = s.queue[0];
  s.committed = false;
  s.typed = "";
  const i = item(s.cur.id),
    g = contextFor(s.cur);
  s.face = faceFor(s.cur, g);
  s.ctx = ["cloze", "word", "comp"].includes(s.face) ? g.x : null;
  s.kanaChoices = kanaChoicesForSession(s);
  s.st = ["keyword", "kanji-write", "lex-write"].includes(s.face)
    ? "ask"
    : "typing";
  s.startTime = Date.now();
  if (app.route === "session") {
    render();
    const dk = deck(i.deck);
    if (s.face === "sound") speak(i.kana, 0.7);
    else if (dk.audio === "always") speak(promptAudio(s), 0.8);
  }
}
/* Lecture prononçable d'un kanji : celle d'un composé qui le contient, choisi de
   façon stable pour ne pas changer d'une exposition à l'autre. Renvoie une chaîne
   vide si aucun composé n'est disponible, auquel cas on préfère le silence à une
   lecture inventée par le moteur. */
function compoundSpeech(i) {
  if (i.kind !== "kanji") return i.kana || i.read || i.ja || "";
  const pool = COMPCTX.filter((m) => m.kanji.includes(i.glyph));
  if (!pool.length) return "";
  return pool[Math.abs(hash(i.id)) % pool.length].read[0] || "";
}
function promptAudio(s) {
  const i = item(s.cur.id);
  return s.face === "cloze"
    ? s.ctx.segs.map((g) => g.t).join("")
    : s.face === "word"
      ? s.ctx.word
      : s.face === "comp"
        ? s.ctx.read[0]
        : s.face === "glyph-write"
          ? i.deck === "kata"
            ? toKata(i.kana)
            : i.kana
          : s.face === "lex-write"
            ? i.read
            : /* le repli tombait sur i.glyph, donc sur un kanji isolé pour les faces
                 keyword et kanji-write : on passe par une lecture de composé */
              i.kana || i.read || i.ja || compoundSpeech(i);
}
/* Prononciation moderne, là où l'orthographe distingue ce que l'oreille ne
   distingue pas : ぢ se dit comme じ, づ comme ず, et を isolé se dit « o ». Une
   carte d'écoute qui exige la bonne graphie parmi des homophones n'évalue plus
   l'audition mais la chance, et c'est ce qui rendait certains exercices vocaux
   incompréhensibles : ils l'étaient par construction. */
const SPOKEN_KANA = { ぢ: "じ", づ: "ず", を: "お" };
const spokenForm = (s) =>
  [...toHira(String(s))].map((c) => SPOKEN_KANA[c] || c).join("");
/* Toutes les graphies d'un deck qui sonnent comme celle-ci. */
function homophonesDe(kana, deckId) {
  const cible = spokenForm(kana);
  const kata = deckId === "kata";
  return ITEMS.filter(
    (x) => x.deck === deckId && x.kana && spokenForm(x.kana) === cible,
  ).map((x) => (kata ? toKata(x.kana) : x.kana));
}
function acceptedFor(s) {
  const i = item(s.cur.id);
  let a;
  if (s.face === "cloze") a = s.ctx.ans;
  else if (s.face === "bare") a = i.acc;
  else if (s.face === "glyph") a = [i.rom];
  else if (s.face === "glyph-write")
    a = [i.deck === "kata" ? toKata(i.kana) : i.kana];
  else if (s.face === "word") a = [s.ctx.rom];
  else if (s.face === "comp") a = s.ctx.read;
  else if (s.face === "sound")
    a = [i.deck === "kata" ? toKata(i.kana) : i.kana];
  else if (s.face === "kanji-write") a = [i.glyph];
  else if (s.face === "lex-write") a = [i.surface, i.read];
  else a = [i.ja];
  /* Sur les faces où l'énoncé est un son ou un romaji ambigu, toute graphie
     acoustiquement identique est juste. Ce n'est pas de la clémence : la graphie se
     travaille sur la face de reconnaissance, où le caractère est montré. */
  if ((s.face === "sound" || s.face === "glyph-write") && i.kind === "glyph")
    a = [...new Set([...a, ...homophonesDe(i.kana, i.deck)])];
  if (modeFor(s) === "romaji") a = a.map((x) => (isKana(x) ? toRomaji(x) : x));
  return a;
}
/* le format de réponse est une propriété du deck ; seule la carte d'écoute le force,
   puisqu'on y écrit ce qu'on entend, donc forcément en kana */
function modeFor(s) {
  return ["sound", "glyph-write", "kanji-write", "lex-write"].includes(s.face)
    ? "kana"
    : deck(item(s.cur.id).deck).answer;
}
function kanaChoicePoolForFace(s) {
  const i = item(s.cur.id);
  if (!i) return [];
  /* Les pastilles de choix n'ont de sens que sur un kana isolé. Sur un nom de
     Pokémon, proposer dix noms entiers transformerait un exercice d'écriture en
     question à choix multiples ; beaucoup plus facile, et ce n'est pas la même
     compétence. */
  if (i.kind === "glyph" && (s.face === "sound" || s.face === "glyph-write")) {
    const useKata = i.deck === "kata";
    return ITEMS.filter((x) => x.deck === i.deck).map((x) =>
      useKata ? toKata(x.kana) : x.kana,
    );
  }
  return [];
}
/* Familles qui se confondent à l'OREILLE, et non à l'œil : les paires de
   sonorisation viennent des tables de dakuten déjà présentes, le reste est la liste
   classique des difficultés d'écoute du japonais. On ne met pas ici les confusions
   visuelles (ぬ et め, れ et ね) : elles relèvent d'une autre face. */
const EAR_FAMILIES = ["しちじ", "つすず", "らだな", "ふはほ", "んむ", "いえ", "うお"];
function earNeighbours(kana) {
  const h = toHira(String(kana));
  const out = new Set();
  const ajouterPaire = (map) => {
    for (const [clair, sonore] of Object.entries(map)) {
      if (!/^[ぁ-ゖ]+$/.test(clair)) continue; // les tables portent aussi les katakana
      if (clair === h || sonore === h) {
        out.add(clair);
        out.add(sonore);
      }
    }
  };
  ajouterPaire(VOICED_MAP);
  ajouterPaire(SEMIVOICED_MAP);
  for (const famille of EAR_FAMILIES)
    if (famille.includes(h)) for (const c of famille) out.add(c);
  out.delete(h);
  return [...out];
}
function kanaChoicesForSession(s) {
  if (!s || modeFor(s) !== "kana") return null;
  if (!["sound", "glyph-write"].includes(s.face)) return null;
  const accepted = acceptedFor(s)
    .map((x) => String(x || "").trim())
    .filter(Boolean);
  if (!accepted.length) return null;
  const correctNorm = new Set(accepted.map((x) => normKana(x)));
  const uniq = [];
  const seen = new Set();
  for (const v of kanaChoicePoolForFace(s)) {
    const n = normKana(v);
    if (!n || correctNorm.has(n) || seen.has(n)) continue;
    seen.add(n);
    uniq.push(v);
  }
  /* Les voisins acoustiques d'abord. Dix kana tirés au hasard font de l'incertitude
     une loterie : si l'on hésite entre か et が, proposer や et ぬ n'aide pas et
     n'apprend rien. Placer les voisins dans la liste transforme le choix en exercice
     de discrimination, qui est exactement la compétence que la face d'écoute vise. */
  const cible = item(s.cur.id)?.kana || "";
  /* Pas de filtre sur la longueur : きゃ est UNE more, comme か, malgré ses deux
     caractères. Un digramme n'offre donc aucune élimination gratuite, il faut
     l'écarter à l'oreille comme les autres. */
  const voisins = new Set(earNeighbours(cible));
  const proches = uniq.filter((v) => voisins.has(toHira(v)));
  const reste = uniq.filter((v) => !voisins.has(toHira(v)));
  const distractors = [...shuffle(proches), ...shuffle(reste)].slice(0, 9);
  return shuffle([accepted[0], ...distractors]).slice(0, 10);
}
const isKana = (s) => /[\u3040-\u30FF]/.test(s);
function liveFeedback(s) {
  const input = String(s.typed || "").trim();
  if (!input) return null;
  const mode = modeFor(s);
  const accepted = acceptedFor(s);
  const normalized = mode === "kana" ? normKana(toKana(input)) : normRom(input);
  const match = accepted.some((a) => {
    const target =
      mode === "kana" ? normKana(a) : normRom(hasKana(a) ? toRomaji(a) : a);
    return normalized === target;
  });
  if (match) return { state: "good", text: "Correct" };
  const ref = accepted[0];
  const target =
    mode === "kana"
      ? normKana(ref)
      : normRom(hasKana(ref) ? toRomaji(ref) : ref);
  const dist = lev(normalized, target);
  return {
    state: dist <= 1 ? "near" : "bad",
    text:
      dist <= 1
        ? "Presque : une seule faute"
        : "Faux : réponse attendue en " + (mode === "kana" ? "kana" : "romaji"),
  };
}
function syncLiveFeedback() {
  const s = app.sess;
  const el = view.querySelector(".feedback");
  if (!el || !s) return;
  if (s.st === "typing") {
    s.feedback = null;
    el.textContent = "";
    el.className = "note feedback";
    return;
  }
  const info = liveFeedback(s);
  s.feedback = info;
  el.textContent = info ? info.text : "";
  el.className = "note feedback" + (info ? ` ${info.state}` : "");
}
function feedbackFor(s) {
  if (!s) return null;
  if (s.st === "typing") return null;
  if (s.feedback) return s.feedback;
  return liveFeedback(s);
}

function Session() {
  const s = app.sess,
    i = item(s.cur.id),
    dk = deck(i.deck);
  if (
    s &&
    s.st === "typing" &&
    modeFor(s) === "kana" &&
    ["sound", "glyph-write"].includes(s.face) &&
    (!Array.isArray(s.kanaChoices) || s.kanaChoices.length < 2)
  ) {
    s.kanaChoices = kanaChoicesForSession(s) || [];
  }
  const done = ["ok", "ko", "near", "shown", "skip"].includes(s.st);
  const answerToneClass =
    s.st === "ok"
      ? "good"
      : s.st === "ko" || s.st === "near" || s.st === "skip"
        ? "bad"
        : "";
  const mode = modeFor(s),
    ime = mode === "kana";
  /* seuls les glyphes isolés (kana/kanji) portent un type de script identifiable */
  const scriptTag =
    i.kind === "glyph"
      ? i.deck === "kata"
        ? "katakana"
        : "hiragana"
      : i.kind === "kanji"
        ? "kanji"
        : null;
  let body = "",
    note = "",
    atoms = null,
    gloss = ["", ""];
  const feedback = feedbackFor(s);
  /* aria-live : sans lui, un lecteur d'écran n'annonçait rien après une réponse ;
     le verdict n'existait qu'en couleur et en position. */
  const feedbackHtml =
    feedback && ["ok", "near", "ko", "skip"].includes(s.st)
      ? `<div class="feedback note ${feedback.state}" role="status" aria-live="polite">${feedback.text}</div>`
      : '<div class="feedback note" role="status" aria-live="polite"></div>';
  if (s.face === "cloze") {
    const cell = `<span class="cell${done ? " on" : ""}" id="cell" role="textbox" aria-label="mot à compléter">${esc(done ? s.ctx.ans[0] : toKana(s.typed))}</span>`;
    const furi = dk.furi === "always" || (dk.furi === "hidden" && done);
    body = `<div class="sentence" data-furi="${furi ? "on" : "hidden"}">${s.ctx.segs.map((g, n) => (n === s.ctx.ti ? cell : segHTML(g, true))).join("")}</div>
`;
    gloss = [s.ctx.en, s.ctx.en];
  } else if (s.face === "bare") {
    body = `<div class="solo md">${esc(i.surface)}</div>`;
    gloss = [i.gloss, i.gloss];
  } else if (s.face === "glyph") {
    body = `<div class="solo-row"><div class="solo">${esc(i.glyph)}</div>${done && scriptTag ? `<span class="tag-script">${scriptTag}</span>` : ""}</div>`;
    gloss = [
      i.rom + (i.deck === "kata" ? " · katakana" : " · hiragana"),
      `saisissez la lecture en ${mode}`,
    ];
  } else if (s.face === "word") {
    const tgt = i.deck === "kata" ? toKata(i.kana) : i.kana;
    const w = (i.deck === "kata" ? toKata(s.ctx.word) : s.ctx.word).replace(
      tgt,
      `<span class="tgt">${tgt}</span>`,
    );
    body = `<div class="solo md">${w}</div>`;
    gloss = [s.ctx.en, `lisez le mot entier en ${mode}`];
    atoms = s.ctx.units
      .map((u) => KIDX[i.deck][i.deck === "kata" ? toKata(u) : u])
      .filter(Boolean);
  } else if (s.face === "comp") {
    body = `<div class="solo md">${s.ctx.word.replace(i.glyph, `<span class="tgt">${i.glyph}</span>`)}</div>`;
    gloss = [s.ctx.en + " · " + i.keyword, `saisissez la lecture en ${mode}`];
    atoms = s.ctx.kanji.map((k) => KIDX.kanji[k]);
  } else if (s.face === "sound") {
    /* un nom de Pokémon s'écrit en katakana, comme le deck kata ; la consigne suit
       le script attendu, pas le nom du deck */
    const script =
      i.deck === "kata" || i.kind === "name" ? "katakana" : "hiragana";
    body = `<button class="play" data-speak="${esc(i.kana)}" aria-label="écouter">▶</button>`;
    gloss = [i.rom, `écrivez ce que vous entendez en ${script}`];
  } else if (s.face === "name") {
    const shiny = i.deck === "pkmn" && pokemonMeta(i.id)?.shiny;
    body = `<div class="solo-row${shiny ? " shiny" : ""}"><div class="solo lat">${esc(i.en)}</div>${shiny ? '<span class="tag-shiny">shiny</span>' : ""}</div>`;
    gloss = [`#${i.num} · ${i.type}`, `#${i.num} · ${i.type}`];
    atoms = atomsOf(i);
  } else if (s.face === "glyph-write") {
    body = `<div class="solo lat">${esc(i.rom)}</div>`;
    gloss = [
      i.deck === "kata" ? "katakana" : "hiragana",
      `écrivez en ${i.deck === "kata" ? "katakana" : "hiragana"}`,
    ];
  } else if (s.face === "kanji-write") {
    body = `<div class="solo lat" style="font-size:34px;font-weight:500">${esc(i.keyword)}</div>`;
    gloss = [i.glyph, "retrouvez le kanji, puis affichez la réponse"];
  } else if (s.face === "lex-write") {
    body = `<div class="solo lat" style="font-size:28px;font-weight:500">${esc(i.gloss)}</div>`;
    gloss = [i.surface, "retrouvez le mot japonais, puis affichez la réponse"];
  } else {
    body = `<div class="solo-row"><div class="solo">${esc(i.glyph)}</div>${done && scriptTag ? `<span class="tag-script">${scriptTag}</span>` : ""}</div>`;
    gloss = [i.keyword, "que signifie ce kanji ?"];
  }
  const upfront = ["cloze", "bare", "name"].includes(s.face);
  const gtxt = done || upfront ? gloss[0] : gloss[1];
  /* une fois la carte r\u00e9v\u00e9l\u00e9e, le bloc reveal r\u00e9p\u00e8te d\u00e9j\u00e0 cette m\u00eame info (lecture/sens) :
    seul cloze y ajoute la traduction de la phrase, distincte du sens du mot. */
  if (!done || s.face === "cloze")
    body += `<div class="gloss${done || upfront ? " on" : ""}${s.face === "cloze" ? " left" : ""}">${esc(gtxt)}</div>`;
  /* Tant que la carte n'est pas révélée il n'y a rien à mettre dedans, et le
     conteneur s'affichait quand même : min-height 172px, bordure et dégradé,
     soit un grand cadre vide au milieu de l'écran qui attire l'œil à la place
     du vrai champ de saisie. On ne l'émet donc qu'une fois qu'il a du contenu. */
  let rev = "";
  if (done) {
    rev = '<div class="reveal">';
    let itemText = "",
      answerMain = "",
      mean = "",
      speakSrc = "",
      skipForm = false,
      skipMean = false;
    if (s.face === "cloze") {
      itemText = s.ctx.segs[s.ctx.ti].t;
      answerMain = mode === "romaji" ? toRomaji(s.ctx.ans[0]) : s.ctx.ans[0];
      mean = i.gloss;
      speakSrc = s.ctx.segs.map((g) => g.t).join("");
    } else if (s.face === "word") {
      const wjp = i.deck === "kata" ? toKata(s.ctx.word) : s.ctx.word;
      itemText = wjp;
      answerMain = mode === "romaji" ? s.ctx.rom : wjp;
      mean = s.ctx.en;
      speakSrc = s.ctx.word;
    } else if (s.face === "comp") {
      itemText = s.ctx.word;
      answerMain =
        mode === "romaji"
          ? s.ctx.read.map((x) => toRomaji(x)).join(" / ")
          : s.ctx.read.join(" / ");
      mean = s.ctx.en + " · " + i.keyword;
      speakSrc = s.ctx.read[0];
    } else if (s.face === "glyph") {
      itemText = i.glyph;
      answerMain =
        mode === "romaji" ? i.rom : i.deck === "kata" ? toKata(i.kana) : i.kana;
      mean = i.deck === "kata" ? "katakana" : "hiragana";
      speakSrc = i.kana;
      skipForm = true;
      skipMean = true;
    } else if (s.face === "sound") {
      itemText = i.rom;
      answerMain = i.deck === "kata" ? toKata(i.kana) : i.kana;
      mean = i.deck === "kata" ? "katakana" : "hiragana";
      speakSrc = i.kana;
      skipMean = true;
    } else if (s.face === "glyph-write") {
      itemText = i.rom;
      answerMain = i.deck === "kata" ? toKata(i.kana) : i.kana;
      mean = i.deck === "kata" ? "katakana" : "hiragana";
      speakSrc = i.kana;
    } else if (s.face === "bare") {
      itemText = i.surface;
      answerMain = mode === "romaji" ? toRomaji(i.read) : i.read;
      mean = i.gloss;
      speakSrc = i.read;
    } else if (s.face === "keyword") {
      itemText = i.glyph;
      answerMain = i.keyword;
      /* Jamais le kanji seul : 日 se lit nichi, hi ou jitsu, et le moteur en choisit
         un arbitrairement. La spec §11 le dit d'ailleurs, il faut passer une lecture
         et non un idéogramme ambigu. On fait donc entendre un composé dont la
         lecture est déterminée, ou rien. */
      speakSrc = compoundSpeech(i);
      skipForm = true;
      skipMean = true;
    } else if (s.face === "kanji-write") {
      itemText = i.keyword;
      answerMain = i.glyph;
      speakSrc = compoundSpeech(i);
    } else if (s.face === "lex-write") {
      itemText = i.gloss;
      answerMain = i.surface;
      mean = i.read;
      speakSrc = i.read;
    } else if (s.face === "name") {
      itemText = i.en;
      answerMain = i.ja;
      mean = "#" + i.num + " · " + i.type;
      speakSrc = i.ja;
    }
    rev +=
      `<div class="ans">${skipForm ? "" : `<span class="af ${answerToneClass}">${esc(itemText)}</span><span class="ans-sep" aria-hidden="true">→</span>`}<span class="ar ${answerToneClass}">${esc(answerMain)}</span>` +
      (!skipForm && scriptTag
        ? `<span class="tag-script">${scriptTag}</span>`
        : "") +
      (dk.audio !== "never" && speakSrc
        ? `<button class="spk" data-speak="${esc(speakSrc)}" aria-label="écouter">${speakerIcon()}</button>`
        : "") +
      `</div>`;
    if (!skipMean && mean) rev += `<div class="am">${esc(mean)}</div>`;
    if (
      s.face === "name" &&
      s.st === "ok" &&
      /[\u3041-\u3096]/.test(toKana(s.typed))
    )
      rev += `<div class="note">écrit en katakana</div>`;
    const cb = ctxBlockFor(i, s.face);
    if (cb) {
      const plainJa = String(cb.ja || "").replace(/\u0001|\u0002/g, "");
      const showKana = cb.kana && cb.kana !== plainJa;
      rev +=
        `<div class="ctx"><div class="cj">${ctxHTML(cb.ja)}</div>` +
        (showKana ? `<div class="cr">${esc(cb.kana)}</div>` : "") +
        (cb.rom && cb.rom !== cb.kana
          ? `<div class="cro">${esc(cb.rom)}</div>`
          : "") +
        `<div class="ce">${esc(cb.en)}</div></div>`;
    }
    if (atoms && atoms.length > 1)
      rev += `<div class="atoms">${atoms
        .map(
          (id) =>
            `<span class="${known(id) ? "known" : "new"}">${esc(item(id).glyph)}</span>`,
        )
        .join("")}</div>`;
    const needsGrade =
      s.st === "near" ||
      s.st === "shown" ||
      app.detailed ||
      dk.grading === "self";
    rev += needsGrade
      ? `<div class="grade"><button class="g0" data-grade="0">À revoir</button><button class="g1" data-grade="1">Réussi</button></div>`
      : `<div class="go">touchez pour continuer &rsaquo;</div>`;
    /* Spec §8.4 : une correction reste possible quelques secondes après une bonne
       réponse. Un tap malheureux ou une réponse juste par hasard notait la carte
       sans recours. On n'affiche l'échappatoire que là où elle a un sens : après un
       succès auto-noté, quand aucun bouton de notation n'est déjà proposé. */
    if (!needsGrade && s.st === "ok" && !s.corrected)
      rev += `<div class="go" style="margin-top:6px"><button data-undo="" style="color:var(--shu);font-size:11px;letter-spacing:.04em;text-transform:uppercase">je m'étais trompé</button></div>`;
    /* fermeture à l'intérieur du bloc : hors de lui, une carte non révélée
       produirait "" + "</div>", un orphelin qui referme #sess trop tôt et
       éjecte .s-input du conteneur ; la règle #sess.kb-on .s-input cesse alors
       de s'appliquer et le champ passe sous le clavier simulé. */
    rev += "</div>";
  }
  const hasKanaOptions = !!(s.kanaChoices && s.kanaChoices.length);
  const showKb = app.kb && s.st === "typing" && !hasKanaOptions;
  const forceChoiceInput = hasKanaOptions && s.st === "typing";
  const kanaOptions = hasKanaOptions
    ? `<div class="chips" style="margin-top:10px;gap:8px">${s.kanaChoices.map((v) => `<button type="button" class="chip" data-optkana="${esc(v)}" style="height:38px;font-family:var(--f-jp);font-size:18px;color:var(--ink)">${esc(v)}</button>`).join("")}</div>`
    : "";
  const input =
    s.st === "typing"
      ? `<div class="s-input"><input id="f" class="${ime ? "" : "lat"}" autocapitalize="none" autocorrect="off" autocomplete="off" spellcheck="false" enterkeyhint="done" lang="${ime ? "ja" : "fr"}" inputmode="${showKb || forceChoiceInput ? "none" : "text"}"${showKb || forceChoiceInput ? " readonly" : ""} placeholder="${ime ? "" : "ka"}" value="${esc(s.typed)}">
    ${kanaOptions}
    <div class="s-actions"><button type="button" class="s-act check" data-validate="">Vérifier</button><button type="button" class="s-act idk" data-dontknow="">Je ne sais pas</button></div></div>`
      : s.st === "ask"
        ? `<div class="s-input"><button class="btn" data-reveal="">Afficher</button><div style="height:44px"></div></div>`
        : `<div class="s-input"><input class="res ${s.st === "ok" ? "good" : s.st === "skip" ? "skip" : "bad"} ${ime ? "" : "lat"}" readonly value="${esc(
            (ime ? toKana(s.typed) : s.typed) || "·",
          )}"><div style="height:44px"></div></div>`;
  const isKanaKb = showKb && mode === "kana";
  return `<div id="sess" class="${showKb ? "kb-on" : ""}${isKanaKb ? " kana" : ""}">
  <div class="s-top"><div class="s-chrome"><button class="x${s.confirmQuit ? " warn" : ""}" data-quit="">${s.confirmQuit ? "quitter ?" : "✕"}</button>
   <span class="ct mono">${s.seen + 1} / ${s.seen + s.queue.length}</span>
   <button class="mu${app.mute ? " off" : ""}" data-mute="" aria-label="sound">${app.mute ? muteIcon(18) : speakerIcon(18)}</button></div><div class="s-feedback">${feedbackHtml}</div></div>
    <div class="s-body${done ? " done" : ""}"${done && s.st !== "near" && !app.detailed && dk.grading !== "self" ? ' data-next=""' : ""}>${body}${rev}</div>${input}
  <div id="kb" class="${showKb ? "on" : ""}${isKanaKb ? " kana" : ""}">${showKb ? KB(mode) : ""}</div></div>`;
}
function KB(mode) {
  if (mode !== "kana") {
    const rows = ["azertyuiop", "qsdfghjklm", "wxcvbn"];
    const rowHtml = rows
      .map(
        (r) =>
          `<div class="kr">${[...r].map((k) => `<button class="kk" type="button" data-kb="${k}">${k}</button>`).join("")}</div>`,
      )
      .join("");
    return (
      rowHtml +
      `<div class="kr"><button class="kk w" type="button" data-kb="backspace">⌫</button><button class="kk sp" type="button" data-kb="space">espace</button><button class="kk w go" type="button" data-kb="enter">go</button></div>`
    );
  }
  // Gojūon kana keyboard ; katakana for pkmn/kata, hiragana otherwise
  const curItem = app.sess?.cur?.id ? item(app.sess.cur.id) : null;
  const useKata = curItem?.deck === "kata" || curItem?.kind === "name";
  const cv = useKata ? toKata : (s) => s;
  const grid = [
    ["あ", "か", "さ", "た", "な", "は", "ま", "や", "ら", "わ"],
    ["い", "き", "し", "ち", "に", "ひ", "み", "", "り", "を"],
    ["う", "く", "す", "つ", "ぬ", "ふ", "む", "ゆ", "る", "ん"],
    ["え", "け", "せ", "て", "ね", "へ", "め", "", "れ", "っ"],
    ["お", "こ", "そ", "と", "の", "ほ", "も", "よ", "ろ", "ー"],
  ];
  const gridHtml = grid
    .map(
      (row) =>
        `<div class="kr">${row
          .map((k) =>
            k
              ? `<button class="kk jp" type="button" data-kb="${cv(k)}">${cv(k)}</button>`
              : `<button class="kk jp" type="button" disabled style="opacity:0;pointer-events:none"></button>`,
          )
          .join("")}</div>`,
    )
    .join("");
  const specRow =
    `<div class="kr">` +
    `<button class="kk w jp" type="button" data-kb="゛">゛</button>` +
    `<button class="kk w jp" type="button" data-kb="゜">゜</button>` +
    ["ゃ", "ゅ", "ょ", "ぁ", "ぃ", "ぅ", "ぇ", "ぉ"]
      .map(cv)
      .map(
        (k) =>
          `<button class="kk jp" type="button" data-kb="${k}">${k}</button>`,
      )
      .join("") +
    `<button class="kk w" type="button" data-kb="backspace">⌫</button>` +
    `<button class="kk w go" type="button" data-kb="enter">go</button>` +
    `</div>`;
  return gridHtml + specRow;
}
function validate() {
  const s = app.sess,
    dk = deck(item(s.cur.id).deck);
  const { r } = judge(s.typed, acceptedFor(s), modeFor(s));
  const elapsed = Date.now() - s.startTime;
  s.feedback =
    r === "ok"
      ? { state: "good", text: "Juste" }
      : r === "near"
        ? { state: "near", text: "Presque : à toi de trancher" }
        : { state: "bad", text: "Faux" };
  if (s.ctx) s.cur.last = s.ctx.id;
  if (dk.audio !== "never") speak(promptAudio(s));
  if (r === "ok") {
    s.st = "ok";
    if (!app.detailed) commit("good", elapsed);
  } else if (r === "near") s.st = "near";
  else {
    s.st = "ko";
    if (!app.detailed) commit("wrong", elapsed);
  }
  s.revealAt = Date.now();
  saveState();
  render();
}
function skipCard() {
  const s = app.sess;
  if (!s || s.st !== "typing") return;
  s.typed = "";
  s.feedback = { state: "skip", text: "Passée" };
  s.st = "skip";
  commit("skip", Date.now() - s.startTime);
  s.revealAt = Date.now();
  render();
}
/* Nombre d'échecs, dans une même session, au bout duquel une carte est mise de côté. */
const LEECH_LAPSES = 3;
/* Plafond dur de la séance, en multiple de la charge annoncée. Les reprises après
   échec ne se comptaient dans aucun budget : à 70 % de réussite, « Normal · 30 »
   servait 55 cartes. Passé ce plafond, on cesse de remettre les cartes en file ;
   elles sont déjà notées et replanifiées par FSRS, donc rien n'est perdu ; seule
   la répétition du jour est abandonnée. La charge annoncée devient ainsi une
   promesse tenue à 50 % près, et non à 80 %. */
const SESSION_OVERSHOOT = 1.5;
/* Écart minimal avant de revoir une carte. `queue.push` la remettait en fin de
   file, ce qui, en fin de session, la remettait au rang suivant : on voyait la
   réponse puis on la redemandait dans la seconde. Ce n'est plus du rappel, c'est
   de la recopie. On l'insère donc au moins MIN_REQUEUE_GAP cartes plus loin, et
   en fin de file si la file est plus longue que ça. */
const MIN_REQUEUE_GAP = 4;
function requeue(s, card) {
  /* File vide : il n'y a rien à intercaler, et la carte est déjà replanifiée par
     FSRS en réapprentissage. La redemander sur-le-champ ne serait que de la
     recopie ; Anki ne le fait pas non plus, il termine la session. */
  if (!s.queue.length) return false;
  s.queue.splice(Math.min(s.queue.length, MIN_REQUEUE_GAP), 0, card);
  return true;
}
function commit(outcome, elapsed) {
  const s = app.sess;
  if (s.committed) return;
  s.committed = true;
  /* Instantané pris avant toute mutation : c'est ce qui rend l'annulation possible.
     On copie la carte, les compteurs de session et le journal du jour, car grade()
     et noteDailyProgress() écrivent dans les trois. */
  s.undoSnapshot = {
    card: { ...s.cur },
    dailyStats: JSON.parse(JSON.stringify(app.dailyStats || {})),
    seen: s.seen,
    ok: s.ok,
    queue: s.queue.slice(),
    drilled: { ...(s.drilled || {}) },
    sessionLapses: { ...(s.sessionLapses || {}) },
    setAside: s.setAside || 0,
    setAsideItems: (s.setAsideItems || []).slice(),
  };
  const good = outcome === "good";
  app.dataUpdatedAt = Date.now();
  app.sessionUpdatedAt = app.dataUpdatedAt;
  noteDailyProgress(outcome);
  /* « je ne sais pas » et une mauvaise réponse envoient le même verdict au
     planificateur : c'est ce qui justifie la pénalité identique du §8.4. */
  grade(s.cur, outcome === "good", elapsed || 8000);
  syncPokemonUnlocks();
  s.seen++;
  if (good) s.ok++;
  s.queue.shift();
  /* Une carte encore dans ses pas d'apprentissage (nouvelle carte réussie, ou
     rechute) est due dans quelques minutes : la session la redemande au lieu de
     la renvoyer au lendemain. C'est le renfort du jour même, décidé par FSRS et
     non par une règle parallèle. Deux reprises au maximum pour ne pas boucler. */
  if (!s.drilled) s.drilled = {};
  if (!s.sessionLapses) s.sessionLapses = {};
  const dueSoon =
    s.cur.due !== null && s.cur.due - Date.now() < LEARNING_HORIZON;
  const drills = s.drilled[s.cur.id] || 0;
  const roomLeft = s.seen < (s.exposureCap || Infinity);
  if (!good) {
    const lapses = (s.sessionLapses[s.cur.id] =
      (s.sessionLapses[s.cur.id] || 0) + 1);
    /* Carte bloquante : au-delà de LEECH_LAPSES échecs dans la même session, on
       la met de côté au lieu de la faire tourner indéfiniment. Une carte qu'on
       n'obtient pas après trois tentatives rapprochées ne s'apprendra pas en en
       ajoutant une quatrième ; elle a besoin d'une nuit, ou d'être reformulée. */
    if (lapses >= LEECH_LAPSES || !roomLeft) {
      s.setAside = (s.setAside || 0) + 1;
      if (!s.setAsideItems) s.setAsideItems = [];
      const it = item(s.cur.id);
      s.setAsideItems.push(it.glyph || it.surface || it.ja || it.id);
    } else requeue(s, s.cur);
  } else if (dueSoon && drills < 2 && roomLeft) {
    s.drilled[s.cur.id] = drills + 1;
    requeue(s, s.cur);
  }
  saveState();
}
maybeAutoPush();
/* Requalifie en erreur une bonne réponse déjà validée. On restaure l'instantané
   puis on rejoue commit("wrong") : l'ordonnanceur et le journal du jour
   repartent donc du même état qu'avant la validation, sans correctif approximatif. */
function undoGoodAnswer() {
  const s = app.sess;
  const u = s && s.undoSnapshot;
  if (!u || s.st !== "ok") return;
  const live = cards[u.card.id];
  /* grade() ajoute des champs qui n'existaient pas (fsrsState sur une carte
     neuve) : un simple Object.assign les laisserait en place. */
  for (const k of Object.keys(live)) if (!(k in u.card)) delete live[k];
  Object.assign(live, u.card);
  app.dailyStats = u.dailyStats;
  Object.assign(s, {
    seen: u.seen,
    ok: u.ok,
    queue: u.queue,
    drilled: u.drilled,
    sessionLapses: u.sessionLapses,
    setAside: u.setAside,
    setAsideItems: u.setAsideItems,
    undoSnapshot: null,
    committed: false,
    corrected: true,
    st: "ko",
    feedback: { state: "bad", text: "Corrigé en erreur" },
  });
  commit("wrong", Date.now() - s.startTime);
  syncPokemonUnlocks();
  saveState();
  render();
}
function advance() {
  const s = app.sess;
  if (!s.committed)
    commit(
      s.st === "ok" ? "good" : s.st === "skip" ? "skip" : "wrong",
      Date.now() - s.startTime,
    );
  nextCard();
}
function Summary() {
  const s = app.sess,
    m = Math.floor(s.dur / 6e4),
    sec = Math.round(s.dur / 1e3) % 60;
  const rate = s.seen ? Math.round((s.ok / s.seen) * 100) : 0;
  return `<div class="scroll pad"><div style="height:80px"></div>
 <div style="display:flex;gap:12px;text-align:center">
  ${[
    ["cartes", s.seen],
    ["réussite", rate + "%"],
    ["temps", m + "'" + String(sec).padStart(2, "0")],
  ]
    .map(
      ([l, v]) =>
        `<div style="flex:1"><div class="mono" style="font-size:30px">${v}</div><div class="label" style="margin-top:6px">${l}</div></div>`,
    )
    .join("")}</div>
 ${
   s.setAside
     ? `<div style="height:28px"></div><hr class="rule" style="margin:0 0 12px">
 <p class="label">Mises de côté</p>
 <p class="faint" style="font-size:13px;line-height:1.6;margin:6px 0 0">${s.setAside} carte${s.setAside > 1 ? "s" : ""} ratée${s.setAside > 1 ? "s" : ""} ${LEECH_LAPSES} fois de suite : <span style="font-family:var(--f-jp)">${esc(s.setAsideItems.slice(0, 8).join(" · "))}</span>${s.setAsideItems.length > 8 ? " …" : ""}. Insister le même jour n'aurait rien donné ; elles reviendront à leur échéance. Si l'une résiste plusieurs jours, l'énoncé mérite d'être revu.</p>`
     : ""
 }
 <div style="height:56px"></div><button class="btn" data-go="home">Terminer</button>
 ${queueFor().length ? `<div style="height:10px"></div><button class="btn ghost" data-start="">Continuer (${queueFor().length})</button>` : ""}</div>`;
}

/* ===================== liaisons ===================== */
function bind() {
  const q = (s) => view.querySelectorAll(s);
  q("[data-go]").forEach((e) => (e.onclick = () => go(e.dataset.go)));
  navEl
    .querySelectorAll("[data-go]")
    .forEach((e) => (e.onclick = () => go(e.dataset.go)));
  q("[data-start]").forEach(
    (e) =>
      (e.onclick = () => {
        const v = e.dataset.start || null;
        startSession(v === "resume" ? null : v);
      }),
  );
  q("[data-deck]").forEach(
    (e) =>
      (e.onclick = () =>
        go("deck", {
          deck: e.dataset.deck,
          tab: "cards",
          q: "",
          filter: "all",
        })),
  );
  q("[data-quick-start]").forEach(
    (e) =>
      (e.onclick = (ev) => {
        ev.stopPropagation();
        startSession(e.dataset.quickStart);
      }),
  );
  const undo = view.querySelector("[data-undo]");
  if (undo)
    undo.onclick = (e) => {
      e.stopPropagation();
      undoGoodAnswer();
    };
  q("[data-tab]").forEach(
    (e) => (e.onclick = () => go("deck", { tab: e.dataset.tab })),
  );
  q("[data-filter]").forEach(
    (e) => (e.onclick = () => go("deck", { filter: e.dataset.filter })),
  );
  q("[data-edit]").forEach(
    (e) => (e.onclick = () => go("editor", { editing: e.dataset.edit })),
  );
  q("[data-speak]").forEach(
    (e) => (e.onclick = () => speak(e.dataset.speak, 0.75)),
  );
  /* Essais audio des réglages. Le mode muet est contourné : l'utilisateur vient
     d'appuyer sur un bouton d'écoute, le couper serait une panne apparente. */
  const essayer = (texte, forcerSynthese) => {
    const muetAvant = app.mute;
    app.mute = false;
    const url =
      forcerSynthese || sourceAudioForcee() ? null : enregistrementPour(texte);
    if (url) jouerEnregistrement(url, () => syntheseVocale(texte));
    else syntheseVocale(texte);
    app.mute = muetAvant;
    app.audioTestNote = `« ${texte} » joué par : ${
      url ? "l'enregistrement" : "la synthèse du système"
    }${forcerSynthese ? ", forcée pour comparaison" : ""}.`;
    render();
  };
  q("[data-reactiver]").forEach(
    (e) =>
      (e.onclick = () => {
        for (const id of cardIdsFor(e.dataset.reactiver)) {
          delete cards[id].suspended;
          delete cards[id].suspendedAt;
          /* Les rechutes cumulées sont remises à zéro, sinon la carte repartirait
             en veille à la première erreur suivante. */
          cards[id].lapses = 0;
          cards[id].modifiedAt = Date.now();
        }
        saveState();
        render();
      }),
  );
  q("[data-source-audio]").forEach(
    (e) =>
      (e.onclick = () => {
        app.audioSource = e.dataset.sourceAudio;
        app.audioTestNote = null;
        saveState();
        render();
      }),
  );
  q("[data-essai]").forEach(
    (e) => (e.onclick = () => essayer(e.dataset.essai, false)),
  );
  q("[data-essai-synthese]").forEach(
    (e) => (e.onclick = () => essayer(e.dataset.essaiSynthese, true)),
  );
  /* Un <details> natif garde son état d'ouverture dans le DOM, mais render()
     reconstruit tout le HTML dès qu'un événement asynchrone survient ailleurs
     (voix TTS chargées, manifeste audio arrivé) : sans ce suivi, le clic
     rouvrait puis se refermait aussitôt à la moindre coïncidence de timing. */
  const settingsDetails = view.querySelector("details");
  if (settingsDetails) {
    settingsDetails.addEventListener("toggle", () => {
      app.settingsDetailsOpen = settingsDetails.open;
    });
  }
  q("[data-tg]").forEach(
    (e) =>
      (e.onclick = () => {
        const k = e.dataset.tg;
        if (k === "theme") app.theme = app.theme === "dark" ? "light" : "dark";
        else if (k === "sync-enabled") app.sync.enabled = !app.sync.enabled;
        else if (k === "sync-auto") app.sync.auto = !app.sync.auto;
        else app[k] = !app[k];
        render();
        saveState();
      }),
  );
  q("[data-dk]").forEach(
    (e) =>
      (e.onchange = () => {
        const dk = deck(app.deck);
        dk[e.dataset.dk] = e.dataset.dk === "newPerDay" ? +e.value : e.value;
        render();
        saveState();
      }),
  );
  const mu = view.querySelector("[data-mute]");
  if (mu)
    mu.onclick = () => {
      app.mute = !app.mute;
      if (app.mute && tts.ok) speechSynthesis.cancel();
      render();
    };
  const rv = view.querySelector("[data-reveal]");
  if (rv)
    rv.onclick = () => {
      app.sess.st = "shown";
      speak(promptAudio(app.sess));
      render();
    };
  const se = view.querySelector("#q");
  if (se)
    se.oninput = () => {
      app.q = se.value;
      const p = se.selectionStart;
      render();
      const n = view.querySelector("#q");
      if (n) {
        n.focus();
        n.setSelectionRange(p, p);
      }
    };
  ["e-a", "e-b"].forEach((id) => {
    const el = view.querySelector("#" + id);
    if (el)
      el.oninput = debounce(() => {
        const i = item(app.editing);
        if (!i || id !== "e-b") return; // le recto est en lecture seule, voir Editor
        /* ITEMS est reconstruit depuis les données littérales à chaque démarrage :
           écrire dedans se perdait au rechargement, ce qui faisait de l'éditeur une
           promesse vide. On conserve donc une couche de surcharge, appliquée au
           chargement et transportée par la synchronisation. */
        const champ =
          i.kind === "lex"
            ? "gloss"
            : i.kind === "kanji"
              ? "keyword"
              : i.kind === "name"
                ? "en"
                : "rom";
        const valeur = champ === "rom" ? el.value.trim() : el.value;
        if (!app.itemEdits) app.itemEdits = {};
        app.itemEdits[i.id] = { ...(app.itemEdits[i.id] || {}), [champ]: valeur };
        i[champ] = valeur;
        saveState();
        render();
      }, 250);
  });
  const f = view.querySelector("#f");
  if (f) {
    if (!app.kb) f.focus({ preventScroll: true });
    f.addEventListener("focus", () => {
      const sess = view.querySelector(".s-body");
      if (sess) sess.scrollTop = 0;
      resetWindowScroll();
      syncViewportHeight();
      startKeyboardGuard();
    });
    f.addEventListener("blur", () => {
      resetWindowScroll();
      syncViewportHeight();
      stopKeyboardGuard();
    });
    f.oninput = () => {
      const s = app.sess;
      if (modeFor(s) === "kana") {
        const kana = toKana(f.value);
        if (kana !== f.value) {
          f.value = kana;
          f.setSelectionRange(kana.length, kana.length);
        }
      }
      s.typed = f.value;
      const c = view.querySelector("#cell");
      if (c) c.textContent = toKana(f.value);
      syncLiveFeedback();
    };
    f.onkeydown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        e.stopPropagation();
        validate();
      }
    };
  }
  const nx = view.querySelector("[data-next]");
  if (nx)
    nx.onclick = (e) => {
      if (e.target.closest("[data-speak]")) return;
      const s = app.sess;
      if (s && s.revealAt && Date.now() - s.revealAt < 500) return;
      advance();
    };
  const rs = view.querySelector("input.res");
  if (rs) rs.focus({ preventScroll: true });
  const dv = view.querySelector("[data-validate]");
  if (dv) dv.onclick = () => validate();
  const dn = view.querySelector("[data-dontknow]");
  if (dn) dn.onclick = () => skipCard();
  const actionTap = (fn) => (e) => {
    e.preventDefault();
    fn();
  };
  const primaryTouchEvent = window.PointerEvent ? "pointerdown" : "touchstart";
  if (dv)
    dv.addEventListener(
      primaryTouchEvent,
      actionTap(() => validate()),
      { passive: false },
    );
  if (dn)
    dn.addEventListener(
      primaryTouchEvent,
      actionTap(() => skipCard()),
      { passive: false },
    );
  const handleKbPress = (e) => {
    e.preventDefault();
    const s = app.sess;
    if (!s || s.st !== "typing") return;
    const key = e.currentTarget.dataset.kb;
    if (key === "enter") return validate();
    if (key === "backspace") s.typed = s.typed.slice(0, -1);
    else if (key === "space") s.typed += " ";
    else if (key === "゛") {
      const last = s.typed.slice(-1);
      const v = VOICED_MAP[last];
      if (v) s.typed = s.typed.slice(0, -1) + v;
    } else if (key === "゜") {
      const last = s.typed.slice(-1);
      const v = SEMIVOICED_MAP[last];
      if (v) s.typed = s.typed.slice(0, -1) + v;
    } else s.typed += key;
    if (modeFor(s) === "kana") s.typed = toKana(s.typed);
    const input = view.querySelector("#f");
    if (input) input.value = s.typed;
    const c = view.querySelector("#cell");
    if (c) c.textContent = toKana(s.typed);
    syncLiveFeedback();
  };
  q("[data-kb]").forEach((e) => {
    e.addEventListener(primaryTouchEvent, handleKbPress, { passive: false });
    e.addEventListener("click", (ev) => ev.preventDefault());
  });
  q("[data-optkana]").forEach(
    (e) =>
      (e.onclick = () => {
        const s = app.sess;
        if (!s || s.st !== "typing") return;
        s.typed = e.dataset.optkana || "";
        const input = view.querySelector("#f");
        if (input) input.value = s.typed;
        const c = view.querySelector("#cell");
        if (c) c.textContent = toKana(s.typed);
        syncLiveFeedback();
        validate();
      }),
  );
  const expBtn = view.querySelector("[data-export]");
  if (expBtn)
    expBtn.onclick = () => {
      /* On réutilise localPayload : c'est la même forme que la synchro cloud, donc
         un export se réimporte par le même chemin déjà validé. */
      const blob = new Blob([JSON.stringify(localPayload(), null, 1)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `anki-jp-${dayKey()}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      /* Révocation différée : Safari annule le téléchargement si l'URL disparaît
         avant qu'il ne l'ait lue. */
      setTimeout(() => URL.revokeObjectURL(url), 10000);
    };
  const impBtn = view.querySelector("[data-import]");
  const impFile = view.querySelector("#import-file");
  if (impBtn && impFile) {
    impBtn.onclick = () => impFile.click();
    impFile.onchange = async () => {
      const f = impFile.files && impFile.files[0];
      if (!f) return;
      try {
        const parsed = JSON.parse(await f.text());
        /* Un export enveloppe la charge utile comme le fait le cloud ; on accepte
           les deux formes pour qu'un fichier récupéré côté Firebase se relise. */
        const ok = applyPayload(parsed.payload || parsed);
        app.importNote = ok
          ? "Sauvegarde importée."
          : "Fichier lisible, mais sans cartes reconnaissables.";
      } catch (e) {
        app.importNote = "Fichier illisible : " + String(e.message || e);
      }
      impFile.value = "";
      render();
    };
  }
  q("[data-sync]").forEach(
    (e) =>
      (e.onclick = async () => {
        const action = e.dataset.sync;
        if (action === "pull") await runSync("pull");
        if (action === "push") await runSync("push");
      }),
  );
  const logoutBtn = view.querySelector("[data-logout]");
  if (logoutBtn) logoutBtn.onclick = () => firebaseAuth?.signOut();
  const loginBtn = view.querySelector("[data-login]");
  if (loginBtn)
    loginBtn.onclick = async () => {
      app.loginError = "";
      /* initializeApp() renseigne firebaseAuth de façon asynchrone, et renonce
         si le SDK n'a pas été chargé. Sans ce garde, le clic appelle une
         méthode sur null : un TypeError, qui n'a pas de .code et se lisait donc
         « Google sign-in failed undefined » ; un message qui ne désigne rien. */
      if (!firebaseAuth) {
        app.loginError = globalThis.firebase
          ? "Connexion en cours d'initialisation, réessaie dans un instant."
          : "Firebase Auth n'a pas pu être chargé. Vide le cache du site et recharge.";
        render();
        return;
      }
      /* déclaré hors du try : le catch en a besoin pour le repli par
         redirection, et un const de bloc n'y serait pas visible */
      const provider = new firebase.auth.GoogleAuthProvider();
      try {
        await firebaseAuth.signInWithPopup(provider);
      } catch (error) {
        if (error.code === "auth/popup-blocked") {
          await firebaseAuth.signInWithRedirect(provider);
          return;
        }
        /* l'erreur entière, pas seulement .code : ce qui n'est pas une erreur
           Firebase n'en porte pas, et c'est justement ce qu'on veut voir */
        console.error("Google sign-in failed", error);
        app.loginError =
          error.code === "auth/popup-closed-by-user"
            ? "Connexion annulée."
            : `Connexion Google impossible (${error.code || error.message || "erreur inconnue"}).`;
        render();
      }
    };
  const resetBtn = view.querySelector("[data-reset]");
  if (resetBtn)
    resetBtn.onclick = () => {
      if (resetBtn.dataset.reset === "confirm") {
        const resetAt = Date.now();
        // toutes les cartes, les deux directions comprises
        for (const id in cards) {
          Object.assign(cards[id], {
            reps: 0,
            goodReps: 0,
            stab: 0,
            diff: 5,
            due: null,
            lapses: 0,
            last: null,
            lastSeen: null,
            responseCount: 0,
            responseAvg: 0,
            modifiedAt: resetAt,
          });
          delete cards[id].fsrsState;
          delete cards[id].fsrsScheduledDays;
          delete cards[id].fsrsElapsedDays;
          delete cards[id].fsrsLearningSteps;
          delete cards[id].suspended;
          delete cards[id].suspendedAt;
        }
        app.pokemonUnlocks = {};
        app.deckUnlocks = {};
        app.reviewLog = [];
        app.itemEdits = {};
        app.dailyStats = {};
        app.dataUpdatedAt = Date.now();
        app.pausedSession = null;
        app.sessionDay = null;
        app.sessionUpdatedAt = app.dataUpdatedAt;
        app.sess = null;
        saveState();
        if (syncReady()) runSync("push");
        go("home");
      } else {
        resetBtn.dataset.reset = "confirm";
        resetBtn.textContent = "Confirmer la réinitialisation ?";
        resetBtn.style.background =
          "color-mix(in srgb,var(--shu) 10%,transparent)";
      }
    };
  q("[data-grade]").forEach(
    (e) =>
      (e.onclick = () => {
        commit(e.dataset.grade === "1" ? "good" : "wrong");
        advance();
      }),
  );
  const qt = view.querySelector("[data-quit]");
  if (qt)
    qt.onclick = () => {
      const quit = () => {
        clearTimeout(app.sess.timer);
        if (tts.ok) speechSynthesis.cancel();
        const sameDay = app.sessionDay === dayKey();
        if (sameDay && app.sess.queue.length > 0) {
          app.pausedSession = {
            queue: app.sess.queue,
            seen: app.sess.seen,
            ok: app.sess.ok,
          };
        } else {
          app.pausedSession = null;
        }
        app.sessionUpdatedAt = Date.now();
        app.sess = null;
        normalizeDailyState();
        saveState();
        go("home");
      };
      if (app.sess.seen < 5 || app.sess.confirmQuit) return quit();
      app.sess.confirmQuit = true;
      render();
      setTimeout(() => {
        if (app.sess && app.sess.confirmQuit) {
          app.sess.confirmQuit = false;
          if (app.route === "session") render();
        }
      }, 3000);
    };
}
function debounce(fn, ms) {
  let t;
  return () => {
    clearTimeout(t);
    t = setTimeout(fn, ms);
  };
}
function isStandaloneDisplay() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}
function resetWindowScroll() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}
let keyboardGuardTimer = null;
function stopKeyboardGuard() {
  if (keyboardGuardTimer) {
    clearInterval(keyboardGuardTimer);
    keyboardGuardTimer = null;
  }
}
function startKeyboardGuard() {
  stopKeyboardGuard();
  let ticks = 0;
  keyboardGuardTimer = setInterval(() => {
    syncViewportHeight();
    resetWindowScroll();
    ticks++;
    if (ticks >= 24) stopKeyboardGuard();
  }, 50);
}
function syncViewportHeight() {
  const viewport = window.visualViewport;
  const layoutHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const keyboardOpen = !!(viewport && layoutHeight - viewport.height > 120);
  const viewportOffsetTop = viewport
    ? Math.max(0, Math.round(viewport.offsetTop || 0))
    : 0;
  const keyboardInset =
    keyboardOpen && viewport
      ? Math.max(
          0,
          Math.round(layoutHeight - viewport.height - viewportOffsetTop),
        )
      : 0;
  document.documentElement.style.setProperty(
    "--app-height",
    Math.round(layoutHeight) + "px",
  );
  document.documentElement.style.setProperty(
    "--keyboard-inset",
    keyboardInset + "px",
  );
  document.documentElement.style.setProperty(
    "--viewport-offset-top",
    viewportOffsetTop + "px",
  );
  document.documentElement.dataset.displayMode = isStandaloneDisplay()
    ? "standalone"
    : "browser";
  document.documentElement.dataset.keyboard = keyboardOpen ? "open" : "closed";
  if (keyboardOpen && app.route === "session") resetWindowScroll();
}
const syncViewportHeightDebounced = debounce(syncViewportHeight, 50);
document.addEventListener("keydown", (e) => {
  /* Spec §16 : « / » place le curseur dans la recherche du navigateur de cartes.
     Hors session, donc traité avant le garde de session. */
  if (e.key === "/" && app.route === "deck" && app.tab === "cards") {
    const champ = view.querySelector("#q");
    if (champ && document.activeElement !== champ) {
      e.preventDefault();
      champ.focus();
      return;
    }
  }
  const s = app.sess;
  /* La route peut valoir "session" sans session vivante ; reprise avortée, état
     restauré incomplet. Lire s.st dans ce cas jette une exception à chaque touche. */
  if (app.route !== "session" || !s || !s.cur) return;
  if (e.key === "Enter" && (s.st === "ok" || s.st === "ko")) {
    e.preventDefault();
    advance();
    return;
  }
  if (e.key === "Escape") {
    /* La croix demande confirmation au-delà de 5 cartes vues ; Échap quittait
       sèchement. Même garde-fou pour les deux : une session perdue par
       inadvertance est plus coûteuse qu'une touche à presser deux fois. */
    if (s.seen > 5 && !s.confirmQuit) {
      s.confirmQuit = true;
      render();
      clearTimeout(s.quitTimer);
      s.quitTimer = setTimeout(() => {
        if (app.sess === s) {
          s.confirmQuit = false;
          render();
        }
      }, 3000);
      return;
    }
    clearTimeout(s.timer);
    if (tts.ok) speechSynthesis.cancel();
    go("home");
    return;
  }
  /* Spec §15 : E édite la carte courante, 1/2 notent quand deux boutons sont
     proposés (un « presque » ou une auto-évaluation). Sans eux, la main doit
     quitter le clavier à chaque carte auto-évaluée. */
  if ((e.key === "e" || e.key === "E") && s.cur && s.st !== "typing") {
    e.preventDefault();
    go("editor", { editing: s.cur.id });
    return;
  }
  if (e.key === "1" || e.key === "2") {
    const btn = view.querySelector(`[data-grade="${e.key === "1" ? "0" : "1"}"]`);
    if (btn) {
      e.preventDefault();
      btn.click();
    }
  }
});
window.addEventListener("resize", syncViewportHeightDebounced);
window.addEventListener("orientationchange", syncViewportHeight);
if (window.visualViewport)
  visualViewport.addEventListener("resize", syncViewportHeightDebounced);
if (window.visualViewport)
  visualViewport.addEventListener("scroll", syncViewportHeightDebounced);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") flushState();
});
window.addEventListener("pagehide", flushState);
window.addEventListener("beforeunload", flushState);
setInterval(flushState, 60000);
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .catch((err) => console.warn("Service worker registration failed", err));
}
async function initializeApp() {
  syncViewportHeight();
  /* Sans await : l'audio est un supplément, il ne doit pas retarder le premier
     rendu. Les cartes servies avant son arrivée passent par la synthèse. */
  loadAudioManifest();
  const deckErrors = validateDeckData();
  if (deckErrors.length) console.error("Deck validation failed", deckErrors);
  loadState();
  app.auth = null;
  render();
  const host = globalThis.location?.hostname || "";
  if (host === "localhost" || host === "127.0.0.1") {
    app.auth = { uid: "local-dev", email: "dev@localhost", name: "Dev", photoURL: "" };
    /* Sans Firebase, aucun jeton n'est disponible : laisser la synchro active
       faisait échouer chaque envoi automatique et remplissait sync.lastError. */
    app.sync = { ...app.sync, enabled: false, auto: false, lastError: "" };
    app.route = app.route === "login" ? "home" : app.route;
    syncHydrated = true;
    render();
    return;
  }
  if (!globalThis.firebase) {
    app.loginError = "Firebase Auth n'a pas pu être chargé.";
    syncHydrated = true;
    render();
    return;
  }
  const firebaseApp = firebase.apps.length
    ? firebase.app()
    : firebase.initializeApp(FIREBASE_CONFIG);
  firebaseAuth = firebaseApp.auth();
  firebaseAuth.onAuthStateChanged(async (user) => {
    app.auth = user
      ? {
          uid: user.uid,
          email: user.email || "",
          name: user.displayName || "",
          photoURL: user.photoURL || "",
        }
      : null;
    if (user) ensureLocalDataBelongsTo(user.uid);
    app.loginError = "";
    app.route = user ? (app.route === "login" ? "home" : app.route) : "login";
    render();
    if (user && syncReady()) await runSync("pull");
    else syncHydrated = true;
    if (user) saveState();
  });
}
initializeApp().catch((e) => {
  console.error("Initialization error", e);
  try {
    const v = document.getElementById("view");
    const msg =
      '<div style="padding:20px;color:#900;background:#fee;border-radius:6px"><h2>Script error</h2><pre style="white-space:pre-wrap;font-family:monospace">' +
      esc(String(e)) +
      "</pre></div>";
    if (v) v.innerHTML = msg;
    else document.body.innerHTML = msg;
  } catch (_) {
    /* ignore */
  }
});
