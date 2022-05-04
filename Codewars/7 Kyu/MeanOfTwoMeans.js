// Write a function getMean that takes as parameters an array (arr) and 2 integers (x and y). The function should return the mean between the mean of the the first x elements of the array and the mean of the last y elements of the array.

// The mean should be computed if both x and y have values higher than 1 but less or equal to the array's length. Otherwise the function should return -1.

// getMean([1,3,2,4], 2, 3) should return 2.5 because: the mean of the the first 2 elements of the array is (1+3)/2=2 and the mean of the last 3 elements of the array is (4+2+3)/3=3 so the mean of those 2 means is (2+3)/2=2.5.

// getMean([1,3,2,4], 1, 2) should return -1 because x is not higher than 1.

// getMean([1,3,2,4], 2, 8) should return -1 because 8 is higher than the array's length.


//P: Given an array (arr) and 2 numbers (x, y). x and y always higher than 1 but less or equal to the array's length. Otherwise the function should return -1
//R: Return the mean of the first x elements of the array and the mean of the last y elements of the array.
//E: If we were given ([4, 5, 6, 7, 8], 2, 3) -> return ((4+5)/2 = 4.5) + ((6+7+8)/3=7) => 4.5+7 = 5.75
//                    ([1, 2], 3, 5) -> return -1
//                    ([1, 2, 4, 7], 2, 9) -> return -1
//P: Make a function that takes array, and 2 numbers as the parameters
//conditionals
//loops
function getMean(arr, x, y) {
    let mean1 = 0;
    let mean2 = 0;
    if (x <= 1 || y <= 1 || x > arr.length || y > arr.length) {
        return -1;
    } else {
        for (let i = 0; i < x ; i++) {
            mean1 += arr[i]
        }

        let len = arr.length - y
        for (let j = len; j < arr.length; j++) {
            mean2 += arr[j]
        }

        return ((mean1/x) + (mean2/y))/2
    }
}

console.log(getMean([4, 5, 6, 7, 8], 2, 3)); // should return 5.75
console.log(getMean([4, 5, 6, 7, 8], 2, 2)); // should return 6
console.log(getMean([1, 3, 2, 4], 1, 2)); // should return -1
console.log(getMean([1, 3, 2, 4], 2, 3) ); // should return 2.5
