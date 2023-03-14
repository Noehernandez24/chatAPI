const ConversationsServices = require("../services/conversation.services")

const getUserConversation = async (req, res, next) => {
    try {
        const {id} = req.params
        const conversation = await ConversationsServices.getConversation(id)
        res.json(conversation)
    } catch (error) {
        next(error)
    }
}

const getConversationWithMessages = async (req, res, next) => {
    try {
        const {id} = req.params
        const conversation = await ConversationsServices.getConversationWithMessages(id)
        res.json(conversation)
    } catch (error) {
        next(error)
    }
}

const createConversation = async (req, res, next) => {
    try {
        const newConversation = req.body
        const conversation = await ConversationsServices.create(newConversation)
        res.status(201).json(conversation)
    } catch (error) {
        next(error)
    }
}

const deleteConversation = async(req, res, next) => {
    try {
        const {id} = req.params
        await ConversationsServices.delete(id)
        res.status(204).send()
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createConversation,
    getUserConversation,
    getConversationWithMessages,
    deleteConversation
}