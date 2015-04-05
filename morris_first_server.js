var http = require('http');



http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<!doctype html>');
	res.write('<html lang="en">');
	res.write('<meta charset="utf-8">');
		res.write('<title>Adam Morris: node.js webserver</title>');
		res.write('<style type="text/css">* {font-family:arial, sans-serif;}</style>');

		res.write('<H1>Hello World</H1>');

		res.write('<div id="content"></br></br><p>This is my first time with html,' +
				' javaScript, node.js, and port forwarding.</p></br></br></br>');

		res.write('<button type="button" onclick="myFunction()" style="height: 100px; width: 300px"><h1>Contact Info</h1></button>');
		res.write('<script>function myFunction() {'+
			' document.getElementById("content").innerHTML = "</br></br>I hope you liked my simple web page. </br></br>Adam Morris";}'	+
			'</script>');

	res.end();

}).listen(8000);

console.log('Server running at port 8000');