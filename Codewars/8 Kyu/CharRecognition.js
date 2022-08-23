/*
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.

PREP
Parameters:
Given a string contain misinterpreted character as number

Returns:
Return the correct character: 5 -> S, 0 -> O, 1 -> I

Examples:
If we were given "L0ND0N" -> return "LONDON"
                 "DUBL1N" -> return "DUBLIN"
                 "51NGAP0RE" -> return "SINGAPORE"

Pseudocode:
Make a function that takes a string as the parameter
Replace the character with the correct ones
Return the result
*/

function correct(string) {
    return string.replaceAll('5', 'S').replaceAll('0', 'O').replaceAll('1', 'I')
}

console.log(correct("51NGAP0RE"));
console.log(correct("THA1LAND"));
console.log(correct("L0ND0N"));
