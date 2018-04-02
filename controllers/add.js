var addModel = require("../models/add.js");



function addItem(req, res) {
    var name = req.body.name;
    var quantity = req.body.quantity;
    var email = req.session.email;
    
    addModel.updateInventory(name, quantity, email, res);
}





module.exports = {
	addItem: addItem
};
