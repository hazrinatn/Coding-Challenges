/*
This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

About factors
Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.



PREP:
Parameters:
Given a base number and another number to be determined if it is a factor of the base number or not

Returns:
Return true if the other number is a factor of the base number, otherwise return false

Examples:
If we were given (10, 2) -> return 2
                 (11, 5) -> return false
                 (90, 5) -> return true

Pseudocode:
Make a function that takes 2 numbers as the parameters
Conditionals
Return the result
*/

function checkFactor(base, factor) {
    return base % factor === 0;
}
console.log(checkFactor(63, 7)); // true
console.log(checkFactor(10, 2)); // true
console.log(checkFactor(24617,3)); // false
