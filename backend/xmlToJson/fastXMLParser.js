//1st try
//let xmlParser = require('xml2json');
// var parser = require('fast-xml-parser');

// let fs = require('fs');

// fs.readFile('../uploadXML/mockXML.xml', 'utf8', function (err, data) {
//     if (err) throw err;
//         var jsonData = parser.parse(data, null, true);
    
//     console.log(jsonData);
// });

//2nd try
var convert = require('xml-js');
var xml = require('fs').readFileSync('../uploadXML/login.xml', 'utf8');

var result = convert.xml2json(xml, {compact: true, spaces: 4});
console.log(result);
