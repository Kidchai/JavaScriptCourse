/*
Using the if..else construction, write a code that will ask: 
"What is the 'official' name of JavaScript?"

If the user enters "ECMAScript", show "Right!", 
otherwise display "You don't know? ECMAScript!"
*/
'use strict';

let userAnswer = prompt("What is the 'official' name of JavaScript?", "");
if (userAnswer === "ECMAScript") {
    alert("Right!");
} else {
    alert("You don't know? ECMAScript!");
}

