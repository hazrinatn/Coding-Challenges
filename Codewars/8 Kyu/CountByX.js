/*
Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]

PREP
Parameters: 
Given 2 positive numbers: 
(x) = initial number and multiplier 
(n) = the number of times to count

Results:
Return an array of the first (n) multiples of (x)

Pseudocode:
Make a function that takes 2 numbers as the parameters
declare an empty array
loop through the number
multiply
return the array
*/

function countBy(x, n) {
    let result = [];
    for(let i = 1; i <= n; i++) {
        result.push(i * x)
    } 
    return result;
}

console.log(countBy(1,10));
console.log(countBy(2,5));
console.log(countBy(3,7));

