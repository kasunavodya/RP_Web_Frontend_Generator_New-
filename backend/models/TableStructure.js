const mongoose = require('mongoose');

const TableStructureSchema = new mongoose.Schema({

    json: { 
        type: String,
        required: true,
        trim: true 
    },

});

const TableStructure = mongoose.model("TableStructures", TableStructureSchema);
module.exports = TableStructure;