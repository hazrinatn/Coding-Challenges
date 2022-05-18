/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

PREP:
Parameters:
Given a string, can be empty, can be uppercase or lowercase

Results:
Return true if the string is an isogram: has no repeating letters, consecutive, or non-consecutive

Example:
If we were given "dermatoglyphics" -> return true
                 "salamander" -> return false
                 "power" -> return true
                 "Ooze" -> return false

Pseudocode:
Turn the string into lowercases
Loop the string
Conditionals, compare the letter
*/

function isogram(str) {
    let s = str.toLowerCase().split('');
    let check = s.filter((val, index) => index !== s.indexOf(val))
    if (check.length == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isogram("Ooze")); // return false
console.log(isogram("power")); // return true
console.log(isogram("salamander")); // return false


//Alternative solution
// function isIsogram(str){
//     let s = str.toLowerCase();
//     for(let i = 0; i < s.length; ++i) {
//       for(let j = i + 1; j < s.length; ++j) {
//         if(s[i] === s[j]) {
//             return false;
//         } else {
//             return true;
//         }
//       }
//     }     
// }

// function isIsogram(str){
//     return new Set(str.toUpperCase()).size == str.length;
// }