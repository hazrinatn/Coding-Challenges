// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

//P: num, +, integer, more than 1 digit
//R: Rearrange the digits to create highest possible number
//E: If we were given 745687 -> return 877654
//                    156734 -> return 765431
//                    80934758 -> return 98875430
//P: Make a function that takes a number as the parameter
//turn it into an array
//loop, search max number, push
//join the array, turn it into Number
function descOrder(num) {
    return Number(num.toString().split('').sort((a, b) => b - a).join(''));
}

console.log(descOrder(745687)); // should return 877654
console.log(descOrder(156734)); // should return 765431
console.log(descOrder(80934758)); // should return 98875430

