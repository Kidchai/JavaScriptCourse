/*
Create a constructor function Calculator that creates "extensible" calculator objects.

The task consists of two parts.

1. Implement the method calculate(str), which takes a string in the format "NUMBER operator NUMBER" 
(spaces separated) like "1 + 2" and returns the result. The method should understand plus + and minus -.

Example of use:

let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10

2. Add the method addMethod(name, func) that adds new operations to the calculator. 
It takes operator name and a two-argument function func(a, b) that describes it.

For example, let's add multiplication *, division / and power **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

There is no need for parentheses or complex expressions for this task.
Numbers and operators are separated by exactly one space.

Note: it would not hurt to add error handling.
*/
'use strict';

function Calculator() {

    this.funtions = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    }

    function calculate(str, addMethod) {
        const array = str.split(" ");
        let a = +array[0];
        let operator = array[1];
        let b = +array[2];

        if (!this.funtions[op] || isNaN(a) || isNaN(b)) {
            return NaN;
          }

        return this.funtions[operator](a, b);
    }

    function addMethod(name, func) {
        this.functions[name] = func;
    }
}