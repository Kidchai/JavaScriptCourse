/*
Write a function filterRangeInPlace(arr, a, b), which takes an array 'arr' 
and removes from it all values except for those that are between a and b. 
That is, the check is a ≤ arr[i] ≤ b.

The function should modify the given array and not return anything.
*/
'use strict';

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        } 
    }
}