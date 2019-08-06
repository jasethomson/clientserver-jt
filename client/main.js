$(document).ready( startApp );

function startApp(){
  getData();
  getFood();
}

function getData(){
  var settings = {
    url: "http://localhost:3001/name",
    method: "get",
    dataType: "json",
    success: handleDataFromServer,
  }
  $.ajax(settings);
}

function handleDataFromServer(response){
  console.log(response);
  for(var nameIndex = 0; nameIndex < response.length; nameIndex++){
    var nameDiv = $("<div>");
    nameDiv.text(response[nameIndex].name);
    $("body").append(nameDiv);
  }
}

function getFood(){
  var foodSettings = {
    url: "http://localhost:3001/favFood",
    method: "get",
    dataType: "json",
    success: handleFoodFromServer,
  }
  $.ajax(foodSettings);
}

function handleFoodFromServer(response){
  console.log(response);
}
