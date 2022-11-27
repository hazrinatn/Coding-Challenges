/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

PREP
Parameters:
Given a string

Results:
Return the reverse of each word in the string

Examples:
If we were given ('The quick brown fox jumps over the lazy dog.') -> 'ehT kciuq nworb xof spmuj revo eht yzal .god'
                 ('double  spaced  words') -> 'elbuod  decaps  sdrow'
                 ('apple') -> 'elppa'

Psedocodes:
Make a function that takes a string as the parameter
Split the string
Create an empty array
For loop
split each word into each letter then reverse it then join it again
Push the result to the new array
Join the result
Return the result
*/ 

function reverseWords(str) {
    let words = str.split(' ')
    console.log(words);
    let res = [];
    for (let i = 0; i < words.length; i++) {
        res.push(words[i].split('').reverse().join(''))
    }
    return res.join(' ');
}

// Alternative solution
// function reverseWords(str) {
//     return str.split("").reverse().join("").split(" ").reverse().join(" ");
// }

console.log(reverseWords('apple'));
console.log(reverseWords('red apple'));
console.log(reverseWords('double  spaced  words'));
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
