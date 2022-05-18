/*
Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

PREP:
Parameters:
Given an array containing result of each match (x:y). There are 10 matches. 

Results:
Calculate the final score of our team using this rules:
if x > y: 3 points
if x < y: 0 point
if x = y: 1 point

Example: 
If were given ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"] -> return 30
              ["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"] -> return 10
              ["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"] -> return 0

Pseudocode:
Loop
Turn the string into number
Conditionals
*/

function points(games) {
    let score = 0;
    for (let i = 0; i < games.length; i++) {
        let x = games[i][0];
        let y = games[i][2];
        if(x > y) {
            score += 3
        } else if (x < y) {
            score += 0
        } else if (x == y) {
             score += 1
        }
    }
  return score;
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])); // return 30
console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"])); // return 10
console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"])); // return 0

//Alternative Solution
// const points = games => games.reduce((output,current)=>{
//     return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
// }, 0)