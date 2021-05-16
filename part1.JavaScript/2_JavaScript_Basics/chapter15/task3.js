/*
Write a function pow(x,n) that raises x to the power of n and returns the result.
Create a page that asks for x and n and then prints the result pow(x,n).
P.S. n is a natural number
*/

function pow(x, n) {
    let result = x;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

let x = prompt("Base number", "");
let n = prompt("Exponent number", "");

if (n < 1) {
    alert(`Can't calculate with exponent ${n}, use the natural number`);
} else {
    alert(pow(x, n));
}
