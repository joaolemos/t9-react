import fs from 'fs';

/* Builds the tree and loads the dictionary words */
const init = function(path) {
  let trie = {};
  loadDictionary(trie, path);
  return trie;
}

const searchString = function(trie, numWord) {

  if(trie[numWord]) {
    /* Exact match in dictionary, return */
    return trie[numWord];
  }
  else {
    /* Return the largest prefix that match input numWord */
    let keys = Object.keys(trie).sort(function(a, b) {
      return b-a;
    });

    let matchPrefix = keys.find(function(k) {
      return k.substring(0, numWord.length) === numWord;
    });

    /* Get all prefixes that can match */
    let matchWords = {};
    trie[matchPrefix].forEach(function (word) {
      matchWords[word.substring(0, numWord.length)] = true;
    })

    return Object.keys(matchWords);
  }
}

const getNumFromLetter = function() {
  return {
    'a' : 2,
    'b' : 2,
    'c' : 2,
    'd' : 3,
    'e' : 3,
    'f' : 3,
    'g' : 4,
    'h' : 4,
    'i' : 4,
    'j' : 5,
    'k' : 5,
    'l' : 5,
    'm' : 6,
    'n' : 6,
    'o' : 6,
    'p' : 7,
    'q' : 7,
    'r' : 7,
    's' : 7,
    't' : 8,
    'u' : 8,
    'v' : 8,
    'w' : 9,
    'x' : 9,
    'y' : 9,
    'z' : 9
  }
}

const loadDictionary = function(trie, path) {
  let dictionary = fs.readFileSync(path, 'utf-8')
    .toString().split('\n');
  dictionary.forEach(function (word) {
    let numWord = "";
    if(word.length > 0) {
      for(let i = 0; i < word.length; i++) {
        numWord += getNumFromLetter()[word[i]];
      }
      if(trie[numWord]) {
        trie[numWord].push(word);
      } else {
        trie[numWord] = [word];
      }
    }
  })
}

module.exports = {
  utils: {
    "init": init,
    "searchString": searchString
  }
}
