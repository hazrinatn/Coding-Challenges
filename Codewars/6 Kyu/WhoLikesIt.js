// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

//P: arr of strings
//R: return a string containing all names in the array if there are <= 3 names, otherwise return first 2 names and count the rest of the names
//E: 
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.
//P: Make a function that takes an array as the parameters
//loop
//conditionals
function likes(arr) {
    if (arr.length < 1) {
        return `no one likes this`
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr.length < 2) {
                return `${arr[0]} likes this`
            } else if (arr.length < 3){
                return `${arr[0]} and ${arr[1]} likes this`
            } else if (arr.length < 4) {
                return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
            } else if (arr.length >= 4) {
                return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`
            }
        }
    }
}

console.log(likes(['John', 'Peter', 'Dave', 'Greg']));
console.log(likes(['John', 'Peter']));
console.log(likes(['John', 'Peter', 'Dave']));
console.log(likes(['John']));
console.log(likes([]));

//Alternative Solution
// function likes(names) {
//     names = names || [];
//     switch(names.length){
//       case 0: return 'no one likes this'; break;
//       case 1: return names[0] + ' likes this'; break;
//       case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
//       case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
//       default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//     }
// }


// function likes(names) {
//     return {
//       0: 'no one likes this',
//       1: `${names[0]} likes this`, 
//       2: `${names[0]} and ${names[1]} like this`, 
//       3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
//       4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
//     }[Math.min(4, names.length)]
// }
