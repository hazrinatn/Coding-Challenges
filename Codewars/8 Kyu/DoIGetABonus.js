/*
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).

PREP
Parameters:
Given 2 parameters: number and boolean

Results:
Multiply the number by 10 if the boolean is true, otherwise return the number.
Return the output and prefix it with '£'

Examples:
If we were given (10000, true) -> return '£100000'
                 (78, false) -> return '£78'
                 (2, true) -> return'£20'

Pseudocode:
Make a function that takes number and boolean as the parameters
If true multiply the number by 10, otherwise return the number
Add the prefix to result
Return the result
*/

function bonusTime(salary, bonus) {
    if (bonus === true) {
      return `£${salary * 10}`
    } else {
      return `£${salary}`
    }
}

console.log(bonusTime(10000, true));
console.log(bonusTime(78, false));
console.log(bonusTime(2, true));


