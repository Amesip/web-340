/*
 Title: Exercise 4.3
 Author: Richard Krasso
 Date: 3 16 2018
 Modified By: Mary Barrett
 Description: This code is the modified Status Code example.

 */

//start code
var express = require("express");

var http = require("http");

var app = express();

app.get("/not-found", function(request, response) {

    response.status(404);

    response.json({

        error: "404 not found"

    })

});

app.get("/ok", function(request, response) {

    response.status(200);

    response.json({

        message: "200 this page loaded correctly!"

    })

});

app.get("/not-implemented", function(request, response) {

    response.status(501);

    response.json({

        error: "I've never seen a 501 error in my life."

    })

});

http.createServer(app).listen(8080, function() {

   console.log("Application started on port 8080!");

});

//end code