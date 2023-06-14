const express = require('express');
const testRouter = require('./test.router');
const categoryRouter = require('./category.router');
const productRouter = require('./product.router');
const userRouter = require('./user.router')
const reviewRouter = require('./review.router');

const routerApi = app => {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/test', testRouter);
    router.use('/category', categoryRouter);
    router.use('/product', productRouter);
    router.use('/user',userRouter)
    router.use('/review', reviewRouter);
}

module.exports = routerApi;