var updateModel = require("../models/update.js");



function updateItem(req, res) {
    var name = req.body.name;
    var quantity = req.body.quantity;
    var email = req.session.email;
    

    updateModel.updateInventory(name, quantity, email, res);
}





module.exports = {
	updateItem: updateItem
};