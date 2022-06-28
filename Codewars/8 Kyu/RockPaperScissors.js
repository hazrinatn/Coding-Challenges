/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

PREP
Parameters:
Given 2 strings (rock, paper, or scissors)

Results:
Return the winner according to rock paper scissors game rules

Examples:
If we were given "scissors", "paper" -> return "Player 1 won!"
                 "scissors", "rock" -> return "Player 2 won!"
                 "paper", "paper" -> return "Draw"

Pseudocode:
Make a function that takes 2 strings as the parameters
Assume all parameters are written in lowercases
Conditionals: Rock wins against Scissors, Scissors wins against Paper, Paper wins against Rock, Draw if both player use the same
Return the result
*/

function rockPaperScissors (player1, player2) {
    if (player1 == player2) {
        return "Draw"
    } else if (player1 == "rock" && player2 == "scissors" || player1 == "scissors" && player2 == "paper" || player1 == "paper" && player2 == "rock") {
        return "Player 1 won!"
    } else {
        return "Player 2 won!"
    }
}

console.log(rockPaperScissors("scissors", "rock")); // Player 2 won!
console.log(rockPaperScissors("scissors", "paper")); // Player 1 won!
console.log(rockPaperScissors("paper", "paper")); // Player 1 won!