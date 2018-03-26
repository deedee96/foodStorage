var AWS = require("aws-sdk");
AWS.config.update({
    region: "us-east-1",
});

var docClient = new AWS.DynamoDB.DocumentClient()

var table = "foodNode";


function updateInventory(itemToAdd) {
    console.log("calling update from models");
    docClient.update({
  TableName: table,
  Key: { email: "admin@gmail.com" },
  UpdateExpression: "ADD #inventory :inventory",
  ExpressionAttributeNames: { "#inventory" : "inventory" },
  ExpressionAttributeValues: { ":inventory": docClient.createSet([itemToAdd]) }
})
    
}

module.exports = {
    updateInventory: updateInventory
};

