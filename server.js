var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.use(bodyparser.json());

app.get("/", function(req, res){
	res.end("Hello, World");
});

app.listen(process.env.PORT || <default port>, function(){
	console.log("Listening on port 8080");
});