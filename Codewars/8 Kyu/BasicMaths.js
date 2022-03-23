// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

//P: Given string, and 2 numbers
//R: Do basic mathematical operations based on the string and numbers given.
//E: If we were given ('+', 20, 2) -> return 22
//                    ('-', 15, 18) --> -3
//                    ('*', 6, 3) --> 18
//                    ('/', 49, 7) --> 7
//P: Make a function that takes string, and 2 numbers as parameters
function basicMaths(str, num1, num2) {
    if (str == "+") {
        return num1 + num2 
    } else if (str == "-") {
        return num1 - num2
    } else if (str == "*") {
        return num1 * num2
    } else if (str == "/") {
        return num1 / num2
    }
}

console.log(basicMaths('+', 20, 2)); // should return 22
console.log(basicMaths('-', 15, 18)); // should return -3
console.log(basicMaths('*', 6, 3)); // should return 18
console.log(basicMaths('/', 24, 2)); // should return 12
