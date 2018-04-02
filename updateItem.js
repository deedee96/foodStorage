var AWS = require("aws-sdk");
AWS.config.update({
    region: "us-east-1",
});

var docClient = new AWS.DynamoDB.DocumentClient()

var table = "foodNode";

var quantity = 3;
var itemName = "Rice";

var params = {
    TableName: table,
    Key: { email: "admin@gmail.com" },
    UpdateExpression: "SET inventory.#itemName = :quan",
    ConditionExpression: "attribute_not_exists(inventory.#itemName)", 
    ExpressionAttributeValues: {
        ":quan": quantity   
    },
    ExpressionAttributeNames: {
        "#itemName": itemName
    }
}


docClient.update(params, function(err, data) {
    if (err) {
        console.log("Unable to update item: " + "\n" + JSON.stringify(err, undefined, 2));
    } else {
        console.log("UpdateItem succeeded: " + "\n" + JSON.stringify(data, undefined, 2));
    }
});