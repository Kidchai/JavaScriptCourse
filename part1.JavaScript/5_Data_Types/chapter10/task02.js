/*
There is a salaries object:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Create the function topSalary(salaries) that returns the name of the top-paid person.

If salaries is empty, it should return null.
If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/
'use strict';

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let result = null;
    let max = 0;

    for (let [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            result = name;
        }
    }
    return result;
}