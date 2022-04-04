// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

//P: Given array A, and random value X. Want to see if A has X in it. A can have numbers, strings. X can be a number or a string. Is it ever empty? Undefined? What do we do about special characters?
//R: True if x is in a, false if x is not. BUT TRUE, FALSE (boolean)
//E: Given [1,2,3] as A and 4 as X, should return FALSE
//   Given [7,6,3,2] as A and 6 as X. should return TRUE
//   Given [] as A and 5 as X, should return FALSE
//   Given ['apple', 'egg', 1] as A and 'egg' as X, should return TRUE
//P: Make a function that takes in two parameters: an array, and a random number/string.
function itemInArray(arr, item) {
    //look through the array and see if there are any elements that match num.
    return arr.includes(item)
    //conditional: if they do, return TRUE else, return FALSE
}

console.log(itemInArray(['apple', 'egg', 1], 'egg')) //should return TRUE
console.log(itemInArray(['apple', 'egg', 1], 'pinapple')) //should return FALSE
console.log(itemInArray([4,9,1], 4)) //should return TRUE