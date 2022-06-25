/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

PREP
Parameters: 
Given positive integers

Results:
Return a string of all the numbers from 1 to the given number with additional "string sheep..." after each number

Example:
If we were given 4 -> return "1 sheep...2 sheep...3 sheep...4 sheep..."
If we were given 7 -> return "1 sheep...2 sheep...3 sheep...4 sheep...5 sheep... 6 sheep...7 sheep..."
If we were given 3 -> return "1 sheep...2 sheep...3 sheep..."

Pseudocode:
Make a function that takes a number as the parameter
Declare a variable that contains an empty array
Loop through the number
Concatenate the number with the string
Push the result to the array
Join the array to convert it to a string
Return the string
*/

function countSheep(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
        result.push(i + " sheep...")
    }
    return result.join('');
}
console.log(countSheep(5)); // 1 sheep...2 sheep...3 sheep...4 sheep...5 sheep...
console.log(countSheep(4)); // 1 sheep...2 sheep...3 sheep...4 sheep...
console.log(countSheep(7)); // 1 sheep...2 sheep...3 sheep...4 sheep...5 sheep...6 sheep...7 sheep...
console.log(countSheep(3)); // 1 sheep...2 sheep...3 sheep...

//Alternative Solution
// function countSheep(num) {
//     let str = "";
//     for (let i = 1; i <= num; i++) {
//         str += `${i} sheep...`
//     }
//     return str;
// }

