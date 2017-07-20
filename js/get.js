/* Include library */
var querystring = require('querystring');
var fs = require('fs');

/* Parse query to object */
var param = querystring.parse(process.env.QUERY_STRING);
var nameList = JSON.parse(fs.readFileSync('./data/country.json', 'utf8'));

/* Return header to browser */
console.log('Content-type: text/html; charset="utf-8"\n');

/* Return HTML content */
console.log('<h1>Hello, ' + nameList[param.id] + '</h1>');