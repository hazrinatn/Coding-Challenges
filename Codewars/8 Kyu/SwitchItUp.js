/*
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.

PREP
Parameters:
Given a number between 0-9

Results:
Return the number in words

Examples:
If we were given 1 -> return "One"
                 3 -> return "Three"
                 7 -> return "Seven"

Pseudocode:
Make a function that takes a number as the parameter
Conditionals using switch statements
Return the result
*/

function switchItUp(number){
    let words;
    switch (number) {
        case 0:
            words = "Zero"
            break;
        case 1:
            words = "One"
            break;
        case 2: 
            words = "Two"
            break;
        case 3:
            words = "Three"
            break;
        case 4:
            words = "Four"
            break;
        case 5:
            words = "Five"
            break;
        case 6: 
            words = "Six"
            break;
        case 7:
            words = "Seven"
            break;
        case 8:
            words = "Eight"
            break;
        case 9:
            words = "Nine"
            break;
    }
    return words;
}

console.log(switchItUp(1)); // should return "One"
console.log(switchItUp(5)); // should return "Five"
console.log(switchItUp(7)); // should return "Seven"

//Alternative Solution
//Use Array Index [So clever!!!]
// switchItUp = n =>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]
