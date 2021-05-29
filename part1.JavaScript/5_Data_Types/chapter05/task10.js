/*
Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements.

All element orders should have an equal probability. For instance, 
[1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.
*/
'use strict';

let arr = [1, 2, 3];

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

function shuffle(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        let randomNumber = getRandomInt(array.length);
        swap(array, i, randomNumber);
    }
    return array;

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function swap(array, a, b) {
        let c = array[a];
        array[a] = array[b];
        array[b] = c;
    }
}