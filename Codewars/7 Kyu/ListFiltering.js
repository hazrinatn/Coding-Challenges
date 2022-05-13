// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

//P: array of integers of + integers and strings
//R: new array filtering out the string
//E: If we were given [8,'n', 'p', 1, 2, 2] -> return [8, 1, 2, 2]
//                    ['a', 'b', 7, 32, 45] -> [7, 32, 45]
//                    ['nnn', 'mmm', 309, 987] -> [309, 987]
//P: 
// loop
// conditionals typeof
// push
function filterList(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(filterList([8,'n', 'p', 1, 2, 2])); // should return [8, 1, 2, 2]
console.log(filterList(['a', 'b', 7, 32, 45])); // should return [7, 32, 45]
console.log(filterList(['nnn', 'mmm', 309, 987])); // should return [309, 987]


