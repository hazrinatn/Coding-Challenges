// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

//P: arr of 10 integers (between 0 and 9)
//R: a string of the numbers in the form of a phone number
//E: If were given [0, 2, 1, 8, 7, 5, 2, 4, 3, 7] -> return "(021) 875-2437"
//                 [4, 5, 6, 1, 2, 3, 9, 7, 5, 8] -> return "(456) 123-9758"
//                 [1, 2, 3, 9, 7, 3, 8, 4, 2, 1] -> return "(123) 973-8421"
//P: Make a function that takes an array as the parameter
//loop
//add space after arr index 2 and index 5
function phoneNumber(arr) {
    let firstPart = arr.slice(0, 3).join('');
    let secPart = arr.slice(3, 6).join('');
    let lastPart = arr.slice(6).join('');
    return `(${firstPart}) ${secPart}-${lastPart}`;
}

console.log(phoneNumber([1, 2, 3, 9, 7, 3, 8, 4, 2, 1])); // should return "(123) 973-8421"
console.log(phoneNumber([4, 5, 6, 1, 2, 3, 9, 7, 5, 8])); // should return "(456) 123-9758"
console.log(phoneNumber([0, 2, 1, 8, 7, 5, 2, 4, 3, 7])); // should return "(021) 875-2437"


//ALternative Solution
// function createPhoneNumber(numbers){
//     let format = "(xxx) xxx-xxxx";
//     for(let i = 0; i < numbers.length; i++)
//     {
//       format = format.replace('x', numbers[i]);
//     }
//     return format;
// }