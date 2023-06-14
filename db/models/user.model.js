const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    adress: {
        allowNull: false, 
        type: DataTypes.STRING
    },
    phoneNumber: {
        field:'phone_number',
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER
    },
    admin: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN
        
    },
    active: {
        allowNull: false,
        defaultValue: true,
        type: DataTypes.BOOLEAN
    }
}

class User extends Model {
    static associate(){
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelNmae: 'User',
            timestamps: false
        }
    }
}

module.exports = { USER_TABLE, UserSchema, User }