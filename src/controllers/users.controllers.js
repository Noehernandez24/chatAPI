const UserServices = require("../services/users.services")

const getUsers = async (req, res, next) => {
    try {
        const users = await UserServices.get()
        res.json(users)
    } catch (error) {
        next(error)
    }
}

const createUser = async(req, res, next) => {
    try {
        const newUser = req.body
        const user = await UserServices.create(newUser)
        res.status(201).json(user)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createUser,
    getUsers
}