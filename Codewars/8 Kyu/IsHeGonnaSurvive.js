// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

//P: Given 2 numbers, 1 for the bullets needed, 1 for the count of dragons. Each dragon must be deeated by 2 bullets.
//R: Return True if the bullets are sufficient to defeat the dragon, False otherwise.
//E: If we were given (10, 5) -> return True
//                    (10, 4) -> return True
//                    (5, 3) -> return False
//P: Make a function that takes 2 numbers as the parameters
function hero(bullets, dragon) {
    return bullets >= dragon * 2
}

console.log(hero(10, 5)); // True
console.log(hero(10, 4)); // True
console.log(hero(5, 3)); // False
