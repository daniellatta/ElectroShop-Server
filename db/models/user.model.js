const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    dni: {
        allowNull: false,
        unique: true,
        type: DataTypes.BIGINT
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    username:{
        allowNull: false,
        unique: true,
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
    birthDate: {
        field:'birth_date',
        allowNull: false,
        type: DataTypes.DATEONLY
    },
    adress: {
        allowNull: false, 
        type: DataTypes.STRING
    },
    city: {
        allowNull: false,
        type: DataTypes.STRING
    },
    phoneNumber: {
        field:'phone_number',
        allowNull: false,
        unique: true,
        type: DataTypes.BIGINT
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
    static associate(models){
        this.hasMany(models.Review, {
            as: 'reviews',
            foreignKey: 'userId'
        });
        this.hasMany(models.Orders, {
            as: 'orders',
            foreignKey: 'userId'
        });
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