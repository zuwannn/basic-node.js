// method path.resolve([...paths]) คืนค่า absolute path ของ path 
//ใน array ที่นำมาประสานกัน absolute path คือ path ที่เริ่มด้วย root 

var path = require('path');
console.log(path.resolve('/foo', 'bar'));
console.log(path.resolve('foo', '/bar'));
console.log(path.resolve('foo', 'bar'));