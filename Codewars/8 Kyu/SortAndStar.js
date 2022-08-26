/*
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

PREP
Parameters:
Given an array of strings

Returns:
Sort the strings alphabetically (case-sensitive), then return the first value and add "***" between each character

Examples:
If we were given ['mic', 'check', 'one', 'two'] -> returns 'c***h***e***c***k'
                 ['want', 'to', 'go', 'to', 'Thailand'] -> 'T***h***a***i***l***a***n***d***'

Pseudocodes:
Make a function that takes an array as the parameter
Sort the array
Split the first value of the array and join it
Return the result
*/ 

function twoSort(s) {
    let sort = s.sort()
    return sort[0].split('').join('***')
}

console.log(twoSort(['want', 'to', 'go', 'to', 'Thailand'])); // T***h***a***i***l***a***n***d
console.log(twoSort(['mic', 'check', 'one', 'two'])); // c***h***e***c***k
console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])); // b***i***t***c***o***i***n

