//const mongoose = require('mongoose')
//*Esta es la coleccion [tabla] para la compra de la tarjeta RFID

const compraRFIDSchema = new mongoose.Schema( //* estructura del documento
    {
        TypeDoc:{          //*tipo de documento        
            type:String,    
            requiere: true},

        NumDoc:{            //*Número de documento      
            type:Number,    
            requiere: true,
            unique: true},

        nombreComp:{         //*Nombre completo del usuario      
            type:String,    
            requiere: true}, 
        
        nombrePea:{            //nombre peaje   ====> rio blanco //oiba  //los curos
        type:String,     
        requiere: true},
    
        
        },
        {
        timestamps: true,       //* Con esto los campos van a tener la fecha de actualización y creación.
        versionKey: false,
        }
        
)
/*compraRFIDSchema.methods.encryptPassword = async (password) => {         //CON ESTO ENCRIPTAMOS
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};
compraRFIDSchema.methods.matchPassword = async function (password) {
return await bcrypt.compare(password, this.password);
};*/

const compraRFID = new mongoose.model('compraRFID', compraRFIDSchema) //* Esto nos permite usar nuestro esquema tal cual lo presentamos arriba

module.exports = {compraRFID} //* Con esto lo exportamos




