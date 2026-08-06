"use strict";
const BUILD_VERSION = '20260806-16';
const PK="1 フシギダネ Bulbasaur Grass/Poison,2 フシギソウ Ivysaur Grass/Poison,3 フシギバナ Venusaur Grass/Poison,4 ヒトカゲ Charmander Fire,5 リザード Charmeleon Fire,6 リザードン Charizard Fire/Flying,7 ゼニガメ Squirtle Water,8 カメール Wartortle Water,9 カメックス Blastoise Water,10 キャタピー Caterpie Bug,11 トランセル Metapod Bug,12 バタフリー Butterfree Bug/Flying,13 ビードル Weedle Bug/Poison,14 コクーン Kakuna Bug/Poison,15 スピアー Beedrill Bug/Poison,16 ポッポ Pidgey Normal/Flying,17 ピジョン Pidgeotto Normal/Flying,18 ピジョット Pidgeot Normal/Flying,19 コラッタ Rattata Normal,20 ラッタ Raticate Normal,21 オニスズメ Spearow Normal/Flying,22 オニドリル Fearow Normal/Flying,23 アーボ Ekans Poison,24 アーボック Arbok Poison,25 ピカチュウ Pikachu Electric,26 ライチュウ Raichu Electric,27 サンド Sandshrew Ground,28 サンドパン Sandslash Ground,29 ニドラン♀ Nidoran♀ Poison,30 ニドリーナ Nidorina Poison,31 ニドクイン Nidoqueen Poison/Ground,32 ニドラン♂ Nidoran♂ Poison,33 ニドリーノ Nidorino Poison,34 ニドキング Nidoking Poison/Ground,35 ピッピ Clefairy Fairy,36 ピクシー Clefable Fairy,37 ロコン Vulpix Fire,38 キュウコン Ninetales Fire,39 プリン Jigglypuff Normal/Fairy,40 プクリン Wigglytuff Normal/Fairy,41 ズバット Zubat Poison/Flying,42 ゴルバット Golbat Poison/Flying,43 ナゾノクサ Oddish Grass/Poison,44 クサイハナ Gloom Grass/Poison,45 ラフレシア Vileplume Grass/Poison,46 パラス Paras Bug/Grass,47 パラセクト Parasect Bug/Grass,48 コンパン Venonat Bug/Poison,49 モルフォン Venomoth Bug/Poison,50 ディグダ Diglett Ground,51 ダグトリオ Dugtrio Ground,52 ニャース Meowth Normal,53 ペルシアン Persian Normal,54 コダック Psyduck Water,55 ゴルダック Golduck Water,56 マンキー Mankey Fighting,57 オコリザル Primeape Fighting,58 ガーディ Growlithe Fire,59 ウインディ Arcanine Fire,60 ニョロモ Poliwag Water,61 ニョロゾ Poliwhirl Water,62 ニョロボン Poliwrath Water/Fighting,63 ケーシィ Abra Psychic,64 ユンゲラー Kadabra Psychic,65 フーディン Alakazam Psychic,66 ワンリキー Machop Fighting,67 ゴーリキー Machoke Fighting,68 カイリキー Machamp Fighting,69 マダツボミ Bellsprout Grass/Poison,70 ウツドン Weepinbell Grass/Poison,71 ウツボット Victreebel Grass/Poison,72 メノクラゲ Tentacool Water/Poison,73 ドククラゲ Tentacruel Water/Poison,74 イシツブテ Geodude Rock/Ground,75 ゴローン Graveler Rock/Ground,76 ゴローニャ Golem Rock/Ground,77 ポニータ Ponyta Fire,78 ギャロップ Rapidash Fire,79 ヤドン Slowpoke Water/Psychic,80 ヤドラン Slowbro Water/Psychic,81 コイル Magnemite Electric/Steel,82 レアコイル Magneton Electric/Steel,83 カモネギ Farfetch'd Normal/Flying,84 ドードー Doduo Normal/Flying,85 ドードリオ Dodrio Normal/Flying,86 パウワウ Seel Water,87 ジュゴン Dewgong Water/Ice,88 ベトベター Grimer Poison,89 ベトベトン Muk Poison,90 シェルダー Shellder Water,91 パルシェン Cloyster Water/Ice,92 ゴース Gastly Ghost/Poison,93 ゴースト Haunter Ghost/Poison,94 ゲンガー Gengar Ghost/Poison,95 イワーク Onix Rock/Ground,96 スリープ Drowzee Psychic,97 スリーパー Hypno Psychic,98 クラブ Krabby Water,99 キングラー Kingler Water,100 ビリリダマ Voltorb Electric,101 マルマイン Electrode Electric,102 タマタマ Exeggcute Grass/Psychic,103 ナッシー Exeggutor Grass/Psychic,104 カラカラ Cubone Ground,105 ガラガラ Marowak Ground,106 サワムラー Hitmonlee Fighting,107 エビワラー Hitmonchan Fighting,108 ベロリンガ Lickitung Normal,109 ドガース Koffing Poison,110 マタドガス Weezing Poison,111 サイホーン Rhyhorn Ground/Rock,112 サイドン Rhydon Ground/Rock,113 ラッキー Chansey Normal,114 モンジャラ Tangela Grass,115 ガルーラ Kangaskhan Normal,116 タッツー Horsea Water,117 シードラ Seadra Water,118 トサキント Goldeen Water,119 アズマオウ Seaking Water,120 ヒトデマン Staryu Water,121 スターミー Starmie Water/Psychic,122 バリヤード Mr. Mime Psychic/Fairy,123 ストライク Scyther Bug/Flying,124 ルージュラ Jynx Ice/Psychic,125 エレブー Electabuzz Electric,126 ブーバー Magmar Fire,127 カイロス Pinsir Bug,128 ケンタロス Tauros Normal,129 コイキング Magikarp Water,130 ギャラドス Gyarados Water/Flying,131 ラプラス Lapras Water/Ice,132 メタモン Ditto Normal,133 イーブイ Eevee Normal,134 シャワーズ Vaporeon Water,135 サンダース Jolteon Electric,136 ブースター Flareon Fire,137 ポリゴン Porygon Normal,138 オムナイト Omanyte Rock/Water,139 オムスター Omastar Rock/Water,140 カブト Kabuto Rock/Water,141 カブトプス Kabutops Rock/Water,142 プテラ Aerodactyl Rock/Flying,143 カビゴン Snorlax Normal,144 フリーザー Articuno Ice/Flying,145 サンダー Zapdos Electric/Flying,146 ファイヤー Moltres Fire/Flying,147 ミニリュウ Dratini Dragon,148 ハクリュー Dragonair Dragon,149 カイリュー Dragonite Dragon/Flying,150 ミュウツー Mewtwo Psychic,151 ミュウ Mew Psychic";
const KROWS=["あa いi うu えe おo かka きki くku けke こko さsa しshi すsu せse そso たta ちchi つtsu てte とto なna にni ぬnu ねne のno はha ひhi ふfu へhe ほho まma みmi むmu めme もmo やya ゆyu よyo らra りri るru れre ろro わwa をwo んn", "がga ぎgi ぐgu げge ごgo ざza じji ずzu ぜze ぞzo だda ぢji づzu でde どdo ばba びbi ぶbu べbe ぼbo ぱpa ぴpi ぷpu ぺpe ぽpo", "きゃkya きゅkyu きょkyo しゃsha しゅshu しょsho ちゃcha ちゅchu ちょcho にゃnya にゅnyu にょnyo ひゃhya ひゅhyu ひょhyo みゃmya みゅmyu みょmyo りゃrya りゅryu りょryo ぎゃgya ぎゅgyu ぎょgyo じゃja じゅju じょjo びゃbya びゅbyu びょbyo ぴゃpya ぴゅpyu ぴょpyo"];
const KWORDS="あお blue|いえ house|うえ above|あう to meet|あい love|おい nephew|あか red|かお face|いか squid|かう to buy|えき station|あき autumn|いく to go|きく to listen|かき persimmon|こえ voice|ここ here|くうき air|あさ morning|いす chair|すし sushi|せかい world|そこ over there|あし leg|うし cow|おかし sweets|きせつ season|した below|つき moon|て hand|とし year|くつ shoes|あつい hot|いち one|たかい expensive|ちかてつ subway|なつ summer|にく meat|ねこ cat|いぬ dog|なに what|きのこ mushroom|なか inside|はな flower|ひと person|ふね boat|へや room|ほし star|はし bridge|ふゆ winter|ひふ skin|まち town|みみ ear|むし insect|め eye|もり forest|みせ shop|まつ to wait|やま mountain|ゆき snow|よる night|やすい cheap|おゆ hot water|そら sky|とり bird|はる spring|くるま car|これ this|わたし I|わかい young|うみ sea|ほん book|にほん Japan|みかん mandarin|しんぶん newspaper|さくら cherry blossom|たまご egg|かぎ key|めがね glasses|かぞく family|みず water|ちず map|かぜ wind|ぞう elephant|だいがく university|でんき electricity|どこ where|まど window|たべる to eat|ともだち friend|ぶんか culture|べんり convenient|ぼうし hat|かんぱい cheers|えんぴつ pencil|さんぽ a walk|ばんごはん dinner|きゃく guest|きょう today|しゃしん photo|しゅみ hobby|ちゃいろ brown|じゅぎょう class|りょこう travel|びょうき illness|としょかん library";
const KANJI="日 sun, day|月 moon, month|火 fire|水 water|木 tree, wood|金 gold, money|土 earth, soil|山 mountain|川 river|田 rice field|人 person|口 mouth|目 eye|耳 ear|手 hand|足 foot, leg|力 power|男 man|女 woman|子 child|大 big|小 small|上 above, up|下 below, down|中 middle, inside|右 right|左 left|前 front, before|後 behind, after|年 year|時 hour, time|分 minute, part|見 to see|聞 to hear, to ask|行 to go|来 to come|食 to eat|飲 to drink|車 car|電 electricity|気 spirit, energy|本 book, origin|天 heaven|空 sky, empty|雨 rain|先 ahead, previous|生 life, birth|学 to study|校 school|毎 every|一 one|二 two|三 three|四 four|五 five|六 six|七 seven|八 eight|九 nine|十 ten|百 hundred|千 thousand|万 ten thousand|円 yen|何 what|名 name|白 white|半 half|入 to enter|出 to exit|話 to talk|読 to read|書 to write|語 language, word|新 new|古 old|今 now|自 self|文 sentence, text|言 to say|立 to stand";
const COMP="日本 にほん Japan|大人 おとな adult|火山 かざん volcano|学校 がっこう school|先生 せんせい teacher|大学 だいがく university|電車 でんしゃ train|天気 てんき weather|空気 くうき air|毎日 まいにち every day|毎年 まいとし,まいねん every year|毎月 まいつき,まいげつ every month|人口 じんこう population|中学 ちゅうがく middle school|本日 ほんじつ today (formal)|雨天 うてん rainy weather|見学 けんがく study visit|来年 らいねん next year|来月 らいげつ next month|先月 せんげつ last month|上下 じょうげ up and down|左右 さゆう left and right|前後 ぜんご before and after|水力 すいりょく water power|電力 でんりょく electric power|気力 きりょく willpower|手足 てあし hands and feet|学生 がくせい student|月見 つきみ moon viewing|女子 じょし girl|男子 だんし boy|山口 やまぐち Yamaguchi|川口 かわぐち Kawaguchi|小川 おがわ small stream|田中 たなか Tanaka|生年月日 せいねんがっぴ date of birth|小学校 しょうがっこう elementary school|電気 でんき electricity";

/* ===================== kana <-> romaji ===================== */
const KANA={kya:'きゃ',kyu:'きゅ',kyo:'きょ',gya:'ぎゃ',gyu:'ぎゅ',gyo:'ぎょ',sha:'しゃ',shu:'しゅ',sho:'しょ',sya:'しゃ',syu:'しゅ',syo:'しょ',ja:'じゃ',ju:'じゅ',jo:'じょ',jya:'じゃ',jyu:'じゅ',jyo:'じょ',zya:'じゃ',zyu:'じゅ',zyo:'じょ',cha:'ちゃ',chu:'ちゅ',cho:'ちょ',tya:'ちゃ',tyu:'ちゅ',tyo:'ちょ',nya:'にゃ',nyu:'にゅ',nyo:'にょ',hya:'ひゃ',hyu:'ひゅ',hyo:'ひょ',bya:'びゃ',byu:'びゅ',byo:'びょ',pya:'ぴゃ',pyu:'ぴゅ',pyo:'ぴょ',mya:'みゃ',myu:'みゅ',myo:'みょ',rya:'りゃ',ryu:'りゅ',ryo:'りょ',shi:'し',chi:'ち',tsu:'つ',
a:'あ',i:'い',u:'う',e:'え',o:'お',ka:'か',ki:'き',ku:'く',ke:'け',ko:'こ',ga:'が',gi:'ぎ',gu:'ぐ',ge:'げ',go:'ご',sa:'さ',si:'し',su:'す',se:'せ',so:'そ',za:'ざ',ji:'じ',zi:'じ',zu:'ず',ze:'ぜ',zo:'ぞ',ta:'た',ti:'ち',tu:'つ',te:'て',to:'と',da:'だ',di:'ぢ',du:'づ',de:'で',do:'ど',na:'な',ni:'に',nu:'ぬ',ne:'ね',no:'の',ha:'は',hi:'ひ',fu:'ふ',hu:'ふ',he:'へ',ho:'ほ',ba:'ば',bi:'び',bu:'ぶ',be:'べ',bo:'ぼ',pa:'ぱ',pi:'ぴ',pu:'ぷ',pe:'ぺ',po:'ぽ',ma:'ま',mi:'み',mu:'む',me:'め',mo:'も',ya:'や',yu:'ゆ',yo:'よ',ra:'ら',ri:'り',ru:'る',re:'れ',ro:'ろ',wa:'わ',wo:'を'};
const toKata=s=>s.replace(/[\u3041-\u3096]/g,c=>String.fromCharCode(c.charCodeAt(0)+0x60));
const toHira=s=>s.replace(/[\u30A1-\u30F6]/g,c=>String.fromCharCode(c.charCodeAt(0)-0x60));
function toKana(s){s=(s||'').toLowerCase();let o='',i=0;
 while(i<s.length){const c=s[i];
  if(c==='-'){o+='ー';i++;continue}
  if(c==='n'&&s[i+1]==='n'){o+='ん';i+=2;continue}
  if(c==='n'&&(i+1>=s.length||!'aiueoy'.includes(s[i+1]))){o+='ん';i++;continue}
  if(c===s[i+1]&&!'aiueon'.includes(c)&&/[a-z]/.test(c)){o+='っ';i++;continue}
  let m=null;for(let L=3;L>=1;L--){const t=s.substr(i,L);if(KANA[t]){m=KANA[t];i+=L;break}}
  if(m)o+=m;else{o+=c;i++}}
 return o}
const VOW={'ゃ':'あ','ゅ':'う','ょ':'お','ぁ':'あ','ぃ':'い','ぅ':'う','ぇ':'え','ぉ':'お'};
for(const[r,k]of Object.entries(KANA)){const v=r[r.length-1];
 if('aiueo'.includes(v)&&!VOW[k.slice(-1)])VOW[k.slice(-1)]={a:'あ',i:'い',u:'う',e:'え',o:'お'}[v]}
const expandLong=s=>{let o='';for(const c of s){if(c==='ー'&&o)o+=VOW[o.slice(-1)]||'';else o+=c}return o};
const normKana=s=>expandLong(toHira(String(s).normalize('NFKC').trim().replace(/\s+/g,'')));

/* romaji canonique construit depuis KROWS (hepburn) */
const K2R={},DIGRAPH=new Set();
KROWS.join(' ').split(' ').filter(Boolean).forEach(tok=>{
 const m=tok.match(/^([\u3041-\u3096]+)([a-z]+)$/);if(!m)return;
 K2R[m[1]]=m[2];K2R[toKata(m[1])]=m[2];
 if(m[1].length===2){DIGRAPH.add(m[1]);DIGRAPH.add(toKata(m[1]))}});
function toRomaji(w){let o='',i=0;w=String(w);
 while(i<w.length){const c=w[i];
  if(c==='っ'||c==='ッ'){const nx=K2R[w.substr(i+1,2)]||K2R[w[i+1]]||'';o+=(nx[0]||'');i++;continue}
  if(c==='ー'){o+=o.slice(-1);i++;continue}
  const two=w.substr(i,2);
  if(K2R[two]){o+=K2R[two];i+=2;continue}
  if(K2R[c]){o+=K2R[c];i++;continue}
  o+=c;i++}
 return o}
const RVAR=[['sha','sya'],['shu','syu'],['sho','syo'],['shi','si'],['cha','tya'],['chu','tyu'],['cho','tyo'],['chi','ti'],['tsu','tu'],['jya','zya'],['jyu','zyu'],['jyo','zyo'],['ja','zya'],['ju','zyu'],['jo','zyo'],['ji','zi'],['fu','hu']];
function normRom(s){let v=String(s).normalize('NFKC').toLowerCase().trim().replace(/\s+/g,'')
  .replace(/[āâ]/g,'a').replace(/[īî]/g,'i').replace(/[ūû]/g,'u').replace(/[ēê]/g,'e').replace(/[ōô]/g,'o');
 for(const[a,b]of RVAR)v=v.split(a).join(b);
 return v.replace(/nn/g,'n').replace(/ou/g,'o').replace(/uu/g,'u').replace(/oo/g,'o')}

const PUNCT={'。':'.','、':',','！':'!','？':'?'};
/* les particules は を へ se romanisent wa / o / e : un segment sans lecture
   propre et réduit à l'un de ces kana est une particule */
const PART={'は':'wa','を':'o','へ':'e'};
function segRomaji(segs){let o='';
 for(const g of segs){const t=g.r||g.t;
  if(PUNCT[t]){o+=PUNCT[t];continue}
  const r=(!g.r&&PART[t])?PART[t]:toRomaji(t);
  o+=(o&&!/[.,!?]$/.test(o)?' ':(o?' ':''))+r}
 return o.trim()}
function segKana(segs){return segs.map(g=>g.r||g.t).join('')}

/* découpage en unités kana, en ignorant っ et ー qui ne sont pas des items */
function kanaUnits(w){const out=[];let i=0;
 while(i<w.length){const two=w.substr(i,2);
  if(DIGRAPH.has(two)){out.push(two);i+=2;continue}
  const c=w[i];
  if(c==='っ'||c==='ッ'||c==='ー'){i++;continue}
  out.push(c);i++}
 return out}

function lev(a,b){const d=[];for(let i=0;i<=a.length;i++)d[i]=[i];
 for(let j=0;j<=b.length;j++)d[0][j]=j;
 for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++)
  d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+(a[i-1]===b[j-1]?0:1));
 return d[a.length][b.length]}
const SMALL='っゃゅょぁぃぅぇぉ';
const hasKana=s=>/[\u3040-\u30ff]/.test(s);
/* la réponse est acceptée en kana OU en romaji, quel que soit l'affichage du champ :
   le mode ne décide que de ce qui s'écrit à l'écran, jamais de ce qui est juste. */
function judge(input,accepted,mode){
 const raw=String(input||'');
 if(!raw.trim())return{r:'ko',v:''};
 const k=normKana(toKana(raw)),r=normRom(raw);
 const shown=mode==='romaji'?r:k;
 for(const a of accepted){
  if(k===normKana(a))return{r:'ok',v:shown};
  if(r===normRom(hasKana(a)?toRomaji(a):a))return{r:'ok',v:shown}}
 const t=mode==='romaji'?normRom(hasKana(accepted[0])?toRomaji(accepted[0]):accepted[0]):normKana(accepted[0]);
 const small=mode!=='romaji'&&[...t].some(c=>SMALL.includes(c)&&!shown.includes(c));
 if(lev(shown,t)===1&&shown.length>=4&&!small)return{r:'near',v:shown};
 return{r:'ko',v:shown}}

/* ===================== voix ===================== */
const tts={ok:'speechSynthesis'in window,voice:null};
/* icône haut-parleur en ligne, plus sobre qu'une note de musique */
const speakerIcon=(size)=>`<svg width="${size||16}" height="${size||16}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M18.36 5.64a9 9 0 0 1 0 12.72"></path></svg>`;
const muteIcon=(size)=>`<svg width="${size||16}" height="${size||16}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;
function pickVoice(){
 if(!tts.ok)return;
 const voices=speechSynthesis.getVoices().filter(v=>/^ja/i.test(v.lang));
 if(!voices.length){tts.voice=null;return;}
 const score=v=>{
  const n=String(v.name||'').toLowerCase();
  let s=0;
  if(v.localService)s+=8;
  if(/google|siri|kyoko|otoya|haruka|japanese|nihongo|日本語|ja-jp/.test(n))s+=10;
  if(/enhanced|premium|natural|neural/.test(n))s+=4;
  return s;
 };
 voices.sort((a,b)=>score(b)-score(a));
 tts.voice=voices[0]||null;
}
if(tts.ok){pickVoice();speechSynthesis.onvoiceschanged=pickVoice}
function prepareSpeechText(text){
 const raw=String(text||'').trim();
 if(!raw)return '';
 const hasJa=/[\u3040-\u30ff\u3400-\u9fff]/.test(raw);
 const looksRomaji=/^[a-zA-Z\s'\-.,/]+$/.test(raw);
 const base=(!hasJa&&looksRomaji)?toKana(raw):raw;
 return base.replace(/\s*\/\s*/g,'、').replace(/·/g,'、');
}
function speak(text,rate){if(!tts.ok||app.mute||!text)return;
 speechSynthesis.cancel();
 const speakText=prepareSpeechText(text);
 if(!speakText)return;
 const u=new SpeechSynthesisUtterance(speakText);
 u.lang='ja-JP';
 if(tts.voice)u.voice=tts.voice;
 u.rate=rate||0.9;
 u.pitch=1.0;
 speechSynthesis.speak(u)}

/* ===================== decks : la politique est une propriété du deck ===================== */
const DECKS=[
 {id:'hira',name:'Hiragana',kind:'glyph',script:'hira',answer:'romaji',ordered:true,
  audio:'reveal',grading:'typed',furi:'hidden',newPerDay:10,level:'n5'},
 {id:'kata',name:'Katakana',kind:'glyph',script:'kata',answer:'romaji',ordered:true,
  audio:'reveal',grading:'typed',furi:'hidden',newPerDay:8,level:'n5'},
 {id:'kanji',name:'Kanji N5',kind:'kanji',answer:'kana',ordered:true,
  audio:'reveal',grading:'self',furi:'hidden',newPerDay:4,level:'n5'},
 {id:'vocab',name:'Sentences N5',kind:'lex',answer:'kana',ordered:false,
  audio:'reveal',grading:'typed',furi:'hidden',newPerDay:4,level:'n5'},
 {id:'pkmn',name:'Pokémon 151',kind:'name',answer:'kana',ordered:false,
  audio:'reveal',grading:'typed',furi:'hidden',newPerDay:4,level:'n5'},
 {id:'kanji-n4',name:'Kanji N4',kind:'kanji',answer:'kana',ordered:true,
  audio:'reveal',grading:'self',furi:'hidden',newPerDay:4,level:'n4'},
 {id:'kanji-n3',name:'Kanji N3',kind:'kanji',answer:'kana',ordered:true,
  audio:'reveal',grading:'self',furi:'hidden',newPerDay:4,level:'n3'},
 {id:'kanji-n2',name:'Kanji N2',kind:'kanji',answer:'kana',ordered:true,
  audio:'reveal',grading:'self',furi:'hidden',newPerDay:4,level:'n2'},
 {id:'kanji-n1',name:'Kanji N1',kind:'kanji',answer:'kana',ordered:true,
  audio:'reveal',grading:'self',furi:'hidden',newPerDay:4,level:'n1'}
];
const deck=id=>DECKS.find(d=>d.id===id);
const LEVELS=[
 {id:'n5',label:'N5',deckIds:['hira','kata','kanji','vocab','pkmn'],prereq:null,open:true},
 {id:'n4',label:'N4',deckIds:['kanji-n4'],prereq:'N5 fully memorized',open:false},
 {id:'n3',label:'N3',deckIds:['kanji-n3'],prereq:'N4 fully memorized',open:false},
 {id:'n2',label:'N2',deckIds:['kanji-n2'],prereq:'N3 fully memorized',open:false},
 {id:'n1',label:'N1',deckIds:['kanji-n1'],prereq:'N2 fully memorized',open:false}
];
const level=id=>LEVELS.find(l=>l.id===id);
const BONUS_DECKS=[];
const bonusDeck=id=>BONUS_DECKS.find(d=>d.id===id);
const POINTS_PER_DAY_ESTIMATE=200;
function daysToUnlock(threshold,points){
 const remaining=Math.max(0,threshold-(points||0));
 return Math.max(0,Math.ceil(remaining/POINTS_PER_DAY_ESTIMATE));
}
function decksForLevel(levelId){
 const l=level(levelId);if(!l)return[];
 return l.deckIds.map(id=>deck(id)).filter(Boolean);
}
function deckMasteryRate(deckIds){
 const decks=deckIds.map(id=>deck(id)).filter(Boolean);
 const cardsForDecks=decks.flatMap(d=>ITEMS.filter(i=>i.deck===d.id));
 if(!cardsForDecks.length)return 0;
 const mastered=cardsForDecks.filter(i=>known(i.id)).length;
 return mastered/cardsForDecks.length;
}
function levelProgress(levelId){
 const l=level(levelId);if(!l)return 0;
 return deckMasteryRate(l.deckIds);
}
function levelUnlockInfo(levelId){
 const l=level(levelId);if(!l)return{open:false,need:''};
 if(l.id==='n5')return{open:true,need:'',progress:levelProgress('n5')};
 const prev=LEVELS[LEVELS.findIndex(x=>x.id===l.id)-1];
 const progress=prev?levelProgress(prev.id):0;
 return{open:progress>=0.95,need:prev?`${prev.label} foundation fully memorized`:'',progress};
}

/* ===================== items ===================== */
const ITEMS=[],CTX=[],KIDX={hira:{},kata:{},kanji:{}};
KROWS.join(' ').split(' ').filter(Boolean).forEach((tok,n)=>{
 const m=tok.match(/^([\u3041-\u3096]+)([a-z]+)$/);if(!m)return;
 const hira=m[1],kata=toKata(hira),rom=m[2];
 ITEMS.push({id:'h'+n,deck:'hira',kind:'glyph',idx:n,glyph:hira,kana:hira,rom});
 ITEMS.push({id:'k'+n,deck:'kata',kind:'glyph',idx:n,glyph:kata,kana:hira,rom});
 KIDX.hira[hira]='h'+n;KIDX.kata[kata]='k'+n});
KANJI.split('|').forEach((s,n)=>{const i=s.indexOf(' ');
 const g=s.slice(0,i);
 ITEMS.push({id:'j'+n,deck:'kanji',kind:'kanji',idx:n,glyph:g,keyword:s.slice(i+1)});
 KIDX.kanji[g]='j'+n});
const KANJI_N4="会 meeting|事 matter|同 same|自 self|社 company|発 to depart|者 person|地 ground|業 business|方 direction, way|新 new|場 place|員 member|開 to open|問 question|代 to substitute, generation|明 bright|動 to move|京 capital|通 to pass through|言 to say|理 reason|体 body|主 main, master|題 topic|意 meaning, intent|不 not, un-|作 to make|用 use, business|度 degree, times|強 strong|公 public, official|持 to hold|野 field|東 east|高 tall, expensive|少 few|光 light|使 to use|万 ten thousand|全 all, whole|部 part, section|花 flower|世 world, generation|界 boundary|進 to advance|別 separate|感 feeling|育 to raise|教 to teach|音 sound|家 house|病 illness|院 institution|建 to build|説 to explain|送 to send|民 people|決 to decide|定 to determine|特 special|経 to pass through|科 subject|医 doctor|銀 silver|験 test, to experience|質 quality|集 to gather|選 to choose|商 commerce|死 to die|品 goods|直 to fix, direct|番 turn, number|洋 western, ocean|服 clothes|顔 face|私 I, me|対 versus, against|予 in advance|政 politics|治 to govern|法 law|権 authority|若 young|無 nothing|始 to begin|終 to end|住 to live, reside|借 to borrow|貸 to lend|考 to think|思 to think|知 to know|運 to carry, fortune|転 to turn, roll|乗 to ride|降 to descend, get off|歩 to walk|走 to run|止 to stop|買 to buy|売 to sell|店 shop|道 road, way|遠 far|近 near|外 outside|内 inside|広 wide|長 long|短 short|重 heavy|安 cheap, safe|古 old|文 sentence, text|字 character|語 language, word|話 to talk|読 to read|書 to write|勉 diligence, study|習 to learn|覚 to memorize|忘 to forget|待 to wait|入 to enter|出 to exit|帰 to return home|閉 to close|続 to continue|兄 older brother|姉 older sister|弟 younger brother|妹 younger sister|父 father|母 mother|親 parent|族 family, tribe|友 friend|好 to like|朝 morning|昼 noon|夜 night|夕 evening|晩 evening|週 week|曜 weekday|春 spring|夏 summer|秋 autumn|冬 winter|寒 cold weather|暑 hot weather|暖 warm|涼 cool|海 sea|島 island|森 forest|林 grove|米 rice|肉 meat|魚 fish|茶 tea|酒 alcohol|飯 meal|料 fee, material|画 picture|映 to project, reflect|写 to copy|真 truth, photo|歌 song|楽 fun, music|苦 bitter, painful|忙 busy|急 urgent|遅 late|早 early|速 fast|軽 light (weight)|多 many|狭 narrow|深 deep|浅 shallow|低 low|飛 to fly|泳 to swim|着 to wear, to arrive|色 color|赤 red|青 blue|黄 yellow|緑 green|紙 paper";
const KANJI_N3="仕 to serve|例 example|側 side|信 to trust|価 price|億 hundred million|優 gentle, superior|備 to prepare|働 to work|党 party|共 together|具 tool|典 rule, code|冷 to cool|列 line, row|判 judgment|利 benefit|割 to divide|創 to create|勇 brave|勝 to win|勢 momentum|化 to change|区 ward|印 mark|危 dangerous|原 field, origin|参 to visit, participate|反 to oppose|収 to collect|各 each|向 to face|吸 to inhale|吹 to blow|周 circumference|命 life|和 harmony|喜 to rejoice|営 to manage|器 container|囲 to surround|団 group|困 to be troubled|域 area|城 castle|報 news, reward|境 boundary|増 to increase|夢 dream|奪 to snatch|婚 marriage|嫌 to dislike|季 season|寄 to approach|寺 temple|射 to shoot|将 general|尽 to exhaust|居 to reside|届 to deliver|尾 tail|岩 rock|差 difference|巻 to roll|布 cloth|希 hope, rare|師 teacher, master|席 seat|常 always, normal|幸 happiness|幼 young child|庁 government office|府 government|庭 garden|延 to postpone|建 to build|弱 weak|張 to stretch|強 dup skip|形 shape|影 shadow|役 role, duty|徒 follower|徳 virtue|忘 dup skip|忙 busy|念 concept, wish|怒 to be angry|恐 to fear|恥 shame|息 breath|悩 to worry|愛 love|感 dup skip|慣 to become used to|憎 to hate|懐 nostalgia|戦 war, to fight|戻 to return|払 to pay|批 criticism|承 to consent|技 skill|抜 to pull out|抱 to embrace|招 to invite|拾 to pick up|指 finger, to point|捕 to catch|授 to grant|採 to gather|探 to search|接 to touch|推 to infer|提 to present|揺 to shake|連 to link|関 to relate|必 must|要 necessary|求 to request|込 crowded|確 sure|違 different|在 to exist|様 style|守 to protect|存 to exist|現 present|状 condition|態 condition|準 standard|含 to include|残 to remain|過 to pass|性 nature|局 office|的 target|面 face, surface|議 discussion|論 discourse|展 to develop|象 phenomenon|制 system|複 double|査 to investigate|援 to help|派 group|辺 area|順 order|容 form|案 plan|効 effect|異 different (dup skip)|訳 translation|講 lecture|録 record|述 to state|評 evaluation|談 discussion|費 expense|資 resources|豊 abundant|貴 noble|貨 goods|賃 rent|貿 trade|輸 transport|輪 wheel|輝 to shine|遊 to play|達 to reach|避 to avoid|邦 country|港 harbor|測 to measure|湖 lake|温 warm|漁 fishing|激 intense|災 disaster|炭 charcoal|点 point|然 so|焼 to burn|煙 smoke|熱 heat|燃 to burn|片 piece|版 edition|牛 cow|犬 dog|猫 cat|王 king|球 sphere|畑 field, farm|留 to stay|略 abbreviation|痛 pain|皆 all|皿 plate|益 benefit|相 phase|眠 sleep|眼 eyeball|石 stone|砂 sand|研 to polish|破 to break|硬 hard|示 to show|礼 courtesy|祈 to pray|祖 ancestor|祝 to celebrate|神 god|祭 festival|禁 to prohibit|福 fortune|秀 excellent|秘 secret|移 to shift|税 tax|窓 window|穴 hole|究 to research|突 sudden|竜 dragon|端 edge|竹 bamboo|笑 to smile|笛 flute|符 mark|第 ordinal|筆 brush|筋 muscle|等 grade|答 answer|策 plan|簡 simple|粉 flour|精 refined|糖 sugar|糸 thread|系 lineage|紀 chronicle|約 promise|納 to store|純 pure|級 grade|素 element|細 slender|紹 to introduce|結 to tie|絵 picture|給 salary|統 to unite|絶 to end|継 to inherit|網 net|線 line|締 to tighten|編 to edit|縁 edge|織 to weave|群 group|義 justice|翌 next day|翻 to translate|老 old|耕 to till|聖 holy|職 employment|肌 skin|肩 shoulder|背 back|肺 lung|胃 stomach|胸 chest|能 skill|脂 fat|脈 pulse|脱 to escape|脳 brain|腐 to rot|腕 arm|腰 waist|腹 belly|臣 minister|臨 to face|至 to reach|致 to cause|舌 tongue|舎 shed|舞 to dance|舟 boat|航 to navigate|般 kind";
const KANJI_N2="与 to give|丘 hill|丈 length, height|与 dup skip|丘 dup|乱 disturbance|乳 milk|乾 to dry|了 finish|互 mutual|井 well|亜 sub-|享 to receive|京 dup skip|仮 temporary|伏 to bow|伐 to cut down|伯 uncle|伴 companion|伸 to stretch|但 however|位 rank|低 low|佐 to help|余 remainder|供 to provide|依 to depend on|価 dup skip|侵 to invade|便 convenience, mail|係 person in charge|保 to preserve|信 dup skip|修 to master|俳 haiku|俵 straw bag|倉 warehouse|個 individual|倍 double|倒 to fall|候 climate|借 dup skip|倣 to imitate|値 value|倹 thrifty|偉 great, admirable|偏 partial, biased|健 healthy|偵 spy|側 dup skip|偶 accidentally|偽 false|傍 side|傑 outstanding|傘 umbrella|催 to hold event|傷 wound|傾 to lean|債 debt|傲 arrogant|僅 slightly|僕 I (male)|僧 monk|儀 ceremony|億 dup skip|儒 Confucian|償 compensation|優 dup skip|允 permit|元 dup skip|兆 sign, trillion|兇 evil|克 to overcome|免 to excuse|党 dup skip|入 dup skip|全 dup skip|共 dup skip|典 dup skip|兼 dual|冒 to risk|冗 excess|冠 crown|冥 dark, hades|冶 to smelt|冷 dup skip|凍 to freeze|凡 mediocre|凡 dup|凶 evil|凸 convex|凹 concave|出 dup skip|函 box|刀 sword|刃 blade|分 dup skip|切 to cut|刈 to reap|刊 publish|刑 punishment|列 dup skip|初 first|判 dup skip|別 dup skip|利 dup skip|刺 to pierce|刻 to carve|剖 to divide|副 secondary|創 dup skip|副 dup skip|勧 to recommend|勘 intuition|募 to recruit|勲 merit|化 dup skip|匹 counter for animals|匿 to hide|匠 artisan|匝 sweep|区 dup skip|医 dup skip|升 measure|卒 to graduate|協 cooperation|博 broad, doctor|印 dup skip|即 immediate|却 to refuse|卵 egg|厚 thick|原 dup skip|双 pair|叔 uncle|受 to receive|吐 to spit|吟 to recite|含 dup skip|吸 dup skip|呉 to give|呑 to swallow|呉 dup skip|周 dup skip|呪 curse|咲 to bloom|哀 sorrow|哲 wisdom|唄 song|唆 to tempt|唇 lips|唯 only|唱 to sing, chant|唾 saliva|啓 to open, enlighten|善 good|喉 throat|喚 to summon|喝 to scold|喪 mourning|嗅 to smell|嗜 hobby|嘆 to lament|噂 rumor|噴 to spout|囚 prisoner|回 to return, times|因 cause|団 dup skip|園 park, garden|土 dup skip|圧 pressure|圭 gem|坂 slope|坊 boy, monk|坑 pit|坪 tsubo (area unit)|垂 to hang down|型 model|埋 to bury|城 dup skip|域 dup skip|培 to cultivate|基 base, foundation|堂 hall|堅 solid|堀 moat|堤 embankment|堪 to endure|報 dup skip|塀 fence|塁 base (baseball)|塊 lump|塑 clay figure|塔 tower|塗 to paint|塾 cram school|境 dup skip|墓 grave|墜 to fall|増 dup skip|墨 ink|墳 mound|壁 wall|壇 platform|壊 to break|壌 soil|士 gentleman, samurai|壮 majestic|声 voice|壱 one (formal)|売 dup skip|変 to change, strange|夏 dup skip|夕 dup skip|外 dup skip|多 dup skip|夜 dup skip|夢 dup skip|大 dup skip|奇 strange|奈 how|奉 to serve|契 pledge|奏 to play music|奥 interior|奨 to encourage|奪 dup skip|奮 to rouse|好 dup skip|如 like, if|妃 princess|妄 delusion|妊 pregnancy|妖 bewitching|妙 exquisite|妨 to disturb|姓 surname|姫 princess|姻 marriage|姿 figure|威 authority|娘 daughter|婆 old woman|婿 son-in-law|媒 medium|嫁 bride|嫉 jealous|嬢 young lady|子 dup skip|存 dup skip|季 dup skip|孤 alone|孫 grandchild|宅 residence|宇 space, universe|守 dup skip|安 dup skip|宗 religion|官 government official|宙 space, universe|宝 treasure|宣 to declare|室 room|宮 palace|宰 to preside|害 damage|宴 banquet|家 dup skip|容 dup skip|宿 inn, to lodge|寂 lonely|寄 dup skip|富 wealth|寛 tolerant|察 to guess|寡 few|寿 congratulations|専 exclusive|将 dup skip|尉 lieutenant|尊 respect|尋 to ask, inquire|導 to lead|封 to seal|射 dup skip|尽 to exhaust|局 dup skip|居 dup skip|履 to wear (shoes)|山 dup skip|岐 branch off|岡 hill|岳 peak|岸 shore|峠 mountain pass|峡 gorge|峰 peak|島 dup skip|崇 to revere|崎 promontory|崩 to collapse|嵐 storm|巡 to patrol|巣 nest|巨 huge|巧 skill|差 dup skip|己 self|巻 dup skip|市 dup skip|布 dup skip|帆 sail|希 dup skip|帝 emperor|帥 commander|師 dup skip|席 dup skip|帽 hat|幅 width|幕 curtain, act|幣 currency|干 dry, to interfere|平 flat, peace|幸 dup skip|幹 trunk, main|幻 illusion|幾 how many|序 order, preface|底 bottom|店 dup skip|府 dup skip|度 dup skip|座 seat|庫 warehouse|庭 dup skip|廊 corridor|廃 to abolish|建 dup skip|弊 evil|式 style|引 to pull|弘 broad|弟 dup skip|弦 string|弧 arc|弱 dup skip|張 dup skip|強 dup skip|弾 bullet, to play strings|当 to hit|録 dup skip|彦 handsome youth|彩 to colour|彫 to carve|彰 clear|影 dup skip|彼 he|往 to head to|征 to conquer|径 diameter|待 dup skip|律 law|徐 slowly|得 to gain|従 to follow|微 minute|徴 sign|徳 dup skip|徹 to penetrate|忍 to endure|志 aspiration|忠 loyalty";
const KANJI_N1="且 furthermore|丙 third class|丞 to help|乃 whereupon|之 of (classical)|乎 exclamation|乏 scarce|乗 dup skip|乞 to beg|亀 turtle|亙 to extend|亦 also|亭 pavilion|亮 clear|仄 hint|仇 enemy|仔 detailed|仗 stick|仙 hermit|仮 dup skip|仰 to revere|伊 that|伍 five, ally|伎 skill|伏 dup skip|伐 dup skip|伴 dup skip|伶 actor|伽 nursing|佃 cultivated field|佇 to loiter|佑 to help|佐 dup skip|佛 buddha (old)|作 dup skip|佩 to wear|佳 excellent|併 to combine|佼 clever|使 dup skip|來 to come (old)|侃 strong|侍 samurai|侏 dwarf|侑 to help meal|侘 lonely|侠 chivalrous|侯 marquis|侵 dup skip|便 dup skip|係 dup skip|促 to urge|俊 talented|俐 clever|俗 vulgar, custom|俘 captive|俚 rustic|俠 chivalrous|俣 fork|俥 rickshaw|俯 to bow|俳 dup skip|俵 dup skip|倅 son|倆 skill|倉 dup skip|倍 dup skip|倏 quickly|倒 dup skip|倖 luck|候 dup skip|倚 to lean|倣 dup skip|値 dup skip|倭 Yamato|倶 all|倹 dup skip|偃 to lie down|偉 dup skip|偏 dup skip|健 dup skip|偲 to remember|側 dup skip|偵 dup skip|偶 dup skip|偽 dup skip|傀 puppet|傅 tutor|傍 dup skip|傑 dup skip|催 dup skip|傭 employed|傲 dup skip|傳 to transmit (old)|傷 dup skip|傾 dup skip|僅 dup skip|僑 sojourn|僕 dup skip|僚 colleague|僧 dup skip|僻 remote|儀 dup skip|億 dup skip|儒 dup skip|償 dup skip|優 dup skip|允 permit|兆 sign, trillion|克 to overcome|免 to excuse|党 dup skip|兼 dual|冒 to risk|冗 excess|冠 crown|冥 dark, hades|凡 dup skip|凶 evil|凸 convex|凹 concave|刀 sword|刃 blade|切 to cut|刈 to reap|刊 to publish|刑 punishment|初 first|刺 to pierce|刻 dup skip|剖 dup skip|剛 sturdy|剣 sword|剤 medicine dose|剰 surplus|剥 to peel|剪 to prune|勅 imperial edict|勺 shakuunit|匂 fragrance|升 dup skip|卓 table, excellent|卜 divination|卦 divination sign|即 dup skip|却 dup skip|厄 misfortune|厘 rin (unit)|又 also|叉 crotch|叙 to relate, to appoint|叢 clump|吉 good luck|吊 to hang|吏 official|叶 to grant|吐 dup skip|吟 dup skip|呂 spine|呆 amazed|呑 dup skip|哉 how, alas|哨 sentry|唆 dup skip|唖 mute|唸 to hum|嗣 heir|嗜 dup skip|嘉 esteemed|嘆 dup skip|噛 to bite|囂 noisy|嚢 sack|囚 dup skip|団 dup skip|圏 sphere, range|圏 dup skip|坑 dup skip|坤 southwest|垢 dirt|垣 hedge|埃 dust|埠 wharf|堆 heap|堡 fort|塁 dup skip|塑 dup skip|塚 tumulus|塩 salt|塵 dust|塾 dup skip|墟 ruins|墾 to reclaim land|壇 dup skip|壮 dup skip|壱 dup skip|壷 pot, jar|奄 to cover|奉 dup skip|契 dup skip|奢 luxury|奥 dup skip|奨 dup skip|奪 dup skip|妃 dup skip|妄 dup skip|妊 dup skip|妖 dup skip|妨 dup skip|妬 jealous|姑 mother-in-law|姦 wicked|娼 prostitute|媚 to flatter|嫉 dup skip|嫌 dup skip|嫡 legitimate wife|嬉 glad|嬌 charming|孔 hole|孕 to conceive|孟 chief|孤 dup skip|孵 to hatch|宏 broad|宗 dup skip|宛 as if|宣 dup skip|寂 dup skip|寛 dup skip|寡 dup skip|寺 dup skip|寓 to reside temporarily|寧 rather|審 to investigate|寵 favor|寸 sun (unit)|尉 dup skip|尚 esteem|尿 urine|屍 corpse|屠 to butcher|屯 barracks|岡 dup skip|岬 cape (geog)|峨 lofty|峻 severe|崇 dup skip|崖 cliff|嵌 to fit in|嵩 pile up|嵯 towering|嶋 island|嶺 peak|巌 sturdy rock|巫 sorceress|已 already|巳 snake (zodiac)|帆 dup skip|幇 to help|幟 banner|幣 dup skip|幽 seclusion|幾 dup skip|庄 estate|庇 to shelter|庵 hermitage|廟 mausoleum|廠 workshop|廻 to go around|弐 two (formal)|弘 dup skip|弛 to slacken|弥 more and more|弦 dup skip|弧 dup skip|彊 firm|彗 comet|彦 dup skip|彼 dup skip|徊 wander about|徘 wander|徽 badge|忌 to abhor|忘 dup skip|忽 to ignore|怠 idle|怨 grudge|恒 constant|恩 favor, kindness|恫 to threaten|悌 elder brother|悔 to regret|悟 enlightenment|悦 joy|悉 all|悠 leisure|惑 to be confused|惚 to be enchanted|惜 regret|惟 to think|惧 fear|愁 melancholy|愉 pleasure|慄 to tremble|慈 mercy|慕 to yearn|慢 pride, sluggish|憂 melancholy|憎 dup skip|憐 pity|憾 remorse|懇 sociable|懐 dup skip|懲 to punish|懸 to hang|戒 commandment|戚 sad, relative|戦 dup skip|戴 to be crowned with|扇 fan|払 dup skip|扮 to be dressed as|扱 to handle|扶 to help|批 dup skip|抄 selection|抗 to resist|折 to fold, snap|抹 to erase|拉 to pull|拍 to clap|拒 to refuse|拓 to open up|抽 to pull, extract|拘 to arrest|拙 clumsy|拠 to be based on|括 to fasten|拳 fist|挑 to challenge|振 to swing, shake|挿 to insert|捉 to catch|捜 to search";
[[KANJI_N4,'kanji-n4','j4-'],[KANJI_N3,'kanji-n3','j3-'],[KANJI_N2,'kanji-n2','j2-'],[KANJI_N1,'kanji-n1','j1-']].forEach(([str,deckId,prefix])=>{
 str.split('|').forEach((s,n)=>{const i=s.indexOf(' ');
  const g=s.slice(0,i),desc=s.slice(i+1);
  if(!g||desc.includes('dup skip')||KIDX.kanji[g])return;
  ITEMS.push({id:prefix+n,deck:deckId,kind:'kanji',idx:n,glyph:g,keyword:desc});
  KIDX.kanji[g]=prefix+n;});
});
PK.split(',').forEach(s=>{const p=s.split(' ');
 ITEMS.push({id:'p'+p[0],deck:'pkmn',kind:'name',num:+p[0],ja:p[1],en:p[2],type:p[3].replace('/',' / ')})});

const LEX=[['v1','待つ','まつ','to wait'],['v2','飲む','のむ','to drink'],['v3','開ける','あける','to open'],
 ['v4','降る','ふる','to fall (rain, snow)'],['v5','買う','かう','to buy'],['v6','食べる','たべる','to eat'],
 ['v7','行く','いく','to go'],['a1','面白い','おもしろい','interesting, fun'],['a2','難しい','むずかしい','difficult'],
 ['a3','静か','しずか','quiet']];
LEX.forEach(([id,surface,read,gloss])=>ITEMS.push({id,deck:'vocab',kind:'lex',surface,read,acc:[read],gloss}));
const S=(t,r)=>({t,r:r||null});
[['v1',['まって'],"I'm waiting for a friend at the station.",[S('駅','えき'),S('で'),S('友達','ともだち'),S('を'),S('待って','まって'),S('いる'),S('。')],4],
 ['v1',['まちます'],"I'm waiting for the bus.",[S('バス'),S('を'),S('待ちます','まちます'),S('。')],2],
 ['v1',['まって'],'Please wait a moment.',[S('少し','すこし'),S('待って','まって'),S('ください'),S('。')],1],
 ['v2',['のみます'],'I drink coffee every morning.',[S('毎朝','まいあさ'),S('コーヒー'),S('を'),S('飲みます','のみます'),S('。')],3],
 ['v2',['のんで'],'Please drink some water.',[S('水','みず'),S('を'),S('飲んで','のんで'),S('ください'),S('。')],2],
 ['v3',['あけて'],'Please open the bedroom window.',[S('部屋','へや'),S('の'),S('窓','まど'),S('を'),S('開けて','あけて'),S('ください'),S('。')],4],
 ['v3',['あけます'],'We open the shop at nine.',[S('店','みせ'),S('は'),S('九時','くじ'),S('に'),S('開けます','あけます'),S('。')],4],
 ['v4',['ふる'],'It will probably rain tomorrow.',[S('明日','あした'),S('、'),S('雨','あめ'),S('が'),S('降る','ふる'),S('でしょう'),S('。')],4],
 ['v4',['ふって'],'It is snowing.',[S('雪','ゆき'),S('が'),S('降って','ふって'),S('います'),S('。')],2],
 ['v5',['かいます'],'I buy the newspaper in front of the station.',[S('駅前','えきまえ'),S('で'),S('新聞','しんぶん'),S('を'),S('買います','かいます'),S('。')],4],
 ['v5',['かった'],'What did you buy?',[S('何','なに'),S('を'),S('買った','かった'),S('の'),S('。')],2],
 ['v6',['たべました'],'I ate breakfast.',[S('朝ご飯','あさごはん'),S('を'),S('食べました','たべました'),S('。')],2],
 ['v6',['たべたい'],'What do you want to eat?',[S('何','なに'),S('を'),S('食べたい','たべたい'),S('です'),S('か'),S('。')],2],
 ['v7',['いきます'],"I'm going to Kyoto next week.",[S('来週','らいしゅう'),S('、'),S('京都','きょうと'),S('へ'),S('行きます','いきます'),S('。')],4],
 ['v7',['いこう'],"Let's go together.",[S('一緒','いっしょ'),S('に'),S('行こう','いこう'),S('。')],2],
 ['a1',['おもしろい'],'This book is interesting.',[S('この'),S('本','ほん'),S('は'),S('面白い','おもしろい'),S('です'),S('。')],3],
 ['a1',['おもしろかった'],"Yesterday's movie was good.",[S('昨日','きのう'),S('の'),S('映画','えいが'),S('は'),S('面白かった','おもしろかった'),S('。')],4],
 ['a2',['むずかしい'],'Kanji are difficult.',[S('漢字','かんじ'),S('は'),S('難しい','むずかしい'),S('です'),S('。')],2],
 ['a2',['むずかしかった'],'This problem was difficult.',[S('この'),S('問題','もんだい'),S('は'),S('難しかった','むずかしかった'),S('。')],3],
 ['a3',['しずか'],'This town is quiet.',[S('この'),S('町','まち'),S('は'),S('静か','しずか'),S('です'),S('。')],3],
 ['a3',['しずか'],'Please be quiet in the library.',[S('図書館','としょかん'),S('では'),S('静か','しずか'),S('に'),S('して'),S('ください'),S('。')],2]
].forEach(([lex,ans,en,segs,ti],n)=>CTX.push({id:'s'+n,type:'sentence',lex,ans,en,segs,ti}));

/* mots kana : contextes des items glyphe, atomes calculés */
const WORDCTX=[];
KWORDS.split('|').forEach((s,n)=>{const i=s.indexOf(' ');
 const w=s.slice(0,i),en=s.slice(i+1);
 WORDCTX.push({id:'w'+n,word:w,en,units:kanaUnits(w),rom:toRomaji(w)})});
/* composés kanji : contextes des items kanji */
const COMPCTX=[];
COMP.split('|').forEach((s,n)=>{const p=s.split(' ');
 COMPCTX.push({id:'m'+n,word:p[0],read:p[1].split(','),en:p.slice(2).join(' '),
  kanji:[...p[0]].filter(c=>KIDX.kanji[c])})});
const COMP_EXT="会社 かいしゃ company|会話 かいわ conversation|家族 かぞく family|勉強 べんきょう study|質問 しつもん question|問題 もんだい problem|意味 いみ meaning|使用 しよう use|使用 しよう usage|運転 うんてん driving|運動 うんどう exercise|自動車 じどうしゃ automobile|新聞 しんぶん newspaper|地図 ちず,ちづ map|世界 せかい world|旅行 りょこう travel|飛行機 ひこうき airplane|映画 えいが movie|音楽 おんがく music|病院 びょういん hospital|医者 いしゃ doctor|銀行 ぎんこう bank|警察 けいさつ police|時間 じかん time|時計 とけい clock|昨日 きのう yesterday|明日 あした,あす tomorrow|今週 こんしゅう this week|来週 らいしゅう next week|先週 せんしゅう last week|全部 ぜんぶ everything|一部 いちぶ one part|部屋 へや room|台所 だいどころ kitchen|居間 いま living room|寝室 しんしつ bedroom|洗面所 せんめんじょ washroom|通行 つうこう passage|通学 つうがく commuting to school|通勤 つうきん commuting to work|開始 かいし start|終了 しゅうりょう end|開店 かいてん shop opening|閉店 へいてん shop closing|入学 にゅうがく school entry|卒業 そつぎょう graduation|高校 こうこう high school|大学 だいがく university|生徒 せいと pupil|学生 がくせい student|先生 せんせい teacher|授業 じゅぎょう class|教室 きょうしつ classroom|試験 しけん exam|経験 けいけん experience|運命 うんめい destiny|同時 どうじ simultaneous|同意 どうい agreement|不安 ふあん anxiety|不思議 ふしぎ mysterious|感謝 かんしゃ gratitude|感動 かんどう emotion|決定 けってい decision|決心 けっしん determination|安心 あんしん peace of mind|安全 あんぜん safety|信用 しんよう trust|信号 しんごう traffic light|商品 しょうひん product|商店 しょうてん store|生産 せいさん production|工業 こうぎょう manufacturing|農業 のうぎょう agriculture|政治 せいじ politics|政府 せいふ government|法律 ほうりつ law|法学 ほうがく law studies|文化 ぶんか culture|文学 ぶんがく literature|文字 もじ letter, character|漢字 かんじ kanji|外国 がいこく foreign country|外国人 がいこくじん foreigner|市民 しみん citizen|国民 こくみん nation, people|民主 みんしゅ democracy|東京 とうきょう Tokyo|京都 きょうと Kyoto|洋服 ようふく western clothes|和服 わふく Japanese clothes|洋食 ようしょく western food|和食 わしょく Japanese food|注意 ちゅうい caution|注文 ちゅうもん order|質問 dup skip|発見 はっけん discovery|発明 はつめい invention|発表 はっぴょう announcement|発展 はってん development|準備 じゅんび preparation|完全 かんぜん complete|完成 かんせい completion|理解 りかい understanding|説明 せつめい explanation|意見 いけん opinion|会議 かいぎ meeting|会員 かいいん member|社員 しゃいん employee|社会 しゃかい society|会長 かいちょう chairman|課長 かちょう section chief|部長 ぶちょう department chief|専門 せんもん specialty|専攻 せんこう major|研究 けんきゅう research|開発 かいはつ development|技術 ぎじゅつ technology|情報 じょうほう information|通信 つうしん communication";
COMP_EXT.split('|').forEach((s,n)=>{const p=s.split(' ');
 if(!p[0]||p[2]==='dup'&&p[3]==='skip')return;
 COMPCTX.push({id:'me'+n,word:p[0],read:p[1].split(','),en:p.slice(2).join(' '),
  kanji:[...p[0]].filter(c=>KIDX.kanji[c])})});

/* ===================== atomes et i+1 ===================== */
const item=id=>ITEMS.find(i=>i.id===id);
const STORAGE_KEY='anki-jp-state-v1';
/* une carte n'est un prérequis fiable qu'après plusieurs rappels réussis,
   pas dès la première exposition : évite de débloquer kanji/mots/pokémon
   sur un hiragana vu une seule fois. */
const MASTERY_REPS=3;
const known=id=>cards[id]&&((cards[id].goodReps||0)>=MASTERY_REPS);
const allDeckItems=id=>ITEMS.filter(i=>i.deck===id);
const masteredCount=id=>allDeckItems(id).filter(i=>known(i.id)).length;
const totalCount=id=>allDeckItems(id).length;
function deckUnlockInfo(dk){
 if(dk.level==='bonus'){
  const open=(app.points||0)>=(dk.threshold||0);
  return{stage:'BONUS',open,limit:0,label:dk.name,need:open?'':`${dk.threshold||0} points`,theme:dk.theme||''};
 }
 if(dk.level&&dk.level!=='n5'){
  const lvl=levelUnlockInfo(dk.level);
  return{stage:dk.level.toUpperCase(),open:lvl.open,limit:lvl.open?totalCount(dk.id):0,label:dk.name,need:lvl.need||`unlock ${dk.level.toUpperCase()}`};
 }
 const hira=masteredCount('hira');
 const kata=masteredCount('kata');
 const kanaReady=hira>=30&&kata>=30;
 const kanjiReady=masteredCount('kanji')>=10;
 if(dk.id==='hira')return{stage:'N5',open:true,limit:totalCount('hira'),label:'Hiragana'};
 if(dk.id==='kata')return{stage:'N5',open:hira>=30,limit:hira>=30?totalCount('kata'):0,label:'Katakana',need:`${Math.min(hira,30)}/30 hiragana`};
 if(dk.id==='vocab')return{stage:'N5',open:kanaReady&&kanjiReady,limit:kanaReady&&kanjiReady?totalCount('vocab'):0,label:'Sentences N5',need:kanaReady?`${masteredCount('kanji')}/10 kanji mastery`:`${Math.min(hira,30)}/30 hira · ${Math.min(kata,30)}/30 kata`};
 if(dk.id==='kanji')return{stage:'N5',open:kanaReady,limit:kanaReady?totalCount('kanji'):0,label:'Kanji N5',need:`${Math.min(hira,30)}/30 hira · ${Math.min(kata,30)}/30 kata`};
 return pokemonUnlockInfo();
}
const deckVisibleItems=dk=>{
 const info=deckUnlockInfo(dk);
 const items=allDeckItems(dk.id).slice().sort((a,b)=>a.idx-b.idx);
 return info.limit>=items.length?items:items.slice(0,info.limit);
};
const POKEMON_SHINY_RATE=1/32;
function pokemonUnlockedByKana(i){
 return kanaUnits(i.ja).every(u=>known(KIDX.kata[u]));
}
function pokemonUnlockInfo(){
 const items=allDeckItems('pkmn');
 const unlocked=items.filter(pokemonUnlockedByKana).length;
 const total=items.length;
 return{stage:'N5',open:true,limit:total,label:'Pokémon 151',need:`${unlocked}/${total} unlocked by kana`,total,unlocked};
}
function pokemonMeta(id){
 return app.pokemonUnlocks&&app.pokemonUnlocks[id]||null;
}
function syncPokemonUnlocks(){
 const items=allDeckItems('pkmn').filter(pokemonUnlockedByKana).sort((a,b)=>a.idx-b.idx);
 if(!app.pokemonUnlocks)app.pokemonUnlocks={};
 let changed=false;
 for(const i of items){
  if(!app.pokemonUnlocks[i.id]){
   app.pokemonUnlocks[i.id]={unlockedAt:Date.now(),shiny:Math.random()<POKEMON_SHINY_RATE};
   changed=true;
  }
 }
 return changed;
}
function levelRowsHtml(){
 return LEVELS.map(l=>{
  const info=levelUnlockInfo(l.id);
  const decks=decksForLevel(l.id);
  const count=decks.length?decks.reduce((n,dk)=>n+deckVisibleItems(dk).length,0):0;
  const subtitle=l.id==='n5'
   ?'Hiragana, Katakana, Kanji N5, Sentences N5, Pokémon 151'
   :`Locked until ${info.need}`;
  const progress=l.id==='n5'?Math.round(info.progress*100):0;
  const deckList=decks.map(dk=>{
      const dkInfo=deckUnlockInfo(dk);
      const cs=deckVisibleItems(dk).map(i=>cards[i.id]);
      const nw=cs.filter(c=>stateOf(c)==='new').length,lrn=cs.filter(c=>stateOf(c)==='lrn').length;
      const due=cs.filter(c=>c.due!==null&&c.due<=Date.now()).length;
      return `<div class="deck-link ${dkInfo.open?'open':'locked'}" data-deck="${dk.id}">
       <span>${esc(dk.name)}</span>
       <span class="tally mono"><span class="chip ${dkInfo.open?'on':'locked'}" style="height:22px;padding:0 8px;font-size:10px">${dkInfo.stage}</span><span class="t-new">${nw}</span><span class="t-lrn">${lrn}</span><span class="t-due">${due}</span></span>
      </div>`
     }).join('');
  return `<div class="level-card ${info.open?'open':'locked'}">
   <div class="level-row">
    <div class="level-main">
     <div class="level-top"><span class="level-pill">${l.label}</span><span class="level-title">${l.label} Collection</span></div>
     <div class="level-sub">${esc(subtitle)}</div>
     <div class="level-sub">${l.id==='n5'?`${progress}% mastered`:info.open?'open':'locked'}</div>
    </div>
    <div class="tally mono"><span class="t-new">${count}</span></div>
   </div>
   ${deckList?`<div class="level-decks">${deckList}</div>`:''}
  </div>`
 }).join('');
}
function atomsOf(i){
 if(i.kind==='glyph')return [];
 if(i.kind==='kanji')return [];
 if(i.kind==='lex')return kanaUnits(i.read).map(u=>KIDX.hira[u]).filter(Boolean);
 if(i.kind==='name')return kanaUnits(i.ja).map(u=>KIDX.kata[u]).filter(Boolean);
 return[]}
const unknownIn=ids=>ids.filter(id=>!known(id)).length;

function loadState(){
 try{
  const stored=JSON.parse(localStorage.getItem(STORAGE_KEY)||'null');
  if(stored?.cards){
   for(const id in stored.cards){if(cards[id])Object.assign(cards[id],stored.cards[id])}
  }
  if(stored?.app){
   Object.assign(app,stored.app);
   app.sync={...SYNC_DEFAULT,...(stored.app.sync||{})};
   if(!app.sync.url)app.sync.url=SYNC_DEFAULT.url;
   if(!app.sync.userId)app.sync.userId=SYNC_DEFAULT.userId;
   if(typeof app.sync.enabled!=='boolean')app.sync.enabled=SYNC_DEFAULT.enabled;
  }
  if(stored?.progress){
   Object.assign(app,{points:stored.progress.points||0,streak:stored.progress.streak||0,bestStreak:stored.progress.bestStreak||0,totalRuns:stored.progress.totalRuns||0,unlockedBonus:stored.progress.unlockedBonus||{}});
  }
  app.unlockedBonus=bonusUnlocksForPoints(app.points||0);
  if(stored?.dailyStats){
   app.dailyStats=stored.dailyStats;
  }
  if(stored?.pokemonUnlocks){
   app.pokemonUnlocks=stored.pokemonUnlocks;
  }
  if(stored?.decks){
   for(const dk of stored.decks){
    const target=DECKS.find(d=>d.id===dk.id);
    if(target)Object.assign(target,dk);
   }
  }
  const backfilled=syncPokemonUnlocks();
  if(backfilled)saveState();
 }catch(e){console.warn('Failed to load state',e)}
}
function saveState(){
 try{
  const decks=DECKS.map(dk=>({id:dk.id,answer:dk.answer,grading:dk.grading,audio:dk.audio,furi:dk.furi,newPerDay:dk.newPerDay}));
  localStorage.setItem(STORAGE_KEY,JSON.stringify({cards,app:{theme:app.theme,mute:app.mute,detailed:app.detailed,kb:app.kb,sync:app.sync},decks,progress:{points:app.points,streak:app.streak,bestStreak:app.bestStreak,totalRuns:app.totalRuns,unlockedBonus:app.unlockedBonus},dailyStats:app.dailyStats||{},pokemonUnlocks:app.pokemonUnlocks||{}}));
 }catch(e){console.warn('Failed to save state',e)}
}
function flushState(){
 if(!app) return;
 saveState();
 maybeAutoPush();
}
function syncBaseUrl(){
 const raw=(app.sync&&app.sync.url||'').trim();
 return raw.replace(/\/+$/,'');
}
function syncUserKey(){
 return String(app.sync&&app.sync.userId||'').trim().replace(/[.#$\[\]\/]/g,'_');
}
function syncRequestUrl(){
 const base=syncBaseUrl();
 const key=syncUserKey();
 const token=(app.sync&&app.sync.anonKey||'').trim();
 const q=token?`?auth=${encodeURIComponent(token)}`:'';
 return `${base}/anki-sync/${encodeURIComponent(key)}.json${q}`;
}
function syncReady(){
 const s=app.sync||{};
 return !!(s.enabled&&syncBaseUrl()&&syncUserKey());
}
function localPayload(){
 const decks=DECKS.map(dk=>({id:dk.id,answer:dk.answer,grading:dk.grading,audio:dk.audio,furi:dk.furi,newPerDay:dk.newPerDay}));
 return {
  version:1,
  cards,
  decks,
  progress:{points:app.points||0,streak:app.streak||0,bestStreak:app.bestStreak||0,totalRuns:app.totalRuns||0,unlockedBonus:app.unlockedBonus||{}},
  dailyStats:app.dailyStats||{},
  pokemonUnlocks:app.pokemonUnlocks||{},
  updatedAt:new Date().toISOString()
 };
}
function applyPayload(payload){
 if(!payload||!payload.cards)return false;
 for(const id in payload.cards){if(cards[id])Object.assign(cards[id],payload.cards[id]);}
 if(payload.progress){
  app.points=payload.progress.points||0;
  app.streak=payload.progress.streak||0;
  app.bestStreak=payload.progress.bestStreak||0;
  app.totalRuns=payload.progress.totalRuns||0;
  app.unlockedBonus=payload.progress.unlockedBonus||{};
 }
 app.dailyStats=payload.dailyStats||{};
 app.pokemonUnlocks=payload.pokemonUnlocks||{};
 if(Array.isArray(payload.decks)){
  for(const dk of payload.decks){
   const target=DECKS.find(d=>d.id===dk.id);
   if(target)Object.assign(target,dk);
  }
 }
 app.unlockedBonus=bonusUnlocksForPoints(app.points||0);
 syncPokemonUnlocks();
 saveState();
 return true;
}
async function cloudPush(){
 if(!syncReady())throw new Error('Sync config incomplete');
 const payload=localPayload();
 const body={user_id:String(syncUserKey()),payload,updated_at:new Date().toISOString()};
 const res=await fetch(syncRequestUrl(),{
  method:'PUT',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify(body)
 });
 if(!res.ok)throw new Error(`Push failed (${res.status})`);
 app.sync.lastSync=Date.now();
 app.sync.lastError='';
 app.sync.lastDirection='push';
 saveState();
}
async function cloudPull(){
 if(!syncReady())throw new Error('Sync config incomplete');
 const res=await fetch(syncRequestUrl());
 if(!res.ok)throw new Error(`Pull failed (${res.status})`);
 const row=await res.json();
 if(!row||!row.payload)return false;
 const changed=applyPayload(row.payload);
 app.sync.lastSync=Date.now();
 app.sync.lastError='';
 app.sync.lastDirection='pull';
 saveState();
 return changed;
}
let syncBusy=false;
let lastAutoPushAt=0;
async function runSync(dir){
 if(syncBusy)return;
 syncBusy=true;
 try{
  if(dir==='pull')await cloudPull();
  else await cloudPush();
  render();
 }catch(e){
  app.sync.lastError=String(e.message||e);
  saveState();
  render();
 }finally{
  syncBusy=false;
 }
}
function maybeAutoPush(){
 if(!syncReady()||!(app.sync&&app.sync.auto))return;
 const now=Date.now();
 if(now-lastAutoPushAt<45000)return;
 lastAutoPushAt=now;
 runSync('push');
}

/* ===================== ordonnanceur ===================== */
const DAY=864e5,cards={};
ITEMS.forEach(i=>cards[i.id]={id:i.id,stab:0,diff:5,due:null,reps:0,goodReps:0,lapses:0,last:null});
function stateOf(c){if(c.reps===0)return 'new';if(c.lapses&&c.stab<1)return 'lrn';return c.stab>=21?'mature':'young'}
function grade(c,good,elapsed,skip){
 c.reps++;
 if(good)c.goodReps=(c.goodReps||0)+1;
 c.lastSeen=Date.now();
 c.responseCount=(c.responseCount||0)+1;
 c.responseAvg=((c.responseAvg||0)*(c.responseCount-1)+elapsed)/c.responseCount;
 const speed=elapsed<=8000?1:elapsed<=15000?0.92:0.8;
 if(good){
  c.diff=Math.max(1,c.diff - 0.12*speed);
  c.stab=c.stab<1?1:c.stab*(1.35+(10-c.diff)*.08)*speed;
 } else {
  if(skip){
   c.diff=Math.min(10,c.diff+.25);
   c.stab=Math.max(.6,c.stab*(0.75 + 0.06*speed));
  } else {
   c.lapses++;
   c.diff=Math.min(10,c.diff+.9);
   c.stab=Math.max(.4,c.stab*(0.35 + 0.1*speed));
  }
 }
 c.due=c.lastSeen+Math.round(c.stab*DAY);
 saveState();
}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a}
function pointsForResult(good,combo){
 if(!good)return-6;
 const tier=Math.floor(Math.max(1,combo)-1)/3;
 const mult=1+Math.min(1.75,tier*0.25);
 return Math.round(10*mult);
}
function bonusUnlocksForPoints(points){
 const unlocked={};
 for(const b of BONUS_DECKS)unlocked[b.id]=points>=b.threshold;
 return unlocked;
}
function dayKey(d=new Date()){
 return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function dailyDefault(){return {points:0,attempts:0,good:0,wrong:0,skip:0};}
function getDailyStats(){
 if(!app.dailyStats)app.dailyStats={};
 return app.dailyStats;
}
function noteDailyProgress(delta,outcome){
 const stats=getDailyStats();
 const key=dayKey();
 const day=stats[key]||(stats[key]=dailyDefault());
 day.points=(day.points||0)+Math.max(0,delta||0);
 day.attempts=(day.attempts||0)+1;
 day[outcome]=(day[outcome]||0)+1;
 app.dailyStats=stats;
}
function heatmapDays(year=new Date().getFullYear()){
 const start=new Date(year,0,1);
 const end=new Date(year,11,31);
 const today=new Date();
 const out=[];
 const stats=getDailyStats();
 for(const d=new Date(start);d<=end;d.setDate(d.getDate()+1)){
  const key=dayKey(d);
  out.push({key,date:new Date(d),future:d>today,stats:stats[key]||dailyDefault()});
 }
 return out;
}
function heatmapClass(stats,max,future){
 if(future)return 'heat future';
 const pts=stats.points||0;
 if(pts<=0)return stats.attempts? 'heat attempt':'heat zero';
 const ratio=max?pts/max:0;
 if(ratio>=0.75)return 'heat s4';
 if(ratio>=0.5)return 'heat s3';
 if(ratio>=0.25)return 'heat s2';
 return 'heat s1';
}
/* kanji fait figure d'exception : c'est un deck ordonné (non filtré par atomes),
   mais ses lectures sont en hiragana — donc pas de nouveau kanji tant que la base
   hiragana n'est pas raisonnablement en place. */
const KANJI_UNLOCK_HIRA=10;
function unseenPool(dk){
 let pool=deckVisibleItems(dk).filter(i=>cards[i.id].reps===0);
 if(dk.ordered)pool.sort((a,b)=>a.idx-b.idx);
 else{
  pool=pool
   .map(i=>({item:i,unknown:unknownIn(atomsOf(i)),len:(i.surface||i.ja||i.glyph||'').length}))
   .sort((a,b)=>a.unknown-b.unknown||a.len-b.len||Math.random()-.5)
   .map(x=>x.item);
 }
 if(dk.id==='kanji'){
  const hiraMastered=ITEMS.filter(i=>i.deck==='hira'&&known(i.id)).length;
  if(hiraMastered<KANJI_UNLOCK_HIRA)pool=[];
 }
 return pool;
}
function newFor(dk,limit){
 const n=limit===undefined?dk.newPerDay:limit;
 return unseenPool(dk).slice(0,n).map(i=>cards[i.id]);
}
/* le budget quotidien se répartit selon le poids newPerDay de chaque deck,
   et se redistribue vers les decks suivants dès qu'un deck est épuisé ou verrouillé :
   le total glisse ainsi naturellement des cartes neuves vers les révisions à mesure
   que l'apprentissage avance, sans jamais dépasser la charge du jour. */
function allocateNewBudget(remaining){
 const totalWeight=DECKS.reduce((s,dk)=>s+dk.newPerDay,0)||1;
 const avail={};for(const dk of DECKS)avail[dk.id]=unseenPool(dk).length;
 const alloc={};for(const dk of DECKS)alloc[dk.id]=0;
 let left=remaining;
 for(const dk of DECKS){
  const want=Math.round(remaining*dk.newPerDay/totalWeight);
  const give=Math.min(want,avail[dk.id],left);
  alloc[dk.id]=give;left-=give;
 }
 for(const dk of DECKS){
  if(left<=0)break;
  const room=avail[dk.id]-alloc[dk.id];
  if(room>0){const take=Math.min(room,left);alloc[dk.id]+=take;left-=take}
 }
 return alloc;
}
const DAILY_BUDGET=30;
function queueFor(id){const now=Date.now(),out=[];
 const targets=id?[deck(id)]:DECKS;
 for(const dk of targets)
  out.push(...deckVisibleItems(dk).map(i=>cards[i.id]).filter(c=>c.due!==null&&c.due<=now));
 if(id){
  out.push(...newFor(deck(id)));
 }else{
  const alloc=allocateNewBudget(Math.max(0,DAILY_BUDGET-out.length));
  for(const dk of DECKS)out.push(...newFor(dk,alloc[dk.id]));
 }
 return shuffle(out)}

/* sélection de contexte : le moins d'atomes inconnus, jamais celui de la répétition précédente */
function pickCtx(c,pool,atoms){
 if(!pool.length)return null;
 return pool.map(x=>({x,u:unknownIn(atoms(x).filter(a=>a!==c.id)),r:x.id===c.last?1:0}))
   .sort((a,b)=>a.r-b.r||a.u-b.u||Math.random()-.5)[0]}
function ctxForGlyph(c){const i=item(c.id),map=KIDX[i.deck];
 const pool=WORDCTX.filter(w=>w.units.includes(i.kana)&&w.units.length>1);
 return pickCtx(c,pool,w=>w.units.map(u=>map[i.deck==='kata'?toKata(u):u]).filter(Boolean))}
function ctxForKanji(c){const i=item(c.id);
 const pool=COMPCTX.filter(m=>m.kanji.includes(i.glyph));
 return pickCtx(c,pool,m=>m.kanji.map(k=>KIDX.kanji[k]).filter(Boolean))}
function ctxForLex(c){return pickCtx(c,CTX.filter(x=>x.lex===c.id),()=>[])}

/* Le i+1 contraint la QUESTION, pas la révélation : voir un mot dont on ignore
   des kana ne coûte rien, y répondre coûte cher. Donc tout item porte un contexte
   au dos, même à sa première exposition. */
function ctxBlockFor(i,f){
 if(['cloze','word','comp'].includes(f))return null;
 if(i.kind==='glyph'){
  const pool=WORDCTX.filter(w=>w.units.includes(i.kana)&&w.units.length>1);
  if(!pool.length)return null;
  const w=pool[Math.abs(hash(i.id))%pool.length];
  const kata=i.deck==='kata',tgt=kata?toKata(i.kana):i.kana;
  const word=kata?toKata(w.word):w.word;
  return{ja:word.replace(tgt,'\u0001'+tgt+'\u0002'),kana:word,rom:w.rom,en:w.en}}
 if(i.kind==='kanji'){
  const pool=COMPCTX.filter(m=>m.kanji.includes(i.glyph));
  if(!pool.length)return null;
  const m=pool[Math.abs(hash(i.id))%pool.length];
  return{ja:m.word.replace(i.glyph,'\u0001'+i.glyph+'\u0002'),kana:m.read.join(' / '),rom:toRomaji(m.read[0]),en:m.en}}
 if(i.kind==='lex'){
  const pool=CTX.filter(x=>x.lex===i.id);if(!pool.length)return null;
  const x=pool[Math.abs(hash(i.id))%pool.length];
  return{ja:x.segs.map((g,n)=>n===x.ti?'\u0001'+g.t+'\u0002':g.t).join(''),kana:segKana(x.segs),rom:segRomaji(x.segs),en:x.en}}
 if(i.kind==='name')return{ja:'\u0001'+i.ja+'\u0002',kana:i.ja,rom:toRomaji(i.ja),en:i.type};
 return null}
function hash(s){let h=0;for(let n=0;n<s.length;n++)h=(h*31+s.charCodeAt(n))|0;return h}
const ctxHTML=t=>esc(t).split('\u0001').join('<em>').split('\u0002').join('</em>');
const SYNC_DEFAULT={
 enabled:true,
 auto:true,
 url:'https://flashcard-1d3b9-default-rtdb.europe-west1.firebasedatabase.app/',
 anonKey:'',
 userId:'tristan-main',
 lastSync:0,
 lastError:'',
 lastDirection:''
};

/* ===================== état ===================== */
const app={route:'home',deck:null,editing:null,tab:'cards',filter:'all',q:'',
 kb:true,detailed:false,mute:false,theme:'light',sess:null,points:0,streak:0,bestStreak:0,totalRuns:0,unlockedBonus:{},sync:{...SYNC_DEFAULT}};
const view=document.getElementById('view'),navEl=document.getElementById('nav');
function esc(s){
  s = String(s);
  s = s.replace(/&/g, '&amp;');
  s = s.replace(/</g, '&lt;');
  s = s.replace(/>/g, '&gt;');
  s = s.replace(/"/g, '&quot;');
  return s;
}
function segHTML(s,furi){
  if(!s.r) return esc(s.t);
  if(furi) return '<ruby>' + esc(s.t) + '<rt>' + esc(s.r) + '</rt></ruby>';
  return esc(s.t);
}
function go(r,o={}){Object.assign(app,{route:r},o);render()}
function render(){
 document.documentElement.dataset.theme=app.theme;
 const inSess=app.route==='session'||app.route==='summary';
 if(navEl){
  navEl.className=inSess?'hide':'';
  navEl.innerHTML=inSess?'':[['home','学','Study'],['collection','集','Collection'],['settings','設','Settings']]
   .map(([r,g,l])=>`<button data-go="${r}" class="${app.route===r||(r==='collection'&&['deck','editor'].includes(app.route))?'on':''}"><span class="ic">${g}</span>${l}</button>`).join('');
 }
 if(view){
  view.innerHTML=({home:Home,collection:Collection,deck:Deck,editor:Editor,settings:Settings,session:Session,summary:Summary}[app.route])();
  bind()
 }
}

/* ===================== écrans ===================== */
function Home(){
 const due=queueFor().length;
 const d=new Date().toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long'});
 const days=heatmapDays();
 const maxPts=Math.max(1,...days.map(x=>x.stats.points||0));
 return `<div class="scroll pad" style="position:relative"><span class="mono faint" style="position:absolute;top:10px;right:0;font-size:11px;letter-spacing:.04em">v${BUILD_VERSION}</span><p class="label" style="margin-top:24px">${esc(d)}</p>
  <div style="display:flex;justify-content:center;margin:36px 0 12px">
   <div class="sq" style="width:146px"><span class="mono" style="font-size:60px">${due}</span></div></div>
  <p class="muted" style="text-align:center;font-size:14px;margin:0 0 32px">cards to review</p>
  <div style="display:flex;gap:12px;margin:0 0 18px">
   ${[['points',app.points||0],['streak',app.streak||0],['best',app.bestStreak||0]].map(([l,v])=>`<div style="flex:1;border:1px solid var(--rule);border-radius:var(--radius);padding:10px 12px"><div class="mono" style="font-size:22px">${v}</div><div class="label" style="margin-top:4px">${l}</div></div>`).join('')}
  </div>
  <button class="btn" data-start="">Start</button><hr class="rule">
  ${due?``:`<div class="empty" style="padding:24px 0 12px">Nothing to review.<br>Come back in a few hours.</div>`}
  <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin:0 0 8px">
   <span class="label">progress</span>
   <span class="faint" style="font-size:12px">${POINTS_PER_DAY_ESTIMATE} pts/day target</span>
  </div>
  <div class="hm-wrap"><div class="hm" aria-label="daily progress heatmap">${days.map(({key,stats,future})=>`<span class="${heatmapClass(stats,maxPts,future)}" title="${key} · ${stats.points||0} pts · ${stats.attempts||0} tries"></span>`).join('')}</div></div>
  <div style="display:flex;justify-content:space-between;margin-top:8px"><span class="faint" style="font-size:12px">less</span><span class="faint" style="font-size:12px">more</span></div>
  <div style="height:24px"></div></div>`}

function face(i){
 if(i.kind==='lex')return[i.surface,i.gloss];
 if(i.kind==='glyph')return[i.glyph,i.rom];
 if(i.kind==='kanji')return[i.glyph,i.keyword];
 return[i.ja,i.en]}
function Collection(){
 const pkmn=pokemonUnlockInfo();
 const shinyCount=app.pokemonUnlocks?Object.values(app.pokemonUnlocks).filter(x=>x.shiny).length:0;
 return `<div class="hdr"><h1>Collection</h1></div><div class="scroll pad">
  <div class="label" style="margin:12px 0 10px">JLPT collections</div>
  ${levelRowsHtml()}
  <div class="level-card ${pkmn.open?'open':'locked'}" data-deck="pkmn">
   <div class="level-row">
    <div class="level-main">
     <div class="level-top"><span class="level-pill">${pkmn.open?'✓':'★'}</span><span class="level-title">Pokémon 151</span></div>
     <div class="level-sub">${pkmn.unlocked}/${pkmn.total} unlocked${shinyCount?` · ${shinyCount} shiny`:''}</div>
      <div class="level-sub">Each Pokémon opens when every kana in its Japanese name is mastered.</div>
    </div>
    <div class="tally mono"><span class="t-new">${pkmn.unlocked}</span></div>
   </div>
  </div>
  <div class="label" style="margin:22px 0 10px">Bonus decks</div>
  ${BONUS_DECKS.length?BONUS_DECKS.map(b=>{const open=app.unlockedBonus&&app.unlockedBonus[b.id];
  const eta=daysToUnlock(b.threshold,app.points||0);
    return `<div class="level-card ${open?'open':'locked'}" data-deck="${b.id}">
    <div class="level-row">
     <div class="level-main">
      <div class="level-top"><span class="level-pill">${open?'✓':'★'}</span><span class="level-title">${esc(b.name)}</span></div>
      <div class="level-sub">${open?`Unlocked at ${b.threshold} points`:`${esc(b.theme)} · ${b.threshold} points to unlock · ~${eta} day${eta===1?'':'s'} left`}</div>
     </div>
     <div class="tally mono"><span class="t-new">${b.threshold}</span></div>
    </div>
   </div>`}).join(''):'<div class="empty" style="padding:12px 0;font-size:13px">No bonus decks configured yet.</div>'}
  <p class="faint" style="font-size:12px;margin-top:16px">new · relearning · due</p><div style="height:24px"></div></div>`}

function Deck(){const dk=deck(app.deck);
 return `<div class="hdr"><button class="back" data-go="collection">←</button><h1>${esc(dk.name)}</h1></div>
 <div class="tabs">${[['cards','Cards'],['settings','Settings'],['stats','Stats']].map(([t,l])=>
  `<button data-tab="${t}" class="${app.tab===t?'on':''}">${l}</button>`).join('')}</div>
 ${({cards:DeckCards,settings:DeckSettings,stats:DeckStats}[app.tab])(dk)}`}
function DeckCards(dk){
 const F={all:()=>true,new:c=>stateOf(c)==='new',relearning:c=>stateOf(c)==='lrn',due:c=>c.due!==null&&c.due<=Date.now()};
 const info=deckUnlockInfo(dk);
 const list=deckVisibleItems(dk)
  .filter(i=>{if(!app.q)return true;const[a,b]=face(i);return(a+b).toLowerCase().includes(app.q.toLowerCase())})
  .filter(i=>F[app.filter](cards[i.id]));
 if(dk.kind==='bonus')return `<div class="scroll pad"><div style="height:12px"></div><div class="empty">${info.open?`Unlocked. This bonus deck is a shell for your next theme.`:`Locked for now.<br>${esc(info.need||'Keep pushing the point total higher.')}.
`}</div><div style="height:24px"></div></div>`;
 if(!info.open)return `<div class="scroll pad"><div style="height:12px"></div><div class="empty">Locked for now.<br>${esc(info.need||'Keep memorizing the base decks first.')}.</div><div style="height:24px"></div></div>`;
 return `<div class="scroll pad">
  <div class="field" style="margin:12px 0"><input id="q" placeholder="Search" value="${esc(app.q)}"></div>
  <div class="chips" style="margin-bottom:8px">${['all','new','relearning','due'].map(f=>
   `<button class="chip ${app.filter===f?'on':''}" data-filter="${f}">${f}</button>`).join('')}</div>
  ${list.length?list.map(i=>{const c=cards[i.id],st=stateOf(c),[a,b]=face(i),meta=i.deck==='pkmn'?pokemonMeta(i.id):null;
   const dd=c.due===null?null:Math.round((c.due-Date.now())/DAY);
  const locked=false;
   return `<div class="row${meta?.shiny?' shiny':''}" data-edit="${i.id}" style="min-height:44px">
    <span style="font-family:var(--f-jp);flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(a)}<span class="faint" style="font-size:13px"> ${esc(b)}</span>${meta?.shiny?` <span class="tag-shiny">shiny</span>`:''}</span>
    <span class="faint mono" style="font-size:12px">${locked?'locked':st}</span>
    <span class="faint mono" style="font-size:12px;min-width:40px;text-align:right">${dd===null?'—':(dd<=0?'due':'d+'+dd)}</span></div>`}).join('')
   :'<div class="empty">No cards match this filter.</div>'}
  <div style="height:24px"></div></div>`}
function DeckSettings(dk){
 const sel=(k,opts)=>`<label class="field"><span class="label">${k.label}</span><select data-dk="${k.key}">${
  opts.map(([v,l])=>`<option value="${v}"${dk[k.key]===v?' selected':''}>${l}</option>`).join('')}</select></label>`;
 return `<div class="scroll pad"><div style="height:12px"></div>
 ${sel({label:'Input display',key:'answer'},[['kana','converts to kana as you type'],['romaji','stays in romaji']])}
 ${sel({label:'Grading',key:'grading'},[['typed','typed answer'],['self','self-assessed']])}
 ${sel({label:'Audio',key:'audio'},[['reveal','on reveal'],['always','prompt and reveal'],['never','never']])}
 ${sel({label:'Furigana',key:'furi'},[['hidden','revealed with answer'],['always','always visible'],['never','never']])}
 <label class="field"><span class="label">New per day</span>
  <input type="number" min="0" max="50" value="${dk.newPerDay}" data-dk="newPerDay"></label>
 <p class="faint" style="font-size:13px;line-height:1.7">${dk.kind==='glyph'
  ?'The field stays in romaji here because the target is a sound, not a word: converting would type the question back at you. Romaji and kana are both accepted everywhere.'
  :dk.kind==='kanji'?'Type the reading in romaji or in kana, both are accepted. No isolated on/kun drilling: which reading applies is decided by the word, so readings come from compounds.'
  :dk.kind==='name'?'Once this deck is open, all names are in the study pool. Katakana mastery only affects confidence, not card availability.'
    :dk.kind==='bonus'?'Bonus decks unlock when your point total crosses their threshold. They are shells for now: add the theme you want later and keep the same roguelike gate.'
  :'Sentences rotate across repetitions so the word is not memorised as the answer to one sentence.'}</p>
 <div style="height:24px"></div></div>`}
function DeckStats(dk){
 const info=deckUnlockInfo(dk);
 const cs=deckVisibleItems(dk).map(i=>cards[i.id]);
 const rows=[['new','new'],['relearning','lrn'],['young','young'],['mature','mature']]
  .map(([n,s])=>[n,cs.filter(c=>stateOf(c)===s).length]);
 const max=Math.max(1,...rows.map(r=>r[1]));
 return `<div class="scroll pad"><div style="height:20px"></div>
 <div class="row"><span class="muted">stage</span><span class="mono">${info.stage}</span></div>
 <div class="row"><span class="muted">unlock</span><span class="mono">${info.open?'open':esc(info.need||'locked')}</span></div>
 ${rows.map(([n,v])=>`<div style="margin-bottom:14px">
  <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:5px"><span class="muted">${n}</span><span class="mono">${v}</span></div>
  <div style="height:6px;background:var(--rule)"><div style="height:6px;width:${v/max*100}%;background:var(--ink)"></div></div></div>`).join('')}
 <hr class="rule">
 <div class="row"><span class="muted">repetitions</span><span class="mono">${cs.reduce((a,c)=>a+c.reps,0)}</span></div>
 <div class="row" style="border:0"><span class="muted">lapses</span><span class="mono">${cs.reduce((a,c)=>a+c.lapses,0)}</span></div></div>`}

function Editor(){const i=item(app.editing);if(!i)return Collection();
 const [a,b]=face(i),c=cards[i.id];
 const at=atomsOf(i);
 const prev=i.kind==='lex'?(()=>{const x=CTX.find(y=>y.lex===i.id);
  return `<div class="sentence" style="font-size:20px;margin:0">${x.segs.map((g,n)=>n===x.ti
   ?'<span class="cell" style="min-width:3.6em"></span>':segHTML(g,true)).join('')}</div>
   <p class="hint" style="margin-top:12px;font-size:14px">${esc(x.en)}</p>`})()
  :`<div class="solo sm" style="margin:0">${esc(a)}</div><p class="hint mid" style="font-size:14px">${esc(b)}</p>`;
 return `<div class="hdr"><button class="back" data-go="deck">←</button><h1>Card</h1>
  <button class="faint" data-speak="${esc(i.kana||i.read||i.ja||i.glyph)}">${speakerIcon(18)}</button></div>
 <div class="scroll pad"><div style="height:16px"></div>
 <label class="field"><span class="label">Front</span><input id="e-a" value="${esc(a)}" style="font-family:var(--f-jp)"></label>
 <label class="field"><span class="label">Back</span><input id="e-b" value="${esc(b)}"></label>
 ${at.length?`<p class="label">Prerequisites</p><div class="atoms">${at.map(id=>
  `<span class="${known(id)?'':'new'}">${esc(item(id).glyph)}</span>`).join('')}</div>
  <p class="note">${unknownIn(at)?unknownIn(at)+' still unknown prerequisites.':'All known.'}</p>`:''}
 <hr class="rule"><p class="label" style="margin-bottom:12px">Preview</p>
 <div style="border:1px solid var(--rule);border-radius:var(--radius);padding:16px">${prev}</div>
 <p class="note">reps ${c.reps} · lapses ${c.lapses} · stability ${c.stab.toFixed(1)}d</p>
 <div style="height:24px"></div></div>`}

function Settings(){
 const sw=(k,l,on)=>`<div class="sw"><span>${l}</span><button class="tg ${on?'on':''}" data-tg="${k}"><i></i></button></div>`;
 const sync=app.sync||SYNC_DEFAULT;
 const syncStamp=sync.lastSync?new Date(sync.lastSync).toLocaleString('fr-FR'):'never';
 return `<div class="hdr"><h1>Settings</h1></div><div class="scroll pad"><div style="height:8px"></div>
 ${sw('mute','Mute',app.mute)}
 ${sw('theme','Dark theme',app.theme==='dark')}
 ${sw('detailed','Detailed grading',app.detailed)}
 ${sw('kb','Simulate software keyboard',app.kb)}
 <hr class="rule">
 ${sw('sync-enabled','Cloud sync enabled',sync.enabled)}
 ${sw('sync-auto','Cloud auto push',sync.auto)}
 <label class="field"><span class="label">Firebase DB URL</span><input id="sync-url" value="${esc(sync.url||'')}" placeholder="https://your-project-default-rtdb.firebaseio.com"></label>
 <label class="field"><span class="label">Firebase auth token (optional)</span><input id="sync-key" value="${esc(sync.anonKey||'')}" placeholder="optional"></label>
 <label class="field"><span class="label">Sync user id</span><input id="sync-user" value="${esc(sync.userId||'')}" placeholder="tristan-iphone"></label>
 <div style="display:flex;gap:10px;margin:8px 0 0">
  <button class="btn ghost" style="height:44px" data-sync="save">Save cloud config</button>
  <button class="btn ghost" style="height:44px" data-sync="pull">Pull</button>
  <button class="btn ghost" style="height:44px" data-sync="push">Push</button>
 </div>
 <p class="faint" style="font-size:12px;line-height:1.6;margin-top:10px">Last sync: ${esc(syncStamp)}${sync.lastDirection?` · ${esc(sync.lastDirection)}`:''}${sync.lastError?` · error: ${esc(sync.lastError)}`:''}</p>
 <p class="faint" style="font-size:12px;line-height:1.6">Path used in Firebase: /anki-sync/{sync-user-id}. For secured rules, pass a Firebase auth token.</p>
 <p class="faint" style="font-size:13px;line-height:1.7">${tts.ok?(tts.voice?'Japanese voice detected: '+esc(tts.voice.name):'No Japanese voice installed on this system. Playback will be silent or wrong.'):'Speech synthesis unavailable in this browser.'}</p>
 <p class="faint" style="font-size:13px;line-height:1.7;margin-top:16px">Progress is now saved locally in this browser. Deck settings and review history persist across reloads. Romaji conversion uses a demo table. Pokémon names are trademarks of The Pokémon Company, used here for personal study only.</p>
 <div style="height:24px"></div></div>`

}

/* ===================== session ===================== */
function contextFor(c){const i=item(c.id);
 if(i.kind==='lex')return ctxForLex(c);
 if(i.kind==='glyph')return ctxForGlyph(c);
 if(i.kind==='kanji')return ctxForKanji(c);
 return null}
/* le contexte n'est retenu que s'il ne contient aucun atome inconnu : c'est le i+1 */
function faceFor(c,g){const i=item(c.id),usable=!!g&&g.u===0;
 if(i.kind==='lex'){
  if(c.reps===0)return 'cloze';
  const m=c.reps%5;
  if(m===3)return 'bare';
  if(m===4)return 'lex-write';
  return 'cloze';
 }
 if(i.kind==='glyph'){
  if(c.reps===0)return 'glyph';
  const m=c.reps%4;
  if(m===1)return 'sound';
  if(m===2)return 'glyph-write';
  if(m===3)return usable?'word':'glyph';
  return 'glyph';
 }
 if(i.kind==='kanji'){
  if(c.reps===0)return 'keyword';
  const m=c.reps%3;
  if(m===1&&usable)return 'comp';
  if(m===2)return 'kanji-write';
  return 'keyword';
 }
 return 'name';
}
function startSession(id){const q=queueFor(id||null);if(!q.length)return;
 app.sess={queue:q,seen:0,ok:0,t0:Date.now(),st:'typing',typed:'',committed:false,cur:null,face:null,ctx:null,timer:null,startTime:null,feedback:null,fx:null,fxTimer:null,runPoints:0,runCombo:0,runBestCombo:0};
 nextCard();go('session')}
function nextCard(){const s=app.sess;clearTimeout(s.timer);
 clearTimeout(s.fxTimer);s.fx=null;
 if(!s.queue.length){s.dur=Date.now()-s.t0;go('summary');return}
 s.cur=s.queue[0];s.committed=false;s.typed='';
 const i=item(s.cur.id),g=contextFor(s.cur);
 s.face=faceFor(s.cur,g);
 s.ctx=['cloze','word','comp'].includes(s.face)?g.x:null;
 s.st=['keyword','kanji-write','lex-write'].includes(s.face)?'ask':'typing';
 s.startTime=Date.now();
 if(app.route==='session'){render();
  const dk=deck(i.deck);
  if(s.face==='sound')speak(i.kana,.7);
  else if(dk.audio==='always')speak(promptAudio(s),.8)}}
function promptAudio(s){const i=item(s.cur.id);
 return s.face==='cloze'?s.ctx.segs.map(g=>g.t).join('')
  :s.face==='word'?s.ctx.word:s.face==='comp'?s.ctx.read[0]
  :s.face==='glyph-write'?(i.deck==='kata'?toKata(i.kana):i.kana)
  :s.face==='lex-write'?i.read
  :i.kana||i.read||i.ja||i.glyph}
function acceptedFor(s){const i=item(s.cur.id);
 let a;
 if(s.face==='cloze')a=s.ctx.ans;
 else if(s.face==='bare')a=i.acc;
 else if(s.face==='glyph')a=[i.rom];
 else if(s.face==='glyph-write')a=[i.deck==='kata'?toKata(i.kana):i.kana];
 else if(s.face==='word')a=[s.ctx.rom];
 else if(s.face==='comp')a=s.ctx.read;
 else if(s.face==='sound')a=[i.deck==='kata'?toKata(i.kana):i.kana];
 else if(s.face==='kanji-write')a=[i.glyph];
 else if(s.face==='lex-write')a=[i.surface,i.read];
 else a=[i.ja];
 if(modeFor(s)==='romaji')a=a.map(x=>isKana(x)?toRomaji(x):x);
 return a}
/* le format de réponse est une propriété du deck ; seule la carte d'écoute le force,
   puisqu'on y écrit ce qu'on entend, donc forcément en kana */
function modeFor(s){return ['sound','glyph-write','kanji-write','lex-write'].includes(s.face)?'kana':deck(item(s.cur.id).deck).answer}
const isKana=s=>/[\u3040-\u30FF]/.test(s);
function liveFeedback(s){
 const input=String(s.typed||'').trim();
 if(!input)return null;
 const mode=modeFor(s);
 const accepted=acceptedFor(s);
 const normalized=mode==='kana'?normKana(toKana(input)):normRom(input);
 const match=accepted.some(a=>{
  const target=mode==='kana'?normKana(a):normRom(hasKana(a)?toRomaji(a):a);
  return normalized===target;
 });
 if(match)return {state:'good',text:'Correct'};
 const ref=accepted[0];
 const target=mode==='kana'?normKana(ref):normRom(hasKana(ref)?toRomaji(ref):ref);
 const dist=lev(normalized,target);
 return {
  state:dist<=1?'near':'bad',
  text:dist<=1?'Presque: 1 erreur max':'Continue ('+(mode==='kana'?'kana':'romaji')+')'
 };
}
function syncLiveFeedback(){
 const s=app.sess;
 const el=view.querySelector('.feedback');
 if(!el||!s)return;
 if(s.st==='typing'){
  s.feedback=null;
  el.textContent='';
  el.className='note feedback';
  return;
 }
 const info=liveFeedback(s);
 s.feedback=info;
 el.textContent=info?info.text:'';
 el.className='note feedback'+(info?` ${info.state}`:'');
}
function feedbackFor(s){
 if(!s)return null;
 if(s.st==='typing')return null;
 if(s.feedback)return s.feedback;
 return liveFeedback(s);
}

function Session(){
 const s=app.sess,i=item(s.cur.id),dk=deck(i.deck);
 const done=['ok','ko','near','shown','skip'].includes(s.st);
 const answerToneClass=s.st==='ok'?'good':(s.st==='ko'||s.st==='near'||s.st==='skip'?'bad':'');
 const mode=modeFor(s),ime=mode==='kana';
 /* seuls les glyphes isolés (kana/kanji) portent un type de script identifiable */
 const scriptTag=i.kind==='glyph'?(i.deck==='kata'?'katakana':'hiragana'):i.kind==='kanji'?'kanji':null;
 let body='',note='',atoms=null,gloss=['',''];
 const feedback=feedbackFor(s);
 const feedbackHtml=(feedback&&['ok','near','ko','skip'].includes(s.st))?`<div class="feedback note ${feedback.state}">${feedback.text}</div>`:'<div class="feedback note"></div>';
 if(s.face==='cloze'){
  const cell=`<span class="cell${done?' on':''}" id="cell">${esc(done?s.ctx.ans[0]:toKana(s.typed))}</span>`;
  const furi=dk.furi==='always'||(dk.furi==='hidden'&&done);
  body=`<div class="sentence" data-furi="${furi?'on':'hidden'}">${s.ctx.segs.map((g,n)=>n===s.ctx.ti?cell:segHTML(g,true)).join('')}</div>
`;
  gloss=[s.ctx.en,s.ctx.en];
 }else if(s.face==='bare'){
  body=`<div class="solo md">${esc(i.surface)}</div>`;
  gloss=[i.gloss,i.gloss];
 }else if(s.face==='glyph'){
  body=`<div class="solo-row"><div class="solo">${esc(i.glyph)}</div>${done&&scriptTag?`<span class="tag-script">${scriptTag}</span>`:''}</div>`;
  gloss=[i.rom+(i.deck==='kata'?' · katakana':' · hiragana'),`type the reading in ${mode}`];
 }else if(s.face==='word'){
  const tgt=i.deck==='kata'?toKata(i.kana):i.kana;
  const w=(i.deck==='kata'?toKata(s.ctx.word):s.ctx.word)
    .replace(tgt,`<span class="tgt">${tgt}</span>`);
  body=`<div class="solo md">${w}</div>`;
  gloss=[s.ctx.en,`read the whole word in ${mode}`];
  atoms=s.ctx.units.map(u=>KIDX[i.deck][i.deck==='kata'?toKata(u):u]).filter(Boolean);
 }else if(s.face==='comp'){
  body=`<div class="solo md">${s.ctx.word.replace(i.glyph,`<span class="tgt">${i.glyph}</span>`)}</div>`;
  gloss=[s.ctx.en+' · '+i.keyword,`type the reading in ${mode}`];
  atoms=s.ctx.kanji.map(k=>KIDX.kanji[k]);
 }else if(s.face==='sound'){
  body=`<button class="play" data-speak="${esc(i.kana)}">▶</button>`;
  gloss=[i.rom,`write what you hear in ${i.deck==='kata'?'katakana':'hiragana'}`];
 }else if(s.face==='name'){
  const shiny=i.deck==='pkmn'&&pokemonMeta(i.id)?.shiny;
  body=`<div class="solo-row${shiny?' shiny':''}"><div class="solo lat">${esc(i.en)}</div>${shiny?'<span class="tag-shiny">shiny</span>':''}</div>`;
  gloss=[`#${i.num} · ${i.type}`,`#${i.num} · ${i.type}`];
  atoms=atomsOf(i);
 }else if(s.face==='glyph-write'){
  body=`<div class="solo lat">${esc(i.rom)}</div>`;
  gloss=[i.deck==='kata'?'katakana':'hiragana',`write in ${i.deck==='kata'?'katakana':'hiragana'}`];
 }else if(s.face==='kanji-write'){
  body=`<div class="solo lat" style="font-size:34px;font-weight:500">${esc(i.keyword)}</div>`;
  gloss=[i.glyph,'think of the kanji, then reveal'];
 }else if(s.face==='lex-write'){
  body=`<div class="solo lat" style="font-size:28px;font-weight:500">${esc(i.gloss)}</div>`;
  gloss=[i.surface,'think of the japanese word, then reveal'];
 }else{
  body=`<div class="solo-row"><div class="solo">${esc(i.glyph)}</div>${done&&scriptTag?`<span class="tag-script">${scriptTag}</span>`:''}</div>`;
  gloss=[i.keyword,'what does it mean?'];
 }
 const upfront=['cloze','bare','name'].includes(s.face);
 const gtxt=(done||upfront)?gloss[0]:gloss[1];
 /* une fois la carte r\u00e9v\u00e9l\u00e9e, le bloc reveal r\u00e9p\u00e8te d\u00e9j\u00e0 cette m\u00eame info (lecture/sens) :
    seul cloze y ajoute la traduction de la phrase, distincte du sens du mot. */
 if(!done||s.face==='cloze')
  body+=`<div class="gloss${(done||upfront)?' on':''}${s.face==='cloze'?' left':''}">${esc(gtxt)}</div>`;
 let rev='<div class="reveal">';
 if(done){
  let itemText='',answerMain='',mean='',speakSrc='',skipForm=false,skipMean=false;
  if(s.face==='cloze'){
   itemText=s.ctx.segs[s.ctx.ti].t;
   answerMain=mode==='romaji'?toRomaji(s.ctx.ans[0]):s.ctx.ans[0];
   mean=i.gloss;speakSrc=s.ctx.segs.map(g=>g.t).join('');
  }else if(s.face==='word'){
   const wjp=i.deck==='kata'?toKata(s.ctx.word):s.ctx.word;
   itemText=wjp;
   answerMain=mode==='romaji'?s.ctx.rom:wjp;
   mean=s.ctx.en;speakSrc=s.ctx.word;
  }else if(s.face==='comp'){
   itemText=s.ctx.word;
   answerMain=mode==='romaji'?s.ctx.read.map(x=>toRomaji(x)).join(' / '):s.ctx.read.join(' / ');
   mean=s.ctx.en+' · '+i.keyword;speakSrc=s.ctx.read[0];
  }else if(s.face==='glyph'){
   itemText=i.glyph;
   answerMain=mode==='romaji'?i.rom:(i.deck==='kata'?toKata(i.kana):i.kana);
   mean=i.deck==='kata'?'katakana':'hiragana';speakSrc=i.kana;
   skipForm=true;skipMean=true;
  }else if(s.face==='sound'){
   itemText=i.rom;
   answerMain=i.deck==='kata'?toKata(i.kana):i.kana;
   mean=i.deck==='kata'?'katakana':'hiragana';speakSrc=i.kana;skipMean=true;
  }else if(s.face==='glyph-write'){
   itemText=i.rom;
   answerMain=i.deck==='kata'?toKata(i.kana):i.kana;
   mean=i.deck==='kata'?'katakana':'hiragana';speakSrc=i.kana;
  }else if(s.face==='bare'){
   itemText=i.surface;
   answerMain=mode==='romaji'?toRomaji(i.read):i.read;
   mean=i.gloss;speakSrc=i.read;
  }else if(s.face==='keyword'){
   itemText=i.glyph;answerMain=i.keyword;
   speakSrc=i.glyph;skipForm=true;skipMean=true;
  }else if(s.face==='kanji-write'){
   itemText=i.keyword;answerMain=i.glyph;
   speakSrc=i.glyph;
  }else if(s.face==='lex-write'){
   itemText=i.gloss;answerMain=i.surface;
   mean=i.read;speakSrc=i.read;
  }else if(s.face==='name'){
   itemText=i.en;answerMain=i.ja;
   mean='#'+i.num+' · '+i.type;speakSrc=i.ja;
  }
  rev+=`<div class="ans">${skipForm?'':`<span class="af ${answerToneClass}">${esc(itemText)}</span><span class="ans-sep" aria-hidden="true">→</span>`}<span class="ar ${answerToneClass}">${esc(answerMain)}</span>`
   +(!skipForm&&scriptTag?`<span class="tag-script">${scriptTag}</span>`:'')
   +(dk.audio!=='never'&&speakSrc?`<button class="spk" data-speak="${esc(speakSrc)}" aria-label="play">${speakerIcon()}</button>`:'')+`</div>`;
  if(!skipMean&&mean)rev+=`<div class="am">${esc(mean)}</div>`;
  if(s.face==='name'&&s.st==='ok'&&/[\u3041-\u3096]/.test(toKana(s.typed)))
   rev+=`<div class="note">written in katakana</div>`;
  const cb=ctxBlockFor(i,s.face);
  if(cb){
   const plainJa=String(cb.ja||'').replace(/\u0001|\u0002/g,'');
   const showKana=cb.kana&&cb.kana!==plainJa;
   rev+=`<div class="ctx"><div class="cj">${ctxHTML(cb.ja)}</div>`
    +(showKana?`<div class="cr">${esc(cb.kana)}</div>`:'')
    +(cb.rom&&cb.rom!==cb.kana?`<div class="cro">${esc(cb.rom)}</div>`:'')
    +`<div class="ce">${esc(cb.en)}</div></div>`;
  }
  if(atoms&&atoms.length>1)rev+=`<div class="atoms">${atoms.map(id=>
   `<span class="${known(id)?'':'new'}">${esc(item(id).glyph)}</span>`).join('')}</div>`;
  rev+=(s.st==='near'||s.st==='shown'||app.detailed||dk.grading==='self')
   ?`<div class="grade"><button class="g0" data-grade="0">Again</button><button class="g1" data-grade="1">Got it</button></div>`
   :`<div class="go">tap to continue &rsaquo;</div>`;
 }
 rev+='</div>';
 const input=s.st==='typing'
  ?`<div class="s-input"><input id="f" class="${ime?'':'lat'}" autocapitalize="none" autocorrect="off" autocomplete="off" spellcheck="false" enterkeyhint="done" lang="${ime?'ja':'fr'}" inputmode="${app.kb?'none':'text'}"${app.kb?' readonly':''} placeholder="${ime?'':'ka'}" value="${esc(s.typed)}">
    <div class="s-actions"><button type="button" class="s-act check" data-validate="">Check</button><button type="button" class="s-act idk" data-dontknow="">I don't know</button></div></div>`
  :s.st==='ask'
   ?`<div class="s-input"><button class="btn" data-reveal="">Reveal</button><div style="height:44px"></div></div>`
    :`<div class="s-input"><input class="res ${s.st==='ok'?'good':s.st==='skip'?'skip':'bad'} ${ime?'':'lat'}" readonly value="${
      esc((ime?toKana(s.typed):s.typed)||'—')}"><div style="height:44px"></div></div>`;
 return `<div id="sess" class="${app.kb&&s.st==='typing'?'kb-on':''}">
  <div class="s-top"><div class="s-chrome"><button class="x${s.confirmQuit?' warn':''}" data-quit="">${s.confirmQuit?'quit?':'✕'}</button>
   <span class="ct mono">${s.seen+1} / ${s.seen+s.queue.length}</span>
   <button class="mu${app.mute?' off':''}" data-mute="" aria-label="sound">${app.mute?muteIcon(18):speakerIcon(18)}</button></div><div class="s-feedback">${feedbackHtml}</div></div>
    <div class="s-body${done?' done':''}"${done&&s.st!=='near'&&!app.detailed&&dk.grading!=='self'?' data-next=""':''}>${s.fx?`<div class="score-fx ${s.fx.kind}${s.fx.boost?' boost':''}"><span class="pts">${s.fx.delta>0?'+':''}${s.fx.delta}</span></div>`:''}${body}${rev}</div>${input}
  <div id="kb" class="${app.kb&&s.st==='typing'?'on':''}">${app.kb?KB(mode):''}</div></div>`}
function KB(mode){
 const rows=['azertyuiop','qsdfghjklm','wxcvbn'];
 const rowHtml=rows.map(r=>`<div class="kr">${[...r].map(k=>`<button class="kk" type="button" data-kb="${k}">${k}</button>`).join('')}</div>`).join('');
 return rowHtml+`<div class="kr"><button class="kk w" type="button" data-kb="backspace">⌫</button><button class="kk sp" type="button" data-kb="space">espace</button><button class="kk w go" type="button" data-kb="enter">go</button></div>`;
}
function validate(){const s=app.sess,dk=deck(item(s.cur.id).deck);
 const {r}=judge(s.typed,acceptedFor(s),modeFor(s));
 const elapsed=Date.now()-s.startTime;
 s.feedback = r==='ok'?{state:'good',text:'Looks right'}:r==='near'?{state:'near',text:'Almost there'}:{state:'bad',text:'Keep going'};
 if(s.ctx)s.cur.last=s.ctx.id;
 if(dk.audio!=='never')speak(promptAudio(s));
 if(r==='ok'){s.st='ok';if(!app.detailed)commit('good',elapsed)}
 else if(r==='near')s.st='near';
 else{s.st='ko';if(!app.detailed)commit('wrong',elapsed)}
 s.revealAt=Date.now();
 saveState();
 render()}
function skipCard(){const s=app.sess;if(!s||s.st!=='typing')return;
 s.typed='';s.feedback={state:'skip',text:'Skipped'};s.st='skip';commit('skip',Date.now()-s.startTime);s.revealAt=Date.now();render();}
function commit(outcome,elapsed){const s=app.sess;if(s.committed)return;s.committed=true;
 const good=outcome==='good';
 const combo=good?s.runCombo+1:0;
 const delta=outcome==='good'?pointsForResult(true,combo):outcome==='wrong'?-6:0;
 if(good)s.runCombo=combo;else s.runCombo=0;
 s.runBestCombo=Math.max(s.runBestCombo,s.runCombo);
 s.runPoints+=delta;
 app.points=Math.max(0,(app.points||0)+delta);
 app.streak=good?combo:0;
 app.bestStreak=Math.max(app.bestStreak||0,good?combo:0,s.runBestCombo||0);
 app.totalRuns=(app.totalRuns||0)+1;
 app.unlockedBonus=bonusUnlocksForPoints(app.points);
 noteDailyProgress(delta,outcome);
 if(outcome==='good')grade(s.cur,true,elapsed||8000);
 else if(outcome==='wrong')grade(s.cur,false,elapsed||8000,false);
 else grade(s.cur,false,elapsed||8000,true);
 syncPokemonUnlocks();
 s.seen++;if(good)s.ok++;
 s.queue.shift();if(!good)s.queue.push(s.cur);
 s.fx=outcome==='skip'?null:{kind:outcome,delta,combo:s.runCombo,total:app.points,boost:good&&combo>1};
 clearTimeout(s.fxTimer);s.fxTimer=setTimeout(()=>{if(app.sess===s){s.fx=null;render()}},950);
 saveState();}
 maybeAutoPush();
function advance(){const s=app.sess;if(!s.committed)commit(s.st==='ok'?'good':s.st==='skip'?'skip':'wrong',Date.now()-s.startTime);nextCard()}
function Summary(){const s=app.sess,m=Math.floor(s.dur/6e4),sec=Math.round(s.dur/1e3)%60;
 const rate=s.seen?Math.round(s.ok/s.seen*100):0;
 return `<div class="scroll pad"><div style="height:80px"></div>
 <div style="display:flex;gap:12px;text-align:center">
  ${[['cards',s.seen],['accuracy',rate+'%'],['time',m+"'"+String(sec).padStart(2,'0')]]
   .map(([l,v])=>`<div style="flex:1"><div class="mono" style="font-size:30px">${v}</div><div class="label" style="margin-top:6px">${l}</div></div>`).join('')}</div>
 <div style="height:24px"></div>
 <div style="display:flex;gap:12px;text-align:center">
  ${[['points',s.runPoints||0],['best streak',s.runBestCombo||0],['total points',app.points||0]]
   .map(([l,v])=>`<div style="flex:1"><div class="mono" style="font-size:24px">${v}</div><div class="label" style="margin-top:6px">${l}</div></div>`).join('')}</div>
 <div style="height:56px"></div><button class="btn" data-go="home">Done</button>
 ${queueFor().length?`<div style="height:10px"></div><button class="btn ghost" data-start="">Continue (${queueFor().length})</button>`:''}</div>`}

/* ===================== liaisons ===================== */
function bind(){
 const q=s=>view.querySelectorAll(s);
 q('[data-go]').forEach(e=>e.onclick=()=>go(e.dataset.go));
 navEl.querySelectorAll('[data-go]').forEach(e=>e.onclick=()=>go(e.dataset.go));
 q('[data-start]').forEach(e=>e.onclick=()=>startSession(e.dataset.start||null));
 q('[data-deck]').forEach(e=>e.onclick=()=>go('deck',{deck:e.dataset.deck,tab:'cards',q:'',filter:'all'}));
 q('[data-tab]').forEach(e=>e.onclick=()=>go('deck',{tab:e.dataset.tab}));
 q('[data-filter]').forEach(e=>e.onclick=()=>go('deck',{filter:e.dataset.filter}));
 q('[data-edit]').forEach(e=>e.onclick=()=>go('editor',{editing:e.dataset.edit}));
 q('[data-speak]').forEach(e=>e.onclick=()=>speak(e.dataset.speak,.75));
 q('[data-tg]').forEach(e=>e.onclick=()=>{const k=e.dataset.tg;
  if(k==='theme')app.theme=app.theme==='dark'?'light':'dark';
  else if(k==='sync-enabled')app.sync.enabled=!app.sync.enabled;
  else if(k==='sync-auto')app.sync.auto=!app.sync.auto;
  else app[k]=!app[k];
  render();saveState()});
 q('[data-dk]').forEach(e=>e.onchange=()=>{const dk=deck(app.deck);
  dk[e.dataset.dk]=e.dataset.dk==='newPerDay'?+e.value:e.value;render();saveState()});
 const mu=view.querySelector('[data-mute]');
 if(mu)mu.onclick=()=>{app.mute=!app.mute;if(app.mute&&tts.ok)speechSynthesis.cancel();render()};
 const rv=view.querySelector('[data-reveal]');
 if(rv)rv.onclick=()=>{app.sess.st='shown';speak(item(app.sess.cur.id).glyph);render()};
 const se=view.querySelector('#q');
 if(se)se.oninput=()=>{app.q=se.value;const p=se.selectionStart;render();
  const n=view.querySelector('#q');if(n){n.focus();n.setSelectionRange(p,p)}};
 ['e-a','e-b'].forEach(id=>{const el=view.querySelector('#'+id);
  if(el)el.oninput=debounce(()=>{const i=item(app.editing);if(!i)return;
   const front=id==='e-a';
   if(i.kind==='lex')front?i.surface=el.value:i.gloss=el.value;
   else if(i.kind==='kanji')front?i.glyph=el.value:i.keyword=el.value;
   else if(i.kind==='name')front?i.ja=el.value:i.en=el.value;
   else front?i.glyph=el.value:i.rom=el.value.trim();
   render()},250)});
 const f=view.querySelector('#f');
 if(f){if(!app.kb)f.focus({preventScroll:true});
  f.addEventListener('focus',()=>{
   const sess=view.querySelector('.s-body');
   if(sess)sess.scrollTop=0;
   resetWindowScroll();
   syncViewportHeight();
   startKeyboardGuard();
  });
  f.addEventListener('blur',()=>{
   resetWindowScroll();
   syncViewportHeight();
   stopKeyboardGuard();
  });
  f.oninput=()=>{
   const s=app.sess;
   if(modeFor(s)==='kana'){
    const kana=toKana(f.value);
    if(kana!==f.value){f.value=kana;f.setSelectionRange(kana.length,kana.length);}
   }
   s.typed=f.value;
   const c=view.querySelector('#cell');
   if(c)c.textContent=toKana(f.value);
   syncLiveFeedback();
  };
  f.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();e.stopPropagation();validate()}}}
 const nx=view.querySelector('[data-next]');
 if(nx)nx.onclick=e=>{if(e.target.closest('[data-speak]'))return;const s=app.sess;if(s&&s.revealAt&&Date.now()-s.revealAt<500)return;advance()};
 const rs=view.querySelector('input.res');
 if(rs)rs.focus({preventScroll:true});
 const dv=view.querySelector('[data-validate]');
 if(dv)dv.onclick=()=>validate();
 const dn=view.querySelector('[data-dontknow]');
 if(dn)dn.onclick=()=>skipCard();
 const actionTap=fn=>e=>{e.preventDefault();fn();};
 const primaryTouchEvent=window.PointerEvent?'pointerdown':'touchstart';
 if(dv)dv.addEventListener(primaryTouchEvent,actionTap(()=>validate()),{passive:false});
 if(dn)dn.addEventListener(primaryTouchEvent,actionTap(()=>skipCard()),{passive:false});
 const handleKbPress=e=>{
  e.preventDefault();
  const s=app.sess;if(!s||s.st!=='typing')return;
  const key=e.currentTarget.dataset.kb;
  if(key==='enter')return validate();
  if(key==='backspace')s.typed=s.typed.slice(0,-1);
  else if(key==='space')s.typed+=' ';
  else s.typed+=key;
  if(modeFor(s)==='kana')s.typed=toKana(s.typed);
  const input=view.querySelector('#f');
  if(input)input.value=s.typed;
  const c=view.querySelector('#cell');
  if(c)c.textContent=toKana(s.typed);
  syncLiveFeedback();
 };
 q('[data-kb]').forEach(e=>{
  e.addEventListener(primaryTouchEvent,handleKbPress,{passive:false});
  e.addEventListener('click',ev=>ev.preventDefault());
 });
 q('[data-sync]').forEach(e=>e.onclick=async()=>{
  const action=e.dataset.sync;
  if(action==='save'){
   const url=view.querySelector('#sync-url');
   const key=view.querySelector('#sync-key');
   const user=view.querySelector('#sync-user');
   app.sync.url=(url&&url.value||'').trim();
   app.sync.anonKey=(key&&key.value||'').trim();
   app.sync.userId=(user&&user.value||'').trim();
   app.sync.lastError='';
   saveState();
   render();
   return;
  }
  if(action==='pull')await runSync('pull');
  if(action==='push')await runSync('push');
 });
 q('[data-grade]').forEach(e=>e.onclick=()=>{commit(e.dataset.grade==='1'?'good':'wrong');advance()});
 const qt=view.querySelector('[data-quit]');
 if(qt)qt.onclick=()=>{
  const quit=()=>{clearTimeout(app.sess.timer);if(tts.ok)speechSynthesis.cancel();
   app.sess=null;go('home')};
  if(app.sess.seen<5||app.sess.confirmQuit)return quit();
  app.sess.confirmQuit=true;render();
  setTimeout(()=>{if(app.sess&&app.sess.confirmQuit){app.sess.confirmQuit=false;
    if(app.route==='session')render()}},3000)}
 }
function debounce(fn,ms){let t;return()=>{clearTimeout(t);t=setTimeout(fn,ms)}}
function isStandaloneDisplay(){
 return window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true;
}
function resetWindowScroll(){
 window.scrollTo(0,0);
 document.documentElement.scrollTop=0;
 document.body.scrollTop=0;
}
let keyboardGuardTimer=null;
function stopKeyboardGuard(){
 if(keyboardGuardTimer){clearInterval(keyboardGuardTimer);keyboardGuardTimer=null}
}
function startKeyboardGuard(){
 stopKeyboardGuard();
 let ticks=0;
 keyboardGuardTimer=setInterval(()=>{
  syncViewportHeight();
  resetWindowScroll();
  ticks++;
  if(ticks>=24)stopKeyboardGuard();
 },50);
}
function syncViewportHeight(){
 const viewport=window.visualViewport;
 const layoutHeight=window.innerHeight||document.documentElement.clientHeight;
 const keyboardOpen=!!(viewport&&layoutHeight-viewport.height>120);
 const viewportOffsetTop=viewport?Math.max(0,Math.round(viewport.offsetTop||0)):0;
 const keyboardInset=keyboardOpen&&viewport
  ?Math.max(0,Math.round(layoutHeight-viewport.height-viewportOffsetTop))
  :0;
 document.documentElement.style.setProperty('--app-height',Math.round(layoutHeight)+'px');
 document.documentElement.style.setProperty('--keyboard-inset',keyboardInset+'px');
 document.documentElement.style.setProperty('--viewport-offset-top',viewportOffsetTop+'px');
 document.documentElement.dataset.displayMode=isStandaloneDisplay()?'standalone':'browser';
 document.documentElement.dataset.keyboard=keyboardOpen?'open':'closed';
 if(keyboardOpen&&app.route==='session')resetWindowScroll();
}
const syncViewportHeightDebounced=debounce(syncViewportHeight,50);
document.addEventListener('keydown',e=>{
 if(app.route!=='session')return;const s=app.sess;
 if(e.key==='Enter'&&(s.st==='ok'||s.st==='ko')){e.preventDefault();advance()}
 if(e.key==='Escape'){clearTimeout(s.timer);if(tts.ok)speechSynthesis.cancel();go('home')}});
window.addEventListener('resize',syncViewportHeightDebounced);
window.addEventListener('orientationchange',syncViewportHeight);
if(window.visualViewport)visualViewport.addEventListener('resize',syncViewportHeightDebounced);
if(window.visualViewport)visualViewport.addEventListener('scroll',syncViewportHeightDebounced);
document.addEventListener('visibilitychange',()=>{
 if(document.visibilityState==='hidden')flushState();
});
window.addEventListener('pagehide',flushState);
window.addEventListener('beforeunload',flushState);
setInterval(flushState,60000);
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./sw.js').catch(err=>console.warn('Service worker registration failed', err));
}
try{
  syncViewportHeight();
  loadState();
  render();
  loadState();
  render();
  render();
  if(syncReady())runSync('pull');
}catch(e){
  console.error('Initialization error',e);
  try{
    const v=document.getElementById('view');
    const msg = '<div style="padding:20px;color:#900;background:#fee;border-radius:6px"><h2>Script error</h2><pre style="white-space:pre-wrap;font-family:monospace">'+esc(String(e))+'</pre></div>';
    if(v) v.innerHTML = msg;
    else document.body.innerHTML = msg;
  }catch(_){/* ignore */}
}