/*
Using the built-in Math.random() method, цrite the randomInteger(min, max) function 
that generates a random integer between min and max (inclusive).

Any number within the range of min..max should appear with equal probability.
*/
'use strict';

function generateRandomNumber(min, max) {
    number = min + Math.random() * (max + 1 - min);
    return Math.floor(number);
}