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
    const formBorderSize = req.body.formBorderSize;
    const formBorderPatten = req.body.formBorderPatten;
    const headerFontSize = req.body.headerFontSize;
    const headerBold = req.body.headerBold;
    const headerFontColor = req.body.headerFontColor;
    const labelFontSize = req.body.labelFontSize;
    const labelFontColor = req.body.labelFontColor;
    const inputBorderColor = req.body.inputBorderColor;
    const inputBorderSize = req.body.inputBorderSize;
    const inputBorderPattern = req.body.inputBorderPattern;
    const inputBorderRadius = req.body.inputBorderRadius;
    const buttonBackgroundColor = req.body.buttonBackgroundColor;
    const buttonFontColor = req.body.buttonFontColor;
    const buttonBorderRadius = req.body.buttonBorderRadius;

    //template ID
    const Id = req.params.id;

    try {
        await TemplateStyleModel.findOne(Id, (err, updatedTemplateObject) => {
            updatedTemplateObject.formBackgroundColor = formBackgroundColor;
            updatedTemplateObject.formBorderColor = formBorderColor;
            updatedTemplateObject.formBorderSize = formBorderSize;
            updatedTemplateObject.formBorderPatten = formBorderPatten;
            updatedTemplateObject.headerFontSize = headerFontSize;
            updatedTemplateObject.headerBold = headerBold;
            updatedTemplateObject.headerFontColor = headerFontColor;
            updatedTemplateObject.labelFontSize = labelFontSize;
            updatedTemplateObject.labelFontColor = labelFontColor;
            updatedTemplateObject.inputBorderColor = inputBorderColor;
            updatedTemplateObject.inputBorderSize = inputBorderSize;
            updatedTemplateObject.inputBorderPattern = inputBorderPattern;
            updatedTemplateObject.inputBorderRadius = inputBorderRadius;
            updatedTemplateObject.buttonBackgroundColor = buttonBackgroundColor;
            updatedTemplateObject.buttonFontColor = buttonFontColor;
            updatedTemplateObject.buttonBorderRadius = buttonBorderRadius;

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