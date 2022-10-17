/*
In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

If you can, try writing it in one line of code.

PREP
Parameters:
Given 2 array of integers. Each array consisting of 3 positive numbers representing the dimensions of cuboids.

Results:
Calculate the volume eadch cuboid and calculate the difference between those cuboids.

Examples:
If we were given [3, 2, 5] and [1, 4, 4] -> should return 14
                 [9, 7, 2] and [5, 2, 2] -> should return 106
                 [11, 2, 5] and[1, 10, 8]-> should return 30 

Pseudocodes:
Make a function that takes 2 array of numbers as the parameters
Multiply numbers in each array
Substract the result
return the absolute result
*/

function findDifference(a, b) {
    let volOfA = a.reduce((x,y) => x*y, 1)
    let volOfB = b.reduce((x,y) => x*y, 1)
    return Math.abs(volOfA - volOfB)
}

console.log(findDifference([3, 2, 5], [1, 4, 4]));
console.log(findDifference([9, 7, 2], [5, 2, 2]));
console.log(findDifference([11, 2, 5], [1, 10, 8]));
