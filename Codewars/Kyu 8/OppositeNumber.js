// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:
// 1: -1
// 14: -14
// -34: 34

//P: Want to find the opposite of a number: integer or float. How about 0? Will we ever given infinity?
//R: Return the opposite number. If it's positive, return negative. Vice versa.
//E: If we were given 7 -> return -7
//                    -1687 -> return 1678
//                    13.5 -> -13.5
//P: Write a function that takes a number as a parameter
function oppositeNumber(num) {
    if (num === 0) {
        return num
    } else {
        return num * -1
    }
}

console.log(oppositeNumber(-1678)) // should return 1678
console.log(oppositeNumber(7)) // should return -7
console.log(oppositeNumber(13.5)) // should return -13.5
console.log(oppositeNumber(0)) // should return 0
console.log(oppositeNumber(Infinity)) // should return -Infinity




