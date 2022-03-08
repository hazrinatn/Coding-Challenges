// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

//P: Given a number, can be integer or float. Can be positive or negative.
//R: Make the number negative. If it's negative already, don't have to change.
//E: If we were given 7 -> return -7
//                    -9 -> return -9
//                    22.03 -> return -22.03
//                    0 -> 0
//P: Write a function that takes a number as a parameter
function makeNegative(num) {
    if (num === 0) {
        return 0
    } else if (num < 0) {
        return num
    } else {
        return -(num)
    }
}

console.log(makeNegative(-9)) // should return -9
console.log(makeNegative(22.03)) // should return -22.03
console.log(makeNegative(7)) // should return -7
console.log(makeNegative(0)) // should return 0


