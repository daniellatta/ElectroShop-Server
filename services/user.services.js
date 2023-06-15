const { Op } = require('sequelize');
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
        if(!users.length){
            throw boom.notFound(`Usuarios no encontrados`);
        }
        return users
    }

    async findUserByID(id){
        const user = await models.User.findByPk(id)
        if(!user){
            throw boom.notFound(`Usuario con id: ${id} no encontrado`);
        }
        return user
    }

    async findUserByEmailOrPhone({ email, phoneNumber }) {
        let user;
        const whereClause = {};

        if (email || phoneNumber) {
            if (email) {
                whereClause.email = email;
            }
            if (phoneNumber) {
                whereClause.phoneNumber = phoneNumber;
            }
            user = await models.User.findOne({
                where: whereClause,
            });
        }

    if (!user) {
        throw boom.notFound(`no encontrado`);
    }
        return user;
    }

    async updateUser({ id, name, email, password, address, phoneNumber, admin, active }) {
        const updatedFields = {};

        if (name) {
            updatedFields.name = name;
        }
        if (email) {
            updatedFields.email = email;
        }
        if (password) {
            updatedFields.password = password;
        }
        if (address) {
            updatedFields.address = address;
        }
        if (phoneNumber) {
            updatedFields.phoneNumber = phoneNumber;
        }
        if (admin !== undefined) {
            updatedFields.admin = admin;
        }
        if (active !== undefined) {
            updatedFields.active = active;
        }

        const user = await this.findUserByID(id)
        await user.update(updatedFields);
        return user;
    }

}

module.exports = UserService