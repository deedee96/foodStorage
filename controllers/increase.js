var increaseModel = require("../models/increase.js");



function increaseItem(req, res) {
    var name = req.body.name;
    var email = req.session.email;
    
    increaseModel.updateInventory(name, email, res);
}





module.exports = {
	increaseItem: increaseItem
};