const express = require('express');
const validatorHandler = require('../middleware/validaor.hanlder');
const { createTagSchema } = require('../schemas/tag.schema');
const TagService = require('../services/tag.services');



const service = new TagService();

const router = express.Router();

router.get('/:id', async ( req, res, next ) => {
    const { id } = req.params;
    try {
        const tag = await service.findById(id);
        res.json(tag);
    } catch (error) {
        next(error);
    }
});

router.post('/', validatorHandler(createTagSchema, 'body'), async ( req, res, next ) => {
    const body = req.body;
    try {
        const newTag = await service.createTag(body);
        res.json(newTag);
    } catch (error) {
        next(error)
    }
});

module.exports = router;