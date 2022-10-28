/*
We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

All values will be positive integers or floats, or zero.

PREP
Parameters:
Given a number, can be positive integers, floats, or zero

Results:
Return true if the number is plural

Examples:
If we were given (0) -> true
                 (0.5) -> true
                 (1) -> false
                 (100) -> true
                 (Infinity) -> true

Pseudocodes:
Make a function that takes a number as the parameter
Conditionals, if 1 return false otherwise return true
*/ 

function plural(n) {
    return n != 1
}

console.log(plural(0));
console.log(plural(0.6));
console.log(plural(1));
console.log(plural(100));
console.log(plural(Infinity));


