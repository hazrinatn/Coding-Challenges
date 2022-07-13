/*
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.

PREP
Paramaters:
Given a string of traffic light.

Results:
Return the next color of the given light.

Examples:
If we were given "green" -> return "yellow"
                 "yellow" -> return "red"
                 "red" -> return "green"

Pseudocode:
Make a function that takes a string as the parameter
Conditionals
*/

function updateLight(light) {
    if (light === "green") {
        return "yellow"
    } else if (light === "yellow") {
        return "red"
    } else if (light === "red") {
        return "green"
    }
}

console.log(updateLight("green"));
console.log(updateLight("yellow"));
console.log(updateLight("red"));
