const express = require('express')
const upload = require('../middleware/photo')
const reimbusementController = require('../controllers/reimbusementController')
const router = express.Router()

router.post('/', upload.single('photo'), reimbusementController.postReimbusementController)
router.get('/:id', reimbusementController.getReimbusementController)


module.exports = router