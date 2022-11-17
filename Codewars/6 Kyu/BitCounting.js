/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

PREP
Parameters:
Given a number

Results:
Convert the number to its binary form and calculate the sum of it

Examples:
If we were given 1234 -> return 5 (10011010010)
                 4 -> return 1
                 7 -> return 3

Pseudocodes:
Make a function that takes a number as the parameter
Convert the number to binary
Convert the string
Split the string
Convert each string into number
Reduce
Return results
                 
*/ 

const countBits = (n) => {
    let binary = n.toString(2)
    let split = binary.split('')
    return split.reduce((a,b) => Number(a) + Number(b), 0)
}

// Alternative solution
// const countBits = n => n.toString(2).split('0').join('').length;

console.log(countBits(1234));
console.log(countBits(4));
console.log(countBits(7));
