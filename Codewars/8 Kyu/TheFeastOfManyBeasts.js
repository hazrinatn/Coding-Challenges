/*
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

PREP
Parameters:
Given 2 strings (beast and food) as parameters. Lowercases, at least 2 characters. Can contain hyphens and spaces, but not at the beginning or the end of the string. Can not contai numbers.

Results:
Return true if the first letter and last letter of the beast name and the food name are the same. Otherwise return false.

Examples:
If we were given ("great blue heron", "garlic naan") -> return true
                 ("chickadee", "chocolate cake") -> return true
                 ("brown bear", "bear claw") -> return false

Pseudocode:
Make a function that takes 2 strings as parameters
Compare the first letter and last letter of each strings
If the letters are the same, return true. Otherwise return false.
*/

function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
}
console.log(feast("great blue heron", "garlic naan")); // should return true
console.log(feast("chickadee", "chocolate cake")); // should return true
console.log(feast("brown bear", "bear claw")); // should return false

