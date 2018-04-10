var decreaseModel = require("../models/decrease.js");



function decreaseItem(req, res) {
    var name = req.body.name;
    var email = req.session.email;
    
    decreaseModel.updateInventory(name, email, res);
}





module.exports = {
	decreaseItem: decreaseItem
};