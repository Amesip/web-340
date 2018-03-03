/*
 Title: Assignment 2.2
 Author: Richard Krasso
 Date: 3 01 2018
 Modified By: Mary Barrett
 Description: This code is the modified express example.

 */

//start code

var express = require("express");

var http = require("http");

var app = express();

app.use(function(request, response) {

   console.log("In comes a request to: " + request.url);

   response.end("Hello World");

});

http.createServer(app).listen(8080, function () {
    console.log("Application started on port %s", 8080)
})

//end code