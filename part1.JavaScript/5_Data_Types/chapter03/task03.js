/*
Create a function truncate(str, maxlength) that checks the length 
of the string 'str' and, if it exceeds 'maxlength', replaces the end of 'str' 
with "…" so that its length becomes equal to 'maxlength'.

The function should return the same string if no truncation is needed, 
or the truncated string if necessary.

For example:
truncate("Hello everybody! I am so glad to see you!", 20) should return "Hello everybody! I …"
truncate("Hello everybody!", 20) should return "Hello everybody!"
*/
'use strict';

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + "…" :
        str;
}