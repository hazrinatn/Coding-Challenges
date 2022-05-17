/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false


PREP:
Parameters: 
Given a string containing any characters

Results:
Return true if the string containing the same amount of 'x's and 'o's, else return false

Example:
If we were given ("aabbXxoo") -> return true
                 ("aabbccc") -> return true (no x and o present)
                 ("xxnnnooo") -> return false

Pseudocode:
Make a function that takes a string as the parameter
declare empty array1 to contain x and empty array2 to contain o
loop
conditionals, if the char is x push to array1, if o push to array2, 
if the length of both arrays are the same return true, else return false
*/

function XO(str) {
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'x' || str[i] == 'X') {
            arr1.push(str[i]);
        } else if (str[i] == 'o' || str[i] == 'O') {
            arr2.push(str[i]);
        }
    }
    return arr1.length === arr2.length;
}

console.log(XO(("aabbXxoo")));
console.log(XO(("aabbccc")));
console.log(XO(("xxnnnooo")));
