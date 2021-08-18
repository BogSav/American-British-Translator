const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
  wrapper(word){
    return '<span class="highlight">' + word + '</span>';
  }

  regexCreator(word){
    return new RegExp('(?<![\\w-])' + word + '(?![\\w-])');
  }

  BTATranslate(text){
    Object.keys(britishOnly).forEach(key => {
      text = text
        .split(this.regexCreator(key))
        .join(this.wrapper(britishOnly[key]));
    });

    Object.keys(americanToBritishSpelling).forEach(key => {
      text = text
        .split(this.regexCreator(americanToBritishSpelling[key]))
        .join(this.wrapper(key));
    });

    Object.keys(americanToBritishTitles).forEach(key => {
      text = text
        .split(this.regexCreator(americanToBritishTitles[key]))
        .join(this.wrapper(key));
    });

    text = text.replace(/(\d+).(\d+)/g, this.wrapper('$1:$2'));

    return text;
  }

  ATBTranslate(text){
    Object.keys(americanOnly).forEach(key => {
      text = text
        .split(this.regexCreator(key))
        .join(this.wrapper(americanOnly[key]));
    });

    Object.keys(americanToBritishSpelling).forEach(key => {
      text = text
        .split(this.regexCreator(key))
        .join(this.wrapper(americanToBritishSpelling[key]));
    });

    Object.keys(americanToBritishTitles).forEach(key => {
      text = text
        .split(this.regexCreator(key))
        .join(this.wrapper(americanToBritishTitles[key]));
    });

    text = text.replace(/(\d+):(\d+)/g, this.wrapper('$1.$2'));

    return text;
  }

  translate(text, type){
    let copy = text;
    let trans = type === 'british-to-american' ? this.BTATranslate(text) :  this.ATBTranslate(text);

    if(trans == copy)
      return 'Everything looks good to me!';

    trans = trans.replace(/^\w/, c => c.toUpperCase());
    trans = trans.trim();

    return trans;
  }
}

module.exports = Translator;