/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

PREP
Parameters:
Given an array containing integers as strings and numbers

Results:
Return the sum of the elements in the array

Examples:
If we were given [9, 3, '7', '3'] -> return 22
                 ['5', '0', 9, 3, 2, 1, '9', 6, 7] -> return 42
                 ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'] -> return 41

Pseudocode:
Make a function that takes an array as the parameter
Declare the sum variable
Loop through the array
Convert the strings to numbers
Add all the elements
Return the result
*/

function sumMix(x){
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
      sum += parseInt(x[i])
    }
    return sum;
}

console.log(sumMix([9, 3, '7', '3']));
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']));


// Alternative solution
// function sumMix(x){
//     return x.map(a => +a).reduce((a, b) => a + b);
// }