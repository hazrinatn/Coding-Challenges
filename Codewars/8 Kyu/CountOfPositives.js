// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//P: Given an array of integers
//R: Return an array consists of the count the positives numbers and the sum all the negative numbers.
//E: If we were given [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] -> return [10, -65]
//                    [5, 6, -3, -5, -7, 0] -> return [2, -15]
//                    [] -> return []
//P: Make a function that takes an array as the parameter
//loop through it
//conditionals, if pos just count, if neg sum
function countAndSum(arr) {
    let count = 0;
    let sum = 0;
    if (arr == null || arr.length < 1) {
        return [];
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                count += 1
            } else if (arr[i] < 0) {
                sum += arr[i]
            }
        }
        return [count, sum];
    }
}

console.log(countAndSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])); // should return [10, -65]
console.log(countAndSum([5, 6, -3, -5, -7, 0])); // should return [2, -15]
console.log(countAndSum([])); // should return []
