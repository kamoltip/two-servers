
var http = require('http');
var PORT = 7000;

function handleRequest(req,res){
	res.end('You are looking awesome today!!' + req.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log('server s listening to'+PORT);
});

