const express = require('express');
const validorHanlder = require('../middleware/validaor.hanlder');
const { createReview } = require('../schemas/review.schema');
const ReviewService = require('../services/review.services');

const router = express.Router();
const service = new ReviewService();

router.get('/', async ( req, res, next ) => {
    try {
        const reviews = await service.showAllReviews();
        res.json(reviews);
    } catch (error) {
        next(error)
    }
});

router.post('/', validorHanlder(createReview, 'body'), async ( req, res, next ) => {
    const body = req.body
    try {
        const review = await service.createReview(body);
        res.json(review);
    } catch (error) {
        next(error);
    }
});













module.exports = router

