const router = require('express').Router();

const TemplateStyleModel = require('../models/TamplateStyle');

router.route('/addTemplateStyle').post(async (req, res) => {
    if(req.body){
        const TemplateStyle = new TemplateStyleModel(req.body);
        await TemplateStyle.save()
        .then(data => {
            res.status(200).send({data: data});
        }).catch(error => {
            res.status(500).send({error: error});
        })
    }
});

module.exports = router;