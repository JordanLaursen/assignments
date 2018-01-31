var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

var nextArr = [];

for(var i = 0; i < people.length; i++) {
    nextArr.push(people[i]);
    for(var j = 0; j < alphabet.length; j++) {
        nextArr.push(alphabet[j]);
    }
}

console.log(nextArr);
