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

const addParticipantsToGroup = async (req, res, next) => {
    try {
      const newPartipants = req.body
      // Verificar si cada una de las conversaciones es de tipo grupo 
      for (const partipant of newPartipants) {
        const conversation =
          await ConversationsServices.getConversationWithMessages(
            partipant.conversationId
          )
  
        if (!conversation) {
          return next({
            status: 400,
            message: "The conversation no exist",
            name: "conversationId is invalid",
          })
        }
  
        if (!conversation.dataValues.isGroup) {
          return next({
            status: 400,
            message: "The conversation is not group",
            name: "Type conversation is not valid",
          })
        }
      }

      const result = await ConversationsServices.addParticipants(newPartipants)
      res.status(201).json(result)
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
    deleteConversation,
    addParticipantsToGroup
}