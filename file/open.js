//ใช้ fs.open(), fs.openSync() ในการสร้างไฟล์เปล่า
var fs = require('fs');
fs.open('newfile.txt', 'w', function(err, file) {
    if (err) throw err;
    console.log('Saved!');
});