const express = require('express');

var app = express();
var path = require('path');


var controller = require('./controllers/access.js')

app.set('port', process.env.PORT || 5000)
    .use(express.static("public"))
    .set("view engine", 'ejs')
    .get('/access', controller.handleUser)
    .listen(app.get('port'), function() {
     console.log("Listening on port: " + app.get('port'));
});

//    .set('views', path.join(__dirname,"views"))