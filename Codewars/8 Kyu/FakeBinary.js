// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//P: Given a string of digits. Can't be an empty string.
//R: Replace digit 5 or above with "1" and below it with "0".
//E: If we were given "12345" -> return "00001"
//                    "7895432" -> return "1111000"
//                    "0621" -> return "0100"
//P: Make a function that takes a string as the parameter
//turn the string into an array using split
//loop through it
//convert the digit using conditionals
//join the array to make it string again

function fakeBinary(string) {
    let split = string.split("")
    let arr = [];
    for (let i = 0; i < split.length; i++) {
        if (split[i] >= 5) {
            arr.push("1")
        } else {
            arr.push("0")
        }
    }
    return arr.join("")
}

console.log(fakeBinary("12345")); // should return "00001"
console.log(fakeBinary("7895432")); // should return "1111000"
console.log(fakeBinary("0621")); // should return "0100"
