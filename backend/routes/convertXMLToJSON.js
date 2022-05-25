/**
 * Route - convertXMLToJSON.js
 * 
 * Purpose - Route (API) for convert XMl to JSON
 * 
 * Author - H.M. Kasuni Navodya(IT19144986)
 *
 */ 

 const router = require('express').Router();
 const xml2js = require('xml2js');
 const parser = new xml2js.Parser();
 
 /**
  * API DESC      - Convert XMl to JSON
  * API           - http://localhost:3001/convertToJson/convertXmlToJson
  * TARGET IMPACT - convert sample xml file to json file page| FRONTEND -> SRC-> COMPONENTS -> PAGES -> convertXmlToJson.js  
  */
 router.route('/convertXmlToJson').post(async (req, res) => {
 
     console.log('REQUEST >>>>', req.body.xmlFile);
 
     if(req.body){
 
         parser.parseString(req.body.xmlFile, function(error, result) {
             if(error === null) {
                 console.log(result);
                 res.status(200).send({ data: JSON.stringify(result, null, 1) }); //format the json details
             }
             else {
                 console.log('Error', error);
             }
         });
     }
 });
 
 router.route('/XmlToJson/:xml').get(async (req, res) => {
     console.log('REQUEST >>>>', req.params.xml);
 });
 
 module.exports = router;
