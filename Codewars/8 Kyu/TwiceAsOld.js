/*
Your function takes two arguments:
1. current father's age (years)
2. current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

PREP
Parameters:
Given 2 numbers (father's age and son's age) as the parameter

Results:
Calculate in how many years the father's age will be/was twice as old as his son's

Examples:
If we were given (36,7) -> 22
                 (55,30) -> 5
                 (42,21) -> 0
                 (22,1) -> 20

Pseudocode:
Make a function that takes 2 numbers as parameters
Multiply the son's age with 2
If the result is higher than the father's age, substract the result with the father's age
Otherwise substract the father's age with the result
Return the final result of calculation
*/

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//     let twice = sonYearsOld * 2;
//     if (twice > dadYearsOld) {
//         return twice - dadYearsOld;
//     } else {
//         return dadYearsOld - twice;
//     }
// }

//OR 
//Use Math.abs
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

console.log(twiceAsOld(42,21)); // should return 0
console.log(twiceAsOld(36,7)); // should return 22
console.log(twiceAsOld(55,30)); // should return 5
console.log(twiceAsOld(22,1)); // should return 20

