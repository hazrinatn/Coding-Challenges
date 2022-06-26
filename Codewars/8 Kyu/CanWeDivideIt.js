/*
DESCRIPTION:
Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

A few cases:
(-12, 2, -6)  ->  true
(-12, 2, -5)  ->  false

(45, 1, 6)    ->  false
(45, 5, 15)   ->  true

(4, 1, 4)     ->  true
(15, -5, 3)   ->  true

PREP
Parmaters: 
Given 3 integers, positives and negatives

Results: 
Return true if the first number is divisible by the 2nd and 3rd number, otherwise return false

Examples:
If we were given (-12, 2, -6) ->  return true
                 (-12, 2, -5)  ->  false
                 (4, 1, 4)    ->  return true
                 (15, -5, 3)  ->  return true

Pseudocode:
Make a function that takes 3 numbers as the parameters
Conditionals, modulus
Return true if the 1st number modulus 2nd and 3rd numbers are both 0, otherwise false
*/

function isDivisibleBy(n1, n2, n3) {
    return n1 % n2 === 0 && n1 % n3 === 0  
}

console.log(isDivisibleBy(-12, 2, 6)); // true
console.log(isDivisibleBy(-12, 2, -5)); // false
console.log(isDivisibleBy(4, 1, 4)); // true
console.log(isDivisibleBy(15, -5, 3)); // true






