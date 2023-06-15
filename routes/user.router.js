const express = require('express');
const validorHanlder = require('../middleware/validaor.hanlder');
const UserService = require('../services/user.services')
const { createUser,updateUser,searchUser } = require('../schemas/user.schema');

const router = express.Router()
const service = new UserService()

router.get('/',validorHanlder(searchUser, 'query'),async (req,res,next)=>{
    const data = req.query
    const result = Object.keys(data).length !== 0 ? await service.findUserByEmailOrPhone(data) : await service.findAllUsers()
    try {
        res.json(result)
    } catch (error) {
        console.log('Entro aca');
        next(error)
    }
})

router.get('/:id',validorHanlder(searchUser, 'params'), async (req,res,next)=>{
    const { id } = req.params
    try {
        const user = await service.findUserByID(id);
        res.json(user)
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

router.patch('/', validorHanlder(updateUser, 'body'), async (req, res, next) => {
    const body = req.body;
    try {
        const user = await service.updateUser(body); 
        res.json(user);
    } catch (error) {
        next(error);
    }
});


module.exports = router