const express = require('express');
const router = express.Router();
const InfirmierController = require('../controllers/infirmierController');


/**
 * @openapi
 * /api/infirmiers:
 *   get:
 *     summary: Get all infirmiers
 *     description: Retrieve all infirmiers
 *     tags:
 *       - Infirmiers
 *     responses:
 *       '200':
 *         description: successfully infirmiers
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/UserOutput'  
 *       '404':
 *         description: Infirmiers not found
 */
router.get('/api/infirmiers', InfirmierController.getAllInfirmiers);

/**
 * @openapi
 * /api/infirmiers/{id}:
 *   get:
 *     summary: Get an infirmier of id infirmier
 *     description: Retrieve an infirmier of id infirmier.
 *     tags:
 *       - Infirmiers
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the infirmier to get
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: successfully retrived infirmier
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/InfirmierOutput'  
 *       '404':
 *         description: User not found
 */
router.get('/api/infirmiers/:id', InfirmierController.getInfirmierById);


/**
 * @openapi
 * /api/infirmiers:
 *   post:
 *     summary: Create a new infirmier
 *     description: Create a new infirmier with the provided details.
 *     tags:
 *       - Infirmiers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Infirmier'  
 *     responses:
 *       '201':
 *         description: Infirmier created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InfirmierOutput'  
 *       '404':
 *         description: Infirmier creation failed
 */
router.post('/api/infirmiers', InfirmierController.createInfirmier);

module.exports = router

