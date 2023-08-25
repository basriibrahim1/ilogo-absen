const express = require('express')
const upload = require('../middleware/photo')
const cutiController = require('../controllers/cutiController')
const router = express.Router()

router.get('/man/:id', cutiController.getCutiIdManagerController)
router.get('/id/:id', cutiController.getCutiIdController)
router.get('/:id', cutiController.getCutiUserIdController)
router.post('/', upload.single('photo'), cutiController.postCutiController)
router.get('/', cutiController.getAllCutiController)

module.exports = router