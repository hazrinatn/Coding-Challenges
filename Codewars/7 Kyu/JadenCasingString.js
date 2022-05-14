// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


//P: given a string containing words
//R: Capitalize the first letter of each word
//E: If we were given "good evening folks" -> return "Good Evening Folks"
//                    "Be brave enough to suck at something new" -> return "Be Brave Enough To Suck At Something New"
//                    "How can mirrors be real if our eyes aren't real" -> return  "How Can Mirrors Be Real If Our Eyes Aren't Real"
//P: 
//turn the string into an array
//map, turn the first letter of the element to upper case
function jadenCased(str) {
    return str.split(' ').map(x => x.substring(0, 1).toUpperCase() + x.slice(1)).join(' ');
}

console.log(jadenCased("hello world"));
console.log(jadenCased("good evening folks"));
console.log(jadenCased("Be brave enough to suck at something new"));
console.log(jadenCased("How can mirrors be real if our eyes aren't real"));
