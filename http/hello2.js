// ตัวอย่างการสร้าง Server อย่างง่าย และมีการแจ้งเตือนเมื่อ server พร้อมทำงาน

var http = require('http');
var ipaddress = '127.0.0.1';

// create server
var app = http.createServer(function(req, res){
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.write('Hello');
    res.end(' World!');
});

app.listen(3000, ipaddress,function(){
    console.log('Node server started on '+ ipaddress +':'+app.address().port);
});