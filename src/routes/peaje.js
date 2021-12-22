const express = require('express');
const controller = require('../controllers/peaje');
const router = express.Router();

const path = 'peaje'

//? POST
router.post(
    `/${path}`,
    controller.createPeaje
)


//? GET
//* por id
router.get(
    `/${path}/:id`,
    controller.viewForId
)

//*nombre
router.get(    
    `/${path}/name/:nombrePeaje`,
    controller.viewForName
)

//* general
router.get( 
    `/${path}`,
    controller.viewPeaje
)

//? UPDATE

router.put(
    `/${path}/:id`,
    controller.updateForID
)

//? DELETE

router.delete(
    `/${path}/:id`,
    controller.deleteForID
)

module.exports = router