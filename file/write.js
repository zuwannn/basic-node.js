// fs.writeFile(), fs.writeFileSync() - ถ้ายังไม่มีไฟล์จะสร้างไฟล์
// พร้อมเพิ่มเนื้อหา แต่ถ้ามีไฟล์อยู่แล้วจะเขียนข้อความทับเนื้อหาเดิม

var fs = require('fs');
fs.open('newfile.txt', 'w', function(err, file){
    if(err) throw err;
    console.log('save!');
});

// ใช้ได้ทั้ง create และ update