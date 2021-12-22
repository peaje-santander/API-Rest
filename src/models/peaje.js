const mongoose = require('mongoose');
const consorcio = require('./consorcio')

const peajeSchema = new mongoose.Schema(
    {
        nombrePeaje:{
            type: String, 
            unique: true,
            require: true
        },
        latitudPeaje: {
            type: String,
            require: true
        },
        longitudPeaje: {
            type: String,
            require: true
        },
        estadoPeaje:{
            type: Boolean,
            default: true
        },
        consorcio: { type: mongoose.Schema.Types.ObjectId, ref: consorcio}
    },
    {
        timestamps: true,       //* Con esto los campos van a tener la fecha de actualización y creación.
        versionKey: false        
    }
)

module.exports = mongoose.model('peaje',peajeSchema);

