// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//P: Given a string. Is the string combination of uppercases and lowercases?
//R: Return the reverse of the string.
//E: If we were given 'donut' -> return 'tunod'
//                    'emperor' -> return 'rorepme'
//                    'Toys' -> return 'syoT'
//P: Write a function that takes a string as a parameter.
//Split each letter of the string
//Reverse the string
//Join the string
function reverseString(string) {
   return string.split('').reverse().join('')
}

console.log(reverseString('donut')) // should return 'tunod'
console.log(reverseString('emperor')) // should return 'rorepme'
console.log(reverseString('Toys')) // should return 'syoT'


