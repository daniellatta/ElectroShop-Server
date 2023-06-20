const express = require('express');
const { session } = require('passport');
const passport = require('passport');

const rotuer = express.Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Endpoint para autentificar usuario
 *     description: Endpoint para autentificar usuario
 *     operationId: authUserLocal
 *     requestBody:
 *       description: Elementos requeridos para autentificarte
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AuthLogin'
 *         application/xml:
 *           schema:
 *             $ref: '#/components/schemas/AuthLogin'
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: '#/components/schemas/AuthLogin'
 *     responses:
 *       200:
 *         description: usuario autentificado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  status:
 *                      type: boolean
 *                      example: true
 *                  data:
 *                      $ref: '#components/schemas/Users'      
 *           application/xml:
 *             schema:
 *               type: object
 *               properties:
 *                  status:
 *                      type: boolean
 *                      example: true
 *                  data:
 *                      $ref: '#components/schemas/Users'
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorBadRequest'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorUnauthorized'
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
rotuer.post('/login', passport.authenticate('local', { session: false }), async ( req, res, next ) => {
    try {
        res.json(req.user);
    } catch (error) {
        next(error)
    }
});

module.exports = rotuer;