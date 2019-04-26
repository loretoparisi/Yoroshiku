# Yoroshiku (よろしく)
Yoroshiku converts Japanese to Hiragana, Katakana or Romaji. It supports Furigana and Okurigana. Based on Kuroshiro

## How to Install
```
git clone https://github.com/loretoparisi/Yoroshiku.git
cd Yoroshiku/
npm install
```

## Install from npm
```
npm install yoroshiku
```

## How to Run
```
cd Yoroshiku/examples
node yoroshiku.js 
"bokura wa kanzen muketsu ji ~ ya nai"
["繫 gatsu te iru kara","risō to 现 mi no man 员 电 车","umare cha utsu ! (* ﾉ ω ﾉ )","wandā ! nandā ! yattā !"]
```

## How it Works
Yoroshiku shares the same api of Kuroshiro. 

- The `transliterate` api transliterate from script to roman and it has the following options:

```javascript
var options = {
    // Convert mode [normal, spaced, okurigana, furigana] - "normal"
    mode: "spaced",
    // Target syllabary [hiragana, katakana, romaji] - "hiragana"
    to: "romaji",
    // Romanization system [nippon, passport, hepburn] - "hepburn"
    // nippon - ISO-3602 http://www.age.ne.jp/x/nrs/iso3602/iso3602.html
    // hepburn - BS 4812 : 1972 https://archive.is/PiJ4
    // passport - https://www.ezairyu.mofa.go.jp/passport/hebon.html
    // comparison - http://jgrammar.life.coocan.jp/ja/data/rohmaji2.htm
    romajiSystem: "hepburn",
    // delimiter_start Delimiter(Start) - "("
    delimiter_start: "(",
    // delimiter_end Delimiter(End) - ")"
    delimiter_end: ")"
};
```

For more info please look at [Kuroshiro#api](https://github.com/hexenq/kuroshiro#api)

## Disclaimer
Yoroshiku is mostly based on [Kuroshiro](https://github.com/hexenq/kuroshiro) and it fits in Node.js only.
