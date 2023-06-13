const { Test, TestSchema } = require('./test.model');

function setupModels(sequelize) {
    Test.init(TestSchema, Test.config(sequelize))
}

module.exports = setupModels;