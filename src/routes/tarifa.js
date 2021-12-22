const express = require('express');
const controller = require('../controllers/tarifa');
const router = express.Router()

const path = 'tarifa'

//* CREATE
router.post(
    `/${path}`,
    controller.createTarifa
)

//* READ
router.get(
    `/${path}`,
    controller.viewTarifa
)

router.get(
    `/${path}/:id`,
    controller.viewForId    
)

module.exports = router