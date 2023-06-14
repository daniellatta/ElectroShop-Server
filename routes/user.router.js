const express = require('express');
const validorHanlder = require('../middleware/validaor.hanlder');
const UserService = require('../services/user.services')
const { createUser } = require('../schemas/user.schema');

const router = express.Router()
const service = new UserService()

router.get('/', async (req,res,next)=>{
    try {
        const users = await service.findAllUsers();
        res.json(users)
    } catch (error) {
        next(error)
    }
})

router.post('/', validorHanlder(createUser, 'body'), async (req,res,next)=>{
    const body = req.body
    try {
        const user = await service.createUser(body)
        res.json(user)
    } catch (error) {
        next(error)
    }
})

module.exports = router