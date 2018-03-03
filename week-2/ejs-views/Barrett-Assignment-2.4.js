/*
 Title: Assignment 2.4
 Author: Richard Krasso
 Date: 3 01 2018
 Modified By: Mary Barrett
 Description: This code is the modified ejs view example.

 */

//start code

var http = require("http");

var express = require("express");

var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory

app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.get("/", function(request, response) { 

//Remove the app.get function response object's message field 
//Add three (3) new fields (provide your own default values)

   response.render("index", {
        firstname: "Mary",
        lastname: "Barrett",
        address: "Bellevue"
   });

});

http.createServer(app).listen(8080, function() {

    console.log("EJS-Views app started on port 8080.");

});

//end code