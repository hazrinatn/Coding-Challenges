/*
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.

PREP
Parameters:
Given an array of integers

Results:
Return a new array consisting of new numbers. If the number has an integer swuare root, return the numbers, otherwise square the number

Examples:
If we were given [4,3,9,7,2,1] -> [2,9,3,49,4,1]
                 [ 100, 101, 5, 5, 1, 1 ] -> [ 10, 10201, 25, 25, 1, 1 ]
                 [ 1, 2, 3, 4, 5, 6 ] -> [ 1, 4, 9, 2, 25, 36 ]

Pseudocodes:
Make a function that takes an array of numbers as parameter
If square root of number is integer return the number, otherwise square the number
*/ 

function squareOrSquareRoot(array) {
    let res = [];
    for (let i = 0; i<array.length; i++) {
        if (Math.sqrt(array[i]) == Math.round(Math.sqrt(array[i]))) {
            res.push(Math.sqrt(array[i]))
        } else {
            res.push(array[i] ** 2)
        }
    }
    return res;
}

// Alternative solution
// const squareOrSquareRoot = array => array.map(a => Math.sqrt(a) % 1 == 0 ? Math.sqrt(a) : (a * a));

console.log(squareOrSquareRoot([4,3,9,7,2,1]));
console.log(squareOrSquareRoot([100,101,5,5,1,1]));
console.log(squareOrSquareRoot([1,2,3,4,5,6]));
