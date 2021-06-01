/*
Write a function formatDate(date) that should format date as follows:

If since date passed less than 1 second, then "right now".
Otherwise, if since date passed less than 1 minute, then "n sec. ago".
Otherwise, if less than an hour, then "m min. ago".
Otherwise, the full date in the format "DD.MM.YY HH:mm". 
That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.
*/
'use strict';

console.log(formatDate(new Date(2014, 2, 1, 11, 22, 33)));

function formatDate(date) {
    let now = new Date();
    let dif = now - date;

    if (dif < 1000)
        return "right now";
    else if (dif < 1000 * 60)
        return `${dif / 1000} sec. ago`;
    else if (dif < 1000 * 60 * 60)
        return `${dif / (1000 * 60)} min. ago`;


    let arrayDate = date;
    arrayDate = ["0" + date.getDate(),
    "0" + (date.getMonth() + 1),
    "" + date.getFullYear(),
    "0" + date.getHours(),
    "0" + date.getMinutes()
    ].map(component => component.slice(-2));

    let result = arrayDate.slice(0, 3).join(".") + " " + arrayDate.slice(3).join(":");

    return result;
}