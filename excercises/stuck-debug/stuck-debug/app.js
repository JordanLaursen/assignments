var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears'];
var option = 'undecided';

while(option != 'fight bears'){
    var answer = ask.keyInSelect(options, "What would you like to do today?: ");
  if(answer === 0){
    console.log("You pick some flowers. You make a bouquet.");
    } else if(answer === 1){
        console.log("You shoot guns.");
    } else if (answer === 2) {
        console.log("You fought a bear and got beat up!");
        break;
    } else {
        console.log(option + ", but you must select an option.");
    }

}
