// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

//P: Given a string that contains DNA nucleic acid bases sequence. A, G, C, T
//R: Return the RNA translation of the string. T -> U
//E: If we were given "TGCAATG" -> return "UGCAAUG"
//                    "" -> return ""
//                    "ATGCATGC" -> return "AUGAUGC"
//P: Make a function that takes a string as the parameter
//declare an empty array variable
//loop, conditionals, push to the array
//return the final string
function DNAtoRNA(dna) {
    let arr = [];
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] == "T") {
            arr.push("U")
        } else {
            arr.push(dna[i])
        }
    }
    return arr.join("");
}

console.log(DNAtoRNA("TGCAATG")); // should return "UGCAAUG"
console.log(DNAtoRNA("ATGCATGC")); // should return "AUGAUGC"
console.log(DNAtoRNA("")); // should return ""


//Alternative Solutions:

//CLEVER!!
// function DNAtoRNA(dna) {
//     return dna.split("T").join("U");
// }

//Regex
// function DNAtoRNA(dna){
//     return dna.replace(/T/g, 'U');
// }
