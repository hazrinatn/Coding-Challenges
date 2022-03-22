// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

function numberToString(str) {
    return Number(str)
}

console.log(numberToString("1234")); // should return 1234
console.log(numberToString("605")); // should return 605
console.log(numberToString("-7")); // should return -7

//Alternative solution:
//parseInt(str)
