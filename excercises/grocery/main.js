
var isAgeEnough;
var purchaserAge;
// var ageArr = [];

function personAge() {
    purchaserAge = Math.floor(Math.random() * 42) + 1;
    // ageArr.push(purchaserAge);
}

personAge();

function checkAge(){
    if (purchaserAge >= 21) {
        return true;
    } else {
        return false;
    }
}

checkAge();

var shopper = {
    name: "Steve",
    age: purchaserAge,
    oldEnoughForAlcohol: checkAge(),
    groceryCart: ["beer", "soda"],
    checkout: function() {
        return "I'm gonna buy some "
    }
}

function whatToBuy() {
    if (shopper.oldEnoughForAlcohol === true){
        return shopper.checkout() + shopper.groceryCart[0];
    } else {
        return shopper.checkout() + shopper.groceryCart[1];
    }
}

function buyer() {
    return shopper.name + ", " + shopper.age;
}

console.log(buyer());
console.log(whatToBuy());
