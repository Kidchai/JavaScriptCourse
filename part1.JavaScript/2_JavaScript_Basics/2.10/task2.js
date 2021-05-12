/*
Using the if..else construction, write a code that receives 
a number via prompt and then outputs to alert:
1, if the value is greater than zero,
-1, if the value is less than zero,
0, if the value is equal to zero.
It is assumed that the user only inputs numbers."
*/
let number = prompt("Write a number");
if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}