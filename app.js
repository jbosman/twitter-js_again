var express = require('express');

var app = express();

function ServerMessage(string){
	console.log(string);
}

app.get("/", function( req, res){
	ServerMessage("Received request on \"\/\" and responding...");
	res.send("Hello world!");
	res.end();
});

app.get("/news", function( req, res){
	ServerMessage("Received request on \"\/news\" and responding...");
	res.send("Welcome to the news section.");
	res.end();
});

app.listen(3000, function(req, res){
	ServerMessage("Server is up!");
});

