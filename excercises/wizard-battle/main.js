// var wizards = ["Edwin Odesseiron", "Harry Potter", "Ronny the Bear", "Gandalf the Grey"]
//
// wizards.forEach(function(wizard) {
//     console.log(wizard);
// });

var wizards = [
  {
    name: "Edwin Odesseiron",
    age: 37,
    alignment: "lawful evil"
  },
  {
    name: "Harry Potter",
    age: 21,
    alignment: "neutral good"
  },
  {
    name: "Hermony Granger",
    age: 21,
    alignment: "lawful good"
  },
  {
    name: "Ronny the Bear",
    age: 21,
    alignment: "neutral good"
  },
  {
    name: "Gandalf",
    age: 100,
    alignment: "neutral good"
  }
]

wizards.forEach(function(wizard) {
    console.log(wizard.name);
    wizard.isAlive = true;
    // console.log(wizard.isAlive);
});

var neutralGoodWizards = [];
wizards.filter(function(wizard) {
    if(wizard.alignment === "neutral good") {
        neutralGoodWizards.push(wizard);
    }
});
console.log(neutralGoodWizards);

var isLawfulGood = wizards.find(function(wizard) {
    return wizard.alignment === "lawful good";
});
console.log(isLawfulGood);

// console.log(wizards);

var areAllAlive = wizards.every(function(wizard) {
    return wizard.isAlive;
});
console.log(areAllAlive);

var areSomeAlive = wizards.some(function(wizard) {
    return wizard.isAlive;
});

var someNeutralGood = wizards.some(function(wizard) {
    return wizard.alignment === "neutral good";
});
console.log(someNeutralGood);

var killNeutralGood = wizards.forEach(function(wizard) {
    wizard.alignment === "neutral good" ? wizard.isAlive = false : wizard.isAlive = true;
    if(wizard.alignment === "neutral good") {
        wizard.isAlive = false;
    }
})
console.log(wizards);

var areAllAlive2 = wizards.every(function(wizard) {
    return wizard.isAlive;
});

console.log(areAllAlive2);
console.log(areSomeAlive);
