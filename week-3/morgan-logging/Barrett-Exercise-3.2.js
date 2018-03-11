/*
 Title: Exercise 3.2
 Author: Richard Krasso
 Date: 3 07 2018
 Modified By: Mary Barrett
 Description: This code is the modified logging example.

 */

//start code

var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.get('/', function(req, res){
    res.render('index', {
        message: 'Welcome to my dog\s personal homepage!'
    });
});

http.createServer(app).listen(3000, function() {
    console.log('Application started and listening on port %s', 3000);
});