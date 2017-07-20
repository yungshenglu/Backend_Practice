#!/usr/local/bin/node

/* Include library */
var qs = require('qs');
var fs = require('fs');

/* Parse JSON file for name list */
var param = qs.parse(fs.readFileSync('/dev/stdin', 'utf-8'));
var nameList = JSON.parse(fs.readFileSync('./data/country.json', 'utf8'));

/* Return header to browser */
console.log('Content-type: text/html; charset="utf-8"\n');

/* Return HTML content */
console.log('<h1>Hello, ' + nameList[param.id] + '</h1>');