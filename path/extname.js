// method path.extname(path) คืนค่านามสกุลของไฟล์

var path = require('path');
  
console.log(path.extname('index.html'));
console.log(path.extname('index.coffee.md'));
console.log(path.extname('index.'));
console.log(path.extname('index'));