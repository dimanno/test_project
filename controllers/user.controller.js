const {User} = require('../database')
const ErrorHandler = require("../errors/errorHandler");
const {messageResponse, statusCode} = require("../constants");

module.exports = {
    createUser: async (req, res, next) => {
        try {
            const newUser = await User.create(req.body)

            res.json(newUser)
        } catch (e) {
            next(e)
        }
    },
    getUsers: async (req, res, next) => {
        try {
            const users = await User.find()
            console.log(users)
            res.json(users)
        } catch (e) {
            next(e)
        }
    },
    getUser: async (req, res, next) => {
        try {
            const {user_id} = req.params

            const user = await User.findById(user_id)

            res.json(user)
        } catch (e) {
            next(e)
        }
    },
    updateUser: async (req, res, next) => {
        try {
            const {user_id} = req.params
            const{username, firstname, lastname, email, type} = req.body
            const userUpdated = await User.updateMany({id: user_id}, {set: {username, firstname, lastname, email, type}})
            const checkUsername = await User.findOne({username})
            if (checkUsername) {
                throw new ErrorHandler(messageResponse.DATA_EXIST, statusCode.FORBIDDEN)
            }

            res.json(userUpdated)
        } catch (e) {
            next(e)
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            const {user_id} = req.params;
            await User.findByIdAndDelete(user_id);

            res.sendStatus(statusCode.NO_DATA);
        } catch (e) {
            next(e);
        }
    }
}
