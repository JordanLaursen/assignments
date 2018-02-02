

var readline = require("readline-sync");

function calc() {
    var num1 = parseInt(readline.question("What is your first number? "));
    var num2 = parseInt(readline.question("What is your second number? "));
    var whichOperation = readline.question("Would you like to add, subtract, multiply, or divide? ")
    if (whichOperation === "add") {
        console.log(num1 + num2);
    }
    if (whichOperation === "subtract") {
        console.log(num1 - num2);
    }
    if (whichOperation === "multiply") {
        console.log(num1 * num2);
    }
    if (whichOperation === "divide") {
        console.log(num1 / num2);
    }
}

calc();
