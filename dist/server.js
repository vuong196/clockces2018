var express = require ('express'); 
var path = require ('path'); 
var serveStatic = require ('serve-static');
app = express (); 
app.use (serveStatic (__ dirname + "/ dist"));
var port = process.env.PORT || 5000; 
app.listen (cổng);
console.log ('server start' + port);