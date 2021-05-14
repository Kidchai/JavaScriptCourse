/*
Write a loop that prompts the user to enter a number greater than 100. 
If the user enters a different number, ask them to enter another number and so on.

The loop should continue to ask for a number until the user enters a number greater than 100, 
or presses the Cancel (ESC) button.

It is assumed that the visitor only enters numbers.
*/
'use strict';

let number;
do {
    number = prompt("Please, enter the number greater than 100.", 0);
} while (number <= 100 && number)
