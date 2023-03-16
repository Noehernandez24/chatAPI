const Conversations = require("./conversations.model")
const ConversationsParticipants = require("./conversationsParticipants.model")
const Messages = require("./messages.model")
const Users = require("./users.model")

const initModels = () => {
    Users.hasMany(Conversations, {foreignKey: 'userId'})
    Conversations.belongsTo(Users, {foreignKey: 'userId'})

    Users.hasMany(Conversations, {foreignKey: 'participantId'})
    Conversations.belongsTo(Users, {foreignKey: 'participantId'})

    Conversations.hasMany(Messages, {foreignKey: 'conversationId'})
    Messages.belongsTo(Conversations, {foreignKey: 'conversationId'})

    Users.hasMany(Messages, {foreignKey: 'userId'})
    Messages.belongsTo(Users, {foreignKey: 'userId'})

    Conversations.belongsToMany(Users, {through: ConversationsParticipants, as: 'participants'})
    Users.belongsToMany(Conversations, {through: ConversationsParticipants})
}

module.exports = initModels