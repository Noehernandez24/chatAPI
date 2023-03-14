const {Router} = require('express')
const {createUser, getUsers} = require('../controllers/users.controllers')
const { createUserValidator } = require('../validators/users.validators')
const router = Router()

router.get('/api/v1/user', getUsers)
router.post('/api/v1/user', createUserValidator, createUser)

module.exports = router