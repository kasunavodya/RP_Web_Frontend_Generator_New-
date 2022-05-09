const router = require('express').Router();

const TemplateStyleModel = require('../models/TamplateStyle');

router.route('/addTemplateStyle').post(async (req, res) => {
    if (req.body) {
        const TemplateStyle = new TemplateStyleModel(req.body);
        await TemplateStyle.save()
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error });
            })
    }
});

//Get Template details by template Name
router.route('/getTemplateDetails/:id').get(async (req, res) => {
    if (req.params && req.params.id) {
        await TemplateStyleModel.find({ templateName: req.params.id })
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error });
            })
    }
});

//Update Template Details
router.route("/updateTemplateDetails/:id").put(async (req, res) => {
    //Updating the template details
    const formBackgroundColor = req.body.formBackgroundColor;
    const formBorderColor = req.body.formBorderColor;
    const headerFontColor = req.body.headerFontColor;
    const labelFontColor = req.body.labelFontColor;
    const inputBorderColor = req.body.inputBorderColor;
    const buttonBackgroundColor = req.body.buttonBackgroundColor;
    const buttonFontColor = req.body.buttonFontColor;

    console.log('1', formBackgroundColor);
    console.log('2', formBorderColor);
    console.log('3', headerFontColor);
    console.log('4', labelFontColor);
    console.log('5', inputBorderColor);
    console.log('6', buttonBackgroundColor);
    console.log('7', buttonFontColor);

    //template ID
    const Id = req.params.id;

    try {
        await TemplateStyleModel.findOne(Id, (err, updatedTemplateObject) => {
            updatedTemplateObject.formBackgroundColor = formBackgroundColor;
            updatedTemplateObject.formBorderColor = formBorderColor;
            updatedTemplateObject.headerFontColor = headerFontColor;
            updatedTemplateObject.labelFontColor = labelFontColor;
            updatedTemplateObject.inputBorderColor = inputBorderColor;
            updatedTemplateObject.buttonBackgroundColor = buttonBackgroundColor;
            updatedTemplateObject.buttonFontColor = buttonFontColor;

            updatedTemplateObject.save()
                .then(data => {
                    res.status(200).send({ data: data });
                }).catch(error => {
                    res.status(500).send({ error: error });
                })
        });
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;