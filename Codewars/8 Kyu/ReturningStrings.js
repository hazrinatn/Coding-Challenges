// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

//P: Given a string
//R: Return a statement using the string as an input
//E: If we were given "Akiyama" -> "Hello, Akiyama how are you doing today?"
//                    "นนน กรภัทร์" -> "Hello, นนน กรภัทร์ how are you doing today?"
//                    "王廣允" -> "Hello, 王廣允 how are you doing today?"
//P: Make a function that takes a string as the parameter
//using template literals, return the argument inside the greeting statement
function greeting(name) {
    return `Hello ${name} how are yoy doing today?`
}

console.log(greeting("Akiyama")); // should return "Hello, Akiyama how are you doing today?"
console.log(greeting("นนน กรภัทร์")); // should return "Hello, นนน กรภัทร์ how are you doing today?"
console.log(greeting("王廣允")); // should return "Hello, 王廣允how are you doing today?"

