const { Users } = require('../models');

const createUser = async (newUser) => {
    const user = await Users.create(newUser);
    return user;
}

const updateUser = async (userData, id) => {
    const user = await Users.update(userData, {where: {
        id
    }});
    return user
}

const deleteUser = async (id) => {
    const user = await Users.destroy({where: {id}})
    return user
}

module.exports = {
    createUser,
    updateUser,
    deleteUser
}