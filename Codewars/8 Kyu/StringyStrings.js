/*
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.

PREP
Parameters:
Given an integer

Results:
Return a string of alternating '1s' and '0s' based on the number parameter

Examples:
If we were given 3 -> should return '101'
                 5 -> should return '10101'
                 4 -> should return '1010'

Pseudocodes:
Make a function that takes a number as the parameter
Declare an empty string
For loop
If the increment number is odd, concatenate '1' to the empty string otherwise '0'
Return the string
*/ 

function stringy(size) {
    let newStr = '';
    for (let i = 1; i <= size; i++) {
        if (i % 2 == 0) {
            newStr += '0'
        } else {
            newStr += '1'
        }
    }
    return newStr;
}

console.log(stringy(5));
console.log(stringy(6));
console.log(stringy(3));
