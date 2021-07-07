// การสร้าง Server อย่างง่าย แบบ Dynamic URLs
var http = require('http');
var app = http.createServer(function(req, res){
    if(req.method == 'GET'){
        if(req.url == '/'){
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end('<h1>Home Page</h1>');
        }else if(req.url == '/hello'){
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end('Hello World!');
        }else{
            res.writeHead(404, {
                'Content-Type' : 'text/html'
            });
            res.end('404 Not Found.')
        }
    }else{
        res.writeHead(404, {
            'Content-Type' : 'text/html'
        });
        res.end('404 Not Found.');
    }
});
app.listen(3000);



// server จะรอ request อยู่ที่ http://localhost:3000 และเมื่อได้รับ request แล้ว จะทำงานดังนี้

// ตรวจสอบว่าเป็น GET method หรือไม่
// ถ้าเป็น GET method
//     ตรวจสอบ url ถ้า url เป็น "/"
//         ส่ง status code 200 และคำว่า "<h4>Home page</h4>"
//     ตรวจสอบ url ถ้า url เป็น "/hello"
//         ส่ง status code 200 และคำว่า "Hello World!"
//     ถ้าไม่เป็น url ที่กล่าวมาข้างต้นเลย
//         ส่ง status code 404 และคำว่า "404 Not found."
// ถ้าไม่เป็น GET method
//     ส่ง status code 404 และคำว่า "404 Not found."

