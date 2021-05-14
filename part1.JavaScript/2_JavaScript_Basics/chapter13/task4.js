// Write code to print all prime numbers from the interval between 2 and n.

'use strict';

let n = 10;

for (let i = 2; i <= n; i++) {
    let isPrime = true;
    let square = Math.round(Math.sqrt(i));
    let j = 2;
    do {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
        j++;
    } while (j <= square);
    if (isPrime)
        console.log(i);
}