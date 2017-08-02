
var http = require('http');
var PORT = 7500;

function handleRequest(req,res){
	res.end('You are looking aweful today!!' + req.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log('server s listening on:'+ PORT);
});

