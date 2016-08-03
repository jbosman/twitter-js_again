var express = require('express');

var app = express();

function ServerMessage(string){
	console.log(string);
}

app.use("/", function( req, res, next) {
	ServerMessage("Received request on "+ req.url  + " and responding...");
	next();
});

app.get("/", function( req, res){
	res.send("Hello world!");
	res.end();
});

app.get("/news", function( req, res){
	res.send("Welcome to the news section.");
	res.end();
});

app.listen(3000, function(req, res){
	ServerMessage("Server is up!");
});

