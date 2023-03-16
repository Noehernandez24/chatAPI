const {DataTypes} = require('sequelize')
const db = require('../utils/database')

const Conversations = db.define('conversations', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING(40),
        allowNull: false
    },
    isGroup: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'is_group',
        defaultValue: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    participantId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'participant_id'
    }
},{
    timestamps: true,
    updatedAt: false
})

module.exports = Conversations