/*
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

Hint for R users:

The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output

("1", "22") --> "1221"
("22", "1") --> "1221"

PREP
Parameters:
Given 2 strings with different length as parameters. Can be empty (0 length)

Results:
Return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside

Examples:
If we were given ("1", "22") -> return "1221"
                 ("22", "1") -> return "1221"
                 ("apple", "box") -> return "boxapplebox"

Pseudocode:
Make a function that takes 2 string as parameters
Compare the length of the strings
Concatenate the strings with the longer string outside the shorter one
Return the result
*/

function solution(a, b){
    if (a.length > b.length) {
        return b+a+b
    } else {
        return a+b+a
    }
}

console.log(solution("apple", "box")); // should return "boxapplebox"
console.log(solution("22", "1")); //"1221"
console.log(solution("1", "22")); //"1221"
