var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));
var alphabet = "abcdefghijklmnopqrstuvwxyz";

var newStr = "";

for(var i = 0; i < input.length; i++) {
    if(input[i] === " "){
        newStr += " ";
        } else{

        var beforeCipher = input.charCodeAt(i);
        var cipher = beforeCipher + shift;
        if(cipher > 122) {
            cipher += -26;
        }
        newStr += String.fromCharCode(cipher);
    }
}



console.log(newStr);
