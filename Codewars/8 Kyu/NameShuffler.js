/*
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"

PREP
Parameters:
Given a string containing 2 words

Results:
Reverse the order of the word

Examples:
If we were given 'Kirdpan Korapat' -> 'Korapat Kirdpan'
                 'Shinichi Kudo' -> 'Kudo Schinichi'
                 'Zhang Steven' -> 'Steven Zhang'

Pseudocodes:
Make a function that takes a string as the parameter
Split the string, reverse, join
Return the result
*/ 

function nameShuffler(str){
    return str.split(' ').reverse().join(' ');
}

console.log(nameShuffler('Kirdpan Korapat'));
console.log(nameShuffler('Shinichi Kudo'));
console.log(nameShuffler('Zhang Steven'));


