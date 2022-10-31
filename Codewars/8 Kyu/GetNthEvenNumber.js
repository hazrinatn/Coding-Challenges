/*
Return the Nth Even Number

Example(Input --> Output)

1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466
The input will not be 0.

PREP
Parameters:
Given a number (n)

Results:
Return the nth even number of n

Examples:
If we were given 1 -> return 0 (1st even number)
                 3 -> return 4 (3rd even number [0,2,4])
                 100 -> return 198
                 1298734 -> 2597466

Pseudocodes:
Make a function that takes a number as the parameter
multiply n with 2 minus 2
Return the result
*/ 

function nthEven(n){
    return n * 2 - 2;
}

console.log(nthEven(1));
console.log(nthEven(2));
console.log(nthEven(3));
console.log(nthEven(100));
console.log(nthEven(1298734));
