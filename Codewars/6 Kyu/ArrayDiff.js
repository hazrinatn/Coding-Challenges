/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

PREP
Parameters:
Given two arrays of integers

Results:
Remove all value from the first array which are present in array b

Examples:
If we were given ([1,2], [1]) -> return [2]
                 ([1,2,2], [1]) -> return [2,2]
                 [1,2,2], [2]) -> return [1]
                 [1,2,2], []) -> return [1,2,2]

Pseudocodes:
Make a function that takes 2 arrays as parameters
Create a new empty array
For loop array a
Conditionals
Push result to the new array
Return result
*/ 

const arrayDiff = (a,b) => {
    return a.filter(el => !b.includes(el))
}

// Alternative solution
// function array_diff(a, b) {
//     return a.filter(function(x) { return b.indexOf(x) == -1; });
//   }

// Faster Solution using Set
// function array_diff(a, b) {
//     b = new Set(b)
//     return a.filter(v => !b.has(v))
// }

console.log(arrayDiff([1,2], [1]));
console.log(arrayDiff([1,2,2], [1]));
console.log(arrayDiff([1,2,2], [2]));
console.log(arrayDiff([1,2,2], []));
console.log(arrayDiff([1,2,3], [1,2]));





