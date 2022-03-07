// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//P: Given an array of numbers. Can it be empty array? Can it be all negative?
//R: Return the sum of all positive numbers.
//E: If we were given [3, -5, 7, 8] -> 3 + 7 + 8 = 18
//                    [2, -2, 2, 4] -> 2 + 2 + 4 = 8
//                    [] -> 0
//P: Write a function that takes an array as a parameter
function sumPositives(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i]
        } 
    }  
    return sum
}
//Loop thorugh the array to find the postive numbers
//Sum all the positive numbers
//Return the result

console.log(sumPositives([1, -2, 3])) // should return 4
console.log(sumPositives([15, 10, 27])) // should return 52
console.log(sumPositives([-3, -2, -5])) // should return 0
console.log(sumPositives([])) // should return 0


