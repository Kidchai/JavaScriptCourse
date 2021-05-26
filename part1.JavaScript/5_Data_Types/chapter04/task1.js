/*
Let's perform 5 operations on an array.

1. Create the 'styles' array with elements "Jazz" and "Blues".
2. Add "Rock-n-Roll" to the end of the array.
3. Replace the value in the middle with "Classical". 
   Your code for finding the middle value should work for arrays of any length.
4. Remove the first element of the array and show it.
5. Insert "Techno" and "Reggae" at the beginning of the array.
*/
'use strict';

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classical";
alert( styles.shift() );
styles.unshift("Techno", "Reggae");