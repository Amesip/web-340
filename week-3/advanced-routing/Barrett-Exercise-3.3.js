/*
 Title: Exercise 3.3
 Author: Richard Krasso
 Date: 3 07 2018
 Modified By: Mary Barrett
 Description: This code is the modified routing example.

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

app.get("/:employeeId", function (request, response) {

    var employeeId = parseInt(request.params.employeeId, 10);

    response.render("index", {

        employeeId: employeeId

    })

});

http.createServer(app).listen(8080, function () {

    console.log("Application started on port 8080");

});