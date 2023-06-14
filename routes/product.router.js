const express = require('express');
const validorHanlder = require('../middleware/validaor.hanlder');
const ProductService = require('../services/product.services');
const { createProduct, searchProduct } = require('../schemas/product.schema');

const router = express.Router();
const service = new ProductService();

router.get('/', async ( req, res, next ) => {
    try {
        const products = await service.findAllProducts();
        res.json(products);
    } catch (error) {
        next(error)
    }
});

router.get('/find/:name', validorHanlder(searchProduct, 'params'), async ( req, res, next ) => {
    const { name } = req.params;
    try {
        const product = await service.findByName(name);
        res.json(product);
    } catch (error) {
        next(error);
    }
});

router.post('/', validorHanlder(createProduct, 'body'), async ( req, res, next ) => {
    const body = req.body
    try {
        const product = await service.createProduct(body);
        res.json(product);
    } catch (error) {
        next(error)
    }
})

router.get('/generate/:num', async ( req, res, next ) => {
    const { num } = req.params;
    try {
        const generate = await service.generateProducts(num);
        res.json(generate);
    } catch (error) {
        console.log('entra');
        next(error);
    }
});

module.exports = router