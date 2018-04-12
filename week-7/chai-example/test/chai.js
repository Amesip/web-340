/*
 Title: Chai Example
 Author: Richard Krasso
 Date: 4 6 2018
 Modified By: Mary Barrett
 Description: This code is the modified Chai example.

 */

var fruits = require("../Barrett-Exercise-7.3");

var chai = require("chai");

var assert = chai.assert;

describe("fruits", function() {

    it("should return an array of fruits", function() {

        var f = fruits('Apple,Orange,Mango');

        assert(Array.isArray(f));

    });

});