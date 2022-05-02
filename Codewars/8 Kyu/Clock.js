// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:
// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

//P: Given, seconds, minutes, and hours.
//R: Return the time after midnight in miliseconds.
//E: If we were given h = 1, m = 1, s =1 -> return (1*60*60*1000) + (1*60*1000) + (1*1000) = 3.661.000
//P: Write a function that takes 3 numbers as parameters
function clock(h, m, s) {
    return (h*60*60*1000) + (m*60*1000) + (s*1000)
}

console.log(clock(1, 1, 1)); // should return 3.661.000
console.log(clock(2, 1, 1)); // should return 7.261.000
