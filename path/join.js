// method path.join([...paths]) คืนค่า string ของ path ใน array ที่นำมาประสานกัน

var path = require('path'); 
console.log(path.join('/foo', 'bar'));
console.log(path.join('/foo', 'bar/baz'));
console.log(path.join('/foo', 'bar/baz', '../asd'));