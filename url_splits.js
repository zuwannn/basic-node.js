// The URL module splits up a web address into readable parts.
var url = require('url');
var adr = 'http://localhost:8080/index.html?year=2017&month=february';
var q = url.parse(add, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;

console.log(qdata.month);