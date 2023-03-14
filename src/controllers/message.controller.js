const MessagesServices = require("../services/message.services")

const createMessage = async (req, res, next) =>{
    try {
        const newMessage = req.body
        const message = await MessagesServices.create(newMessage)
        res.status(201).json(message)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createMessage
}