// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

//P: Given 2 numbers.
//R: Return true if one of the number is even and one is odd, otherwise false.
//E: If we were given (2, 2) -> return false
//                    (3, 8) -> return true
//                    (5, 5) -> return false
//P: Make a function that takes 2 numbers as the parameters
//conditionals
function oppositesAttract(petal1, petal2) {
    if (petal1 % 2 == 0 && petal2 % 2 !== 0) {
        return true
    } else if (petal1 % 2 !== 0 && petal2 % 2 == 0) {
        return true
    } else {
        return false
    }
}

console.log(oppositesAttract(2,2));
console.log(oppositesAttract(3,8));
console.log(oppositesAttract(4,7));
console.log(oppositesAttract(5,5));

//Alternative Solution
// function lovefunc(flower1, flower2){
//     return flower1 % 2 !== flower2 % 2;
// }
