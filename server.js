var http = require('http'),
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
});