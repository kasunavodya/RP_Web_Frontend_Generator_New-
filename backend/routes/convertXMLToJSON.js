const router = require('express').Router();

//const filepath = require('../uploadXML/login.xml');

const convert = require('xml-js');
const xml = require('fs');

router.route('/convertXmlToJson').post(async (req, res) => {

    console.log('REQUEST >>>>', req.body);

    // if(req.body){
    //     //var xmlFile = xml.read(req.body);
    //     var xmlFile = xml.readFileSync('../uploadXML/login.xml', 'utf8');
    //     var result = convert.xml2json(xmlFile, {compact: true, spaces: 4});
    //     console.log('RESULT : ', result);

    //     if(result != null){
    //         res.status(200).send({data: result});
    //     }else{
    //         res.status(500).send({error: error});
    //     }
    // }
});

router.route('/XmlToJson/:xml').get(async (req, res) => {
    console.log('REQUEST >>>>', req.params);
});

module.exports = router;

