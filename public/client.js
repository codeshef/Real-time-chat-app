

// connecting client to server

var socket = io.connect('http://localhost:8081');
socket.on('connect',function(data){

	socket.emit('join','Hello server from client');
});