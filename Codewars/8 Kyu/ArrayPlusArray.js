// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

//P: Given 2 arrays of numbers. Only integers. Can it be negatives?
//R: Return the sum of all the numbers from the 2 arrays.
//E: If we were given [1, 2, 3, 4], [4, 5, 9, 7] -> return 35
//                    [-2, 4, 2, 3], [6, 3, -1] -> return 15
//                    [2, -3], [9, 7, 4] -> 19
//P: Make a function that takes 2 arrays as the parameter
//use reduce method
function sumArr(arr1, arr2) {
    return arr1.reduce((a,b) => a + b) + arr2.reduce((x,y) => x + y)
}

console.log(sumArr([1, 2, 3, 4], [4, 5, 9, 7]));
console.log(sumArr([-2, 4, 2, 3], [6, 3, -1]));
console.log(sumArr([2, -3], [9, 7, 4]));

//Alternative solution
// function arrayPlusArray(arr1, arr2) {
//     return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
// }
