


var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var computerCounter = 0;


for (var i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        computerCounter++;
    }
}

console.log(computerCounter);




var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12
  },{
    name: "Madeline",
    age: 80
  },{
    name: "Cheryl",
    age: 22
  },{
    name: "Sam",
    age: 30
  },{
    name: "Suzy",
    age: 4
  }
]

for (var j = 0; j < peopleWhoWantToSeeMadMaxFuryRoad.length; j++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[j].age > 17) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[j].name + " is old enough.");
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[j].name + " is not old enough.");

    }
}
