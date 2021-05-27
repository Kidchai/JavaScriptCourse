/*
Write a function filterRange(arr, a, b), which takes an array 'arr', 
looks for elements with values greater than or equal to 'a' 
and less than or equal to 'b', and returns the result as an array.

The function should return a new array and not modify the original one.
*/
'use strict';

function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b);
}