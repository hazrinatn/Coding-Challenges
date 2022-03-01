// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//P: Given an integer. How about 0? How about negative numbers?
//R: Return 'Even' for even numbers or 'Odd' for odd numbers
//E: If we were given 111 -> return 'Odd'
//                    8888 -> return 'Even'
//                    0 -> return 'Even'
//                    -12345 -> return 'Odd'
//P: Write a function that takes number as a parameter
function evenOrOdd(num) {
    //write conditionals. Return 'even' when it's exactly divisible by 2, else return 'odd'
    return num % 2 === 0 ? 'Even' : 'Odd';
}

console.log(evenOrOdd(0)) // should return even
console.log(evenOrOdd(111)) // should return odd
console.log(evenOrOdd(8888)) // should return even
console.log(evenOrOdd(-12345)) // should return odd


