// server.js

// modules =================================================
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');


// configuration ===========================================
    
// config files
var db = require('./config/db');

// set our port
var port = process.env.PORT || 8080; 

// connect to our mongoDB database 
mongoose.connect(db.url); 

app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/public')); 

app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'jade');


// routes ==================================================
require('./app/routes/router')(app); // configure our routes


// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);               
console.log('meanApp started on http://localhost:' + port);

// expose app           
exports = module.exports = app;    