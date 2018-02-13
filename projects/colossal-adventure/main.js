console.log("Welcome to the best game on this whole laptop, literally. I don't have any other games on here. Have fun.")

var ask = require("readline-sync");
var monsterNames = ["Wolf", "Man Bear Pig", "Demon"];
var fightSelection = ["Attack", "Run", "Use item"];
var inventory = [];
var enemies = [];

function chanceOfInventory() {
    randomNumbers = Math.floor(Math.random() * 4);
    if (randomNumbers === 0) {
        inventory.push("potion");
    } else if (randomNumbers === 1) {
        inventory.push("knife");
    } else if (randomNumbers === 2) {
        inventory.push("med pack");
    }
}

function enemy() {
    randNum = Math.floor(Math.random() * 3);
    if (randNum === 0) {
        this.type = monsterNames[0];
        this.hitPoints = Math.floor(Math.random() * 11 + 10);
        this.health = this.hitPoints * 3;
        enemies.push(this.type + ", " + this.hitPoints + ", " + this.health);
    } else if (randNum === 1) {
        this.type = monsterNames[1];
        this.hitPoints = Math.floor(Math.random() * 11 + 20);
        this.health = this.hitPoints * 3;
        enemies.push(this.type + ", " + this.hitPoints + ", " + this.health);
    } else if (randNum === 2) {
        this.type = monsterNames[2];
        this.hitPoints = Math.floor(Math.random() * 11 + 15);
        this.health = this.hitPoints * 3;
        enemies.push(this.type + ", " + this.hitPoints + ", " + this.health);
    }
}

function randNumber() {
    var answer = Math.floor(Math.random() * 2);
    return answer;
}

function criticalHit() {
    var critHit = Math.floor(Math.random() * 400);
    return critHit;
}

function fight() {
    var whatToDo = ask.keyInSelect(fightSelection, "What would you like to do?")
    if (whatToDo === 0 && currentCharacter.health > 0) {
        var chancesOfinstaDeath = criticalHit();
        if (chancesOfinstaDeath === 0) {
            console.log("CRITICAL HIT!!!!");
            currentCharacter.health += -63;
        } else if (fightingEnemy.health > 0 && currentCharacter.health > 0) {
            //make attack
            // console.log("i am attacking");
            fightingEnemy.health += -currentCharacter.attack;
            console.log("\n You attack the enemy and hit them for " + currentCharacter.attack + " damage, enemy health is now " + fightingEnemy.health + "\n");
            currentCharacter.health += -fightingEnemy.hitPoints;
            console.log("The enemy attacked you back and hit you for " + fightingEnemy.hitPoints + " damage");
            console.log("Your health is " + currentCharacter.health);
            fight();
        }
    } else if (whatToDo === 1 && currentCharacter.health > 0) {
        //try to run
        var chancesOfRunning = randNumber();
        if (chancesOfRunning === 0) {
            //lower health
            currentCharacter.health += -fightingEnemy.hitPoints;
            console.log("You got caught running and took damage, your health is now: " + currentCharacter.health);
            console.log(fightingEnemy);
            fight();
        }
    } else if (whatToDo === 2) {
        var whatInventory = ask.keyInSelect(inventory, "Select an item to use");
        var index = inventory.indexOf(whatInventory);
        if (whatInventory === inventory.indexOf("potion")) {
            return currentCharacter.health += 18;
            console.log(currentCharacter.health);
            inventory.splice(index, 1);
            // whatToDo = 0;
            fight();
        } else if (whatInventory === inventory.indexOf("knife")) {
            return currentCharacter.attack += 5;
            console.log(currentCharacter.attack);
            inventory.splice(index, 1);
            // whatToDo = 0;
            fight();
        } else if (whatInventory === inventory.indexOf("med pack")) {
            return currentCharacter.health += 40;
            console.log(currentCharacter.health);
            inventory.splice(index, 1);
            // whatToDo = 0;
            fight();
        }
    }
}


var characterClass = [{
        name: "Orc",
        health: 150,
        attack: 20
    },
    {
        name: "Warrior",
        health: 120,
        attack: 20
    },
    {
        name: "Wizard",
        health: 100,
        attack: 30
    },
    {
        name: "Rogue",
        health: 80,
        attack: 25
    },
    {
        name: "Barbarian",
        health: 140,
        attack: 20
    }
];
var currentCharacter;
var chooseCharacter = [];
for (var i = 0; i < characterClass.length; i++) {
    currentCharacter = characterClass[i];
    chooseCharacter.push(characterClass[i].name);
}

var playerName = ask.question("What is your name? ");
var playerCharacter = ask.keyInSelect(chooseCharacter, "What Character would you like to play as? ")
var spacesMoved = 0;
console.log("Hello " + playerName + " the " + chooseCharacter[playerCharacter]);
var fightingEnemy;

function startGame() {
    var shouldWalk = ask.question("Options: [W] walk, [quit] quit, [print] display your info: ");
    var fightingChance = Math.floor(Math.random() * 4);
    if (fightingChance === 0 && currentCharacter.health > 0) {
        console.log("\n You have encountered an enemy!!!!")
        fightingEnemy = new enemy();
        console.log(fightingEnemy);
        fight();
        chanceOfInventory();
        currentCharacter.health += 5;
        console.log(`You have earned 5 health and have earned a ${inventory[inventory.length -1]}`);
        startGame();
    } else if (currentCharacter.health <= 0) {
        console.log(`good game but you're dead`);
    } else if (currentCharacter.health > 0 && fightingChance > 0) {
        if (shouldWalk === "w") {
            spacesMoved += 1;
            console.log("You've walked " + spacesMoved + " feet");
            startGame();
        } else if (shouldWalk === "quit") {
            console.log("Good job on your game!");
        } else if (shouldWalk === "print") {
            console.log(currentCharacter);
            console.log(inventory);
            startGame();
        } else {
            console.log("You must select w to walk or quit.");
            startGame();
        }
    }
}
startGame();




// function displayInventory() {
//
// }

// function whatToDo() {
//     return ask.keyInSelect()
// }
