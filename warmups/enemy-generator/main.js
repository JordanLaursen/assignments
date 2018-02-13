var randEnemyName = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
var randNum;
var enemies = [];

function chooseHitPoints() {
    randNum = Math.floor(Math.random() * 3);
    if(randNum === 0) {
        this.type = randEnemyName[0];
        this.hitPoints = Math.floor(Math.random() * 21 + 80);
        this.defense = this.hitPoints * 3;
        enemies.push(this.type + ", " + this.hitPoints + ", " + this.defense);
    } else if (randNum === 1) {
        this.type = randEnemyName[1];
        this.hitPoints = Math.floor(Math.random() * 30 + 50);
        this.defense = this.hitPoints * 3;
        enemies.push(this.type + ", " + this.hitPoints + ", " + this.defense);
    } else if (randNum === 2) {
        this.type = randEnemyName[2];
        this.hitPoints = Math.floor(Math.random() * 30 + 20);
        this.defense = this.hitPoints * 3;
        enemies.push(this.type + ", " + this.hitPoints + ", " + this.defense);
    }
}

for(var i = 0; i < 100; i++){
    chooseHitPoints();
}
console.log(enemies);
