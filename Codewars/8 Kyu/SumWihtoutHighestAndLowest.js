/*
Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

PREP
Parameters:
Given an array of integers. Can it be negative?

Results:
Return the sum of all the numbers except the lowest and highest number (1 number each even if there are more than one with the same value)

Examples:
If we were given [6, 2, 1, 8, 10] -> return 16
                 [1, 1, 11, 2, 3] -> return 6
                 [ ] -> return 0
                 [3] -> return 0
                 [3, 5] -> return 0

Pseudocode:
Make a function that takes an array as the parameter
Sort the number
Conditionals
Add all the numbers
Return the result
*/

function sum(arr) {
    let sortArr = arr.sort((a, b) => b - a);
    let sum = 0;
    if (arr.length < 3) {
        return 0
    } else {
        for (let i = 0; i < sortArr.length; i++) {
            if (i != 0 && i != sortArr.length-1) {
                sum += sortArr[i]
            }
        }
        return sum;
    }
}

console.log(sum([6, 2, 1, 8, 10]));
console.log(sum([1, 1, 11, 2, 3]));
console.log(sum([6]));
console.log(sum([6, 7]));
console.log(sum([ ]));


