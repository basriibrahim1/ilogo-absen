const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/usersController')
const upload = require('../middleware/photo')

router.get('/', UsersController.getUserController)
router.put('/:id', upload.single('photo'), UsersController.userUpdateController)
router.get('/:id', UsersController.getUserIdController)

module.exports = router