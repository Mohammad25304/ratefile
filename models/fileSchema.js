const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema ({
    filename : {
        type: String,
        required: true
    },

    path:{
        type: String
    },

    createdAt:{
        type: Date,
        default: Date.now
    },
},
{timestamps: true}
);

module.exports = mongoose.model("File",fileSchema)