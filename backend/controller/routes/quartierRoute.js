const express = require('express');
const quartierRouter = express.Router();
const QuartierController = require('../controllers/quartierController');

/**
 * @openapi
 * /api/quartiers:
 *   post:
 *     summary: Create a new district
 *     description: Create a new district with the provided details.
 *     tags:
 *       - Quartiers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Quartier'  
 *     responses:
 *       '201':
 *         description: district created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quartier'  
 *       '404':
 *         description: district creation failed
 */
quartierRouter.post('/api/quartiers', QuartierController.createQuartier);

/**
 * @openapi
 * /api/quartiers/{id}:
 *   put:
 *     summary: Update a district
 *     description: Update a district with the provided details.
 *     tags:
 *       - Quartiers
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the district to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Quartier'  
 *     responses:
 *       '200':
 *         description: district updated successfully
 *       '404':
 *         description: district not found
 */
quartierRouter.put('/api/quartiers/:id', QuartierController.updateQuartier);

/**
 * @openapi
 * /api/quartiers/{id}:
 *   delete:
 *     summary: Delete a district
 *     description: Delete a district with the provided ID.
 *     tags:
 *       - Quartiers
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the district to delete
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: district deleted successfully
 *       '404':
 *         description: district not found
 */
quartierRouter.delete('/api/quartiers/:id', QuartierController.deleteQuartier);

module.exports = quartierRouter;
