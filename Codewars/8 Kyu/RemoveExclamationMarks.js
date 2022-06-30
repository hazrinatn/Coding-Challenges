/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

PREP
Parameters:
Given a sring containing exclamation marks

Results:
Return the string without the excalamation marks'

Examples:
If we were given "Hello World!" -> return "Hello World"
                 "No! Really!" -> return "No Really"
                 "What?!!!!" -> return "What?"

Pseudocode:
Make a function that takes a string as the parameter
Split the string by the excalamtion marks
Join the string again
Return the result
*/

function removeExclamationMarks(s) {
    return s.split('!').join('');
}

console.log(removeExclamationMarks("No! Really!"));
console.log(removeExclamationMarks("What?!!!!" ));
console.log(removeExclamationMarks("Hello World!" ));

// Alternative solution
/*
Using Regular Expression

function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
}
explanation: replace ! with empty string

g : Performs a global match, finding all matches rather than just the first.
i : Makes matches case-insensitive. Matches both uppercase and lowercase.

*/
