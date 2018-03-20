

const vowels = ["a","e","i","o","u"];

function disemvoweling(str) {
    const newStr = str.toLowerCase();
    const strArr = newStr.split('');
    const newArr = strArr.filter(item => {
        return item !== "a" && item !== "e" && item !== "i" && item !== "o" && item !== "u";
    })
    const vowelsArr = strArr.filter(item => {
        return item === "a" || item === "e" || item === "i" || item === "o" || item === "u";
    })
    const finalArr = newArr.toString().split(',').join("");
    const finalVowels = vowelsArr.toString().split(',').join("")
    return console.log(`${finalArr} ${finalVowels}`);
}

function disTwo(str) {
    str = str.toLowerCase();
    let newStr = "";
    let vowelStr = "";
    for(let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i])) {
            vowelStr += str[i];
        } else {
            newStr += str[i];
        }
    }
    return console.log(`${newStr} ${vowelStr}`)
}

disemvoweling("pickle rick");
disTwo("Pickle Rick")
