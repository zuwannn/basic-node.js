// ใช้ fs.readFile() และ fs.readFileSync() ในการอ่านไฟล์

var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    fs.readFile('../page/index.html', function(err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(data);
    });
}).listen(8080);