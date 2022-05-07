const router = require('express').Router();

//const filepath = require('../uploadXML/login.xml');

const xml2js = require('xml2js');
const parser = new xml2js.Parser();

router.route('/convertXmlToJson').post(async (req, res) => {

    console.log('REQUEST >>>>', req.body.xmlFile);

    if(req.body){

        parser.parseString(req.body.xmlFile, function(error, result) {
            if(error === null) {
                console.log(result);
                res.status(200).send({ data: JSON.stringify(result) });
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

