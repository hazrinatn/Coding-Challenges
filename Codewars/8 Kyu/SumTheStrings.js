/*
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

PREP
Parameters:
Given 2 strings of integers as parameters

Results:
Return the sum of the strings

Examples:
If we were given "22", "2" -> should return "24"
                 "18", "12" -> should return "30"
                 "", "" -> should return "0"

Pseudocodes:
Make a function that takes 2 strings as parameters
Convert string to number
Sum the numbers
Return the sum in string format
*/

function sumStr(a,b) {
  let sum = Number(a) + Number(b)
  return String(sum);
}

console.log(sumStr("22", "2"));
console.log(sumStr("18", "12"));
console.log(sumStr("", ""));


