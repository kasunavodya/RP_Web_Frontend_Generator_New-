/**
 * Model - TemplateStyle.js
 * 
 * Purpose - Template Style Model created to store the template style details on the database
 * 
 * Author - H.M. Kasuni Navodya(IT19144986)
 *
 */ 

//Importing the mongoose from the installed package
const mongoose = require('mongoose');

/**
 * Schema name (local) - TemplateStyleSchema
 */
const TemplateStyleSchema = new mongoose.Schema({
    templateName: { 
        type: String,
        required: true,
        trim: true 
    },

    //Template Name
    templateName: { 
        type: String,
        required: true,
        trim: true 
    },

    //Form Styles
    formBackgroundColor: { 
        type: String,
        required: true,
        trim: true 
    },

    formBorderColor: { 
        type: String,
        required: true,
        trim: true 
    },

    formBorderSize: { 
        type: String,
        required: true,
        trim: true 
    },

    formBorderPatten: { 
        type: String,
        required: true,
        trim: true 
    },

    //Header Styles
    headerFontSize: { 
        type: String,
        required: true,
        trim: true  
    },

    headerBold: { 
        type: String,
        required: false,
        trim: true 
    },

    headerFontColor: { 
        type: String,
        required: false,
        trim: true 
    },

    //Label Styles
    labelFontSize: { 
        type: String,
        required: false,
        trim: true 
    },

    labelFontColor: { 
        type: String,
        required: false,
        trim: true 
    },

    //Input Feild Styles
    inputBorderColor: { 
        type: String,
        required: false,
        trim: true 
    },

    inputBorderSize: { 
        type: String,
        required: false,
        trim: true 
    },

    inputBorderPattern: { 
        type: String,
        required: false,
        trim: true 
    },

    inputBorderRadius: { 
        type: String,
        required: false,
        trim: true 
    },

    //Button Styles
    buttonBackgroundColor: { 
        type: String,
        required: false,
        trim: true 
    },

    buttonFontColor: { 
        type: String,
        required: false,
        trim: true 
    },

    buttonBorderRadius: { 
        type: String,
        required: false,
        trim: true 
    }

});

/**
 * Schema name on the database - TemplateStyles
 * 
 * Exported model to be used on the TemplateStyle route
 */
const TemplateStyle = mongoose.model("TemplateStyles", TemplateStyleSchema);
module.exports = TemplateStyle;