const Conversations = require("../models/conversations.model")
const ConversationsParticipants = require("../models/conversationsParticipants.model")
const Messages = require("../models/messages.model")
const Users = require("../models/users.model")

class ConversationsServices{
    static async create(newConversation){
        try {
            const result = await Conversations.create(newConversation)
            const {id, userId, participantId} = result
            await ConversationsParticipants.bulkCreate([
                {conversationId: id, userId: userId},
                {conversationId: id, userId: participantId}
            ])
            return result
        } catch (error) {
            throw error
        }
    }

    static async addParticipants(newParticants){
        try {
            const result = await ConversationsParticipants.bulkCreate(newParticants)
            return result
        } catch (error) {
            throw error
        }
    }

    static async getConversation(id){
        try {
            const result = await Users.findByPk(id, {
                attributes: ['id', 'username', 'firstname', 'lastname'],
                include: {
                    model: Conversations,
                    attributes: ['id', 'title', 'createdAt', 'isGroup'],
                }
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async getConversationWithMessages(id){
        try {
            const result = await Conversations.findByPk(id, {
                include: [
                    {
                        model: Messages,
                        attributes: {exclude: ['conversationId']}
                    },
                    {
                        model: Users,
                        attributes: ['id', 'username'],
                        as: 'participants'
                    }
                ]
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async delete(id){
        try {
            const result = await Conversations.destroy({
                where: {id}
            })
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = ConversationsServices