# Real-time-chat-app
Once Again started Nodejs:)

Hi! We are creating chat-app using framework like Nodejs and libraries like Socket.io and Express.Using Node.js we can write javascript for the server and Socket.io and Express can make use of websockets to push messages to user from server in real-time.

First step is to create directory structure
|-public
  |-index.html
  |-style.css
  |-client.js
|-server.js
|-package.json

In server.js define all the  preinstalled 
dependencies:
-> var http = require("http");
-> var app = require("express");
-> var mongoose = require("mongoose");
-> var io = require("socket.io");

configure the static files folder
-> app.use(express.static(__dirname +'/public'));

In index.html file add your html.....

Now in server.js create http server at port 8081
->server.listen(8081);
->console.log("Server is listening at port 8081");

Now our task is to connect clients to server.
For this we use sockets 

In client.js we add following code:

->var socket = io.connect('http://localhost:8081');
->socket.on('connect',function(data){

	socket.emit('join','Hello server from client');
->});

In server.js add following code:
->io.on('connection',function(client){

	console.log('Client connected....');
	client.on('join',function(data){
		console.log(data);
	});
->});





