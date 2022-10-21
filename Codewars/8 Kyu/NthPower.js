/*
You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

Let's look at a few examples:

array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

PREP
Parameters:
Given an array of integers and a number N. All are positives.

Results:
Return the N-th power of number with the N index. Return -1 if N is outside the array.

Examples:
If we were given [1, 2, 3, 4],2 -> should return 3^2 = 9
                 [1, 2, 3],3 -> should return -1
                 [1,1,1,1,1,1,1,1,1,2], 9 -> should return 2^9 = 512

Pseudocodes:
Make a function that takes an array and a number as parameters
if n > array length - 1, return -1
else return array[n] ** n
*/

function index(array, n){
    if (n > array.length-1) {
        return -1
    } else {
        return array[n] ** n
    }
}

//More concise solution
// function index(array, n){
//     return array[n] ** n || -1
// }

console.log(index([1, 2, 3, 4],2));
console.log(index([1, 2, 3],3));
console.log(index([1,1,1,1,1,1,1,1,1,2],9));

