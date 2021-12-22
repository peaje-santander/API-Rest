const mongoose = require('mongoose');
const model = require('../models/tarifa');
const peaje = require('../models/peaje')
const categoria = require('../models/categoria')



//? CRUD

//* Create

exports.createTarifa = (req, res) => {
    const data = req.body
    model.create(data, (err, docs) => {
        if (err) {
            res.status(422.).send({ err })
        } else {
            res.json({ data: docs })
        }
    })
}

//* READ
exports.viewTarifa = (req, res) => {   //*Revisar versionKey
    model.find({}, (err, docs) => {
        peaje.populate(docs, { path: "peaje" }, (err, docs) => {
            categoria.populate(docs, { path: "categoria" }, (err, docs) => {
                if (err) {
                    res.status(422.).send({ err })
                } else {
                    res.status(200).json({ docs })
                }
            })
        })
    })
}

exports.viewForId = (req, res) => {
    const id = req.params
    model.findOne({ _id: parseId(id) }, (err, docs) => {
        peaje.populate(docs, { path: "peaje" }, (err, docs) => {
            categoria.populate(docs, { path: "categoria" }, (err, docs) => {
                if (err) {
                    res.status(422.).send({ err })
                } else {
                    res.status(200).json({ docs })
                }
            })
        })
    })
}
