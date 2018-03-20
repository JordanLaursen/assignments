const chai = require("chai");
const assert = chai.assert;

describe("disemvoweling warmup", () => {
    it("should pull all vowels out", () => {
        assert.deepEqual(disTwo("I am a banana"), {str: "", vowels: ""})
    });
});
