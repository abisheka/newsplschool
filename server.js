
var express = require('express');
var application = express();

//Making server file to assign port dynamically.
var port = process.env.PORT || 7010;

//Making express to look in the public directory for (css, js, html .....).
application.use(express.static(__dirname + '/public'));
application.use('/images', express.static(__dirname + '/images'));

//Setting the home page
application.get('/', function(request, response){
	response.sendfile('index');
});

application.listen(port, function(){
	console.log('App is running on port: ' + port);
});