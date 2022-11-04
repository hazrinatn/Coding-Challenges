/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata

PREP
Parameters: 
Given a string

Results:
Remove the vowels of the string

Examples:
If we were given "hello"     -->  "hll"
                 "codewars"  -->  "cdwrs"
                 "nanon" --> "nnn"

Pseudocodes:
Make a function that takes a string as the parameter
For loop, conditionals
Return the results
*/ 

function shortcut (string) {
    let str = string.split('')
    let res = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] != 'a' && str[i] != 'A' && str[i] != 'e' && str[i] != 'E' && str[i] != 'i' && str[i] != 'I' && str[i] != 'u' && str[i] != 'U' && str[i] != 'o' && str[i] != 'O') {
            res.push(str[i])
        }
    }
    return res.join('')
}

// Alternative Solution using RegEx
// function shortcut(string){
//     return string.replace(/[aeiou]/g,'')
// }

console.log(shortcut("nanon"));
console.log(shortcut("HELLO"));
console.log(shortcut("world"));
