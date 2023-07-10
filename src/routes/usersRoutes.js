const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/usersController')

router.get('/', UsersController.getUserController)
router.get('/:id', UsersController.getUserIdController)

module.exports = router