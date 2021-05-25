/*
Create a function readNumber function, which will prompt the user 
to enter a numeric value until they do so.

The function should return a numeric value.

The user should also be allowed to stop the input process by submitting 
an empty string or by pressing "Cancel". In this case, the function should return null.
*/
'use strict';

function readNumber() {
    let input;

    while(true) {
        input = prompt("Please, enter the number:", "");
        if (input === null || input === "") {
            return null;
        } else if (isFinite(input)) {
            return +input;
        }
    }
}