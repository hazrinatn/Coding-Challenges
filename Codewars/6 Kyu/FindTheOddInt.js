/*
PROBLEM:
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


PREP
Parameters:
array of integers, can be positive, can be negative

Results:
Return the integer that appears an odd number of times

Examples:
If were given [8,9,7,7] -> should return 8 and 9 because both occur 1 time
              [6] -> should return 6 because it occurs 1 time
              [4,4,9,9,5,4,5,5,5] -> should return 4  because it occurs 3 times

Pseudocode:
Set an empty array to push the same elements
*/