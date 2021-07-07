# package.json
เป็นไฟล์ JSON ที่บ่งบอกข้อมูลต่างๆของ project ที่ใช้ node package โดยทำหน้าที่เป็น meta data และคอยบอกว่า project นั้นทำงานยังไง

<br>
<h3>การสร้างไฟล์ package.json</h3>

<ul>- สามารถใช้คำสั่งของ npm init สั่งสร้าง package.json </ul>
<ul>- หลังจากพิมพ์คำสั่ง npm init แล้วจะต้องกรอก ชื่อ project, version, คำอธิบาย เป็นต้น</ul>

<h3>Script ใน package.json</h3>

script ใน package.json ทำหน้าที่คล้ายกับคำสั่งลัด 
<br><ul>- เพิ่ม "start": "node index.js" ลงใน script ที่อยู่ในไฟล์ package.json</ul>
<ul>- เมื่อ ใช้คำสั่ง npm start จะมีค่าเท่ากับคำสั่ง node index.js</ul>

<h3>Dependencies ในไฟล์ package.json</h3>

Dependencies คือสิ่งที่บอกว่า project นั้นๆ จะใช้ node package ใดบ้าง ซึ่งมีประโยชน์มากๆ เช่น เมื่อเราต้องการย้าย project ไปเขียนในเครื่องคอมพิวเตอร์อีกเครื่อง เราสามารถย้ายแค่ source code ไม่จำเป็นต้องย้ายโฟลเดอร์ "node_modules" ไปด้วย แล้วในคอมพิวเตอร์ใหม่ที่เราย้าย source code ไป เราสามารถใช้คำสั่ง npm install จากนั้น NPM จะดึง node package ที่เราระบุไว้ใน package.json มาให้ทั้งหมด
<br><ul>- การ install node package พร้อมบันทึกลงใน package.json ต้องไปในโฟลเดอร์ project</ul>
<ul>- หลังจากที่เข้ามาในโฟลเดอร์ project แล้ว สามารถใช้คำสั่ง npm install --save (package name)</ul>