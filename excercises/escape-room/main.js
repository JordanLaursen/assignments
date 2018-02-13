var readline = require("readline-sync");

var hasKey = false;
var gameOver = false;

var initialize = readline.question("Welcome to the game. You are stuck in a game. Press enter");

var options = ["Put hand in hole", "Find the key", "Open the door"];
var consequences = [
    "You died a instant, painful death from getting stung by Mario",
    "you found the key",
    "You escaped from Mario! Be free little one!"
]

function checkForKey(hasKey){
    if(hasKey){
        console.log(consequences[selection]);
        gameOver = true;
        break;
    } else {
        console.log("This door is locked. I dare you to stick your hand in the hole");
    }
}

while(!gameOver){
    var selection = readline.keyInSelect(options, "Selection option: ");
    if(selection === 0){
        console.log(consequences[selection]);
        gameOver = true;
        break;
    } else if (selection === 1){
        console.log(consequences[selection]);
        hasKey = true;
    } else if (selection === 2){
        checkForKey(hasKey);
    } else {
        break;
    }
}

console.log("Game over");
