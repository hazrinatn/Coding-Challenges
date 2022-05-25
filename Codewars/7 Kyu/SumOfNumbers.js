/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

PREP
Parameters:
Given 2 unordered integers (a and b), can be positive or negative. 

Results:
Return the sum of all integers between and including the two numbers. If the 2 numbers are equal, return a or b.

Examples:
If we were given (2, 4) -> return 9 (2 + 3 + 4) 
                 (2, 2) -> return 2
                 (-2, 5) -> return 12 (-2 + -1 + 0 + 1 + 2 + 3 + 4 + 5) 

Pseudocode:
Declare new variable to contain the sum of the numbers
Conditionals
Loop through the numbers, add the numbers
Return sum of the numbers
*/

function getSum(a, b) {
    let sum = 0;
    if ( a !== b) {
        if (a < b) {
            for (let i = a; i <= b; i++) {
                sum += i
            }
        } else if (a > b) {
            for (let i = b; i <= a; i++) {
                sum += i
            }
        }
        return sum;

    } else {
        return a;
    }
}

console.log(getSum(2, 4));
console.log(getSum(2, 2));
console.log(getSum(-2, 5));
console.log(getSum(12, 7));
console.log(getSum(5, -2));


//Alternative Solution
//USE GAUSS SUMMATION!!! 🙀
// const GetSum = (a, b) => {
//     let min = Math.min(a, b),
//         max = Math.max(a, b);
//     return (max - min + 1) * (min + max) / 2;
// }


