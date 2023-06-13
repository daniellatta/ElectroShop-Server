const express = require('express');
const validorHanlder = require('../middleware/validaor.hanlder');
const CategoryService = require('../services/category.services');
const { createCategory, updateCategory, searchCategory } = require('../schemas/category.schema');

const router = express.Router();
const service = new CategoryService();

router.get('/', async ( req, res ) => {
    const categories = service.allCategories();
    res.json(categories);
});

router.get('/:id', validorHanlder(searchCategory, 'params'), async ( req, res, next ) => {
    const { id } = req.params
    try {
        const category = await service.findCategory(id);
        res.json(category);
    } catch (error) {
        next(error)
    }
});

router.post('/', validorHanlder(createCategory, 'body'), async ( req, res, next ) => {
    const body = req.body
    try {
        const cateogry = await service.createCategory(body);
        res.json(cateogry);
    } catch (error) {
        next(error)
    }
});

router.delete('/:id', validorHanlder(searchCategory, 'params'), async ( req, res, next ) => {
    const { id } = req.params
    try {
        const category = await service.deleteCategory(id);
        res.json(category);
    } catch (error) {
        next(error)
    }
})


module.exports = router;