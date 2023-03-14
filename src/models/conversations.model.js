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
    typeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'type_id',
        defaultValue: 1
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},{
    timestamps: true,
    updatedAt: false
})

module.exports = Conversations