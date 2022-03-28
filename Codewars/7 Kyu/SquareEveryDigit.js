// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

//P: Given a number
//R: Return the square of every digit of the number and concatenate them
//E: If we were given 2232 -> return 4494
//                    15678 -> return 125364964
//                    349 -> 91681
//P: Make a function that takes a number as the parameter
function square(num) {
    let split = num.toString().split('').map(x => x ** 2);
    return Number(split.join(''));
}

console.log(square(45667)); // should return 1625363649
console.log(square(15678)); // should return 125364964
console.log(square(349)); // should return 91681
console.log(square(2232)); // should return 4494

