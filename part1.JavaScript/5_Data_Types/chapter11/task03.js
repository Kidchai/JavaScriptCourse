/*
European countries have days of week starting with Monday (number 1), 
then Tuesday (number 2) and till Sunday (number 7). 

Write a function getLocalDay(date) that returns the "European" day of week for date.

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date) );       // tuesday, should show 2
*/
'use strict';

let date = new Date(2012, 0, 3);
console.log(getLocalDay(date));

function getLocalDay(date) {
    let day = date.getDay();
    return (day === 0) ? 7 : day;
}