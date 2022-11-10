/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"

PREP
Parameters:
Given a string

Results:
If the word consists of 5 or more letters, reverse it. Return the full string with the reversed words

Examples:
If we were given "Hey fellow warriors" -> returns "Hey wollef sroirraw" 
                 "This is a test" -> returns "This is a test"
                 "This is another test" -> "This is rehtona test

Pseudocodes:
Make a function that takes a string as the parameter
Split the string
For loop 
Conditionals
Reverse the words if consist of 5 or more letters
join array
Return the result
*/ 

const spinWords = (string) => {
     let split = string.split(' ')
     let res = []
     for (let i = 0; i < split.length; i++) {
        if (split[i].length >= 5) {
            res.push(split[i].split('').reverse().join(''))
        } else {
            res.push(split[i])
        }
     }
     return res.join(' ')
}

console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));
