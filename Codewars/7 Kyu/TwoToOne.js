/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

PREP
Parameters:
Given 2 strings

Results:
Return a new string with the longest possible and sorted letters from both strings

Examples:
If we were given ("aretheyhere", "yestheyarehere") -> "aehrsty"
                 ("loopingisfunbutdangerous", "lessdangerousthancoding")-> "abcdefghilnoprstu"
                 ("inmanylanguages", "theresapairoffunctions") -> "acefghilmnoprstuy"


Pseudocodes:
Make a function that takes 2 strings as parameters
Turn the strings into array
Combine two strings
Create a new set
Sort the set
Return the result
*/ 

function longest(s1, s2) {
    let arr1 = s1.split('')
    let arr2 = s2.split('')
    let combined = arr1.concat(arr2)
    return [...new Set(combined)].sort().join('') 
}

// Alternative solution
// const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

console.log(longest("aaaaabbbbnnnn", "ccccceeeddd"));
console.log(longest("aretheyhere", "yestheyarehere"));
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
