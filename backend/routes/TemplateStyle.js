/**
 * Route - TemplateStyle.js
 * 
 * Purpose - Route (API) for handle the template styles
 * 
 * Author - H.M. Kasuni Navodya(IT19144986)
 *
 */

 const router = require('express').Router();

 /**
  * Imported Template Style Model - TamplateStyle.js - MODEL
  */
 const TemplateStyleModel = require('../models/TamplateStyle');
 
 /**
  * API DESC      - Add a new Template Style
  * API           - http://localhost:3001/templateStyle/addTemplateStyle
  * TARGET IMPACT - Adding template styles page | FRONTEND -> SRC-> COMPONENTS -> PAGES -> selectPreDefineStyles.js  
  */
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
 
 /**
  * API DESC      - Get Template details by template Name
  * API           - http://localhost:3001/templateStyle/getTemplateDetails/:id
  * TARGET IMPACT - Retrieving template styles page | FRONTEND -> SRC-> COMPONENTS -> PAGES -> selectPreDefineStyles.js  
  */
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
 
 /**
  * API DESC      - Update Template details
  * API           - http://localhost:3001/templateStyle/updateTemplateDetails/:id
  * TARGET IMPACT - Updating template styles page | FRONTEND -> SRC-> COMPONENTS -> PAGES -> selectPreDefineStyles.js  
  */
 router.route("/updateTemplateDetails/:id").put(async (req, res) => {
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
         await TemplateStyleModel.findById(Id, (err, updatedTemplateObject) => {
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