const Users = require("../models/users.model")

class UserServices{
    static async get(){
        try {
            const result = await Users.findAll({
                attributes: ['id', 'username', 'firstname', 'lastname']
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async getUser(email){
        try {
            const result = await Users.findOne({
                where: {email}
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async create(newUser){
        try {
            const result = await Users.create(newUser)
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = UserServices