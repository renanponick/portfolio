const express = require('express')
const Usuario = require('../controllers/usuario')
const authMiddleware = require('../middleware/auth')

const controller = new Usuario()
const router = express.Router()

router.post('/api/login', controller.Login)

module.exports = router