/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}

 parameters:
 array of integers and integer

 Results:
 return indices of 2 numbers that they add up to target


 */
 var twoSum = function(nums, target) {
    let cont = []
    let res = []
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] < target) {
            cont.push(nums[i])  
        }
    }
    for (let j = 0; j <= cont.length; j++) {
        if (cont[j] + cont[j+1] == target) {
            res.push(j)
            res.push(j+1)
        }
    }
    return res
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));

