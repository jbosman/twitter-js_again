// Solution video link
// https://www.youtube.com/watch?v=0NvankAwgHU&
// Solution Code
// https://github.com/FullstackAcademy/1607-Library

var express = require('express');
var chalk = require('chalk');
var morgan = require('morgan');

var app = express();

function ServerMessage(string){
	console.log(chalk.blue(string));
}

app.use("/", function( req, res, next) {
	res.status(200);
	ServerMessage(	"Received " + chalk.bgMagenta(req.method) + " request on " + 
					chalk.bgGreen(req.url)  + " and responding with " + chalk.bgMagenta(res.statusCode));
	next();
});

app.use( morgan('combined'));

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

