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
        UpdateExpression: "set inventory.#itemName = inventory.#itemName + :i",
        ExpressionAttributeNames: {
            "#itemName": itemName
        },
        ExpressionAttributeValues: {
            ":i": 1
        },
        ReturnValues: "UPDATED_NEW"
    };


    docClient.update(params, function(err, data) {
        if (err) {
            console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
            res.json({success: false});
        } else {
            res.json({success: true});
        }
    }); 
}

module.exports = {
    updateInventory: updateInventory
};


