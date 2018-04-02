const express = require('express');
var session = require('express-session');



var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var accessController = require('./controllers/access.js');
var addController = require('./controllers/add.js');
var deleteController = require('./controllers/delete.js');



//router.post('/', accessController.handleUser);


app.set('port', process.env.PORT || 5000)
    .use(express.static("public"))
    .use(bodyParser.json()) // support json encoded bodies
    .use(bodyParser.urlencoded({ extended: true }))
    .use(session({
    secret: 'banana',
    resave: false,
    saveUnitialized: true
}))
    .set('views', path.join(__dirname,"views"))
    .set("view engine", 'ejs')
    .post('/login', accessController.handleUser)
    .get('/getInventory',accessController.getInventory)
    .post('/addItem', addController.addItem)
    .post('/deleteItem', deleteController.deleteItem)
    .listen(app.get('port'), function() {
     console.log("Listening on port: " + app.get('port'));
});






/*function verifyLogin(request, response, next) {
	if (request.session.email) {
		// They are logged in!
        response.redirect("/public/inventory.html");
		// pass things along to the next function
		next();
	} else {
		// They are not logged in
		// Send back an unauthorized status
		response.redirect('/inventory.html');
	}
}*/
//    