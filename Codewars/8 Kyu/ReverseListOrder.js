/*
In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]

PREP
Parameters:
Given an array of integers

Results:
Return the reverse order of the array

Examples:
If we were given [1, 2, 3, 4]  -> [4, 3, 2, 1]
                 [9, 2, 0, 7]  -> [7, 0, 2, 9]
                 [12, 2, 22, 18]  -> [18, 22, 2, 12]

Pseudocodes:
Make a function that takes an array as the parameter
Make an empty array
Unshift the elements into the new array
Return the new array
*/

function reverseList(list) {
    let newArray = [];
    for (let i = 0; i < list.length; i++) {
        newArray.unshift(list[i]);
    }
    return newArray;
}

// Alternative solution
// function reverseList(list) {
//     return list.reverse();
// }

console.log(reverseList([1, 2, 3, 4]));
console.log(reverseList([9, 2, 0, 7]));
console.log(reverseList([12, 2, 22, 18]));

