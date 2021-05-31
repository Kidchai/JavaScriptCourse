/*
We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it.

But that doesn’t work:

let map = new Map();
map.set("name", "John");
let keys = map.keys();

keys.push("more"); // Error: keys.push is not a function

Why? How can we fix the code to make keys.push work?
*/
'strict'

let map = new Map();
map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");