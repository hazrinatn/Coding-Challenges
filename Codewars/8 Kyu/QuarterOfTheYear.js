/*
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

PREP
Parameters:
Given an integer (month from 1 to 12)

Results:
Return which quarter of the year the month belongs as an integer number

Examples:
If we were given month 3 (March) -> return 1 (1st quarter)
                       5 (May) -> return 2 (2nd quarter)
                       8 (August) -> return 3 (3rd quarter)
                       10 (October) -> return 4 (4th quarter)

Pseudocode:
Make a function that takes a number as the parameter
If the number is 1-3 return 1
Else if the number is 4-6 return 2
Else if the number is 7-9 return 3
Else if the number is 10-12 return 4
*/

function quarterOf (month) {
    if (month < 4) {
        return 1
    } else if (month > 3 && month < 7) {
        return 2
    } else if (month > 6 && month < 10) {
        return 3
    } else if (month > 9 && month <= 12) {
        return 4
    }
}

console.log(quarterOf(3)); // 1
console.log(quarterOf(5)); // 2
console.log(quarterOf(8)); // 3
console.log(quarterOf(10)); // 4

//Alternative Solution
// const quarterOf = m => Math.ceil(m/3);
