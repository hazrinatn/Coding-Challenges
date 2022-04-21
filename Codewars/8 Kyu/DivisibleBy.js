// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

//P: Given three numbers, n, x and y. No 0, no negatives
//R: Return boolean if n is divisible by x and y
//E: If we were given n = 18, x = 6, y = 9 -> return true, 18 is divisible by 6 and 9
//                    n = 25, x = 5, y = 3 -> return false, 24 isn't divisible by 3
//                    n = 22, x = 18, y = 12 -> return false, 22 isn't divisible by nor 12
//P: Make a function that takes 3 numbers as parameters
function divisibleBy(n, x, y) {
    //conditionals
    if (n % x === 0 && n % y === 0) {
        return true
    } else {
        return false
    }
}

console.log(divisibleBy(25, 5, 3)); // should return false
console.log(divisibleBy(22, 18, 12)); // should return false
console.log(divisibleBy(18, 6, 9)); // should return true
