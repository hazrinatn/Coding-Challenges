/*
Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"

PREP
Parameters:
Given an array of strings (sheeps and wolf)

Results:
Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array. return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Examples:
If we were given ["sheep", "sheep", "sheep", "wolf", "sheep"] -> "Oi! Sheep number 1! You are about to be eaten by a wolf!"
                 ["sheep", "sheep", "wolf"] ->  "Pls go away and stop eating my sheep"
                 ["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"] -> "Oi! Sheep number 5! You are about to be eaten by a wolf!"

Pseudocodes:
Make a function that takes an array as the parameter
Create an empty array
For loop, unshift the elements
If the wolf is at the 0 index, return "Pls go away and stop eating my sheep", otherwise return "Oi! Sheep number {wolf index + 1}! You are about to be eaten by a wolf!"
*/ 

function warnTheSheep(queue) {
    let newArr = [];
    for(let i = 0; i < queue.length; i++) {
        newArr.unshift(queue[i])
    }
    if (newArr[0] == "wolf") {
        return "Pls go away and stop eating my sheep"
    } else {
        return `Oi! Sheep number ${newArr.indexOf("wolf")}! You are about to be eaten by a wolf!`
    }
}

// Alternative Solution
// function warnTheSheep(queue) {
//     const position = queue.reverse().indexOf('wolf');
//     return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
// }

console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "wolf"]));
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]));
