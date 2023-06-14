'use strict';
const { REVIEW_TABLE, ReviewSchema } = require('../models/review.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(REVIEW_TABLE, ReviewSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(REVIEW_TABLE);
  }
};
