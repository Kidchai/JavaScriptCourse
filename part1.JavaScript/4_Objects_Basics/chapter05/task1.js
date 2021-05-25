/*
Create a 'Calculator' constructor that creates objects with three methods:
1.read() - prompts the user to input two values and saves them as properties of the object.
2. sum() - returns the sum of the two saved values.
3. mul() - multiplies the two saved values and returns the result.
*/

function Calculator() {
    this.read = function() {
        this.a = +prompt("Write the number", 0);
        this.b = +prompt("Write the number", 0);
    };

    this.sum = function() {
        return this.a + this.b;
    };

    this.mul = function() {
        return this.a * this.b;
    };
}