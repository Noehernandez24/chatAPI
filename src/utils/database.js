const {Sequelize} = require('sequelize')

const db = new Sequelize({
    database: 'chat_api',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Nameless23',
    dialect: 'postgres',
    logging: false
}) 

module.exports = db