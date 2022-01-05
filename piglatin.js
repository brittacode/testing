function translate(string) {
  string = string.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];

  if (vowels.includes(string[0])) {
    return `${string}way`;
  } else {
    let consonant = "";
    for (i = 0; i < string.length; i++) {
      if (vowels.includes(string.indexOf(i))) {
        return string.slice(i) + string.slice(0, i) + "ay";
      }
    }

    return string;
  }
}

module.exports = translate;

//(/^([aeiouy])(._)/, '$1$2way')
//(/^(_[_^aeiouy]+)(._)/, '$2$1ay') - possbile regex

//`${string.slice(i)}${consonant}ay`
