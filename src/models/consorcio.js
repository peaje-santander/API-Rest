const mongoose = require('mongoose');


const consorcioSchema = new mongoose.Schema(
    {
        nombreConsorcio: {
            type: String,
            unique: true,
            require: true
        },
        descripcionConsorcio: {
            type: String,
            require: true 
        },
        estadoConsorcio: {
            type: Boolean,
            default: true
        }
    }
)



module.exports = mongoose.model('Consorcio',consorcioSchema);
