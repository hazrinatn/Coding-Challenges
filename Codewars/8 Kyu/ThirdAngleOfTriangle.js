/*
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

PREP
Parameters:
Given 2 integers (angles of triangle in degress)

Results:
Calculate the 3rd angle of the triangle

Examples:
If we were given (30, 60) -> return 90 (180 - 30 - 60)
                 (45, 60) -> return 75 (180 - 45 - 60)
                 (43, 78) -> return 59
                 (10, 20) -> return 150
                
Pseudocode:
Make a function that takes 2 numbers (degree of angles) as the parameters
Calculate the remaining angle by substracting 180 with the 2 angles
Return the result
*/
function otherAngle(a, b) {
    return 180 - (a + b);
}

console.log(otherAngle(30, 60)); // 90
console.log(otherAngle(45, 60)); // 75
console.log(otherAngle(43, 78)); // 59
console.log(otherAngle(20, 10)); // 150



