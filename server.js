//for use to connect to the express api

//request to module
var express = require('express');

//Create app by creating variable that calls express library as a function 
var app = express();

//allows for adding functionality
app.use(express.static('public'));

//start up server with listen function(port, function)
app.listen(3000, function() {
    console.log('Express server is up on port 3000')
})