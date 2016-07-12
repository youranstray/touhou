/*var http = require('http'),
	fs = require('fs');

fs.readFile('./app/index.html', function(err, html) {
	if(err) {
		throw err;
	}
	http.createServer(function(req, res) {
		res.writeHeader(200, {"Content-Type": "text/html"});
		res.write(html);
		res.end();
	}).listen(3030);
	console.log('HTTP server is listening at port 3030.');
});*/

var express = require('express');
var app = express();
var fs = require('fs');

app.use('/libs', express.static(__dirname + '/node_modules'));
app.use('/app', express.static(__dirname + '/app'));


fs.readFile('./app/index.html', function(err, html) {
	if(err) {
		throw err;
	}
	app
		.get('/', function(req, res) {
			res.writeHeader(200, {"Content-Type": "text/html"});
			res.write(html);
			res.end();
		})
		.listen(3031, function() {
			console.log('Example app listening on port 3031.')
		});
});