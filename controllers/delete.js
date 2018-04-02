var deleteModel = require("../models/delete.js");



function deleteItem(req, res) {
    var name = req.body.name;
    var email = req.session.email;
    
    deleteModel.updateInventory(name, email, res);
}





module.exports = {
	deleteItem: deleteItem
};
