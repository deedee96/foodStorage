var AWS = require("aws-sdk");
AWS.config.update({
    region: "us-east-1",
});


var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing food into foodNode. Please wait.");



//Remember to check for inventory
 var params = {       
     TableName: "foodNode",
    Item: {
        "email":  "admin@gmail.com",
        "fname": "Daniel",
        "lname": "Dang",
        "password": "password",
        "inventory":  {
            "Chicken Soup": 1,
            "Ramen Noodles": 10
        }
    }
};

docClient.put(params, function(err, data) {
    if (err) {
       console.error("Unable to add movie", movie.title, ". Error JSON:", JSON.stringify(err, null, 2));
   } else {
       console.log("PutItem succeeded");
   }
    });