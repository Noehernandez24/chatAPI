const Messages = require("../models/messages.model")

class MessagesServices {
  static async create(newMessage) {
    try {
      const message = await Messages.create(newMessage)
      return message
    } catch (error) {
        throw error
    }
  }
}

module.exports = MessagesServices