const express = require('express');
const controller = require('../controllers/consorcio');
const router = express.Router();

const path = 'consorcio'

//? POST
router.post(
    `/${path}`,
    controller.createConsorcio
)

//? READ

//* for ID
router.get(
    `/${path}/:id`,
    controller.viewForId 
)

//* For Name
router.get(
    `/${path}/name/:nombreConsorcio`,
    controller.viewForName  
)

//?UPDATE

router.put(
    `/${path}/:id`,
    controller.updateForID 
)

//?DELETE
router.delete(
    `/${path}/:id`,
    controller.deleteForID
)


module.exports = router