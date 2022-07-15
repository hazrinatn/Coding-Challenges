/*
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

PREP
Parameters:
Given a string that contain age (0-9)

Results:
Return the number of the age

Examples:
If we were given "7 years old" -> return 7
                 "5 years old" -> return 5
                 "3 years old" -> return 3

Pseudocode:
Make a function that takes a string as the parameter
Use charAt string method to look for the age number
Turn the string age into integer
Return the result
*/

// function getAge(inputString){
//     let age = inputString.charAt(0);
//     return parseInt(age);
// }

function getAge(inputString){
    return parseInt(inputString);
}

console.log(getAge("7 years old"));
console.log(getAge("5 years old"));
console.log(getAge("3 years old"));
