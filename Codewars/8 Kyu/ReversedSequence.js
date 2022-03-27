// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

//P: Given a number. Always greater than 0
//R: Return an array of integers from the number to 1.
//E: If we were given n = 7 -> return [7, 6, 5, 4, 3, 2, 1]
//                    n = 3 -> return [3, 2, 1]
//                    n = 4 -> return [4, 3, 2, 1]
//P: Make a function that takes a number as the parameter
//loop
function reversedSeq (n) {
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.unshift(i)
    }
    return arr
}

console.log(reversedSeq(7)); // should return [7, 6, 5, 4, 3, 2, 1]
console.log(reversedSeq(3)); // should return [3, 2, 1]
console.log(reversedSeq(4)); // should return [4, 3, 2, 1]


//Alternative solution
// const reverseSeq = n => {
//     let arr = [];
//       for (let i=n; i>0; i--) {
//         arr.push(i);
//         } return arr;
// };