// app/routes.js

// grab the nerd model we just created
var Nerd = require('../models/nerd');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/nerds', function(req, res) {
        // use mongoose to get all nerds in the database
        Nerd.find(function(err, nerds) {

            // if there is an error retrieving, send the error. 
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(nerds); // return all nerds in JSON format
        });
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    
    // route to handle layout angular requests
    app.get('/', function(req, res) {
        res.render('index'); // load our public/index.html file
    });

    // route to handle all angular partial requests
    app.get('/partials/:name', function (req, res) { 
       res.render('partials/' + req.params.name);
    });

};