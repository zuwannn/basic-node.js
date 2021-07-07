// ใช้ fs.unlink() และ fs.unlinkSync() ในการลบไฟล์

// ถ้าไม่มีไฟล์จะแสดง Error แต่ถ้ามีไฟล์จะลบไฟล์และแสดงข้อความว่า 
// "File deleted!" ทาง console

var fs = require('fs');
fs.unlink('myfile.txt', function(err) {
    if (err) throw err;
    console.log('File deleted!');
});