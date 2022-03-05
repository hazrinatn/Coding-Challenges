// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//P: Given a boolean value: true or false
//R: Return 'Yes' for true or 'No' for false
//E: If we were given false -> return 'No'
//                    true -> return 'Yes'
//P: Write a function that takes a boolean as a parameter
function booleanToString(boolean) {
    return boolean === true ? 'Yes' : 'No'
}

console.log(booleanToString(false)) //should return 'No'
console.log(booleanToString(true)) //should return 'Yes'
