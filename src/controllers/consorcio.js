const mongoose = require('mongoose');
const consorcio = require('../models/consorcio');
const model = require('../models/consorcio');


const parseId = (id) => { return mongoose.Types.ObjectId(id) };


//? CRUD

//* CREATE
exports.createConsorcio = (req, res) => {
    const data = req.body
    model.create(data, (err, docs) => {
        if(err){
            res.status(422.).send({error: 'error'})
        }else{
            res.json({ data: docs})
        }
    })
}


//? READ

exports.viewForId = (req, res) => {
    const id = req.params
    model.findOne({ _id: parseId(id)}, (err, docs)=>{
        if(err){
            console.log(err)
        }else{
            res.json({ConsorcioUpdate: docs})
        }
    })
}

exports.viewForName = (req, res) => {
    model.find({ nombreConsorcio: req.params.nombreConsorcio }, (err, docs) => {
        if(err){
            console.log(err)
        }else{
            res.json({Peajes: docs})
        }
    })
}

//? update

exports.updateForID = (req, res) => {
    const query = model.where({ _id: req.params.id })
    const body = req.body
    query.updateOne(body, (err, docs) => {
        res.json({ ConsorcioModificados: docs })
    })
}


//?DELETE

exports.deleteForID = (req, res) => {
    model.findByIdAndUpdate(req.params.id, { estadoConsorcio: false },(err, docs) =>{
            if (err) {
                console.log(err)
            }
            else {
                res.json({ UpdatedConsorcios: docs })
                //console.log("Updated User : ", docs); 
            }
        })
}