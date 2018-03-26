var accessModel = require("../models/access.js");

function handleUser(req, res) {
	var email = req.query.email;
    var password = req.query.password;
	var result = accessModel.getUser(email, password, function(err,result) {
        res.json(result);
    });   

    
    console.log('Your email is ' + email);
    console.log('Your password is '+ password);
}


module.exports = {
	handleUser: handleUser
};

