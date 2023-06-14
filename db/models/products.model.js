const { Model, DataTypes } = require('sequelize');
const { CATEGORY_TABLE } = require('./category.model');


const PRODUCT_TABLE = 'products';

const ProductSchema = {
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
    description: {
        allowNull: false,
        type: DataTypes.TEXT
    },
    image: {
        allowNull: false,
        type: DataTypes.STRING
    },
    stock: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    price: {
        allowNull: false,
        type: DataTypes.DECIMAL(30,2)
    },
    categoryId: {
        field: 'category_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: CATEGORY_TABLE,
            key: 'id'
          },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    review: {
        type: DataTypes.DECIMAL(2,1)
    }
}

class Product extends Model {
    static associate(models){
        //Relaciones
        this.belongsTo(models.Category, { as: 'category' });
        this.hasMany(models.Review, {
            as: 'reviews',
            foreignKey: 'productId'
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            modelNmae: 'Product',
            timestamps: false
        }
    }
}

module.exports = { PRODUCT_TABLE, ProductSchema, Product }