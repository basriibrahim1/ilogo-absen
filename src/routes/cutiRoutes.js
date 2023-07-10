const express = require('express')
const upload = require('../middleware/photo')
const cutiController = require('../controllers/cutiController')
const router = express.Router()

router.get('/:id', cutiController.getCutiController)
router.post('/', upload.single('photo'), cutiController.postCutiController)

module.exports = router