/*
Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

PREP
Parameters:
Given an string containing a single word

Returns:
Capitalize the first letter of the string

Examples:
If we were given 'hello' -> returns 'Hello'
                 'future' -> returns 'Future'
                 'soulmate' -> returns 'Soulmate'

Pseudocodes:
Make a function that takes a string as the parameter
Turn the first letter to uppercase
Return the uppercase letter + the rest of the letters
*/

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1)
}

console.log(capitalizeWord('hello'));
console.log(capitalizeWord('future'));
console.log(capitalizeWord('soulmate'));

