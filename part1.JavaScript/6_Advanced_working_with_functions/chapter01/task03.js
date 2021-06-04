/*
The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. 
In other words, the next number is a sum of the two preceding ones.

First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3) 
and so on: 1, 1, 2, 3, 5, 8, 13, 21....

Fibonacci numbers are related to the Golden ratio and many natural phenomena around us.

Write a function fib(n) that returns the n-th Fibonacci number.

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757

P.S. The function should be fast. 
The call to fib(77) should take no more than a fraction of a second.
*/
'use strict';

console.log(fib(3));  // 2
console.log(fib(7));  // 13
console.log(fib(77)); // 5527939700884757

function fib(n) {
    let num1 = 1;
    let num2 = 1;
    for (let i = 3; i <= n; i++) {
        let num = num1 + num2;
        num1 = num2;
        num2 = num;
    }
    return num2;
}