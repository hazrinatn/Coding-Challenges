// Complete the solution so that it reverses all of the words within the string passed in.

// Example:

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

//P: Given a string of words
//R: Return the reverse of the words
//E: If we were given "I love you" -> should return "you love I"
//                    "The greatest victory is that which requires no battle" -> "battle no requires which that is victory greatest The"
//                    "Somewhere over the rainbow" -> should return "rainbow the over somewhere"
//P: Make a function that take a string as the parameter
//split the string
//reverse
//join
function reversedWords(string) {
    return string.split(" ").reverse().join(" ")
}

console.log(reversedWords("I love you")); // should return "you love I"
console.log(reversedWords("The greatest victory is that which requires no battle")); // should return "battle no requires which that is victory greatest The"
console.log(reversedWords("Somewhere over the rainbow")); // should return "rainbow the over somewhere"

