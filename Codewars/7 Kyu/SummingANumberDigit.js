/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.

PREP
Parameters:
Given a more than one digit number

Results:
Return the sum of the digits of the number

Examples:
If we were given 18 -> return 9
                 22 -> return 4
                 -99 -> return 18

Pseudocodes:
Make a function that takes a number as the parameter
Turn the number into string
Split the string
For loop, sum each element
Turn the result into number again
Return the result
*/ 

function sumDigits(number) {
    let strOfNum = number.toString()
    let split = ''
    if (strOfNum.includes("-")) {
        split = strOfNum.split('-')
        split = split[1].split('')
    } else {
        split = strOfNum.split('')
    }
    console.log(split);
    let res = 0;
    for (let i = 0; i < split.length; i++) {
        res = res + Number(split[i])
        console.log(res);
    }
    return res;
}

// Alternative Solution
// Use Math.abs
// function sumDigits(number) {
//     return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
// }

console.log(sumDigits(18));
console.log(sumDigits(22));
console.log(sumDigits(-99));
