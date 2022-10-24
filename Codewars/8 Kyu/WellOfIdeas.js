/*
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

PREP
Parameters:
Given an array of 'good' and 'bad' strings

Results:
Return 'Publish!' if there are one or two good ideas, 'I smell a series!' if there are more than 2 good ideas, and 'Fail' if there are no good ideas

Examples:
If we were given ['bad', 'bad', 'bad'] -> should return 'Fail!'
                 ['good', 'bad', 'bad', 'bad', 'bad'] -> 'Publish!'
                 ['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'] -> 'I smell a series!'

Pseudocodes:
Make a function that takes an array as the parameter
Filter the array
If the length og the filtered array is 1 or 2 return 'Publish!', if more than 2 return 'I smell a series!', otherwise return 'Fail!'
*/

function well(x){
    let filtered = x.filter(idea => idea == 'good')
    if (filtered.length > 2) {
        return 'I smell a series!'
    } else if (filtered.length > 0 && filtered.length <= 2) {
        return 'Publish!'
    } else {
        return 'Fail!'
    }
}

console.log(well(['bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'good']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));




