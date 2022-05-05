// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

//P: Given an array of numbers and a number.
//R: Return "True" if the number is higher than the average of numbers in the array, and "False" if it's the oppposite
//E: If we were given [5, 6, 7, 9], 8 -> return true because 8 is higher than ((6+6+7+9)/4) 7 
//                    [8, 8, 8], 7 -> return false because 7 is lower than 8
//                    [7, 7, 7, 7], 7 -> return false because the score is equal to the average
//P: Make a function that takes an array and a number as the parameter
//use reduce method to sum all the numbers in the array, then divide it by the array length
//use conditionals to compare the number with the average of the array
function howGood(arr, num) {
    let avg = arr.reduce((sum, x) => sum + x, 0)/arr.length;
    if (num > avg) {
        return true
    } else {
        return false
    }
}

console.log(howGood([5, 6, 7, 9], 8));// should return true
console.log(howGood([8, 8, 8], 7));// should return false
console.log(howGood([7, 7, 7, 7], 7));// should return false


//Alternative solution
// function betterThanAverage(classPoints, yourPoints) {
//     return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
// }