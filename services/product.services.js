const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');
const CategoryService = require('./category.services');

const service = new CategoryService();

class ProductService {
  constructor(){}
  
  async createProduct(data) {
    const category = await service.findCategory(data.categoryId);
    const product = await models.Product.create(data);
    return product;
  }

  async findAllProducts() {
    const products = await models.Product.findAll({
      include: ['category'],
      attributes: { exclude: ['categoryId'] }
    });
    if(!products.length) {
        throw boom.notFound(`No se enecuntrar datos cargados en la base de datos`);
    }
    return products;
  }
}

module.exports = ProductService;