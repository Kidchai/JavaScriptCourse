/*
Write the function getAverageAge(users) that gets an array of objects 
with property age and returns the average age.
*/
'use strict';

function getAverageAge(users) {
    return users.reduce((sum, current) => sum + current.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

console.log(getAverageAge(arr));