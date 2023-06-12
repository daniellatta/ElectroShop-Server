const express = require('express');

const router = express.Router();

router.get('/', async ( req, res ) => {
    res.json({msg: 'hola desde el back'})
});

module.exports = router;