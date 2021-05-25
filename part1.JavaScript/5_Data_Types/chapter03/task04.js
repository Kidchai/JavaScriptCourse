/*
There is a cost in the form of a string "$120". The currensy symbol 
comes first, and then the number.

Create a function extractCurrencyValue(str) that will extract 
the numerical value from such a string and return it.
*/
'use strict';

function extractCurrencyValue(str) {
    return +str.slice(1);
}