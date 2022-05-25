/**
 * Route - uploadFile.js
 * 
 * Purpose - Route (API) for uploading XML file to the project
 * 
 * Author - H.M. Kasuni Navodya(IT19144986)
 *
 */

 const router = require('express').Router();
 const multer = require('multer');
 
 //save xml file in uploadXML folder
 var storage = multer.diskStorage({
     destination: (req, file, cb) => {
         cb(null, 'uploadXML')
     },
 
     //name the file
     filename: (req, file, cb) => {
         cb(null, file.originalname)
     }
 });
 
 var upload = multer({ storage }).single('file');
 
 router.post('/upload', (req, res) => {
     upload(req, res, (err) => {
         if (err) {
             return res.json({ success: false, err })
         }
         return res.json({ success: true, file: res.req.file.path, fileName: res.req.file.filename })
     })
 });
 
 module.exports = router;