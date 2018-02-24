var header = require('../header.js');

/*
 Title: Module Example
 Author: Richard Krasso
 Date: 2 22 2018
 Modified By: Mary Barrett
 Description: This code parses out a URL into protocol, host, and query sections.

 */

// start program

console.log(header.display('Mary', 'Barrett', 'Exercise 1.3'));

console.log(" ");

//Recreate the Module Example using your own URL and query value (name=smith)

var url = require("url");
    
var parsedURL = url.parse("https://developer.mozilla.org/?en-US/docs/Web/API/Node");
    
//Output the results

console.log(parsedURL.protocol);
    
console.log(parsedURL.host);
    
console.log(parsedURL.query);
    