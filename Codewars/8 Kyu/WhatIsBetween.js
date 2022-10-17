/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]

PREP
Paramaters:
Given 2 integers (a and b), where a less than b

Results:
Return an array of integers start from the lowest number to the highest

Examples:
If we were given 2 and 8 -> should return [2,3,4,5,6,7,8]
                 7 and 9 -> should return [7,8,9]
                 4 and 7 -> should return [4,5,6,7]

Pseudocodes:
Make a function that takes 2 numbers as parameters
Declare an empty array
For loop
push the result to the array
return array
*/

function between (a,b) {
    let res = [];
    for (let i = a; i <= b; i++) {
        res.push(i);
    }
    return res;
}

console.log(between(2,9));
console.log(between(22,37));
console.log(between(1,5));

