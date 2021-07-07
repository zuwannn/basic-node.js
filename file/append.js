// fs.appendFile(), fs.appendFileSync() - ถ้ายังไม่มีไฟล์จะสร้างไฟล์
//พร้อมเพิ่มเนื้อหา  แต่ถ้ามีไฟล์อยู่แล้วจะนำข้อความไปต่อท้าย

var fs = require('fs');
fs.appendFile('newfile.txt', 'Text!!!', function(err, file) {
    if (err) throw err;
    console.log('Saved!');
});

// ใช้ได้ทั้ง create และ update