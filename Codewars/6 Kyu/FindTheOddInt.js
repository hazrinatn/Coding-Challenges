/*
PROBLEM:
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


PREP
Parameters:
array of integers, can be positive, can be negative

Results:
Return the integer that appears an odd number of times

Examples:
If we were given [8,9,9,7,7] -> should return 8 and because it occurs 1 time
              [6] -> should return 6 because it occurs 1 time
              [4,4,9,9,5,4,5,5,5] -> should return 4  because it occurs 3 times

Pseudocode:
sort the array

*/

function findOdd(arr) {
    return arr.find((item) => arr.filter(el => el == item).length % 2)
}

console.log(findOdd([6,7,7,5,5,5,5]));

/*
The solution takes advantage of the condition that there will always be one odd number in the array.

1. The find method is called on the array. 
The find method returns the first element which meets the condition set in the function.

The condition for the find method in this solution is set as the filter method. 
 
2. The filter method creates an array of ALL elements that meet the condition set in the function.

For each element in the array, the find method will take that element as ITEM and then the filter will return an array of all elements in the array that are equal to ITEM.

Then the length of the returned filtered array is found. The length refers to the number of times the ITEM is in the array. If the length is odd, length % 2 will return 1 which is a truthy value.

The first ITEM that gets this truthy value will be returned by the find method.
*/ 



//Alternative solution
// function oddInt(arr) {
//     let sorted = arr.sort((a,b) => a - b);
//     return sorted.reduce((a,b) => b - a);
// }

// console.log(oddInt([4,4,9,9,5,4,5,5,5]));
// console.log(oddInt([6,7,7,5,5,5,5]));
