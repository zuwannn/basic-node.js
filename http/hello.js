// example creating simple server 
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!!! my name is suwannee'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080 

// การทำงาน
// server จะรอ request อยู่ที่ http://localhost:8080 
// และเมื่อได้รับ request แล้ว จะส่ง header ให้ client 
// โดยมี status code = 200, Content-type เป็น text/plain 
// และแสดงข้อความว่า Hello World! 

// https://zakoschool.herokuapp.com/lesson/nodejs/http