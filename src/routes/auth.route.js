const {Router} = require('express')
const { userLogin } = require('../controllers/auth.controller')
const userLoginValidator = require('../validators/auth.validators')
const router = Router()

router.post('/api/v1/auth/login', userLoginValidator, userLogin)

module.exports = router