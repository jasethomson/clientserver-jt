
const express = require("express");
const cors = require("cors");
const server = express();

const name = [{
  "name": "jase"
},{
  "name": "nick"
},{
  "name": "Alex"
}];

const favFood = [{
  "favFood": "burrito",
  "ageDiscovered": 15
}];



server.use( cors() );

server.get("/name", ( request, response )=>{
  response.send(name);
});

server.get("/favFood", ( request, response )=>{
  response.send(favFood);
});

server.listen(3001, () => {
  console.log("Server loaded successfully");
});
