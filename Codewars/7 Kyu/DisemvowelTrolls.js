// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

//P: Given a string
//R: Return the string without the vowels
//E: If we were given "This website sucks" -> return "Ths wbst scks"
//                    "Get lost loser" -> return "Gt lst lsr"
//                    "This website is for losers LOL!" -> return "Ths wbst s fr lsrs LL"
//P: Make a function that takes string as the parameter
function trolls(string) {
    let split = string.split("");
    let arr = [];
    for (let i = 0; i < split.length; i++) {
        if (split[i] !== 'a' && split[i] !== 'e' && split[i] !== 'i' && split[i] !== 'o' && split[i] !== 'u') {
            arr.push(split[i]);
        }
    }
    return arr.join('');
}

console.log(trolls("This website sucks")); // should return "Ths wbst scks"
console.log(trolls("Get lost loser")); // should return "Gt lst lsr"
console.log(trolls("This website is for losers LOL!")); // should return "Ths wbst s fr lsrs LL"
