const {DataTypes} = require('sequelize')
const db = require('../utils/database')

const ConversationsParticipants = db.define('conversations_participants',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    conversationId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'conversation_id'
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id'
    }
},{
    timestamps: false
})

module.exports = ConversationsParticipants