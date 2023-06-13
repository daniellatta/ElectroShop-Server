const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');


class CategoryService {
    constructor() {

    }

    async allCategories() {
        const categories = await models.Category.findAll();
        return categories
    }

    async createCategory(data) {
        const category = await models.Category.create(data);
        return category;
        
    }
    async findCategory(id) {
        const category = await models.Category.findByPk(id);
        if(!category) {
            throw boom.notFound(`No se encontro category con el id ${id}`)
        }
        return category
    }

    async deleteCategory(id) {
        const category = this.findCategory(id);
        (await category).destroy();
        return { msg: `la categoria con id: ${id} fue eliminada correctamente` }
    }
}

module.exports = CategoryService;

