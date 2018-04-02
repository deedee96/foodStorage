var AWS = require("aws-sdk");
AWS.config.update({
    region: "us-east-1",
});

var docClient = new AWS.DynamoDB.DocumentClient()

var table = "foodNode";


function updateInventory(itemName, email,res) {
    var params = {
        TableName: table,
        Key: { email: email },
        UpdateExpression: "REMOVE inventory.#itemName",
        ExpressionAttributeNames: {
            "#itemName": itemName
        }
    }


    docClient.update(params, function(err, data) {
        if (err) {
            res.json({success: false});
        } else {
            res.json({success: true});
        }
    }); 
}

module.exports = {
    updateInventory: updateInventory
};


