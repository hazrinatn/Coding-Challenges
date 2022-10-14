/*
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
Happy coding!

PREP
Parameters:
Given 2 arrays of integers

Results:
Merge the arrays into one, remove duplicates, and sort the merged array

Examples:
If we were given [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                 [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                 [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

Pseudocodes:
Make a function that takes 2 arrays as parameters
Concat both array
Sort
Create an empty array
For loop, conditionals, push to the new array
Return the new array
*/ 

function mergeArrays(arr1, arr2) {
  let merge = arr1.concat(arr2)
  merge.sort((a,b) => a - b)
  let res = []
  for (let i = 0; i < merge.length; i++) {
    if (merge[i+1] != merge[i]) {
        res.push(merge[i])
    }
  }
  return res
}

// Alternative Solution using Set
// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
// function mergeArrays(arr1, arr2) {
//     return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
// }
// OR
// function mergeArrays(a, b) {
//     return [...new Set(a.concat(b))].sort((a,b)=>a-b)
// }

console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));
console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]));
console.log(mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));
