var AWS = require("aws-sdk");
AWS.config.update({
    region: "us-east-1",
});


var docClient = new AWS.DynamoDB.DocumentClient()

var table = "foodNode";


function getUser(email, password, callback) {
    var params = {
    TableName: table,
    Key:{
        "email": email
    }
    };
    docClient.get(params, function(err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
        callback(null,data);
    }
    });




}

module.exports = {
	getUser:getUser
};