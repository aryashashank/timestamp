var express = require('express');
var app = express();
var fs = require('fs');
var bodyparser = require('body-parser');

app.use(bodyparser.json());

app.get("/", function(req, res){
	res.end("Hello, World");
});

app.listen(8080, function(){
	console.log("Listening on port 8080");
});