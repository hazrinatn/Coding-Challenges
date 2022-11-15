/*
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

Example 1:
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.

Example 2:
Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.

Example 3:
Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17
 
Constraints:
m == accounts.length
n == accounts[i].length
1 <= m, n <= 50
1 <= accounts[i][j] <= 100

PREP
Parameters:
Given arrays of integer inside of an array

Results:
Return the highest amount of the sum of the inner arrays

Examples:
If we were given [[1,2,3],[3,2,1]] -> should return 6
                 [[1,5],[7,3],[3,5]] -> should return 10
                 [[2,8,7],[7,1,3],[1,9,5]] -> should return 17

Pseudocodes:
Make a function that takes an array as the parameter
Create an empty array for summation results
For loop
reduce each inner array and push to the result array
Determine the highest number using Math.max
Return the result
*/ 

const maximumWealth = function(accounts) {
    let res = []
    for (let i = 0; i < accounts.length; i++) {
        res.push(accounts[i].reduce((a,b) => a+b,0))
    }
    return Math.max(...res)
}

console.log(maximumWealth([[1,2,3],[3,2,1]]));
console.log(maximumWealth([[1,5],[7,3],[3,5]]));
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]));
