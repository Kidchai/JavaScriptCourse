/*
There is a salaries object with arbitrary number of salaries.

Write the function sumSalaries(salaries) that returns the sum of all salaries 
using Object.values and the for..of loop.

If salaries is empty, then the result must be 0.
*/

'use strict'

function sumSalaries(salaries) {
    let sum = 0;
    for (salary of Object.values(salaries)) {
        sum += salary;
    }

    return sum;
}