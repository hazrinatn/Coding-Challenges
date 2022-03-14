// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:
// summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

//P: Given a number. Always positive number, more than 0.
//R: Sum all of the numbers, from 1 to the number itself.
//E: If we were given 4 -> should return (1+2+3+4) 10
//                    3 -> should return (1+2+3) 6
//                    7 -> should return (1+2+3+4+5+6+7) 28
//P: Write a function that takes a number as the parameter
function sum(num) {
    //declare a total variable
    let total = 0;
    //loop through the number
    for (let i = 1; i <= num; i++) {
        //sum all of the numbers
        total += i
    }
    return total;
}

console.log(sum(4)); //should return (1+2+3+4) 10
console.log(sum(7)); //should return (1+2+3+4+5+6+7) 28
console.log(sum(8)); //should return (1+2+3+4+5+6+7+8) 36


