//this will require this imformation from node_modules
var express = require('express');
app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
	console.log('listening of port 3000');
});