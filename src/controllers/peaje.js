const mongoose = require('mongoose');
const consorcio = require('../models/consorcio');
const model = require('../models/peaje');

const parseId = (id) => { return mongoose.Types.ObjectId(id) };



//? CRUD

//* CREATE
exports.createPeaje = (req, res) => {
    const data = req.body
    model.create(data, (err, docs) => {
        if (err) {
            res.status(422.).send({ error: 'error' })
        } else {
            res.json({ data: docs })
        }
    })
}

//* READ
exports.viewPeaje = (req, res) => {   //*Revisar versionKey
    model.find({}, (err, docs) => {
        consorcio.populate(docs, { path: "consorcio" }, (err, docs) => {
            res.status(200).json({ docs })
        })
    })
}

exports.viewForId = (req, res) => {
    const id = req.params
    model.findOne({ _id: parseId(id) }, (err, docs) => {
        consorcio.populate(docs, { path: "consorcio" }, (err, docs) => {
            res.status(200).json({ docs })
        })
    })
}

exports.viewForName = (req, res) => {
    //const parseNombre = (nombrePeaje) =>{return mongoose.Types.ObjectId(nombrePeaje)};
    model.find({ nombrePeaje: req.params.nombrePeaje }, (err, docs) => {
        if (err) {
            console.log(err)
        } else {
            res.json({ Peajes: docs })
        }
    })
}

//* UPDATE

exports.updateForID = (req, res) => {
    const query = model.where({ _id: req.params.id })
    const body = req.body
    query.updateOne(body, (err, docs) => {
        res.json({ PeajesModificados: docs })
    })
}

//* DELETE 

/* exports.deleteForID = (req, res) => {
    const query = model.where({_id: req.params.id})
    const estado = req.body.estado
    query.updateOne({estado:false}, (err, docs) =>{
        res.json({PeajesEliminados: docs})
    })
    console.log(estado)
    console.log(query)
} */

exports.deleteForID = (req, res) => {
    model.findByIdAndUpdate(req.params.id, { estadoPeaje: false },
        function (err, docs) {
            if (err) {
                console.log(err)
            }
            else {
                res.json({ UpdatedPeajes: docs })
                //console.log("Updated User : ", docs); 
            }
        })
}
