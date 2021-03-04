"use strict";

const assert = require("assert");
const myFunction = require("./myFunctions.js");


describe("checkPrime", function () {
    it("37 is prime", function () {
        assert.strictEqual(myFunction.checkPrime(37), true);
    });
    it(" 77 is not prime", function () {
        assert.strictEqual(myFunction.checkPrime(77), false);
    });
});

