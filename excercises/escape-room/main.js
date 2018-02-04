var readline = require("readline-sync");

var hasKey = false;
var gameOver = false;

var initialize = readline.question("Welcome to the game. You are stuck. Find a way out. Press Enter:");

var options = ["Put hand in hole", "Find the key", "Open the door"];

while(!gameOver) {
    var selection = readline.keyInSelect("Select Option: ");
    console.log(otions[selection]);
    if(selection === 0) {
        console.log("You lost your hand and a dog gave you a bad infection eating your hand")
        gameOver = true;
        break;
    } else if(selection === 1) {
        console.log("You found a key inside of a dead rat!");
        hasKey = true;
    } else if (selection === 2) {
        if(hasKey) {
            console.log("You opened the door and can escape.");
            break;
        } else {
            console.log("The door is locked maybe the key is in the hole?");
        }
    } else {
        break;
    }
}
