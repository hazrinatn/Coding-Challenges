// Will you make it?

// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.

//P: Given 3 numbers: distance to pump, mile per gallon, and fuel left. 
//R: Return true if the fuel is enough to go to the pump, otherwise false.
//E: If we were given 50, 25, 2  -> return true (50 == 25 * 2)
//                    50, 35, 2 -> return true (50 < 35 * 2)
//                    100, 25, 3 -> return false (100 > 25 * 3)
//P: Make a function that takes 3 numbers as the parameters
//conditionals
function zeroFuel(distanceToPump, mpg, fuelLeft) {
    return (distanceToPump <= mpg * fuelLeft)
}

console.log(zeroFuel(50, 35, 2));
console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 25, 3));

