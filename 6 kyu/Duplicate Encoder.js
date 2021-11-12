function duplicateEncode(str){
let word = str.toLowerCase();
let unique = '';
  for (let i = 0; i < word.length; i++) {
    if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
      unique += '(';
    } else
    unique += ')';
  }
  return unique;
}