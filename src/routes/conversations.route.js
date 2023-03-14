const {Router} = require('express')
const { createConversation, getUserConversation, getConversationWithMessages, deleteConversation } = require('../controllers/conversations.controller')
const { createConversationValidator} = require('../validators/conversations.validator')
const router = Router()

router.get('/api/v1/conversation/user/:id', getUserConversation)

router.get('/api/v1/conversation/:id', getConversationWithMessages)

router.post('/api/v1/conversation', createConversationValidator, createConversation)

router.delete('/api/v1/conversation/:id', deleteConversation)

module.exports = router