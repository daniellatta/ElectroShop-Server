const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class UserService {
    constructor(){}

    async createUser (data) {
        const user = await models.User.create(data)
        return user
    }

    async findAllUsers () {
        const users = await models.User.findAll()
        return users
    }


}

module.exports = UserService