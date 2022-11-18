/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

PREP
Parameters:
Given a string

Results:
Return the count of characters that occur more than once

Examples:
If we were given "abcde" -> 0
                 "aabbcde" -> 2
                 "aabBcde" -> 2
                 "aA11" -> 2
                 "ABBA" -> 2 
                 "Indivisibility" -> 1

Pseudocodes:
Make a function that takes a string as the parameter
Turn the string into lowercase, split, sort the string
Create 2 empty arrays
For loop the string
Push the each element to the first array
Conditionals
Push the result to the second array
Create new set from the second array
Return the length of the set
*/ 

const duplicateCount = (text) => {
    let low = text.toLowerCase().split('').sort()
    let prev = []
    let res = []

    for (let i = 0; i < low.length; i++) {
        prev.push(low[i])
        if (low[i+1] == prev[i]) {
            res.push(low[i+1])
        }
    }

    let set = [...new Set(res)]
    return set.length
    
}

console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("ABBA"));
console.log(duplicateCount("aA11"));
console.log(duplicateCount("Indivisibility"));

