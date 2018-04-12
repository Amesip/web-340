// required

var mongoose = require("mongoose");

var employee = require("./models/employee");

// mLab connection

var mongoDB = "mongodb://emsUser:*Amesip8@ds127899.mlab.com:27899/ems";

mongoose.connect(mongoDB, {

    useMongoClient: true

});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function() {

    console.log("Application connected to mLab MongoDB instance");

});

var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

app.use(logger("short"));

// model

var Employee = new employee.Employee({

    firstName: "Mary",
    lastName: "Barrett"

});


app.get("/", function (request, response) {

    response.render("index", {

        title: "Home page"

    });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});