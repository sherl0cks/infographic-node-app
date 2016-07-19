var request = require('request');

var host = process.env['jenkinsUrl'] || 'http://demo-cicd-2.innovation.redhat.com:8080/job/create-openshift-project/buildWithParameters';

function processStack(body, cb){
	if (body && body.projectName){


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
	} else {
		cb('no project name specified', null);
	}

	
}
exports.processStack = processStack;