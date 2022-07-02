/*
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

PREP
Parameters: 
Given 3 integers from 0 to 100 as the parameter

Results:
Calculate the average of the 3 numbers and teturn the appropriate grade based on the number:
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'

Examples:
If we were given (95,90,93) -> return 'A'
                 (70,70,100) -> return 'B'
                 (70,70,70) -> return 'C'
                 (65,70,59) -> return 'D'
                 (44,55,52) -> return 'F'

Pseudocode:
Make a function that takes 3 numbers as the parameters
Calculate the average
Conditionals
Return the result
*/

function getGrade(s1, s2, s3) {
    let avg = (s1+s2+s3) / 3
    if (avg >= 90 && avg <= 100) {
        return 'A'
    } else if (avg >= 80 && avg < 90) {
        return 'B'
    } else if (avg >= 70 && avg < 80) {
        return 'C'
    } else if (avg >= 60 && avg < 70) {
        return 'D'
    } else if (avg >= 0 && avg < 60) {
        return 'F'
    }
}

console.log(getGrade(95,90,93));
console.log(getGrade(70,70,100));
console.log(getGrade(70,70,70));
console.log(getGrade(65,70,59));
console.log(getGrade(44,55,52));


//Alternative solution
// function getGrade (s1, s2, s3) {
//     let avg = (s1+s2+s3)/3;
//     if (avg < 60)  return "F";
//       else if (avg < 70) return "D";
//       else if (avg < 80) return "C";
//       else if (avg < 90) return "B";
//       else return "A";
// }