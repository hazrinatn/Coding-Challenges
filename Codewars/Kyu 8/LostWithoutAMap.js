// Problem:
// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]


//(P) Parameters: Is it always going to be integers? Are we going to be given any special characters? An empty array ever?
//(R) Return: Return a new array with each value doubled.
//(E) Examples: If we are given[2,3,4], should return [4,6,8]
//              If we are given [5,7,9], should return [10,14,18]
//              If we are given [0,-1], should return [0,-2]
//(P) Pseudocode:
//Make a function that takes in an array.
function doubled(arr) {
    if (arr === undefined || arr.length === 0) {
        console.log('Array is invalid')
    } else {
        return arr.map(element => element*2)
    }
}

//Map through the array and multiply element by 2. Also return.
console.log(doubled([0,-1]))
console.log(doubled([5, 7, 9]), [10, 14, 18])
doubled([])