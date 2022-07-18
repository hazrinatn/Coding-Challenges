/*
Given a number n, return the number of positive odd numbers below n, EASY!

Examples (Input -> Output)
7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
Expect large Inputs!

INTERESTING PROBLEM!!!
I thought of using for loop, push the odd numbers below n to the new array, and count the length of the new array. 
This is not working when the input is a large number. So I have to think more basic maths and found that the solution is simple! I think this problem is my most favorite problem in codewar :D
*/

function oddCount(n) {
    return Math.floor(n/2)
}

console.log(oddCount(19111111111));