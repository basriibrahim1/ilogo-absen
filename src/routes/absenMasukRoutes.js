const express = require('express')
const AbsenMasukController = require('../controllers/absenMasukController')
const upload = require('../middleware/photo')
const router = express.Router()

router.get('/:id',  AbsenMasukController.getAbsenMasukIdController)
router.post('/', upload.single('photo'),  AbsenMasukController.postAbsenMasukController)

module.exports = router