/*
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.

PREP
Parameters:
Given an array of strings

Results:
Return an array that contain strings that exactly have 4 characters

Examples:
If we were given ["Ryan", "Kieran", "Mark"] -> return ["Ryan", "Mark"]
                 ["Justin", "Roby", "Ken", "Xiao", "Kyla"] -> return ["Roby", "Xiao", "Kyla"]
                 ["Tom", "Sam", "Dave"] -> return ["Dave"]

Pseudocode:
Make a function that takes an array as the parameter
Filter the strings that have the length of 4
Return the result
*/

function friend(names) {
    return names.filter(name => name.length === 4)
}

console.log(friend(["Tom", "Sam", "Dave"])); // [ 'Dave' ]
console.log(friend(["Justin", "Roby", "Ken", "Xiao", "Kyla"])); // [ 'Roby', 'Xiao', 'Kyla' ]
console.log(friend(["Ryan", "Kieran", "Mark"])); // [ 'Ryan', 'Mark' ]
