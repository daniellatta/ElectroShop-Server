const express = require('express');
const { session } = require('passport');
const passport = require('passport');

const rotuer = express.Router();

rotuer.post('/login', passport.authenticate('local', { session: false }), async ( req, res, next ) => {
    try {
        res.json(req.user);
    } catch (error) {
        next(error)
    }
});

module.exports = rotuer;