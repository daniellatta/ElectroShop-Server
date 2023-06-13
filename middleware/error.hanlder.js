const { ValidationError } = require('sequelize');

const boomErrorHandler = (err, req, res, next) => {
    console.log(err);
    if (err.isBoom) {
      const { output } = err;
      res.status(output.statusCode).json(output.payload);
    }
    else {
      next(err);
    }
  }

const errorHanlder = (err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
}

const errroHablderDb = (err, req, res, next) => {
    if(err instanceof ValidationError) {
        res.status(409).json({
            statusCode: 409,
            error: err.name,
            errors: err.errors
        })
    } else {
        next(err);
    }
}

const logError = (err, req, res, next) => {
    console.log(err)
    next(err);
}

module.exports = {
    boomErrorHandler,
    errorHanlder,
    errroHablderDb,
    logError
}