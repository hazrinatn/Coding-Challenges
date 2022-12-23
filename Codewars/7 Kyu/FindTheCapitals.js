/*
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

PREP
Parameters:
Given a string

Results:
Return the indexes of all capital letters in the string

Examples:
If we were given "EXample" -> return [0,1]
                 "AppLE" -> return [0,3,4]

Pseudocodes:
Make a function that takes a string as the parameter
Split the string
Create an empty array
For loop
Conditionals
Push the index to the array
Return the array
*/ 

const capitals = (word) => {
    let split = word.split('')
    let res = []
    for (let i = 0; i < split.length; i++) {
        if (split[i] == "A" || split[i] == "B" || split[i] == "C" || split[i] == "D" || split[i] == "E" || split[i] == "F" || split[i] == "G" || split[i] == "H" || split[i] == "I" || split[i] == "J" || split[i] == "K" || split[i] == "L" || split[i] == "M" || split[i] == "N" || split[i] == "O" || split[i] == "P" || split[i] == "Q" || split[i] == "R" || split[i] == "S" || split[i] == "T" || split[i] == "U" || split[i] == "V" || split[i] == "W" || split[i] == "X" || split[i] == "Y" || split[i] == "Z") {
            res.push(i)
        }
    }
    return res
}

console.log(capitals('CodEWaRs'));
console.log(capitals('ExamPle'));
console.log(capitals('appLE'));
