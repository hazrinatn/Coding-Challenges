// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

//P: Given a time
//R: Calculate the number of water based on the time and round it to the smallest value
//E: If we were given 3 -> return 1 (3*0.5)
//                    6.7 -> return 3 (6.7*0.5)
//                    12.7 -> return 6 (12.7*0.5)
//P: Make a function that takes a number as the parameter
function stayHidrated(time) {
    return Math.floor(time * 0.5)
}

console.log(stayHidrated(12.7)); // should return 6
console.log(stayHidrated(6.8)); // should return 3
console.log(stayHidrated(3)); // should return 1
