'use strict';

const { DataTypes } = require('sequelize');
const { USER_TABLE } = require('../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(USER_TABLE, 'dni' , {
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER
    })
    await queryInterface.addColumn(USER_TABLE, 'username' , {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
    })
    await queryInterface.addColumn(USER_TABLE, 'birthDate' , {
        field:'birth_date',
        allowNull: false,
        type: DataTypes.DATEONLY
    })
    await queryInterface.addColumn(USER_TABLE, 'city' , {
        allowNull: false,
        type: DataTypes.STRING
    })
  },



  async down (queryInterface) {
  }
};
