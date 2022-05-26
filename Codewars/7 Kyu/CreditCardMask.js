/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"

PREP
Parameters:
Given a string

Results: 
Change all but the last four characters into '#'

Examples:
If we were given "4556364607935616" -> return "############5616"
                 "64607935616" -> return "#######5616"
                 "Skippy" -> return "##ippy"

Pseudocode:
Turn the string into an array
Map the array
Conditionals
*/

function maskify(cc) {
    let arr = cc.split('');
    return arr.map((val, i) => i < arr.length - 4 ? '#' : val).join('');
}

console.log(maskify("1234343"));
console.log(maskify("4556364607935616"));
console.log(maskify("1"));
console.log(maskify(""));
console.log(maskify("Skippy"));


//Alternative solution
//Use Regular Expression
// function maskify(cc) {
//     return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
// }
