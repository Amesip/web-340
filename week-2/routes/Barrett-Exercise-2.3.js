/*
 Title: Assignment 2.3
 Author: Richard Krasso
 Date: 3 01 2018
 Modified By: Mary Barrett
 Description: This code is the routes example.

 */

//start code

var express = require("express");
var http = require("http");
var app = express();
app.get("/", function(request, response) {
    response.end("Welcome to the homepage!");
});
app.get("/about", function(request, response) {
    response.end("Welcome to the about page!");
});
app.get("/contact", function(request, response) {
    response.end("Welcome to the contact page!");
});
app.use(function(request, response) {
    response.statusCode = 404;
    response.end("404!");
});
http.createServer(app).listen(8080);

//end code