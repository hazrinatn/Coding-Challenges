/*
Write a function that checks if a given string (case insensitive) is a palindrome.

PREP
Parameters:
Given a string 

Results:
Return true if the string (case insensitive) is palindrome, otherwise false

Examples:
If we were given "Abba" -> should true
                 "AbBa" -> should true
                 "hello" -> should return false

Pseudocodes:
Make a function that takes a string as parameter
Turn the string into lowercases
split each letter into an array, reverse the array, join the array to turn into string again
if the reverse string is the same as the string, return true otherwise return false
*/

function isPalindrome(x) {
    let str = x.toLowerCase()
    return str.split('').reverse().join('') == str
}

console.log(isPalindrome("Abba"));
console.log(isPalindrome("AbBa"));
console.log(isPalindrome("Hello"));
