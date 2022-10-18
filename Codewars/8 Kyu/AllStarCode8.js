/*
All Star Code Challenge #18

Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
Notes:

The first argument can be an empty string
The second string argument will always be of length 1

PREP
Parameters:
Given 2 strings. Can be empty.

Results:
Return the number of occurrence of the 2nd string that is found in 1st string

Examples:
If we were given 'Hello', 'o' -> should return 1
                 'Whaaa', 'a' -> should return 3
                 'Nanon', 'n' -> should return 3

Pseudocodes:
Make a function that takes 2 strings as parameters
make the 1st string lowercase
turn string into array
set result variable to 0
loop
conditional
if match, plus one to the result var
return the result var
*/

function strCount(str, letter) {
    let strArray = str.toLowerCase().split('');
    let res = 0;
    for (let i = 0; i < strArray.length; i++) {
        if (strArray[i] == letter) {
            res += 1;
        }
    }
    return res;
}

// Interesting solution
// function strCount(str, letter){  
//     return str.toLowerCase().split(letter).length-1
// }

console.log(strCount('Nanon', 'n'));
console.log(strCount('Hello', 'l'));
console.log(strCount('World', 'w'));
console.log(strCount('aaaaackaaaaack', 'a'));


