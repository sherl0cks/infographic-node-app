var request = require('request');

var host = process.env['jenkinsUrl'] || 'http://localhost:8080';

function processStack(body, cb){
	console.log('Making call to '+ host);
	var url = host + "?project_name="+ body.projectName;
	console.log('calling '+ url);
	request(url, function (error, response, body) {

	  if (!error && response.statusCode == 201) {
	    //console.log(body) // Show the HTML for the Google homepage.
	    cb(null, 'success'); 
	  } else {
	  	if (!error){
	  		error = 'Unknown error';
	  	}
	  	cb(error,null);
	  }
	})

	
}



exports.processStack = processStack;