// creating Nodejs application

// Import all dependencies

var http = require("http");
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var server = http.createServer(app);
var io = require("socket.io")(server);


// tell express where to use static files from
app.get('/',function(req,res,next){

      res.sendFile(__dirname+'/public/index.html');


});
app.use(express.static('public'));


server.listen(8081);

console.log("Server is listening at port 8081");

io.on('connection',function(client){

	console.log('Client connected....');
	client.on('join',function(data){
		console.log(data);
	});
});

