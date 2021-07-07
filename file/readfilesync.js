var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    var data = fs.readFileSync('../page/index.html');
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end(data);
}).listen(8080);