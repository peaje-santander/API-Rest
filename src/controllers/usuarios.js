const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const model = require('../models/usuarios');

const parseId = (id) =>{return mongoose.Types.ObjectId(id)};


const options = {page: 1, limit: 5};


//? CRUD

//? Create Users
exports.createUser = (req, res) =>{
    const data = req.body

    model.findOne({email: data.email}, (err, user) => {
        if(err){
            return res.status(400).json({error:'Server error'})
        }
        if(user){
            //usuario existe
            return res.status(400).json({
                msj: 'El usuario ya existe'
            })
        }
    })

    model.create({
        tipoUser: data.tipoUser,
        nombreComp: data.nombreComp,
        TypeDoc: data.TypeDoc,
        NumDoc: data.NumDoc,
        Telefono: data.Telefono,
        email: data.email,
        password: bcrypt.hashSync(data.password, 10),
        placaCar: data.placaCar,
        RFID: data.RFID
    }, (err, docs) =>{
        if(err){
            res.status(422.).send({error: err})
        }else{
            res.json({ 
                data: docs
            })
        }
    })

}

//? Read users
//* Todos los usuarios
exports.viewUser = (req, res) => {
    model.paginate({}, options, (err, docs) =>{
        res.json({ listUsuarios: docs })
    })
}

//* Por ID ( Toca decidir)
exports.viewForId = (req,res) => {
    const id = req.params
    model.findOne({_id: parseId(id)}, (err, docs) =>{
        res.json({listUsuarios: docs})
    })
}

//* Por cc
exports.viewForCC = (req,res) => {
    const query = model.where({NumDoc: req.params.cc})
    query.findOne((err, docs) =>{
        res.json({ docs})
    })
}

//? Update users

exports.updateForCC = (req, res) => {
    const query = model.where({NumDoc: req.params.cc})
    const body = req.body
    query.updateOne(body, (err, docs) => {
        res.json({modificaciones: docs})
    })

}

//? delete user
exports.deleteForCC = (req,res) => {
    const query = model.where({NumDoc: req.params.cc})
    query.deleteOne((err, docs) => {
        res.json({docs})
    })
}

exports.getData = (req, res) => {
    let resultado = listarUsuarios();
    resultado.then(usuarios => {
        res.json(usuarios)
    }).catch(err => {
        res.status(400).json({
            error: "no trae datos"
        })
    })
}

async function listarUsuarios(){
    let usuarios = await model.find().select({nombreComp:1,email:1,NumDoc:1})
    console.log(usuarios)
    return usuarios
}

