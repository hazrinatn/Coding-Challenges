/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

PREP:
Parameters:
Given a string containing multiple words

Results:
Return the length of the shortest word in the string

Example:
If we were given "bitcoin take over the world maybe who knows perhaps" -> return 3
                 "Let's travel abroad shall we" -> return 2
                 "they sing a song" -> return 1

Pseudocode:
split the string into array
map, turn each word into the length of the word
math.min to find the smallest number
*/

function findShort(s) {
    let split = s.split(" ");
    let length = split.map(word => word.length)
    return Math.min(...length);
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort("Let's travel abroad shall we"));
console.log(findShort("they sing a song"));
