const Conversations = require("./conversations.model")
const ConversationsParticipants = require("./conversationsParticipants.model")
const Messages = require("./messages.model")
const Types = require("./types.model")
const Users = require("./users.model")

const initModels = () => {
    Users.hasMany(Conversations, {foreignKey: 'userId'})
    Conversations.belongsTo(Users, {foreignKey: 'userId'})

    Types.hasMany(Conversations, {foreignKey: 'typeId'})
    Conversations.belongsTo(Types, {foreignKey: 'typeId'})

    Conversations.hasMany(Messages, {foreignKey: 'conversationId'})
    Messages.belongsTo(Conversations, {foreignKey: 'conversationId'})

    Users.hasMany(Messages, {foreignKey: 'userId'})
    Messages.belongsTo(Users, {foreignKey: 'userId'})

    Conversations.belongsToMany(Users, {through: ConversationsParticipants, as: 'participants'})
    Users.belongsToMany(Conversations, {through: ConversationsParticipants})
}

module.exports = initModels