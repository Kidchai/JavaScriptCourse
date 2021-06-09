/*
Write a function printNumbers(from, to) that outputs a number every second, 
starting from from and ending with to.

Make two variants of the solution.

Using setInterval.
Using nested setTimeout.
*/
'use strict';

printNumbers1(7, 19);
printNumbers2(7, 19);

function printNumbers1(from, to) {
    let current = from;
    let timerId = setInterval(function () {
        console.log(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

function printNumbers2(from, to) {
    let current = from;
    let timerId = setTimeout(function run() {
        console.log(current);
        if (current == to) {
            clearInterval(timerId);
        } else {
            current++;
            setTimeout(run, 1000);
        }
    }, 1000);
}
