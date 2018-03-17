/*
 Title: Exercise 4.2
 Author: Richard Krasso
 Date: 3 16 2018
 Modified By: Mary Barrett
 Description: This code is the modified JSON API example.

 */

//start code
var express = require("express");

var http = require("http");

var app = express();

app.get("/customer/:favoriteNumber", function (request, response) {

    var favoriteNumber = parseInt(request.params.favoriteNumber, 10);

    response.json({

        favoriteDog: "Oscar",

        favoritePie: "Apple",

        favoriteNumber: favoriteNumber

    });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080");

});

//end code