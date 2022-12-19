/*
Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

PREP
Parameters:
Given an array and a number (n)

Results:
Return the first n elements from the array

Examples:
If we were given [1,2,3,4,5], 2 -> return [1,2]
                 [2,8,7], 3 -> return [2,8,7]

Pseudocodes:
Make a function that takes an array and a number as parameters
Slice the array according to the number parameter
Return the results
*/ 

const takeArr = (arr, n) => {
    return arr.slice(0, n)
}

console.log(takeArr([1,2,3,4,5], 2));