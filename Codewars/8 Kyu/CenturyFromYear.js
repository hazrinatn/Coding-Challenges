// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

//P: Given a year
//R: Return the century of the year
//E: If we were given 101 -> return 2
//                    1996 -> return 20
//                    2000 -> 20
//P: Make a function that takes a number as the parameter
function century(year) {
    if (year < 100) {
        return Math.floor(100/year)
    } else {
        return Math.ceil(year/100)
    }
}

console.log(century(101)); // should return 2
console.log(century(2000)); // should return 20
console.log(century(1996)); // should return 20
console.log(century(1705)); // should return 18
console.log(century(1601)); // should return 17
console.log(century(89)); // should return 1




