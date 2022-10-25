/*
Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"

PREP
Parameters:
Given an object of a class Ball that has ball type property of "ball type"

Results:
If no argument given, instantiate ball objects with "ball type" of "regular", otherwise instantiate ball objects accordingly

Examples:
If we were given new Ball().ballType -> should return "regular"
                 new Ball("super").ballType -> should return "super"

Pseudocodes:
Make a class that has property of ballType
Instantiate new ball objects
*/

let Ball = function(ballType = "regular") {
    this.ballType = ballType;
};

//Alternative Solution
// let Ball = function(ballType) {
//     this.ballType = ballType || 'regular';
// };

// //Alternative Solution Using Class Constructor
// class Ball {
//     constructor(ballType = "regular") {
//       this.ballType = ballType;
//     }
// }

let ball1 = new Ball();
let ball2 = new Ball("super")

console.log(ball1);
console.log(ball2);