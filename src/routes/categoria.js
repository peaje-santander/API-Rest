const express = require('express');
const controller = require('../controllers/categoria');
const router = express.Router();

const path = 'categoria'

//? POST
router.post(
    `/${path}`,
    controller.createCategory
)

//? GET
//* ALL
router.get(
    `/${path}`,
    controller.viewCategory
)
//* ForCategory
router.get(
    `/${path}/:cate`,
    controller.viewFordCategory
)

//? PUT
router.put(
    `/${path}/:cate`,
    controller.UpdateForCategory
)

//? DELETE
router.delete(
    `/${path}/:cate`,
    controller.DeleteForCategory
)
module.exports = router;