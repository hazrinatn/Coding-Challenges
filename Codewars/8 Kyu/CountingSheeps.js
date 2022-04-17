// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined


//P: Given an array, consists of booleans. Can it be an empty array? How about null/undefined?
//R: Count the total number of true present in the array.
//E: If we were given [true, true, false, true, false] -> return 3
//                    [false, false, false] -> return 0
//                    [] -> return 0
//P: Make a function that takes an array as the parameter
function countSheep(arr) {
    let sheep = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            sheep += 1
        } else {
            sheep
        }
    };
    
    return sheep;
}

console.log(countSheep([true, true, false, true, false])); //should return 3
console.log(countSheep([])); //should return 0
console.log(countSheep([false, false, false])); //should return 0

//Alternative Solution

// function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// }

// function countSheeps(arrayOfSheep) {
//   var num = 0;
//   for(var i = 0; i < arrayOfSheep.length; i++)
//     if(arrayOfSheep[i] == true)
//       num++;
//   return num;
// }
