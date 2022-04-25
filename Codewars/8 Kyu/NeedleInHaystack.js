// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5"


//P: Given an array of strings
//R: Return the position of "needle" in the array
//E: If we were given ['needle', 'junk', 'moreJunk'] -> return "found the needle at position 0"
//                    ['hay', 'needle', 'junk', 'moreJunk'] -> return "found the needle at position 1"
//                    ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'] -> return "found the needle at position 5"
//P: Make a function that takes an array as the parameter
function findNeedle (arr) {
    let position;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'needle') {
            position = i
        }
    }

    return(`found the needle at position ${position}`);
}

console.log(findNeedle(['needle', 'junk', 'moreJunk']));// should return "found the needle at position 0"
console.log(findNeedle(['hay', 'needle', 'junk', 'moreJunk']));// should return "found the needle at position 1"
console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));// should return "found the needle at position 5"

//Alternative solution
// function findNeedle(haystack) {
//     return "found the needle at position " + haystack.indexOf("needle");
// }



