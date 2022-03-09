// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

//P: Given a string and a number (n).
//R: Repeat the string exactly n times.
//E: If we were given 3 and "N" -> return "NNN"
//                    7 and "Rain" -> return "RainRainRainRainRainRain"
//                    2 and "Yo" -> return "YoYo"
//P: Write a function that takes string and number as parameters
function repeatStr(n, str) {
    let a = [];
    for (let i = 0; i < n; i++) {
        a.push(str)
    }
    return a.join('')
}

console.log(repeatStr(3, "N")) // should return "NNN"
console.log(repeatStr(7, "Rain")) // should return "RainRainRainRainRainRain"
console.log(repeatStr(2, "Yo")) // should return "YoYo"

