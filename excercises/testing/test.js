const firstLastOverAge = require("./main").firstLastOverAge;
const difference = require("./main").difference;
const chai = require("chai");
const assert = chai.assert;









const people = [
    {
        firstName: "Jerry",
        lastName: "Gergich",
        age: 69
    },
    {
        firstName: "Leslie",
        lastName: "Knope",
        age: 40
    },
    {
        firstName: "Tommy",
        lastName: "Haverford",
        age: 10
    },
    {
        firstName: "Ronny",
        lastName: "Swanson",
        age: 7
    }
]




describe("Subtraction function", () => {
    it("should return different people depending on ages", () => {
        assert.deepEqual(firstLastOverAge(people, 68), ["Jerry Gergich"]);
        assert.deepEqual(firstLastOverAge(people, 10), ["Jerry Gergich", "Leslie Knope"]);
    });
    it("should return all the subtractions of all numbers", () => {
        assert.equal(difference([10, 5, 2, 4]), -1);
    });
});


//
// console.log(firstLastOver17(people));
