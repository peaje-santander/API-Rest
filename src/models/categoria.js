const mongoose = require('mongoose')
//*Esta es la coleccion [tabla] de categoria, esta es una coleccion sencilla

const categoriaSchema = new mongoose.Schema( //* estructura del documento
    {
        categoria: {
            type: String,
            requiere: true,
            unique: true
        },
        tipoVehiculo:[{
            type: String
        }],
        estadoCategoria: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,       //* Con esto los campos van a tener la fecha de actualización y creación.
        versionKey: false
    }
)


module.exports = mongoose.model('categoria', categoriaSchema);

