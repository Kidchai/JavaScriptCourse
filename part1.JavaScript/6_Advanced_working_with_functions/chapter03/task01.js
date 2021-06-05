/*
Write function sum that works like this: sum(a)(b) = a+b.

Yes, exactly this way, using double parentheses (not a mistype).

sum(1)(2) = 3
sum(5)(-1) = 4
*/
'use strict';
console.log(sum(1)(2));

function sum(a) {
    let sum = 0;

    return function(b) {
        sum = a + b;
        return sum;
    }
}