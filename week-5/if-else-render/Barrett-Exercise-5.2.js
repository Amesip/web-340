/*
 Title: Exercise 5.2
 Author: Richard Krasso
 Date: 3 22 2018
 Modified By: Mary Barrett
 Description: This code is the modified EJS if...else...render example.

 */

//start code

var express = require("express");

var http = require("http");

var path = require("path");

app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

//replace the list of fruits with a list of names

var f = [

  "Allison",

  "Brandi",

  "Jessica",

  "Alicia"

];


app.get("/", function(request, response) {

    response.render("index", {

        friends: f

    })

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});

//end code