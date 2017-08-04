//for use to connect to the express api

//request to module
var express = require('express');

//Create app by creating variable that calls express library as a function 
var app = express();

//allows use of host env. const should be all caps by convention
const PORT = process.env.PORT || 3000;

//request to ensure http traffic(http/https)
app.use(function(req, res, next) {
    if(req.headers['x-forwarded-proto']=== 'http') {
        next();
    } else {
        res.redirect('http://'+ req.hostname + req.url);
    }
});

//allows for adding functionality
app.use(express.static('public'));

//start up server with listen function(port, function)
app.listen(PORT, function() {
    console.log('Express server is up on port '+ PORT);
});