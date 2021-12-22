const mongoose = require('mongoose');
const model = require('../models/categoria');




//? CRUD

//* CREATE
exports.createCategory = (req, res) => {
    const data = req.body
    model.create(data, (err, docs) => {
        if(err){
            res.status(422.).send({err})
        }else{
            res.json({ data: docs})
        }
    })

}

//? READ

//* ALL
exports.viewCategory = (req, res) => {
    model.find({},(err, docs) => {
        res.json({listCategory: docs})
    })
}

//* ForCategory
exports.viewFordCategory = (req, res) =>{
    const query = model.where({Categoria: req.params.cate})
    query.findOne((err, docs) =>{
        res.json({ docs })
    })
}

//? UPDATE

exports.UpdateForCategory = (req, res) => {
    model.findByIdAndUpdate(req.params.id,{tipoVehiculo: req.body.tipoVehiculo},(err, docs) =>{
        if (err) {
            console.log(err)
        }
        else {
            res.json({ UpdatedConsorcios: docs })
            //console.log("Updated User : ", docs); 
        }
    })
} 


/* exports.UpdateForCategory = (req, res) => {
    var objCategory = {}
    {Categoria: req.body.cate}
} */

//? DELETE

exports.DeleteForCategory = (req, res) => {
    const query = model.where({Categoria: req.params.cate})
    query.deleteOne((err, docs) => {
        res.json({docs})
    })
}