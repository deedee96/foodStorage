var accessModel = require("../models/access.js");

function handleUser(req, res) {
    //console.log("Calling this function");
    var result = {sucess: false};
	var email = req.body.email;
    var password = req.body.password;
	var token = accessModel.getUser(email, function(err,token) {
        if(!isEmptyObject(token)) {
            if(token.Item.email === email && token.Item.password === password) {
                req.session.email = email;
                req.session.inventory = token.Item.inventory;
                res.json({
                    success: true,
                    redirectTo: './inventory.html'
                });
            }
        } else {
            res.json(result);
        }
    }); 
    
    
    


}


function getInventory(req, res) {
    //console.log("Calling this function");
    var token = accessModel.getUser(req.session.email, function(err,token) {
        if(!isEmptyObject(token)) {
                res.json({
                    inventory: token.Item.inventory
                });
            }
        } 
    ); 
}


function isEmptyObject(obj) {
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
}


module.exports = {
	handleUser: handleUser,
    getInventory: getInventory
};

