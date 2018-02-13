const alphabet = "abcdefghijklmnopqrstuvwxyz";
let theString = "";
let newStr;
function isPalindrome(str) {
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === alphabet.indexOf(str[i])) {
            theString += str[i];
        }
    }
    newStr = theString.split("").reverse().join("");
    if (newStr === theString) {
        console.log(newStr + " " +  theString);
        return true;
    } else {
        console.log(newStr + " " +  theString);
        return false;        
    }
}

console.log(isPalindrome("racecar"));
