/*
 Title: Assignment 3.4
 Author: Richard Krasso
 Date: 3 07 2018
 Modified By: Mary Barrett
 Description: This code is pulled from the navigation example.

 */

//start code

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function(request, response) {

    response.render("index", {

        message: "home page"

    });

});

app.get("/about", function(request, response) {

    response.render("about", {

        message: "about page"

    });

});

app.get("/contact", function(request, response) {

    response.render("contact", {

        message: "contact page"

    })

});

app.get("/products", function(request, response) {

   response.render("products", {

       message: "products page"

   });

});

http.createServer(app).listen(8080, function() {

   console.log("Application started on port 8080.");

});

header.ejs