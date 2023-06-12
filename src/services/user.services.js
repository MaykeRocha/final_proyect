const {createUser} = require('../repositories/user.repository');

class UserServices {
    static async createNewUser(newUser) {
        try {
            const user = await createUser(user);
            return user;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserServices;