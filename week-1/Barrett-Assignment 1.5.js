var header = require('../header.js');

/*
 Title: Module Example
 Author: Richard Krasso
 Date: 2 22 2018
 Modified By: Mary Barrett
 Description: This code demonstrates that it listens to browser requests.

 */

// start program

console.log(header.display('Mary', 'Barrett', 'Assignment 1.5'));

console.log(" ");

//Recreate the Node.js Server Example using your own body message

var http = require("http");

function processRequest(req, res) {

var body = "I changed the message!!!";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);