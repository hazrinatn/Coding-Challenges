/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

PREP
Parameters:
Given a string

Results:
Repeat each character in the string once

Examples:
If we were given "String"      -> "SSttrriinngg"
                 "Hello World" -> "HHeelllloo  WWoorrlldd"
                 "1234!_ "     -> "11223344!!__  "

Pseudocode:
Make a function that takes a string as the parameter
Split each character
Loop thorugh it
Repeat each character once
Return the result
*/

function doubleChar(str) {
    return str.split('').map(char => char+char).join('');
}

console.log(doubleChar("abc"));
console.log(doubleChar("String"));
console.log(doubleChar("Hello World"));
console.log(doubleChar("1234!_ "));



