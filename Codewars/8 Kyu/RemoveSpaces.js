// Remove String Spaces
// Simple, remove the spaces from the string, then return the resultant string.

//P: Given a string, containing space(s)
//R: Return the string without the spaces
//E: If we were given "Hello World" -> return "HelloWorld"
//                    "Da ra ri" -> return "Darari"
//                    "Too cool for school" -> return "Toocoolforschool"
//P: Make a function that takes a string as the parameter
function removeSpaces(str) {
   return str.split(" ").join("")
}

console.log(removeSpaces("Hello World"));// should return "HelloWorld"
console.log(removeSpaces("Da ra ri"));// should return "Darari"
console.log(removeSpaces("Too cool for school"));// should return "Toocoolforschool"

