'use strict';

const {USER_TABLE} = require('../models/user.model')
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.changeColumn(USER_TABLE, 'email', {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
    })
    await queryInterface.changeColumn(USER_TABLE, 'phoneNumber', {
        field:'phone_number',
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER
    })
    await queryInterface.changeColumn(USER_TABLE, 'admin', {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN
    })
    await queryInterface.changeColumn(USER_TABLE, 'active', {
      allowNull: false,
      defaultValue: true,
      type: DataTypes.BOOLEAN
  })
  },

  async down (queryInterface) {
  }
};
