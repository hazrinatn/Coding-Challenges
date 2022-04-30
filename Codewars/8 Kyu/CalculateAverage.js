// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//P: Given an array of numbers. Can be an empty array
//R: Return the average of the number.
//E: If we were given [1, 2, 3, 4, 5] -> should return (1+2+3+4+5)/5 = 3
//                    [12, 2, 8, 9] -> should return 7.75
//                    [1, 2, 3, 4] -> should return 2.5
//P: Make a function that take an array as the parameter
// sum all the numbers and then divide by the count of the number
function calculateAverage(arr) {
    let total = arr.reduce((sum, count) => sum + count, 0)
    let average = total/arr.length
    return average
}

console.log(calculateAverage([1, 2, 3, 4])); //should return 2.5
console.log(calculateAverage([12, 2, 8, 9])); //should return 7.75
console.log(calculateAverage([1, 2, 3, 4, 5])); //should return 3
