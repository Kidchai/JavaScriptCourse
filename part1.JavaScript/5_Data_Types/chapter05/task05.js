/*
We have the 'arr', an array of strings. We need to get a sorted copy, 
but keep the 'arr' unchanged.

Create a function copySorted(arr) that will return such a copy.
*/
'use strict';

function copySorted(arr) {
    const copy = arr.slice();
    return copy.sort();
}