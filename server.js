// creating Nodejs application

// Import all dependencies

var http = require("http");
var app = require("express");
var mongoose = require("mongoose");
var io = require("socket.io");

// tell express where to use static files from
app.use(express.static(__dirname + '/public'));