/*
Write a function sumInput() that:

1. Asks the user to enter values using 'prompt' and stores them in an array.
2. Stops asking for values when the user enters a non-numeric value, 
   an empty string, or clicks "Cancel".
3. Calculates and returns the sum of the array elements.
*/
'use strict';

function sumInput() {
    let numbers = [];
    while (true) {
        let number = prompt("Enter the number", "");
        if (number === "" || number === null || !isFinite(number))
            break;
        numbers.push(+number);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }

    return sum;
}