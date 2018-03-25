/*
 Title: Exercise 5.3
 Author: Richard Krasso
 Date: 3 22 2018
 Modified By: Mary Barrett
 Description: This code is the modified Pug example.

 */

//start code

var express = require("express");

var http = require("http");

var pug = require("pug");

var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "pug");

app.get("/", function(request, response) {

    //modify the message to your own custom message

    response.render("index", {

        message: "My dog is not a pug, but this is a pug webpage!"

    });

});


http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});

//end code