/*
Modify the code of makeCounter() so that the counter can also decrease and set the number:

counter() should return the next number (as before).
counter.set(value) should set the counter to value.
counter.decrease() should decrease the counter by 1.


  function makeCounter() {
    let count = 0;
  
    // ... your code ...
  }
  
  let counter = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  
  counter.set(10); // set the new count
  
  console.log( counter() ); // 10
  
  counter.decrease(); // decrease the count by 1
  
  console.log( counter() ); // 10 (instead of 11)

*/
'use strict';

function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    };

    counter.set = value => count = value;
    counter.decrease = () => count--;

    return counter;
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10);

console.log(counter()); // 10

counter.decrease();

console.log(counter()); //  10 (instead of 11)