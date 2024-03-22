const express = require('express');
const villeRouter = express.Router();
const VilleController = require('../controllers/villeController');

/**
 * @openapi
 * /api/villes:
 *   get:
 *     summary: Get all cities
 *     description: Retrieve a list of all cities.
 *     tags:
 *       - Villes
 *     responses:
 *       '200':
 *         description: A list of cities
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ville'  
 *       '404':
 *         description: there is no cities
 */
villeRouter.get('/api/villes', VilleController.getVille);

/**
 * @openapi
 * /api/villes:
 *   post:
 *     summary: Create a new city
 *     description: Create a new city with the provided details.
 *     tags:
 *       - Villes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ville'  
 *     responses:
 *       '201':
 *         description: city created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ville'  
 *       '404':
 *         description: city's creation failed
 */
villeRouter.post('/api/villes', VilleController.createVille);

/**
 * @openapi
 * /api/villes/{id}:
 *   put:
 *     summary: Update a city
 *     description: Update a city with the provided details.
 *     tags:
 *       - Villes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the city to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ville'  
 *     responses:
 *       '200':
 *         description: city updated successfully
 *       '404':
 *         description: city not found
 */
villeRouter.put('/api/villes/:id', VilleController.updateVille);

/**
 * @openapi
 * /api/villes/{id}:
 *   delete:
 *     summary: Delete a city
 *     description: Delete a city with the provided ID.
 *     tags:
 *       - Villes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the city to delete
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: city deleted successfully
 *       '404':
 *         description: city not found
 */
villeRouter.delete('/api/villes/:id', VilleController.deleteVille);

module.exports = villeRouter;
