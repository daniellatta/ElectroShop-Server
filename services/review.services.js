const { models } = require('../libs/sequelize');
const sequelize = require('../libs/sequelize');
const boom = require('@hapi/boom');
const ProductService = require('./product.services');

const productService = new ProductService();

class ReviewService {
    constructor(){}

    async createReview(data) {
        await productService.findById(data.productId)
        const review = await models.Review.create(data);
        await sequelize.query(`SELECT fun_calcularpromedioresenia(${data.productId}, ${data.rating})`);
        return review;
    }

    async showAllReviews() {
        const reviews = await models.Review.findAll();
        if(!reviews.length) {
            throw boom.notFound('No se encontraron reseñas en la base de datos')
        }
        return reviews;
    }
}

module.exports = ReviewService;