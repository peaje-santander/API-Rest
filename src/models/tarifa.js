const mongoose = require('mongoose')
const categoria = require('./categoria')
const peaje = require('./peaje')
const autoIncrement = require('mongoose-sequence')(mongoose);
//*Esta es la coleccion [tabla] de tarifa, esta es una coleccion sencilla

const tarifaSchema = new mongoose.Schema( //* estructura del documento
    {
        
        categoria: { type: mongoose.Schema.Types.ObjectId, ref: categoria},
        peaje: { type: mongoose.Schema.Types.ObjectId, ref: peaje},
        costo: {
            type: Number,
            requiere: true
        },
        estadoTarifa: {
            type: Boolean,
            default: true
        }

    },
    {
        timestamps: true,       //* Con esto los campos van a tener la fecha de actualización y creación.
        versionKey: false
    }
)



tarifaSchema.index({ idCategoria: 1, idPeaje: -1 }, { unique: true });
/* tarifaSchema.plugin(autoIncrement) */
module.exports = mongoose.model('tarifa', tarifaSchema)




