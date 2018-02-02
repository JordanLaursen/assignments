var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));
var result = [];
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var finalResult = "";

for(var i = 0; i < input.length; i++) {

    if (alphabet.indexOf(input[i]) !== -1) {
        result.push(parseInt(alphabet.indexOf(input[i]) + shift));

    }
    if (alphabet.indexOf(input[i]) === undefined) {
        result.push(" ");
        
    }
    for(var j = i; j < result.length; j++) {
        finalResult += alphabet[result[i]];
    }
}


console.log(finalResult);


//reads input
// result += alphabet.indexOf(input[i]) + shift;
//shifts result by certain number of letters
// result +=
