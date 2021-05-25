/*
Create the Accumulator(startingValue) constructor

The object that it creates should be able to do the following:

Store the "current value" in the 'value' property. The initial value should be set 
using the constructor argument 'startingValue'.

The method read() should use 'prompt' to read a new number and add it to the 'value'.
*/

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        value += +prompt("Write the number", 0);
    }
}