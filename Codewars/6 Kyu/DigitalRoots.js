/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

PREP
Parameters: 
Given a number as the parameter

Results:
Return the recursive sum of all the digits in the number.

Examples:
If we were given 19 -> return 1+9 = 1+0 = 1
                 1218 -> return 1+2+1+8 = 1+2 = 3
                 322 -> return 3+2+2 = 7

Pseudocode: 
Conditionals, if 1 digit, return the number. Otherwise do the calculation.
Convert the number to string
Split each digit.
Sum all of the digit.
If the result is more than 1 digit, sum again until the result is single digit.
*/

function digitalRoot(n) {
    if (n > 9) {
        let string = n.toString();
        let sum = 0;
        for(let i = 0; i < string.length; i++) {
            sum += Number(string[i])
        }
        if (sum > 9) {
            return digitalRoot(sum)
        } else {
            return sum
        }
    } else {
        return n
    }
}

console.log(digitalRoot(493193));
console.log(digitalRoot(76589483));



//Alternative Solution (CLEVER WAY!!!)
//Use Math, bro!
//Every integer is congruent to the sum of its digits mod 9
// function digitalRoot(n) {
//     return (n - 1) % 9 + 1;
// }
