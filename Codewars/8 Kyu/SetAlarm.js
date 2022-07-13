/*
Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true

PREP
Parameters:
Given 2 booleans: employed and vacation status

Results:
Return true if the employed status is true and vacation status is false. Otherwise return false.

Examples:
If we were given (true, true) -> return false
                 (false, true) -> return false
                 (false, false) -> return false
                 (true, false) -> return true

Pseudocode:
Make a function that takes 2 booleans as the parameters
Conditionals
*/
 
function setAlarm(employed, vacation) {
    return employed === true && vacation === false
}

console.log(setAlarm(true, false));
console.log(setAlarm(true, true));
console.log(setAlarm(false, false));
console.log(setAlarm(false, true));


//Alternative solution
// const setAlarm = (employed, vacation) => employed && !vacation;


