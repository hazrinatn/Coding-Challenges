/*
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17

PREP
Parameters:
Given 3 numbers

Results:
Return the sum of all those 3 numbers

Examples:
If we were given (43, 10, 5) -> return 58
                 (2, 5, 3) -> return 10
                 (0, 0, 0) -> return 0

Pseudocode:
Make a function that takes 3 numbers as parameters
Sum all of the numbers
Return the result
*/

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}

console.log(goals(2,5,3));
console.log(goals(43,10,5));
console.log(goals(0,50,0));
