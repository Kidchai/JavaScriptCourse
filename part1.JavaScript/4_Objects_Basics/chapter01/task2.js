/*
Write a function 'isEmpty(obj)' that returns true if the object has no properties, otherwise false.
*/

function isEmpty(obj) {
    for (let prop in obj) {
        return false;
    }
    return true;
}