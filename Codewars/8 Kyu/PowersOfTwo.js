/*
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

PREP
Parameters:
Given a number, positive, integer

Returns:
Returns an array of powers of 2 with the exponent start from 0 to the given number

Examples:
If we were given 3 -> returns [1, 2, 4, 8]
                 5 -> returns [1, 2, 4, 8, 16, 32]
                 2 -> returns [1, 2, 4]

Pseudocodes:
Make a function that takes a number as the parameter
Declare an empty array
For loop
Push the result to the array
*/

function powersOfTwo(n){
    let res = []
    for (let i = 0; i <= n; i++) {
        res.push(2**i)
    }
    return res
}

console.log(powersOfTwo(5));
console.log(powersOfTwo(3));
console.log(powersOfTwo(2));
