var accessModel = require("../models/access.js");

function handleUser(req, res) {
	var email = req.query.email;
	var result = accessModel.getUser(email, function(err,result) {
        res.json(result);
    });   

}


module.exports = {
	handleUser: handleUser
};

