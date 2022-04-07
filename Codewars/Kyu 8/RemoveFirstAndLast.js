// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//P: Given a string. Always more than 2 characters.
//R: Remove the first and last characters of the string.
//E: If we were given "drone" -> return "ron"
//                    "extravagant" -> return "xtravagan"
//                    "trophy" -> return "roph"
//P: Write a function that takes a string as parameter
//slice the string, begin at the second character and end with last character -1
function removeChars(str) {
    return str.slice(1, -1)
}

console.log(removeChars("drone")) // should return "ron"
console.log(removeChars("extravagant")) // should return "xtravagan"
console.log(removeChars("trophy")) // should return "roph"


