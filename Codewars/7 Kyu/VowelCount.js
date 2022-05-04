// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//P: Given a strimg. Only lower case letters and/or spaces. Can it be empty?
//R: Return the count of vowels in the string.
//E: If we were given "sometimes" -> return 4
//                    "et lux tenebris lucet" -> return 7
//                    "abracadabra" -> 5
//P: Make a function that takes a string as the parameter
//loop through it
//conditionals
function getCount(str) {
    let vowelsCount = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
        vowelsCount += 1;
      }
    }  
    return vowelsCount;
}

console.log(getCount("sometimes")); // should return 4
console.log(getCount("et lux tenebris lucet")); // should return 7
console.log(getCount("abracadabra")); // should return 5


