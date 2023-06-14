const { Test, TestSchema } = require('./test.model');
const { Product, ProductSchema } = require('./products.model');
const { Category, CategorySchema } = require('./category.model');
const { User, UserSchema} = require('./user.model')

function setupModels(sequelize) {
    Test.init(TestSchema, Test.config(sequelize));
    Product.init(ProductSchema, Product.config(sequelize));
    Category.init(CategorySchema, Category.config(sequelize));
    User.init(UserSchema, User.config(sequelize));

    //Relaciones
    Product.associate(sequelize.models);
    Category.associate(sequelize.models);
}

module.exports = setupModels;