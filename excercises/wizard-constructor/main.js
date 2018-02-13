

var wizards = [];

function Wizard(name){
    this.name = name || "Harry"
    this.health = createHealth();
    this.spellsKnown = spellsKnown();
}

Wizard.prototype.eyeColor = function () {
    console.log("my eyes are purple");
};

function createHealth() {
    return Math.floor(Math.random() * 31) + 70;
}

function spellsKnown() {
    return Math.floor(Math.random() * 50);
}

// function spellsKnown() {
//     return Math.floor(Math.random() * 3);
// }

for(var i = 0; i < 5; i++) {
    wizards.push(new Wizard("Harry Potter"));
}

var harry = new Wizard("Harry Potter");


harry.eyeColor();

console.log(wizards);
