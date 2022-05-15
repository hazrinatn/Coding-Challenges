// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

//P: num, int, +, -, can be 0
//R: true if the num is a square number, otherwise false
//E: If we were given -5 -> return false
//                    0 -> return true
//                    16 -> return true
//                    7 -> return false
//P: Make a function that takes a number as the parameter
//conditionals

function isSquare(num) {
    return Number.isInteger(Math.sqrt(num));
}

console.log(isSquare(16));
console.log(isSquare(3));
console.log(isSquare(-5));
console.log(isSquare(0));


//Alternative solution
// function isSquare(n) {
//     return Math.sqrt(n) % 1 === 0;
// }

