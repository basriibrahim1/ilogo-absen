const express = require('express')
const { NotificationPlayerController } = require('../controllers/notificationPlayerController')
const router = express.Router()

router.post('/', NotificationPlayerController.postNotificationController)

module.exports = router