// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

//P: Given an array of numbers. Never be an empty array.
//R: Return the smallest number.
//E: If we were given [-99, 2, 80] -> return -99
//                    [7, 68, 1] -> return 1
//                    [10, 45, 0] -> return 0
//P: Write a function that takes an array as the parameter
function smallestNum(arr) {
    return Math.min.apply(null, arr);
}

console.log(smallestNum([-99, 2, 80])); // should return -99
console.log(smallestNum([10, 0, 45])); // should return 0


//Notes:
// Math.min(a, b, c[, ...]) normally returns the lowest value among all the arguments passed into it, but the problem is that it doesn’t accept arrays. That’s where .apply comes into play.

// function.apply(thisArg, [argsArray]) accepts two arguments. thisArg is for explicitly stating which object this should refer to. [argsArray] is whatever arguments you’d like to pass into the original function in the format of an array.