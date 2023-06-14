'use strict';
const { DataTypes } = require('sequelize');
const { PRODUCT_TABLE } = require('../models/products.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
   await queryInterface.addColumn(PRODUCT_TABLE, 'review', {
      type: DataTypes.DECIMAL(2,1)
   })
  },

  async down (queryInterface) {
    
  }
};
