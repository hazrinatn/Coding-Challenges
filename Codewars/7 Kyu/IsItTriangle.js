/*
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

To form a triangle, the sum of any two sides should always be greater than the third side.

PREP
Parameters: 
Given 3 numbers

Results:
Return true if a triangle can be build by the 3 numbers, otherwise return false

Examples:
If we were given (7,2,2) -> false
                 (1,2,2) -> true
                 (3,4,5) -> true

Pseudocodes:
Make a function that takes 3 numbers as parameters
Conditionals: if the sum of a and b is greater than c then return true, otherwise return false
*/ 

function isTriangle(a,b,c) {
    return (a + b > c && a + c > b && b + c > a)
}

console.log(isTriangle(7,2,2));
console.log(isTriangle(1,2,2));
console.log(isTriangle(3,4,5));
