const express = require('express');

var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var accessController = require('./controllers/access.js');
var addController = require('./controllers/add.js');

app.set('port', process.env.PORT || 5000)
    .use(express.static("public"))
    .use(bodyParser.json()) // support json encoded bodies
    .use(bodyParser.urlencoded({ extended: true }))
    .set('views', path.join(__dirname,"views"))
    .set("view engine", 'ejs')
    .get('/access', accessController.handleUser) //remember to change this back to post later
    .get('/addItem', addController.addItem)
    .listen(app.get('port'), function() {
     console.log("Listening on port: " + app.get('port'));
});

//    