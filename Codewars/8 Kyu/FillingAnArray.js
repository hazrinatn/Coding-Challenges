/*
We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
Note: The parameter is optional. So you have to give it a default value.

PREP
Parameters:
Given a positive number (N)

Results:
Return an array containing number 0 to N-1

Examples:
If we were given 5 -> should return [0,1,2,3,4]
                 none -> should return []
                 7 -> should return [0,1,2,3,4,5,6]

Pseudocodes:
Make a function that takes a number as the parameter
Create an empty array
For loop, push numbers to the array
Return the array
*/

const arr = N => {
    let newArr = [];
    for (let i = 0; i < N; i++) {
        newArr.push(i)
    }
    return newArr;
};

console.log(arr(7));
console.log(arr(5));
console.log(arr());
