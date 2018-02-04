



//check if is capitalized
//for loop through string

function isCaps(eachLetter) {
    return eachLetter === eachLetter.toUpperCase();
}

function antiCaps(str) {
    var newStr = "";
    for(var i = 0; i < str.length; i++){
        if(isCaps(str[i])) {
            newStr += str[i].toLowerCase();
        } else {
            newStr += str[i].toUpperCase();
        }
    }
    console.log(newStr)
}


antiCaps("HellO NeiGHBOR");
