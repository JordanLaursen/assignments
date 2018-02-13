function checkCorrect(checking, expected) {
    if(checking !== expected) {
        throw new Error("Asserted that " + checking + " would equal " + expected);
    } else {
        console.log("Test Passed. Checking: " + checking + ", expected: " + expected);
    }
}

function describe(message, testFunction) {
    console.log("\n" + message);
    try {
        testFunction();
    } catch(err) {
        console.log("Test FAILED: " + err.message);
    }
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

describe("A multiply function and a divide function", function() {
    checkCorrect(multiply(2, 2), 4);
    checkCorrect(multiply(-2, 2), -4);
    checkCorrect(multiply(2, -2), -4);
    checkCorrect(divide(4, 2), 2);
    checkCorrect(divide(-2, 2), -1);
    checkCorrect(divide(2, -2), -1);
});
