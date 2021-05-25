/*
Write a function checkSpam(str) that returns true if 'str' contains 
the strings 'viagra' or 'XXX', and false otherwise.

The function should be case-insensitive.
*/
'use strict';

function checkSpam(str) {
    let stringUpper = str.toUpperCase();
    return stringUpper.includes("VIAGRA") || stringUpper.includes("XXX");
}