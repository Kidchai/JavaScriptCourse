/*
Given the 'arr' array of numbers as input.

The task is to find a continuous subarray in 'arr' with the maximum sum of its elements.

The function 'getMaxSubSum(arr)' should return this sum.

For example:

getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted elements)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (take all)

If all elements are negative, take nothing (subarray is empty) and the sum is equal to 0:

getMaxSubSum([-1, -2, -3]) = 0
*/
'use strict';

console.log(getMaxSubSum([2, -1, 2, 3, -9]));

function getMaxSubSum(arr) {
    let sum = 0;
    let currentSum = 0;

    for (let number of arr) {
        currentSum += number;
        sum = Math.max(sum, currentSum);
        if (currentSum < 0) {
            currentSum = 0;
        }
    }

    return sum;
}