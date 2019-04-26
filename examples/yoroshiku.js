/**
 * Japanese Romaji Translitter
 * @author Loreto Parisi (loretoparisi at gmail dot com)
 * @2019 Loreto Parisi
*/

const Yoroshiku = require('../lib/index');

// initialize Yoroshiku
const yoroshiku = new Yoroshiku();

// load the module
yoroshiku.load()
    .then(_ => {
        // transliterate single
        return yoroshiku.transliterate("僕らは完全無欠じ～ゃ無い",
            { to: "romaji", mode: "spaced", romajiSystem: "hepburn" })
    })
    .then(res => {
        console.log(JSON.stringify(res));
        // transliterare parallel
        const docs = [
            "繫がっているから",
            "理想と现実の満员电车",
            "生まれちゃうっ！(*ﾉωﾉ)",
            "ワンダー！ナンダー！ヤッター！"
        ];
        const promises = docs.map(doc => yoroshiku.transliterate(doc,
            { to: "romaji", mode: "spaced", romajiSystem: "hepburn" }));
        return Promise.all(promises);
    })
    .then(res => {
        console.log(JSON.stringify(res));
    })
    .catch(err => console.error(err));