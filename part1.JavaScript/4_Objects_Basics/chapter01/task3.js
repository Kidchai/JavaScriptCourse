/*
We have an object that stores the salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write code to sum all salaries and save the result in the 'sum' variable. 'sum'.

If the salaries object is empty, the result should be 0.

У нас есть объект, в котором хранятся зарплаты нашей команды:
*/

function sumSalaries(salaries) {
  let sum = 0;
  for (let prop in salaries) {
    sum += salaries[prop];
  }
  return sum;
}