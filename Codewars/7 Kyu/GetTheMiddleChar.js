// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

// #Input
// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output
// The middle character(s) of the word represented as a string.


//P: Given a string.
//R: Return the middle character if the string length is odd, otherwise return the 2 middle characters.
//E: If we were given the "Hello" -> return "l"
//                        "Abracadabra" -> return "a"
//                        "Ball" -> return "al"
//P: Make a function that takes a string as the parameter
//declare new array variable
//loop the string
//conditionals, push
function getMiddle(str) {
    let arr = [];
    if(str.length % 2 !== 0) {
        let midOdd = Math.floor(str.length/2);
        arr.push(str[midOdd]);
    } else {
        let mid = str.length/2;
        arr.push(str[mid-1], str[mid]);
    }
    return arr.join('');
}

console.log(getMiddle("Ball")); // should return "al"
console.log(getMiddle("Trackers")); // should return "ck"
console.log(getMiddle("Claim")); // should return "a"
console.log(getMiddle("Saved")); // should return "v"



