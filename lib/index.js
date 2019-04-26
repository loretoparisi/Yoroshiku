/**
 * Yoroshiku
 * @author Loreto Parisi (loretoparisi at gmail dot com)
 * @2019 Loreto Parisi
*/

(function () {

    const KuroshiroLib = require('./kuroshiro/core');
    const KuromojiAnalyzerLib = require('./kuromoji-analyzer/index');

    var Yoroshiku;
    Yoroshiku = (function () {

        /**
         * Yoroshiku 
         * yoroshiku converts Japanese to Hiragana, Katakana or Romaji. It supports furigana and okurigana.converts Japanese to Hiragana, Katakana or Romaji. It supports furigana and okurigana.
         */
        function Yoroshiku(options) {
            // default options
            this._options = {
            };
            for(var attr in options) this._options[attr] = options[attr];

        }//Yoroshiku

        /**
         * Unload process and kill
         */
        Yoroshiku.prototype.unload = function () {
            var self = this;
            return new Promise(function (resolve, reject) {
                // @TODO
                return resolve(true);
            });
        }//unload

        /** 
         * Transliterate text and return
         */
        Yoroshiku.prototype.load = function () {
            var self = this;
            return new Promise(function (resolve, reject) {
                self.kuroshiro = new KuroshiroLib();
                // dictPath: "url/to/dictFiles" 
                self.kuroshiro.init(new KuromojiAnalyzerLib({}))
                    .then(_ => {
                        return resolve(true);
                    })
                    .catch(error => {
                        return reject(error);
                    });
            });
        }//load

        /**
         * Transliterate
         * @param text {String} Text
         * @param params {Object} Options:
         *  to Target syllabary [hiragana, katakana, romaji] - "hiragana"	
         *  mode Convert mode [normal, spaced, okurigana, furigana] - "normal"
         *  romajiSystem Romanization system [nippon, passport, hepburn] - "hepburn"
         *  delimiter_start Delimiter(Start) - "("
         *  delimiter_end Delimiter(End) - ")"
         */
        Yoroshiku.prototype.transliterate = function (text, params = {}) {
            var self = this;
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
            for (var attr in params) options[attr] = params[attr];
            return new Promise(function (resolve, reject) {
                self.kuroshiro.convert(text, options)
                    .then(res => {
                        res = res.replace(/\s(\n+)\s/g, '$1'); // newline
                        res = res.replace(/\s([\?:;,.^\.\'\-\/\+\<\>,&])/g, '$1'); // punct
                        res = res.replace(/[ \t\r]+/g, ' '); // contract spaces
                        return resolve(res);
                    })
                    .catch(error => {
                        return reject(error);
                    });
            });
        }//transliterate

        /**
         * Check if input char is hiragana.
         */
        Yoroshiku.prototype.isHiragana = function (char) {
            return this.kuroshiro.isHiragana(char);
        }//isHiragana

        /**
         * Check if input char is katakana.
         */
        Yoroshiku.prototype.isKatakana = function (char) {
            return this.kuroshiro.isHiragana(char);
        }//isKatakana

        /**
         * Check if input char is kana.
         */
        Yoroshiku.prototype.isKana = function (char) {
            return this.kuroshiro.isKana(char);
        }//isKatakana

        /**
         * Check if input char is kanji.
         */
        Yoroshiku.prototype.isKanji = function (char) {
            return this.kuroshiro.isKanji(char);
        }//isKatakana

        /**
         * Check if input char is Japanese.
         */
        Yoroshiku.prototype.isJapanese = function (char) {
            return this.kuroshiro.isJapanese(char);
        }//isJapanese

        /**
         * Check if input string has hiragana.
         */
        Yoroshiku.prototype.hasHiragana = function (char) {
            return this.kuroshiro.hasHiragana(char);
        }//hasHiragana

        /**
         * Check if input string has katakana.
         */
        Yoroshiku.prototype.hasKatakana = function (char) {
            return this.kuroshiro.hasKatakana(char);
        }//hasKatakana

        /**
         * Check if input string has kana.
         */
        Yoroshiku.prototype.hasKana = function (char) {
            return this.kuroshiro.hasKana(char);
        }//hasKana

        /**
         * Check if input string has kanji.
         */
        Yoroshiku.prototype.hasKanji = function (char) {
            return this.kuroshiro.hasKanji(char);
        }//hasKanji

        /**
         * Check if input string has kanji.
         */
        Yoroshiku.prototype.hasJapanese = function (char) {
            return this.kuroshiro.hasJapanese(char);
        }//hasJapanese

        /**
         * Convert input kana string to hiragana.
         */
        Yoroshiku.prototype.kanaToHiragna = function (char) {
            return this.kuroshiro.kanaToHiragna(char);
        }//kanaToHiragna

        /**
         * Convert input kana string to katakana.
         */
        Yoroshiku.prototype.kanaToKatakana = function (char) {
            return this.kuroshiro.kanaToKatakana(char);
        }//kanaToKatakana

        /**
         * Convert input kana string to romaji. Param system accepts "nippon", "passport", "hepburn" (Default: "hepburn")
         */
        Yoroshiku.prototype.kanaToRomaji = function (char) {
            return this.kuroshiro.kanaToRomaji(char);
        }//kanaToRomaji

        return Yoroshiku;

    })();

    module.exports = Yoroshiku;

}).call(this);