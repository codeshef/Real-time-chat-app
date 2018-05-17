# Real-time-chat-app
<html>
<body>
<p>Once Again started Nodejs:)

Hi! We are creating chat-app using framework like Nodejs and libraries like Socket.io and Express.Using Node.js we can write javascript for the server and Socket.io and Express can make use of websockets to push messages to user from server in real-time.</p>

<p>First step is to create directory structure</p>
<li>|-public</li>
  <li>|-index.html</li>
  <li>|-style.css</li>
  <li>|-client.js</li>
<li>|-server.js</li>
<li>|-package.json</li>

<p>dependencies:</p>
<li>-> var http = require("http");</li>
<li>-> var app = require("express");</li>
<li>-> var mongoose = require("mongoose");</li>
<li>-> var io = require("socket.io");</li>

<p>configure the static files folder</p>
<li>-> app.use(express.static(__dirname +'/public'));</li>

<p>In index.html file add your html.....</p>

<p>Now in server.js create http server at port 8081</p>
<li>->server.listen(8081);</li>
<li>->console.log("Server is listening at port 8081");</li>

<p>Now our task is to connect clients to server.</p>
<p>For this we use sockets </p>

<p>In client.js we add following code:</p>

<li>->var socket = io.connect('http://localhost:8081');</li>
<li>->socket.on('connect',function(data){

	socket.emit('join','Hello server from client');
->});</li>

<p>In server.js add following code:</p>
<li>->io.on('connection',function(client){

	console.log('Client connected....');
	client.on('join',function(data){
		console.log(data);
	});
->});</li>
<p> Uptill our app looks like </p>
<img src ="assets/1.png"></img>
<img src = "assets/2.png"></img>
</body>
</html>





