/*
The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

All inputs will be integers. Please return an integer. Round down.

PREP
Parameters:
Given 3 numbers as parameters

Results:
Return the number of duty free whiskey bottles you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday

Examples:
If we were given (12, 50, 1000) -> 166
                 (17, 10, 500) -> 294
                 (24, 35, 3000) -> 357

Pseudocodes:
Make a function that takes 3 numbers as parameters
Multiply normal price with discount
Divide the holiday cost with the result of multiplication
Math.floor the result
Return the final result
*/ 

const dutyFree = (normPrice, discount, hol) => {
    return Math.floor(hol / (normPrice * discount / 100))
}

console.log(dutyFree(12, 50, 1000));
console.log(dutyFree(17, 10, 500));
console.log(dutyFree(24, 35, 3000));
