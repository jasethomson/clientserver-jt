$(document).ready( startApp );

function startApp(){
  getData();
  getFood();
}

function getData(){
  var settings = {
    url: "../server/getnames.json",
    method: "get",
    dataType: "json",
    success: handleDataFromServer,
  }
  $.ajax(settings);
}

function handleDataFromServer(response){
  console.log(response);
}

function getFood(){
  var foodSettings = {
    url: "../server/getfood.json",
    method: "get",
    dataType: "json",
    success: handleFoodFromServer,
  }
  $.ajax(foodSettings);
}
function handleFoodFromServer(response){
  console.log(response);
}
