/*
 Title: Exercise 6.3
 Author: Richard Krasso
 Date: 3 22 2018
 Modified By: Mary Barrett
 Description: This code is the modified Mongoose example.

 */

//start code

var mongoose = require("mongoose");

var mongoDB = "mongodb://emsUser:*Amesip8@ds127899.mlab.com:27899/ems";


mongoose.connect(mongoDB, {


    useMongoClient: true


});


mongoose.Promise = global.Promise;


var db = mongoose.connection;


db.on("error", console.error.bind(console, "MongoDB connected error: "));


db.once("open", function () {


    console.log("Application connected to mLab MongoDB instance");


});