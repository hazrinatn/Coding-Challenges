/*
Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null.

The array will always have at least 2 elements and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!


Can you write a solution that will return null for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test.)

PREP
Parameters:
Given an array of at least 2 numbers can be positive or negative.

Results:
Return the first non-consecutive number. Return null if the numbers are all consecutive

Examples:
If we were given [1,2,3,7,8,10] -> return 7
                 [-6,-5,-4,-2,0,1] -> return 15
                 [1,2,3,4,5,6] -> return null
                 [ ] -> return null
                 [1] -> return null

Pseudocode:
Make a function that takes an array as the parameter
Loop through the array
Chec if the next number isn't the previous number + 1
Return the next number
Otherwise return null
*/

function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i+1] !== arr[i] + 1) {
            return arr[i + 1]
        } 
    }
    return null
}


/*
function firstNonConsecutive(arr) {
    let newArr = [];
    if (arr.length > 1) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] - arr[i-1] > 1) {
                newArr.push(arr[i])
            }
        }
        if (newArr.length < 1) {
            return null;
        } else {
            return newArr[0];
        }
    } else {
        return null;
    }
}
*/
console.log(firstNonConsecutive([1,2,3,5,7,8]));
console.log(firstNonConsecutive([-6,-5,-4,-2,0,1]));
console.log(firstNonConsecutive([1,2,3,4,5,6]));

