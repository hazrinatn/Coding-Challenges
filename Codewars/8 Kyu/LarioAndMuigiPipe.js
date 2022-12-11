/*
Issue
Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

Task
Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example
Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

PREP
Parameters:
Given an array/list of integers

Results:
Return an array so that the values increment by 1 for each index, sorted from the lowest to the highest

Examples:
If we were given [1,2,3,5,6,8,9] -> return [1,2,3,4,5,6,7,8,9]
                 [6,9] -> return [6,7,8,9]
                 [-1,4] -> return [-1,0,1,2,3,4]

Pseudocodes:
Make a function that takes an array as the parameter
Create an empty array
For loop
Increment by 1
Push to the array
Return the result array
*/ 

const pipefix = (numbers) => {
    let res = []
    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
        res.push(i)
    }
    return res
}

console.log(pipefix([1,2,3,5,6,8,9]));
console.log(pipefix([6,9]));
console.log(pipefix([-1,4]));
