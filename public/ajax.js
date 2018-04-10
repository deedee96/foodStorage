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
      <th scope="col">Increase</th>
      <th scope="col">Decrease</th>
      <th scope="col">Delete</th>
      
    </tr>
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
      <td><button type="button" class="btn btn-primary" onclick="increaseItem(\'${k}\')">+1</button></td>
      <td><button type="button" class="btn btn-primary" onclick="decreaseItem(\'${k}\')">-1</button></td>
      <td><button type="button" class="btn btn-primary" onclick="deleteItem(\'${k}\')">Drop</button></td>

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


function increaseItem(itemName) {
    var params = {
        name: itemName
    }
    
     $.post('/increaseItem', params, function(data) {
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




function decreaseItem(itemName) {
    var params = {
        name: itemName
    }
    
     $.post('/decreaseItem', params, function(data) {
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
            $("#err2").hide();
            getTable();
        }
    })
}





function updateItem() {
    console.log("Calling add Item");
    var item = $("#item2").val();
    var quantity = $("#quantity2").val();
    
    console.log(item);
    console.log(quantity);
    
    var params = {
        name: item,
        quantity: quantity
    };
    
    $.post('/updateItem', params, function(data) {
        console.log(data);
        if (!data.success) {
            $("#err2").show();
            $("#err2").text("This item isn't in your inventory.Please use add instead.");
        } else {
            $("#err2").hide();
            getTable();
        }
    })
}