/*
Let’s say we have a single-linked list:

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

Write a function printList(list) that outputs list items one-by-one.

Make two variants of the solution: using a loop and using recursion.
*/
'use strict';

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

recursionPrintList(list);
console.log();
iterativePrintList(list);

function recursionPrintList(list) {
    console.log(list.value);

    if (list.next) {
        recursionPrintList(list.next);
    }
}

function iterativePrintList(list) {
    let node = list;
    while(node) {
        console.log(node.value);
        node = node.next;
    }
}