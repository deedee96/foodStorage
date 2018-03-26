var accessModel = require("../models/add.js");



function addItem(req, res) {
    var name = req.query.name;
    var quantity = req.query.quantity;
    var itemToAdd = JSON.stringify({
    name: quantity
    });
    console.log("calling add from controller");
    accessModel.updateInventory(itemToAdd);
}





module.exports = {
	addItem: addItem
};
