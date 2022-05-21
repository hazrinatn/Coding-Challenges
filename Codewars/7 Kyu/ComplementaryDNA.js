/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

dnaStrand []        `shouldBe` []
dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

PREP
Parameters:
Given a string containing letters A, T, G, or C

Results:
Return the complementary of the letters. A and T are complements. C and G are complements of each other.

Example:
If we were given "ATTGC" -> return "TAACG"
                 "GTAT" -> return "CATA"
                 "CC" -> return "GG"

Pseudocode:
Make a function that takes a string as the parameter
Split the string
Declare an empty array
Loop through the array
Conditionals
Push the complement to the new array
Convert the array into a string
Return the new string
*/

function dnaStrand(str) {
    let split = str.split('')
    let newArr = [];
    for (let i = 0; i < split.length; i++) {
        if (split[i] == 'A') {
            newArr.push('T')
        } else if (split[i] == 'T') {
            newArr.push('A')
        } else if (split[i] == 'G') {
            newArr.push('C')
        } else if (split[i] == 'C') {
            newArr.push('G')
        }
    }

    return newArr.join('');
}

console.log(dnaStrand("ATTGC"));
console.log(dnaStrand("GTAT"));
console.log(dnaStrand("CC"));

//Alternative solution:

// let pairs = {'A':'T','T':'A','C':'G','G':'C'};
// function DNAStrand(dna){
//   return dna.split('').map(function(v){ return pairs[v] }).join('');
// }
