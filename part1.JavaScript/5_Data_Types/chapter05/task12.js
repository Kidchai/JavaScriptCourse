//Let 'arr' be an array. Create a function unique(arr) that should return an array with unique items of arr.
'use strict';

function unique(arr) {
    if (arr.length == 0)
        return [];

    let uniqueArr = [];
    for (let word of arr) {
        if (!uniqueArr.includes(word)) {
            uniqueArr.push(word);
        }
    }
    return uniqueArr;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings)); // Hare, Krishna, :-O
