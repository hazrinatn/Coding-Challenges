/*
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

If you can, try writing it in only one line of code.

PREP
Parameters:
Given a number (integer) and another number (limit)

Results:
Return the multiple of number up to the limit. If limit is a multiple of integer, it should be included as well.

Examples:
If we were given (5, 25) -> [5, 10, 15, 20, 25]
                 (11, 54) -> [11, 22, 33, 44]
                 (1, 2) -> [1, 2]

Pseudocodes:
Make a function that takes 2 numbers as parameter
for loop
conditionals
push the result
return result
*/ 

function findMultiples(integer, limit) {
    let res = [];
    let x = Math.floor(limit/integer)
    for (let i = 1; i <= x; i++) {
        res.push(integer * i)
    }
    return res
}

// Alternative solution
// function findMultiples(int,limit){
//     let result = []
//     for (let i = int; i<=limit ; i+=int) {
//       result.push(i) 
//     }
//     return result
// }

console.log(findMultiples(5, 25));
console.log(findMultiples(11, 54));
console.log(findMultiples(1, 2));
