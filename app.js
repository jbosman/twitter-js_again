// Solution video link
// https://www.youtube.com/watch?v=0NvankAwgHU&
// Solution Code
// https://github.com/FullstackAcademy/1607-Library

var express = require('express');
var chalk = require('chalk');
var morgan = require('morgan');
var swig = require('swig');

var app = express();

// Swig settings
app.set('views', __dirname + '/views'); // point res.render to the proper directory
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', swig.renderFile); // when giving html files to res.render, tell it to use swig
swig.setDefaults({ cache: false });		// Turns off caching


// Middleware functions
function ServerMessage(string){
	console.log(chalk.blue(string));
}

app.use("/", function( req, res, next) {
	ServerMessage("Request info:");
	ServerMessage(	chalk.bgMagenta(req.method) + "  " + chalk.bgGreen(req.url) + "  " +  chalk.bgMagenta(req.statusCode));
	ServerMessage("Response info:")
	ServerMessage(	chalk.bgMagenta(req.method) + "  " + chalk.bgGreen(req.url) + "  " +  chalk.bgMagenta(res.statusCode));
	next();
});

app.use( morgan('combined'));

// Allows for neatly organizing routes
var routes = require("./routes");
app.use("/", routes);





app.listen(3000, function(req, res){
	ServerMessage("Server is up!");
});




// Code from previous parts of lab

// var Locals = {
// 	title: "An Example",
// 	people: [
// 	{ name: "Gandalf" }, 
// 	{ name: "Frodo" },
// 	{ name: "Hermione" } 
// 	]
// };

// swig.renderFile( __dirname + "/views/index.html", Locals, function( err, output ){
// 	if(err) throw err;
// 	console.log(output);

// });

// app.get("/", function( req, res){
// 	res.render( 'index', Locals );
// 	//res.end();
// });

// app.get("/news", function( req, res){
// 	res.send("Welcome to the news section.");
// 	res.end();
// });

