/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

PREP:
Parameters:
Given a string containing letters from a..z and A..Z

Results:
Return each letter of the string multiplies by their position

Examples:
If we were given ("abcd") -> "A-Bb-Ccc-Dddd"
                 ("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
                 ("cwAt") -> "C-Ww-Aaa-Tttt"

Pseudocode:
Turn the string into an array using split method
Set an empty array variable to push the result of the loop
Loop through the array
Multiplies the string by their position
*/

function accum(str) {
    let split = str.split('');
    let arr = [];
    for (let i = 0; i < split.length; i++) {
        arr.push(split[i].repeat(i + 1))
    }
    return arr.map(x => x.charAt(0).toUpperCase() + x.slice(1)).join('-');;
}

console.log(accum("abcd")); // return "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // return "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")); // return "C-Ww-Aaa-Tttt"
