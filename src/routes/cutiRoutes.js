const express = require('express')
const upload = require('../middleware/photo')
const cutiController = require('../controllers/cutiController')
const router = express.Router()

router.get('/man/:id', cutiController.getCutiIdManagerController)
router.get('/id/:id', cutiController.getCutiIdController)
router.get('/:id', cutiController.getCutiController)
router.post('/', upload.single('photo'), cutiController.postCutiController)

module.exports = router