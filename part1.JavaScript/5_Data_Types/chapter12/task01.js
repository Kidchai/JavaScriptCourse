/*
Turn the user into JSON and then read it back into another variable.

let user = {
  name: "John Smith",
  age: 35
};
*/
'use strict';

let user = {
    name: "John Smith",
    age: 35
};

let serializedUser = JSON.stringify(user);

let newUser = JSON.parse(newUser);