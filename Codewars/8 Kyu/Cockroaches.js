/*
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

PREP
Parameters:
Given a positive number (speed in km/hour). Can be 0.

Results:
Convert the number to cm/sec and round the number.

Examples:
If we were given 1.08 -> should return 30
                 1.09 -> 30
                 0 -> 0

Pseudocode:
Make a function that takes a number as the parameter
Convert the number 
Round down the result
Return the result
*/

function cockroachSpeed(s) {
    return Math.floor(s * 100000/3600)
}

console.log(cockroachSpeed(1.08));
console.log(cockroachSpeed(1.09));
console.log(cockroachSpeed(0));

