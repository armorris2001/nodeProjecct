/*
Name: Adam Morris
Date: 4/4/2015
Description:
This is a basic Node.js http server that listens to port 8000 of the local
router. So far I've found that the router needs to have port 8000 and the
webserver ports of 80 and 443 open. All of them need to be TCP.

Node.js needs to be installed on the local computer in order for this to 
run. In order to start up the server on the desired port:
1. Open Command Prompt
2. cd (change directory) to the folder where the server.js file is stored.
3. Type 'node server.js' to start up the server.
4. If your router is configured correctly, the webserver will be active.

*/

// Require the sever to be hypertext transport protocol
var http = require('http');

// Begin an http server. req = request, res = response
http.createServer(function (req, res){
	
	// Specify that the webserver will be text and html based.
	res.writeHead(200, {'Content-Type': 'text/html'});
	
	// This is a basic html page with a javascript based button.
	res.write('<!doctype html>');
	res.write('<html lang="en">');
	res.write('<meta charset="utf-8">');
		
		// Title for webpage tab
		res.write('	<title>
						Adam Morris: node.js webserver
					</title>');
		
		// Set the text style to arial
		res.write(' <style type="text/css">* 
						{font-family:arial, sans-serif;}
				    </style>');

		// Set the webserver's page headline to 'Hello World'.
		res.write(' <H1>
						Hello World
					</H1>');

		// Mutable message to be changed by javaScript function.
		res.write(' <div id="content">
						</br></br><p>
							This is my first time with html,
							javaScript, node.js, and port forwarding.
						</p></br></br></br>');

		// This sets up a clickable button that will change the mutable
		// text above.
		res.write(' <button type="button" onclick="myFunction()" 
						style="height: 100px; width: 300px">
						<h1>Contact Info</h1>
						</button>');
		
		// JavaScript funtion to alter the mutable message when the button
		// is clicked. Need to explore how to have javaScript work without
		// having to write the javaScript inside the wrappers.
		res.write(' <script>
						function myFunction() {
							document.getElementById("content").innerHTML = 
							"</br></br>
							I hope you liked my simple web page. 
							</br></br>
							Adam Morris";}
					</script>');

	// This is the end of the function.
	res.end();

// Sets port 8000 as the port to listen to.
}).listen(8000);	

// Output to Console to let the user know the webserver is listening to
// port 8000.
console.log('Server running at port 8000');