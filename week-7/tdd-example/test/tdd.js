/*
 Title: TDD Example
 Author: Richard Krasso
 Date: 4 6 2018
 Modified By: Mary Barrett
 Description: This code is the modified TDD example.

 */

var assert = require("assert");

describe("String#split", function() {

    it("should return an array of fruits", function(done) {

        assert(Array.isArray('Apple,Orange,Mango'.split(',')));
        done();
    });

});