const {DataTypes} = require('sequelize')
const db = require('../utils/database')

const Types = db.define('types', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type:{
        type: DataTypes.STRING(20),
        allowNull: false,
    }
},{
    timestamps: false
})

module.exports = Types