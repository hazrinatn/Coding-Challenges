/*
altERnaTIng cAsE <=> ALTerNAtiNG CaSe
altERnaTIng cAsE <=> ALTerNAtiNG CaSe
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
As usual, your function/method should be pure, i.e. it should not mutate the original string.

PREP
Parameters:
Given a string

Results:
Change the lowercase to uppercase and vice versa

Examples:
if we were given "thiS Is APPle" -> return "THIs iS appLE"
                 "NoT reAllY" -> return "nOt REaLLy"
                 "12345" -> return "12345"

Pseudocode:
Split the string into individual characters
Map through the splitted string
If the character is same with the character.toLowerCase(), make the character uppercase, otherwise make the character lowercase
Return the joined string
*/

String.prototype.toAlternatingCase = function () {
    return this.split('').map(char => char.toLowerCase() === char ? char.toUpperCase() : char.toLowerCase()).join('');
}

console.log("thiS Is APPle".toAlternatingCase());