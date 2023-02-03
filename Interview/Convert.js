/*
Input abjad
Output convert vokal -> konsonan terdekatnya
konsonan -> vokal terdekatnya
*/ 

const convert = (alphabet) => {
    let alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    let res = []
    let 

    for (let i = 0; i <= alphabets.length; i++) {
        if (alphabet == alphabets[0] || alphabet == alphabets[4] || alphabet == alphabets[8] || alphabet == alphabets[14] || alphabet == alphabets[20] ) {
            res.push(alphabets[i+1])
        } else if (alphabet == alphabets[25]) {
            res.push(alphabets[0])
        } else if (alphabet == alphabets[1] || alphabet == alphabets[5] || alphabet == alphabets[9] || alphabet == alphabets[21]) {
            res.push(alphabets[i-1])
        } else if (alphabet == alphabets[2] || alphabet == alphabets[3]) {
            res.push(alphabets[4])
        } else if (alphabet == alphabets[6] || alphabet == alphabets[7]) {
            res.push(alphabets[8])
        } else if (alphabet == alphabets[10] || alphabet == alphabets[11]) {
            res.push(alphabets[14])
        }
            
        
    }

    return res.join("")
}