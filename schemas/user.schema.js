const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const email = Joi.string().email();
const password = Joi.string();
const adress = Joi.string();
const phoneNumber = Joi.number().integer().min(0);
const admin = Joi.boolean();
const active = Joi.boolean();

const createUser = Joi.object({
    name: name.required(),
    email: email.required(),
    password: password.required(),
    adress: adress.required(),
    phoneNumber: phoneNumber.required(),
});

const updateUser = Joi.object({
    id : id.required(),
    name,
    email,
    password,
    adress,
    phoneNumber,
    admin,
    active
});

const searchUser = Joi.object({
    id,
    email,
    phoneNumber,
});

module.exports = {
    createUser,
    updateUser,
    searchUser
}