// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

//P: Given array of integers. Can be empty. How about 0?
//R: Return the inverse of the numbers, positive becomes negative and vice versa
//E: If we were given [-7, -8, 2, 5, 0] -> return [7, 8, -2, -5, 0]
//                    [] -> return []
//P: Make a function that takes array as the parameter
//Map through it to return a new array
function invertVal(arr) {
    return arr.map(val => (val == 0 ? 0 : val * -1))
}

console.log(invertVal([-7, -8, 2, 5, 0])); // should return [7, 8, -2, -5, 0]
console.log(invertVal([])); // should return []

//Alternative solution (if 0 is returned as -0)
//const invert = array => array.map(num => -num);