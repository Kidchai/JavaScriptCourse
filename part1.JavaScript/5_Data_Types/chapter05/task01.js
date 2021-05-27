/*
Write a function camelize(str) that converts strings in the format:
"my-short-string" to "myShortString".
*/
'use strict';

function camelize(str) {
    const words = str.split("-");
  
    for (let i = 1; i < words.length; i++) {
      let word = words[i];
      words[i] = word[0].toUpperCase() + word.slice(1);
    }
  
    return words.join("");
  }