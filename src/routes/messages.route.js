const {Router} = require('express')
const { createMessage } = require('../controllers/message.controller')
const createMessageValidator = require('../validators/messages.validators')
const router = Router()

router.post('/api/v1/message', createMessageValidator, createMessage)

module.exports = router