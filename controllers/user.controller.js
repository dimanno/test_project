const User = require('../database')
module.exports = {
    createUser: async (req, res, next) => {
        try {
            const newUser = await User.create(req.body)
        } catch (e) {
            next(e)
        }
    }
}
