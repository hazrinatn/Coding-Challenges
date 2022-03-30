// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

//P: Given a string contains name.
//R: Return name + " plays banjo" if the name starts with "R/r", otherwise return name + " does not play banjo"
//E: If we were given "Rubus" -> return "Rubus plays banjo"
//                    "Pawat" -> return "Pawat does not play banjo"
//                    "Nanon" -> return "Nanon does not play banjo"
//P: Make a function that takes a string as the parameter
//turn the string into lowercases
//conditionals
function banjo(name) {
    if (name.toLowerCase().substring(0, 1) == "r") {
        return `${name} plays banjo`
    } else {
        return `${name} does not play banjo`
    }
}

console.log(banjo("Rubus")); // should return "Rubus plays banjo"
console.log(banjo("Pawat")); // should return "Pawat does not play banjo"
console.log(banjo("Nanon")); // should return "Nanon does not play banjo"
