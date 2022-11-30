/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

PREP
Parameters:
Given a string

Results:
Return true if the string is a pangram (contain all letters of the alphabet)

Examples:
If we were given "The quick brown fox jumps over the lazy dog." -> return true
                "This is not a pangram" -> return false
                "Neither this" -> return false

Pseudocodes:
Make a function that takes a string as the parameter
Conditionals
Return result
*/ 

// Not sure why this solution doesn't work :(
// function isPangram(string){
//     string.toLowerCase().split('')
//     console.log(string);
//     return string.includes('a') && string.includes('b') && string.includes('c') && string.includes('d') && string.includes('e') && string.includes('f') && string.includes('g') && string.includes('h') && string.includes('i') && string.includes('j') && string.includes('k') && string.includes('l') && string.includes('m') && string.includes('n') && string.includes('o') && string.includes('p') && string.includes('q') && string.includes('r') && string.includes('s') && string.includes('t') && string.includes('u') && string.includes('v') && string.includes('w') && string.includes('x') && string.includes('y') && string.includes('z')
// }

function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram"));
console.log(isPangram("AbCdEfGhIjKlM zYxWvUtSrQpOn"));



