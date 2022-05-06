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

    //Input Field Styles
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

const TemplateStyle = mongoose.model("TemplateStyles", TemplateStyleSchema);
module.exports = TemplateStyle;