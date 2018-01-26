


var coffee = {
    temperature: "hot",
    isOnTable: true,
    size: "small",
    drinkCoffee: function() {
        if (coffee.isOnTable) {
            return "I really want coffee, I think I will drink this " + coffee.size + " " + coffee.temperature + " coffee sitting on the table.";
        } else {
            return "No coffee for me";
        }
    }
}

console.log(coffee.drinkCoffee());

var bottle = {
    isCapClosed: true,
    color: "orange",
    containedInBottle: "water",
    drink: function() {
        if (bottle.isCapClosed === true) {
            return "I'm thirsty, I think I will open this " + bottle.color + " bottle and drink some " + bottle.containedInBottle;
        } else {
            return "I'm thirsty, I think I will drink this " + bottle.color + " bottle of " + bottle.containedInBottle;
        }
    }
}

console.log(bottle.drink());

var bag = {
    isBagZipped: false,
    color: "grey",
    laptopsCanContain: 1,
    laptopsHolding: 0,
    putBack: function() {
        return "I need to put my laptop away the " + bag.color + " bag is holding " + bag.laptopsHolding + " laptops and can hold " + bag.laptopsCanContain + " I think I can put mine in it.";
    }
}

console.log(bag.putBack());

var laptop = {
    open: true,
    color: "grey",
    brand: "apple",
    checkComputer: function() {
        if (laptop.open) {
            console.log("Let's check out what's on this " + laptop.color + " " + laptop.brand + " laptop.");
        } else {
            console.log("Oh sweet " + laptop.color + " " + laptop.brand + " laptop");
        }
    }
}

laptop.checkComputer();
