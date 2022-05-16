/*
After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).

PREP:
Parameters:
Given number of days (d). Each day cost $40. If rent >= 7 days get $50 off from total, if rent >= 3 days get $20 off

Results:
Total amount of money needed for different days

Example:
If we were given d = 2 -> return $80
                 d = 3 -> return 3 * $40 = $120 - $20 = $100
                 d = 7 -> return 7 * $40 = $280 - $50 = $230

Pseudocode:
Make a function that takes number as the parameter
Conditionals
Multiply the number with 40 and then substract the total based on the conditionals
*/

function rentalCarCost(d) {
    if (d >= 7) {
        return (d * 40) - 50;
    } else if (d >= 3) {
        return (d * 40) - 20;
    } else {
        return d * 40;
    }
}

console.log(rentalCarCost(2)); // return 80
console.log(rentalCarCost(3)); // return 100
console.log(rentalCarCost(5)); // return 180
console.log(rentalCarCost(7)); // return 230
console.log(rentalCarCost(10)); // return 350


//Alternative Solution
// function baseCost(days, rate) {
//     return days * rate;
//   }
  
//   function discountRate(days) {
//     if ( days >= 7 ) {
//       return 50;
//     }
//     else if ( days >= 3 ) {
//       return 20;
//     }
//     else {
//       return 0;
//     }
//   }
  
//   function rentalCarCost(days) {
//     return baseCost(days, 40) - discountRate(days);
//   }

