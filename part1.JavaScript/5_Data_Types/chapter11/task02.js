/*
Write a function getWeekDay(date) to show the weekday in short format: 
"MO", "TU", "WE", "TH", "FR", "SA", "SU".
*/
'use strict';

function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

    return days[date.getDay()];
}