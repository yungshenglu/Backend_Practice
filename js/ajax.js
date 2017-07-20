#!/usr/local/bin/node

/* Include library */
var querystring = require('querystring');
var fs = require('fs');

/* Parse query to object */
var param = querystring.parse(process.env.QUERY_STRING);
var nameList = JSON.parse(fs.readFileSync('./data/country.json', 'utf8'));

/* Return header to browser */
console.log('Content-type: text/html; charset="utf-8"\n');

setTimeout(function() {
    console.log(nameList[param.id]);
}, 1500);