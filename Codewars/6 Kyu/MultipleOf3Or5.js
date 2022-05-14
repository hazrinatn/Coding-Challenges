// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

//P: num, +, whole
//R: the sum of numbers below the number passed in that are multiplies of 3 or 5 or both
//E: If we were given (7) -> return 3 + 5 + 6 = 14 
//                    (12) -> return 3 + 5 + 6 + 9 + 10 = 33
//                    (3) -> return 0
//P: Make a function that takes a number as the parameter
//loop
//conditionals %, push to array
//sum
function multiplies(num) {
    let sum = 0;
        for (let i = 0; i < num; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
               sum += i
            }
        }
        return sum;
}

console.log(multiplies(7)); // should return 14
console.log(multiplies(12)); // should return 14
console.log(multiplies(3)); // should return 14
console.log(multiplies(-12)); // should return 14


