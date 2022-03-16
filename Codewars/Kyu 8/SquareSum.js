// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

//P: Given an array. Will it be always integer? Can it be floats? Can it be negative? Can it be 0? Can it be empty?
//R: Return the sum of squares of each number.
//E: If we were given [2, 2, 0] -> should return (2^2 + 2^2 + 0^2) 8
//                    [1, 8] -> should return (1^2 + 8^2) 65
//                    [3, 3, 2, 5] -> should return (3^2 + 3^2 + 2^2 + 5^2) 47
//P: Write a function that takes an array as the parameter
function squareSum(arr) {
    //declare a results variable
    let results = 0;
    //loop through the array
    for (let i = 0; i < arr.length; i++) {
        //calculate the square of each number and then sum it all
        results += (arr[i] ** 2);
    }
    return results;
};

console.log(squareSum([2, 2, 0])); // should return (2^2 + 2^2 + 0^2) 8
console.log(squareSum([1, 8])); // should return (1^2 + 8^2) 65
console.log(squareSum([3, 3, 2, 5])); // should return (3^2 + 3^2 + 2^2 + 5^2) 47

