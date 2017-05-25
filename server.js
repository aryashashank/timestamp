var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var moment = require('moment');
app.use(bodyparser.json());

app.get('/favicon.ico', function(req, res) {
    res.sendStatus(204);
});
app.get('/',function(req, res){
	res.end("type a date in url");
});

app.get("/:query", function(req, res){
	
var myDate;
  if(/^\d{8,}$/.test(req.params.query)) {
    myDate = moment(req.params.query, "X");
  } else {
    myDate = moment(req.params.query, "MMMM D, YYYY");
  }

  if(myDate.isValid()) {
    res.json({
      unix: myDate.format("X"),
      natural: myDate.format("MMMM D, YYYY")
    });
  } else {
    res.json({
      unix: null,
      natural: null
    });
  }
});



app.listen(process.env.PORT || 8080, function(){
	console.log("Listening on port %d",process.env.PORT || 8080);
});