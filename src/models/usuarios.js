const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');
const autoIncrement = require('mongoose-sequence')(mongoose);

//*Esta es la coleccion [tabla] de usuarios


const usuariosSchema = new mongoose.Schema( //* estructura del documento
    {
        _id: Number,
        tipoUser:{              //Atributo //*tipo usuario (Interno, externo, administrador)
            type:String,        //tipo de dato
            requiere: true},     //Si se requiere o no
        
        nombreComp:{            //*Nombre completo del usuario      
            type:String,    
            requiere: true},  
        
        TypeDoc:{               //*tipo de documento        
            type:String,    
            requiere: true},
        
        NumDoc:{                //*Número de documento      
            type:Number,    
            requiere: true,
            unique: true
        },
        Telefono:{              //*Número telefonico
            type:Number,                 
            requiere: true  
        },
        email:{                 //*Correo electronico
            type:String,        
            unique: true
        },
        password:{              //*Contraseña
            type: String, 
            required: true },

        placaCar: {             //*Placa del vehículo
            type: String,
            required: true,
            unique: true },

        RFID: {                 //*Tarjeta RFID
                type: Number,
                unique: true },
        },
        {
        timestamps: true,       //* Con esto los campos van a tener la fecha de actualización y creación.
        versionKey: false,
        _id: false
        }
        
)
/*usuarioSchema.methods.encryptPassword = async (password) => {         //CON ESTO ENCRIPTAMOS
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};
usuarioSchema.methods.matchPassword = async function (password) {
return await bcrypt.compare(password, this.password);
};*/

//const usuarios = new mongoose.model('usuarios', usuariosSchema) //* Esto nos permite usar nuestro esquema tal cual lo presentamos arriba

usuariosSchema.plugin(mongoosePaginate)
usuariosSchema.plugin(autoIncrement)
module.exports = mongoose.model('usuarios',usuariosSchema);
//* Con esto lo exportamos



