// Write a ucFirst(str) function that returns the string 'str' with the first letter capitalized
'use strict';

function ucFirst(str) {
    if (str.length == 0)
        return str;

    return str[0].toUpperCase() + str.slice(1);
}