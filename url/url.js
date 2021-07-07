var http = require('http');
var url = require('url');
http.createServer(function(req, res) {
    var x = url.parse(req.url, true);
    if (x.pathname == '/') {
        if (x.search != '') {
            res.end(JSON.stringify(x.query));
        } else {
            res.end('No query');
        }
    } else {
        res.statusCode = 404;
        res.end('404 Not found.');
    }
}).listen(3000);