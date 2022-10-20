/*
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

PREP
Parameters:
Given a number indicating a human age as the parameter

Results:
Return an array containing the respective age as [human years, cat years, dog years]

Examples:
If we were given (1) -> should return [1,15,15]
                 (2) -> should return [2,24,24]
                 (10) -> should return [10,56,64]

Pseudocodes:
Make a function that takes a number as the parameter
convert the human age to cat years
convert the human age to dog years
return the result as array [humanYears, catYears, dogYears]
*/

let humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 0;
    let dogYears = 0;

    if (humanYears > 1) {
        catYears = 15 + 9 + (humanYears - 2) * 4;
        dogYears = 15 + 9 + (humanYears - 2) * 5;
    } else {
        catYears = 15;
        dogYears = 15;
    }

    return [humanYears,catYears,dogYears];
}

console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(2));
console.log(humanYearsCatYearsDogYears(5));
console.log(humanYearsCatYearsDogYears(10));

