/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

Example 1:
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

Example 2:
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
 

Constraints:
1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6

PREP
Parameter: 
Given an array of integers

Results:
Return running sum of the array

Examples:
If we were given [1,1,1,1,1] -> [1,2,3,4,5]
                 [3,1,2,10,1] -> [3,4,6,16,17]
                 [1,2,3,4] -> [1,3,6,10]

Pseudocode:
Make a function that takes an array as the parameter
Create an empty array to contain the previous elements
Create an empty array to contain the result
For loop, 
push the current number to the prev array
sum the current number with the sum of prev array and substract with the current number
push the result to the result array
return the result array
*/ 

const runningSum = function(nums) {
    let res = []
    let prev = []
    for (let i = 0; i < nums.length; i++) {
        prev.push(nums[i])
        res.push(nums[i] + prev.reduce((a,b) => a + b, 0) - nums[i])
    }
    return res
}

console.log(runningSum([3,1,2,10,1]));
console.log(runningSum([1,1,1,1]));
console.log(runningSum([6,5,4,3,2,1]));

