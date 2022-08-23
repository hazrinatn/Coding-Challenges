/*
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

PREP:
Parameters:
Given a number of petals, positive number

Returns:
If 1 returns "I love you"
   2 returns "a little"
   3 returns "a lot"
   4 returns "passionately"
   5 returns "madly"
   6 returns "not at all"
   back to the first phrase again and so on

Examples:
If we were given 7 -> returns "I love you"
                 4 -> returns "passionately"
                 11 -> returns "madly"

Pseudocode:
Make a function that takes a number as the parameter
Conditionals
Return results
*/

function howMuchILoveYou(nbPetals) {
    if (nbPetals === 1 || nbPetals % 6 === 1) {
        return "I love you"
    } else if (nbPetals === 2 || nbPetals % 6 === 2) {
        return "a little"
    } else if (nbPetals === 3 || nbPetals % 6 === 3) {
        return "a lot"
    } else if (nbPetals === 4 || nbPetals % 6 === 4) {
        return "passionately"
    } else if (nbPetals === 5 || nbPetals % 6 === 5) {
        return "madly"
    } else if (nbPetals === 6 || nbPetals % 6 === 0) {
        return "not at all"
    }
}

console.log(howMuchILoveYou(7));
console.log(howMuchILoveYou(23));
console.log(howMuchILoveYou(9));
console.log(howMuchILoveYou(12));


