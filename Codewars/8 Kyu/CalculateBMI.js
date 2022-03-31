// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"


//P: Given 2 numbers (weight and height)
//R: Return "Underweight", "Normal", "Overweight", or "Obese" based on the calculated BMI.
//E: If we were given weight (in kg) = 64, height (in m) = 1.58 -> return "Overweight" (64/(1.58^2) = 25.64)
//                    weight (in kg) = 58, height (in m) = 1.63 -> return "Normal" (58/(1.63^2) = 21.83)
//                    weight (in kg) = 40, height (in m) = 1.63 -> return "Underweight" (40/(1.63^2) = 15.05)
//P: Make a function that takes 2 numbers as the parameters

function calculateBMI(weight, height) {
    let bmi = weight / height ** 2;
    if (bmi <= 18.5) {
        return "Underweight"
    } else if (bmi <= 25.0) {
        return "Normal"
    } else if (bmi <= 30.0) {
        return "Overweight"
    } else {
        return "Obese"
    }
}

console.log(calculateBMI(64, 1.58)); //should return "Overweight"
console.log(calculateBMI(58, 1.63)); //should return "Normal"
console.log(calculateBMI(40, 1.63)); //should return "Underweight"


