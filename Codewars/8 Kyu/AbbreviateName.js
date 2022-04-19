// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

//P: Given a string containing 2 words
//R: Return the initial of each words, in caps, and separated by dot
//E: If we were given "Richard Feynman" -> return R.F
//                    "Fyodor Dostoyevsky" -> return F.D
//                    "William So" -> return W.S
//P: Make a function that takes a string as the parameter
//Make all the letters uppercase
//Split the string
//Looping through
//conditionals
function initials(name) {
    return name.toUpperCase().split(" ").map(word => word[0]).join(".")    
}

console.log(initials("Richard Feynman")) // return R.F
console.log(initials("Fyodor Dostoyevsky")) // return F.D
console.log(initials("William So")) // return W.S


//Alternative solution
// function abbrevName(name){
//   let nameArray = name.split(" ");
//   return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }
