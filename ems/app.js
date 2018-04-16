

/*
 Title: Chai Example
 Author: Richard Krasso
 Date: 4 13 2018
 Modified By: Mary Barrett
 Description: This code is derived from a number of class examples by Professor Krasso.

 */

var mongoose = require("mongoose");

var helmet = require("helmet");

var bodyParser = require("body-parser");

var cookieParser = require("cookie-parser");

var csrf = require("csurf");

// setup csrf protection

var csrfProtection = csrf({cookie: true});

var employee = require("./models/employee");

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

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

var Schema = mongoose.Schema;

var app = express();

app.use(helmet.xssFilter());

app.use(bodyParser.urlencoded({

    extended: true

}));

app.use(cookieParser());

app.use(csrfProtection);

app.use(function(request, response, next) {

    var token = request.csrfToken();

    response.cookie('XSRF-TOKEN', token);

    response.locals.csrfToken = token;

    next();

});

app.use(bodyParser.json());

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

app.use(logger("short"));

// model

app.get("/", function (request, response) {

    response.render("index", {

        title: "Home page"

    });

});

// routing

app.get("/new", function(request, response) {

    response.render("new", {

        message: "New Employee Entry Page"

    });

});

app.get("/list", function(request, response) {
        employee.Employee.find({}, function(error, employees) {
           if (error) throw error;
           response.render("list", {
               title: "Employee List",
               employees: employees
           });
        });
    });

app.post("/process", function(request, response) {

    // console.log(request.body.txtName);
 
    if (!request.body.txtFName && !request.body.txtLName) {
 
        response.status(400).send("Entries must have a name");
 
        return;
 
    }
 
    // get the request's form data
 
    var firstName = request.body.txtFName;
 
    console.log(firstName);

    var lastName = request.body.txtLName;

    console.log(lastName);
 
    // create a fruit model
 
    var newEmployee = new employee.Employee({
 
        firstName: firstName,
        lastName: lastName
 
    });
 
    // save
 
    newEmployee.save(function (error) {
 
        if (error) throw error;
 
        console.log(firstName + lastName + " saved successfully!");
 
    });
 
    response.redirect("/");
 
 });

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});