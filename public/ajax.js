function search() {
    var item = document.getElementById("item");
    var quantity = document.getElementById("quantity");
    var add_button = document.getElementById("add_button");
    
    
    item.style.display = "inline";
    quantity.style.display = "inline";
    add_button.style.display = "inline";

    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log("Searching...");
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xmlhttp.status == 200) {
               document.getElementById("storage").innerHTML = updatePage(xmlhttp.responseText);
               //console.log("Back from the server with: " + xmlhttp.responseText);
               
           }
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    };

    //Get your book name here
    
    xmlhttp.open("GET",`/access?email=${email}&password=${password}`, true);
    xmlhttp.send();
}


function updatePage(results) {
   //var myJSON = JSON.parse(results);
    var result = $.parseJSON(results);
    var theTable = `<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Items</th>
      <th scope="col">Quantity</th></tr>
  </thead>
  <tbody>
 `

    var count = 1;
    $.each(result.Item.inventory, function(k, v) {
    //display the key and value pair
    theTable += `
    <tr>
      <th scope="row">${count}</th>
      <td>${k}</td>
      <td>${v}</td> 
    </tr>     
`
    count+=1;
});
    theTable += `</tbody></table>`;
    return theTable;
    //console.log('Updating the div with these results: ' + results);
}


function addItem() {
    var item = document.getElementById("item").value;
    var quantity = document.getElementById("quantity").value;
    var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xmlhttp.status == 200) {
               //document.getElementById("storage").innerHTML = updatePage(xmlhttp.responseText);
               //console.log("Back from the server with: " + xmlhttp.responseText);
               console.log("Doing something!");
           }
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    };

    //Get your book name here
    
    xmlhttp.open("GET",`/addItem?name=${item}&quantity=${quantity}`, true);
    xmlhttp.send();
    

}