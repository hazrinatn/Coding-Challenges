/*
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'

PREP
Parameters:
Given 2 strings: name and owner

Results:
If name equals to owner, return 'Hello boss', else return 'Hello guest'

Example:
If we were given ('Daniel', 'Daniel') -> return 'Hello boss'
                 ('Greg', 'Daniel') -> return 'Hello guest'

Pseudocode:
Make a function that takes 2 strings as the parameters
Conditionals
Return the greeting
*/

function greet(name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest'
}

console.log(greet('Daniel', 'Daniel'));
console.log(greet('Greg', 'Daniel'));
