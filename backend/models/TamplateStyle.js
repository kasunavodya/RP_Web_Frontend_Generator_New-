const mongoose = require('mongoose');

const TemplateStyleSchema = new mongoose.Schema({

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

    buttonFontSize: { 
        type: String,
        required: false,
        trim: true 
    }

});

const TemplateStyle = mongoose.model("TemplateStyles", TemplateStyleSchema);
module.exports = TemplateStyle;