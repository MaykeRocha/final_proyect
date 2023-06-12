const UsersServices = require('../services/user.services');

const createUser = async (req, res, next) => {
    try {
        const user = req.body;
        await UsersServices.createNewUser(user);
        res.status(201).send()
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createUser
}