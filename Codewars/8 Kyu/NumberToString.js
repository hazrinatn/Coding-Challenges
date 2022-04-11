// We need a function that can transform a number into a string.

// What ways of achieving this do you know?

// Examples:
// 123 --> "123"
// 999 --> "999"

//P: Given a number.
//R: Convert into a string.
//E: If we were given 12345 -> return '12345'
//                    81 -> return '81'
//                    0 -> return '0'
//P: Write a function that takes a number as a parameter.
function numberToString(num) {
    return num.toString() // another alternative is String(num)
}

console.log(12345) // as a comparison
console.log('this is as string:', numberToString(12345)) // should return string '12345'