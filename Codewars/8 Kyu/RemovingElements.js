/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!

PREP
Parameters:
Given an array as the parameter

Results:
Remove every second element from the array

Examples:
If we were given ['Hello', 'Goodbye', 'Hello Again'] -> return ['Hello', 'Hello Again']
                 ["Keep", "Remove", "Keep", "Remove", "Keep"] -> return ["Keep", "Keep", "Keep"]
                 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] -> return [1, 3, 5, 7, 9]

Pseudocode:
Make a function that takes an array as the parameter
Return the element in every even index of the array
*/

function removeEveryOther(arr){
    return arr.filter((item, index) => item = index % 2 == 0)
}

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"])); // should return [ 'Keep', 'Keep', 'Keep' ]
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])); // should return [ 'Hello', 'Hello Again' ]
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // should return [ 1, 3, 5, 7, 9 ]


//Alternative solution
// function removeEveryOther(arr){
//     let newArr = [];
//   for (let i = 0; i < arr.length; i+=2){
//     newArr.push(arr[i]);
//     }
//   return newArr;
// }

