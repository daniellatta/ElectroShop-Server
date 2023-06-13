const express = require('express');
const testRouter = require('./test.router');

const routerApi = app => {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/test', testRouter);
}

module.exports = routerApi;