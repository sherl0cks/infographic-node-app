var express = require('express');
var cors = require('cors');
var app = express();
var stack = require('./lib/stack');
var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser());
app.post('/stack', function (req, res) {
	console.log(req.body);
	console.log('in / route');
	stack.processStack(req.body,function(err, response){
		if (err){
			res.status(500).send(err);
		} else {
			res.send(response);
		}
		
	});	
	
  	
});

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080
app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});