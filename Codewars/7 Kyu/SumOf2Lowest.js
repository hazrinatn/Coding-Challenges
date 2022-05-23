/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

PREP
Parameters:
Given an array of minimun 4 positive integers. No negatives, no floats.

Results:
Return the sum of two lowest integers.

Examples:
If we were given [19, 5, 42, 2, 77] -> return 7
                 [1, 2, 3, 10, 239] -> return 3
                 [98, 390, 85930, 909, 1] -> return 99

Pseudocode:
Search the lowest integer from the original array and remove it from the array by filtering
Search the lowest integer again from the filtered array
Return the sum of lowest integer from the first and second search
*/

function sumOfTwo(arr) {
    let smallest1 = Math.min(...arr);
    let arrFiltered1 = arr.filter(val => val != smallest1);
    let smallest2 = Math.min(...arrFiltered1);
    return smallest1 + smallest2;
}

console.log(sumOfTwo([19, 5, 42, 2, 77]));
console.log(sumOfTwo([1, 2, 3, 10, 239]));
console.log(sumOfTwo([98, 390, 85930, 909, 1]));


//Alternative Solution
//USING SORT!!! 🙀
// function sumTwoSmallestNumbers(numbers){  
//     numbers = numbers.sort(function(a, b){return a - b; });
//     return numbers[0] + numbers[1];
// };
