/*
Output a single-linked list from the previous task in the reverse order.

Make two solutions: using a loop and using a recursion.
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

reverseRecursionPrintList(list);
console.log();
reverseIterativePrintList(list);

function reverseRecursionPrintList(list) {
    if (!list.next) {
        console.log(list.value);
    }

    if (list.next) {
        reverseRecursionPrintList(list.next);
        console.log(list.value);
    }
}

function reverseIterativePrintList(list) {
    let values = [];
    let node = list;

    while (node) {
        values.push(node.value);
        node = node.next;
    }

    for (let i = values.length - 1; i >= 0; i--) {
        console.log(values[i]);
    }
}