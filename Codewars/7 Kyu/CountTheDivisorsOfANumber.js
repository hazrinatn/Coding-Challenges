/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

PREP
Parameters:
Given a number (positive, integer). How about 0?

Results:
Return the number of divisors that the number has

Examples:
If we were given 4 --> 3 (1, 2, 4)
                 5 --> 2 (1, 5)
                 12 --> 6 (1, 2, 3, 4, 6, 12)
                 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

Pseudocodes:
Make a function that takes a number as the parameter
Create an empty array
For loop
Conditionals
Push the result to the array
Return the length of the array
*/ 

function getDivisorsCnt(n){
    let res = []
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            res.push(i)
        }
    }
    return res.length
}

console.log(getDivisorsCnt(4));
console.log(getDivisorsCnt(5));
console.log(getDivisorsCnt(12));
console.log(getDivisorsCnt(30));
