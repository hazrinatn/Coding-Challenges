/*
Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

Task
Implement a function named

generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
generateRange(1, 10, 3) // should return array of [1,4,7,10]
Note
min < max
step > 0
the range does not HAVE to include max (depending on the step)

PREP
Parameters:
Given 3 numbers (min, max, step) as parameters

Results:
Return an array of integers ranges from min to max with the step

Examples:
If we were given (2, 10, 2) -> return [2,4,6,8,10]
                 (1, 7, 3) -> return [1,4,7]
                 (3, 8, 5) -> return [3,8]

Pseudocodes:
Make a function that takes 3 numbers as parameters
Create an empty array
For loop 
Push numbers to the array
Return the array
*/ 

const generateRange = (min,max,step) => {
    let res = []
    for (let i = min; i <= max; i+=step) {
        res.push(i)
    }
    return res
} 

console.log(generateRange(2, 10, 2));
console.log(generateRange(1, 7, 3));
console.log(generateRange(3, 8, 5));
