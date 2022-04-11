//Problem:
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
//348597 => [7,9,5,8,4,3]
// 0 => [0]

//P: Are you ever given an empty array? What then? Are you always given digits?
//R: Whatever number was given, it is now split up into an array and the order of the numbers is reversed.
//E: If we were given 9238 => [8,3,2,9]
//   If we were given 330 => [0,3,3]
//                    undefined => not a number
//P: 
//Make a function that takes in a number
function reverseArray(num) {
    //Make number a string, split that, and reverse the array
    let numArray = num.toString().split('').reverse()
    //make array integers again and return
    return numArray.map(e => parseInt(e)) 
}

console.log(reverseArray(9238)) // should return [8,3,2,9]
