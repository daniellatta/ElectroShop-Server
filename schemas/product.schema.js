const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const description = Joi.string();
const image = Joi.string();
const stock = Joi.number().integer();
const price = Joi.number().precision(2);
const categoryId = Joi.number().integer();

const createProduct = Joi.object({
    name: name.required(),
    description: description.required(),
    image: image.required(),
    stock: stock.required(),
    price: price.required(),
    categoryId: categoryId.required()
});

const updateProduct = Joi.object({
    name,
    description,
    image,
    stock,
    price,
    categoryId
});

const searchProduct = Joi.object({
    id,
    name
});

module.exports = {
    createProduct,
    updateProduct,
    searchProduct
}
