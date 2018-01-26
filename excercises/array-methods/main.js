



var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);

vegetables.pop();
fruit.shift();
fruit.indexOf("orange");
var inNumOfOrange;
inNumOfOrange = fruit.indexOf("orange");
fruit.push(inNumOfOrange);

var vegLength;
vegLength = vegetables.length;
vegetables.push(vegLength);
var food = fruit.concat(vegetables);
food.splice(4,2);
// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);
food.reverse();
console.log(food);
