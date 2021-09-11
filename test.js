var http = require('http');

var userCount = 0;
http.createServer(function( request, response) {
	//console.log('New Connection');

	var numOne  = prompt('Enter a number');
	response.writeHead(200, {'Content-Type':'text/plain'});
		response.write(numOne + '\n');
	response.end();
}).listen(8080);

console.log('Server Started. Open Browser at http://localhost:8080');
