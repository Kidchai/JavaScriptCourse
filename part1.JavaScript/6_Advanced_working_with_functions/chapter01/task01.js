/*
Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

For instance:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10

Make 3 solution variants:

Using a for loop.
Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
Using the arithmetic progression formula.
*/
'use strict';

console.log(iterativeSumTo(100));
console.log(recursiveSumTo(100));
console.log(arithmeticSumTo(100));


function iterativeSumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function recursiveSumTo(n) {
    if (n == 1) {
        return 1;
    } else {
        return n + recursiveSumTo(n - 1);
    }
}

function arithmeticSumTo(n) {
    return (1 + n) / 2 * n;
}
