/*
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

PREP
Parameters:
Given 2 integers

Results:
Calculate the area if the numbers are the same, otherwise calculate perimeter

Examples:
If we were given (6, 10) -> return 32 (6*2 + 10*2)
                 (5, 5) -> return 25 (5*5)
                 (4, 6) -> return 20

Pseudocode:
Make a function that takes 2 numbers (length, width) as parameters
Check if the numbers are the same or not
If the numbers are the same, calculate the area, otherwise calculate perimeter
Return the result
*/

function areaOrPerimeter (l, w) {
    if (l === w) {
        return l * w
    } else {
        return 2 * (l + w)
    }
}

console.log(areaOrPerimeter(6, 10)); // 32
console.log(areaOrPerimeter(5, 5)); // 25
console.log(areaOrPerimeter(4, 6)); // 20

