// example creating simple server 
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!!! my name is suwannee'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080 

//  http://localhost:8080/ 