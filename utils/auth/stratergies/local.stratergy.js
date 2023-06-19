const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const UserService = require('../../../services/user.services');

const service = new UserService();

const LocalStratergy = new Strategy({
    usernameField: 'email',
    passwordField: 'password'
    },

    async (email, password, done ) => {
        try {
            const user = await service.findUserByEmail(email);
            if(!user) {
                done(boom.unauthorized(), false);
            }
            if (!await bcrypt.compare(password, user.password)) {
                done(boom.unauthorized(), false);
            }
            delete user.dataValues.password;
            done(null, user)
        } catch (error) {
            done(error, false)
        }
    }
);

module.exports = LocalStratergy;