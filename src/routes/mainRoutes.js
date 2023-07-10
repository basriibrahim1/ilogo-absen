const express = require('express')
const router = express.Router()
const users = require('./usersRoutes')
const auth = require('./authRoutes')
const masuk = require('./absenMasukRoutes')
const pulang = require('./absenPulangRoutes')
const cuti = require('./cutiRoutes')
const reimbusement = require('./reimbusementRoutes')

router.use('/users', users)
router.use('/login', auth)
router.use('/masuk', masuk)
router.use('/pulang', pulang)
router.use('/cuti', cuti)
router.use('/reimbusement', reimbusement)

module.exports = router