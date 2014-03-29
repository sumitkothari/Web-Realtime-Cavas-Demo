/*var http = require('http');
var couchbase = require('couchbase');

http.createServer(function(request, response) 
{
  	var db = new couchbase.Connection({host: 'localhost:8091', bucket: 'beer-sample'});
  	db.get('new_holland_brewing_company-sundog', function(err, result) 
  	{
  		console.log(result);
  		response.writeHead( 200, { "Content-Type": "application/json" } );
		response.write( JSON.stringify(result) );
  		response.end();
  	});
}).listen(8080);*/

// Require HTTP module (to start server) and Socket.IO
var http = require('http'), ioSok = require('socket.io') , fs = require('fs');

// Start the server at port 8080
var server = http.createServer(function(req, res){ 

	fs.readFile(__dirname + '/index.html', 'utf-8', function(err, data) { // read index.html in local file system
	       if (err) {
	           res.writeHead(404, {'Content-Type': 'text/html'});
	           res.end('<h1>Page Not Found</h1>');
	       } else { 
	           res.writeHead(200, {'Content-Type': 'text/html'});
	           res.end(data);
	       }
	   });
});
server.listen(8080);

var io = ioSok.listen(server);

io.sockets.on('connection', function (socket) 
{
  	socket.on('send_mesg', function (data) 
  	{
    	io.sockets.emit('news', { hello: data.valueSend });
  	});
});