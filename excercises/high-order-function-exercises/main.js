
var cars = [
    {
        make: "chevy",
        model: "Silverado",
        year: 2010
    },
    {
        make: "chevy",
        model: "Duramax",
        year: 2014
    },
    {
        make: "ford",
        model: "E150",
        year: 2010
    },
    {
        make: "ford",
        model: "E150",
        year: 2004
    },
    {
        make: "chevy",
        model: "Silverado",
        year: 2004
    }
]


// for (var i = 0; i < cars.length; i++) {
//   console.log(`${cars[i]} goes vroom`);
// }

//*******************   For Each

var goVroom = cars.forEach(function(car) {
    console.log(car.make + " goes Vroom");
});
// console.log(goVroom);

//*******************   Before

// var angryCars = [];

// for (var i = 0; i < cars.length; i++) {
//   angryCars.push(cars[i].toUpperCase());
// }

//*******************   Map

var toUpper = cars.map(function(car) {
    return car.make.toUpperCase();
});
console.log(toUpper);

//*******************   Before

var newCars = [];

// for (var i = 0; i < cars.length; i++) {
//   if (cars[i].year > 2005){
//     newCars.push(cars[i]);
//   }
// }

//*******************   Filter

var newestcars = cars.filter(function(car) {
    if(car.year > 2005) {
        newCars.push(car);
    }
});
console.log(newCars);

//*******************   Before

for (var i = 0; i < cars.length; i++) {
  if (cars[i].model === "E150"){
    var coolVan = cars[i];
    break;
  }
}

//*******************   Find

var lookFor = cars.find(function(car) {
    if(car.model === "E150") {
        return car;
    }
});
console.log(lookFor);

//*******************   Before

// for (var i = 0; i < cars.length; i++) {
//   if (cars[i].make === "E150"){
//     var coolVan = cars[i];
//     break;
//   }
// }

//*******************   Some

var coolVan = cars.some(function(car) {
    return car.model === "E150";
});
console.log(coolVan);

//*******************   Before

// for (var i = 0; i < cars.length; i++) {
//   if (cars[i].make != "E150"){
//     console.log("It is false that every car is an E150");
//     break;
//   }
// }

//*******************   Every

var isEveryE150 = cars.every(function(car) {
    return car.model === "E150";
});
console.log(isEveryE150);

//*******************   Before

var numberOfFords = 0;
var numberOfChevys = 0;

// for (var i = 0; i < cars.length; i++) {
//   if (cars[i].model === "ford"){
//     numberOfFords ++;
//   }
//   if (cars[i].model === "chevy"){
//     numberOfchevys ++;
//   }
// }

// var carTotals = { numberOfFords: numberOfFords, numberOfchevys: numberOfchevys }

//*******************   Reduce

var count = cars.reduce( (tally, car) => {
  tally[car.make] = (tally[car.make] || 0) + 1 ;
  return tally;
} , {});
    // if(car.make === "Chevy") {
    //     numberOfChevys++;
    // } else {
    //     numberOfFords++;
    // }
    // return "Number of Fords"

console.log(count);
