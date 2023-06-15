const express = require('express');
const validorHanlder = require('../middleware/validaor.hanlder');
const UserService = require('../services/user.services')
const { createUser } = require('../schemas/user.schema');

const router = express.Router()
const service = new UserService()

/**
 * @swagger
 * /user:
 *   get:
 *     tags:
 *       - Users
 *     summary: Endpoint para consultar todos los usuarios
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: '#/components/schemas/Users'
 *       409:
 *         description: Error en database
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorDataBase'
 *       500:
 *         description: Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorServer'
 */
router.get('/', async (req,res,next)=>{
    try {
        const users = await service.findAllUsers();
        res.json(users)
    } catch (error) {
        next(error)
    }
})

/**
 * @swagger
 * /user:
 *   post:
 *     tags:
 *       - Users
 *     summary: Endpoint para crear un usuario
 *     description: Agregar un nuevo usuario al ecomerce
 *     operationId: addUser
 *     requestBody:
 *       description: Elementos requeridos para crear un usuario
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UsersCreate'
 *         application/xml:
 *           schema:
 *             $ref: '#/components/schemas/UsersCreate'
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: '#/components/schemas/UsersCreate'
 *     responses:
 *       200:
 *         description: Articulo creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'          
 *           application/xml:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorBadRequest'
 *       409:
 *         description: Error en database
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorDataBase'
 *       500:
 *         description: Server Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorServer'
 */
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