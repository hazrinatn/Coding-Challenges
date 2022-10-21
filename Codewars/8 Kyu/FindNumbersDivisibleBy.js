/*
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

PREP
Parameters:
Given an array of integers and a number as parameters

Results:
Return an array of numbers that is divisible by the second number

Examples:
If we were given [1, 2, 3, 4, 5, 6], 2 -> should return [2, 4, 6]
                 [0,1,2,3,4,5,6], 4 -> should return [0,4]
                 [0], 4 -> should return [0]

Pseudocodes:
Make a function that takes an array and a number as parameters
declare an empty array
for loop
if number in the array modulus the divisor is equal to 0 push to new array
return the new array
*/

function divisibleBy(numbers, divisor){
    let newArr = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % divisor === 0) {
            newArr.push(numbers[i])
        }
    }
    return newArr;
}

//Alternative solution using filter method
// function divisibleBy(numbers, divisor) {
//     return numbers.filter(n => n % divisor === 0)
// }

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
console.log(divisibleBy([0,1,2,3,4,5,6], 4));
console.log(divisibleBy([0], 4));

