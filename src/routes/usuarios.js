const express = require('express');
const verificarToken = require('../../middlewares/auth')
const controller = require('../controllers/usuarios');
const router = express.Router();

const path = 'user'


//? post
router.post(
    `/${path}`,
    verificarToken,
    controller.createUser
)


//?get
router.get(
    `/${path}`,
    verificarToken,
    controller.getData
)

/* router.get(
    `/${path}/:id`,
    controller.viewForId
) */

router.get(
    `/${path}/:cc`,
    verificarToken,
    controller.viewForCC
)

//? PUT
router.put(
    `/${path}/:cc`,
    verificarToken,
    controller.updateForCC
)

//? DELETE
router.delete(
    `/${path}/:cc`,
    verificarToken,
    controller.deleteForCC
)

module.exports = router;