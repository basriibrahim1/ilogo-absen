const express = require('express')
const upload = require('../middleware/photo')
const documentController = require('../controllers/documentController')
const router = express.Router()

router.post('/', upload.array('path_url', 5), documentController.postDocumentController)

module.exports = router