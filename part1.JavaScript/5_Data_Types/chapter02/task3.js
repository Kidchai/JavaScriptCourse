/*
Using the built-in Math.random() method, write a function called random(min, max) 
that generates a random floating-point number between min and max (but not including max).
*/
'use strict';

function generateRandomNumber(min, max) {
    number = min + Math.random() * (max - min);
    return number;
}