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

// การทำงาน
// เมื่อ server พร้อมที่จะรอ request แล้ว จะแสดงข้อความทาง cmd 
// และจะรอ request อยู่ที่ http://localhost:3000 
// และเมื่อได้รับ request แล้ว จะส่ง header ให้ client 
// โดยมี status code = 200, Content-type เป็น text/html 
// และแสดงข้อความว่า Hello World! 

// ไม่ว่าจะเปลี่ยน path เป็นอะไร หรือใช้ query แต่การแสดงผลก็ไม่เปลี่ยนแปลง 