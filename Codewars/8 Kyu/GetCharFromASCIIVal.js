/*
Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

Example:

get_char(65)
should return:

'A'
For ASCII table, you can refer to http://www.asciitable.com/

PREP
Parameters:
Given a number

Results:
Return its ASCII value

Examples:
If we were given 58 -> return ':'
                 65 -> return 'A'
                 60 -> return '<'

Pseudocodes:
Make a function that takes a number as the parameter
use String.fromCharCode() method
return the value
*/ 

function getChar(c){
   return String.fromCharCode(c)
}

console.log(getChar(60));
console.log(getChar(58));
console.log(getChar(65));

