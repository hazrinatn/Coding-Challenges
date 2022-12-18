/*
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.

PREP
Parameters:
Given an array of integers, can be positive, can be negative, can be 0

Results:
Remove duplicates from the array and return it

Examples:
If we were given [1,3,5,5] -> return [1,3,5]
                 [12,22,18,18,12] -> return [12,22,18]
                 [-4,0,0,4,5] -> [-4,0,4,5]

Pseudocodes:
Make a function that takes an array as the parameter
Make a new Set
Turn the set into an array
Return the array
*/ 

const distinct = (a) => {
    return [... new Set(a)]
}


// Alternative solution
// const distinct = a => a.filter((item, index) => a.indexOf(item) === index);

console.log(distinct([1,3,5,5]));
console.log(distinct([12,22,18,18,12]));
console.log(distinct([-4,0,0,4,5]));
