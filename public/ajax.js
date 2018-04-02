function login() {    
    var email = $('#email').val();
    var password = $('#password').val();
    
    
    var params = {
        email: email,
        password: password
    };
    
    $.post('/login', params, function(result) { 
		if (result && result.success) {
            window.location.assign(result.redirectTo);
		} else {
			$("#status").text("Error logging in.");
		}
    }); 
    
}


function getTable() {
   //var myJSON = JSON.parse(results);
    $.get('/getInventory', function(data) {
    console.log(data);
    var theTable = `<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Items</th>
      <th scope="col">Quantity</th>
      <th scope="col">Delete</th></tr>
  </thead>
  <tbody>
 `

    var count = 1;
    $.each(data.inventory, function(k, v) {
    //display the key and value pair
    theTable += `
    <tr>
      <th scope="row">${count}</th>
      <td>${k}</td>
      <td>${v}</td> 
      <td><button type="button" onclick="deleteItem(\'${k}\')">Drop</button></td> 
    </tr>     
`
    count+=1;
});
    theTable += `</tbody></table>`;
    $("#storage").html(theTable);
        
    })
    
    
    //console.log('Updating the div with these results: ' + results);
}
          
          



function deleteItem(itemName) {
    var params = {
        name: itemName
    }
    
     $.post('/deleteItem', params, function(data) {
        console.log(data);
        if (!data.success) {
            $("#err1").show();
            $("#err1").text("Item already exist!");
        } else {
            $("#err1").hide();
            getTable();
        }
    })   
}



function addItem() {
    console.log("Calling add Item");
    var item = $("#item").val();
    var quantity = $("#quantity").val();
    
    var params = {
        name: item,
        quantity: quantity
    };
    
    $.post('/addItem', params, function(data) {
        console.log(data);
        if (!data.success) {
            $("#err1").show();
            $("#err1").text("Item already exist!");
        } else {
            $("#err1").hide();
            getTable();
        }
    })
}