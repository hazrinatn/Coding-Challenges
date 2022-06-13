/*
Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

PREP
Parameters: 
Given length, width, and height of a cuboid

Results:
Return the voume of the cuboid

Example:
If we were given 7,5,10 -> return 350 (7x3x10)
                 6,6,5 -> return 180
                 5,2.5,4 -> return 50

Pseudocode:
Make a function that takes 3 numbers as the parameters
multiply the numbers
Return the result
*/

function getVolumeOfCuboid(length, width, height) {
    return length * width * height;
}

console.log(getVolumeOfCuboid(7,5,10));
console.log(getVolumeOfCuboid(6,6,5));
console.log(getVolumeOfCuboid(5,2.5,4));
