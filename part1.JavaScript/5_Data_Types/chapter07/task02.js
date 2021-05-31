/*
Anagrams are words that have the same number of same letters, but in different order.

nap - pan
ear - are - era
cheaters - hectares - teachers

Write a function aclean(arr) that returns an array cleaned from anagrams.

For instance:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
From every anagram group should remain only one word, no matter which one.
*/
'use strict';

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));

function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        let key = word.toUpperCase().split("").sort().toString();
        map.set(key, word);
    }

    for (let entry of map) {
        console.log(entry);
    }

    return Array.from(map.values());
}