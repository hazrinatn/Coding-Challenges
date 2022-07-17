/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') # returns true
solution('abc', 'd') # returns false

PREP
Parameters:
Given 2 strings as parameters

Results:
Return true if the first string ends with the second string

Examples:
If we were given ('abc', 'bc') -> return true
                 ('abc', 'abc') -> return true
                 ('abc', 'd') -> false
                 ('abc', '') -> true
                 ('hello', 'ello') -> true
                 ('hello', 'hell') -> false

Pseudocode:
Make a function that takes 2 strings as parameters
Return true if the 1st string ends with the 2nd string
Otherwise return false
*/

function solution (str, end) {
    return str.endsWith(end)
}

console.log(solution('abc', 'bc'));
console.log(solution('abc', 'd'));
console.log(solution('hello', 'ello'));
console.log(solution('hello', 'hell'));
console.log(solution('samurai', 'ra'));


