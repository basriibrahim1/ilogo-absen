const express = require('express')
const upload = require('../middleware/photo')
const AbsenPulangController = require('../controllers/absenPulangController')
const router = express.Router()

router.get('/:id',  AbsenPulangController.getAbsenPulangIdController)
router.post('/', upload.single('photo'),  AbsenPulangController.postAbsenPulangController)

module.exports = router