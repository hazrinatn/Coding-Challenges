// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

//P: Given a string that contains nunbers separated by spaces. Can be positive or negative.
//R: Return the highest and lowest numbers in a new string separatd by spaces, and highest number is first.
//E: If we were given "7 8 9 10 5" -> return "10 5"
//                    "-12 1 0 4 7" -> return "7 -12"
//                    "2 6 -6 3" -> return "6 -6"
//P: Make a function that takes a string as the parameter.
//split the string into an array of numbers, convert the string into number using .map(Number)
//use Math.max and Math.min method and spread operator because Math.max and Math.min are built-in js object methods

function highAndLow(numbers) {
    let arr = numbers.split(" ").map(Number);
    let high = Math.max(...arr);
    let low = Math.min(...arr);
    return [high, low].join(" ");
}

console.log(highAndLow("7 8 9 10 5")); // should return "10 5"
console.log(highAndLow("-12 1 0 4 7")); // should return "7 -12"
console.log(highAndLow("2 6 -6 3")); // should return "6 -6"

//Alternative Solution
// function highAndLow(numbers){
//     numbers = numbers.split(' ').map(Number);
//     return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
// }


