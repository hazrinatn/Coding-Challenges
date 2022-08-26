/*
You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

Simples!

PREP
Paramaters:
Given an array

Returns:
Return the reverse order of the elements of the array

Examples:
If we were given ['kirdpan', 'korapat', 'nanon'] -> returns ['nanon', 'korapat', 'kirdpan']
                 ['tail', 'body', 'head'] -> returns ['head', 'body', 'tail]
                 ['green', 'red'] -> returns ['red', 'green']

Pseudocodes:
Make a function that takes an array as the parameter
Reverse method
Return the result
*/ 

function fixTheMeerkat(arr) {
    return arr.reverse()
}

console.log(fixTheMeerkat(['green', 'red']));
console.log(fixTheMeerkat(['tail', 'body', 'head']));
console.log(fixTheMeerkat(['kirdpan', 'korapat', 'nanon']));

