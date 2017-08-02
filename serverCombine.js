
var http = require('http');
var PORTONE = 7000;
var PORTTWO = 7500;

function handleRequestOne(req,res){
	res.end('You look incredibly awesome today !!' + req.url);
}
function handleRequestTwo(req,res){
	res.end('You look like a living Zimbie today !!' + req.url);
}

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(PORTONE,function(){
	console.log('server listening on: http://localhost', PORTONE);
});

serverTwo.listen(PORTTWO,function(){
	console.log('server listening on: http://localhost', PORTTWO);
});

