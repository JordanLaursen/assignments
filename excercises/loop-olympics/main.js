


// var fruit = ["banana", "orange", "apple", "kiwi"]
//
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
//
// for (var i = 9; i >= 0; i--) {
//     console.log(i);
// }
//
// for (var i = 0; i < fruit.length; i++) {
//     console.log(fruit[i]);
// }
//
//
//
//
// var arrNums = [];
// for (var i = 0; i < 10; i++) {
//     arrNums.push(i);
//     console.log(arrNums);
// }
//
//
// ******************************************************
//
//
// for (var i = 0; i < 101; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is not even");
//     }
// }
//
// var fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
//
// for (var i = 0; i < fruits.length; i += 2) {
//     console.log(fruits[i]);
// }
//
//
// **********************************************************
//
// var arrNames = [];
// var arrOccupation = [];
// var arrEveryOtherName = [];
// var arrEveryOtherOccupation = [];
//
//
// var peopleArray = [
//   {
//     name: "Harrison Ford",
//     occupation: "Actor"
//   },
//   {
//     name: "Justin Bieber",
//     occupation: "Singer"
//   },
//   {
//     name: "Vladimir Putin",
//     occupation: "Politician"
//   },
//   {
//     name: "Oprah",
//     occupation: "Entertainer"
//   }
// ]
//
// for (var i = 0; i < peopleArray.length; i++) {
//     console.log(peopleArray[i].name);
// }
//
// for (var i = 0; i < peopleArray.length; i++) {
//     arrNames.push(peopleArray[i].name);
// }
// console.log(arrNames);
//
// for (var i = 0; i < peopleArray.length; i++) {
//     arrOccupation.push(peopleArray[i].occupation);
// }
// console.log(arrOccupation);
//
// for (var i = 0; i < peopleArray.length; i += 2) {
//     arrEveryOtherName.push(peopleArray[i].name);
// }
// console.log(arrEveryOtherName)
//
// for (var i = 1; i < peopleArray.length; i += 2) {
//     arrEveryOtherOccupation.push(peopleArray[i].occupation);
// }
// console.log(arrEveryOtherOccupation)

var arrMulti = [
    [],
    [],
    []
];
var arrMulti2 = [
    [],
    [],
    []
];

var arrMulti3 = [
    [],
    [],
    []
];


for (var i = 0; i < arrMulti.length; i++) {
    for (var j = 0; j < 3; j++) {
        arrMulti[i].push(0);
    }
}
console.log(arrMulti);


for (var i = 0; i < arrMulti3.length; i++) {
    for (var j = 0; j < 3; j++) {
        arrMulti3[i].push(i);
    }
}
console.log(arrMulti3);


for (var i = 0; i < arrMulti2.length; i++) {
    for (var j = 0; j < 3; j++) {
        arrMulti2[i].push(j);
    }
}
console.log(arrMulti2);
