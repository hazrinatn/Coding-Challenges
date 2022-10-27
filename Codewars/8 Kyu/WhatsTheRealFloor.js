/*
Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

Write a function that given a floor in the american system returns the floor in the european system.

With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level.

Examples
1  =>  0 
0  =>  0
5  =>  4
15  =>  13
-3  =>  -3

PREP
Parameters:
Given a number indicating a floor

Results:
Return the real number of floor

Examples:
If we were given 1  =>  0 
                 0 => 0
                 5 => 4
                 15 => 13
                 -3 => -3
                
Pseudocodes:
Make a function that takes a number as the parameters
Conditionals
*/ 

function getRealFloor(n) {
    if (n > 0 && n < 2) {
        return 0
    } else if (n > 1 && n < 13) {
        return n-1
    } else if (n > 13) {
        return n-2
    } else {
        return n
    }
}

// Alternative solution
// function getRealFloor(n) {
//     return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
// }

console.log(getRealFloor(0));
console.log(getRealFloor(1));
console.log(getRealFloor(-3));
console.log(getRealFloor(12));
console.log(getRealFloor(5));
console.log(getRealFloor(17));


