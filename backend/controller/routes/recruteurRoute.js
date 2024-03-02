const express = require('express');
const router = express.Router();
const RecruteurController = require('../controllers/recruteurController');

/**
 * @swagger
 * /api/recruteurs:
 *   post:
 *     summary: Create a new recruteur
 *     description: Create a new recruteur with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RecruteurInput'
 *     responses:
 *       '201':
 *         description: Recruteur created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Recruteur'
 */
router.post('/api/recruteurs/', RecruteurController.createRecruteur);

/**
 * @swagger
 * /api/recruteurs:
 *   get:
 *     summary: Get all recruteurs
 *     description: Retrieve a list of all recruteurs.
 *     responses:
 *       '200':
 *         description: A list of recruteurs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Recruteur'
 */
router.post('/api/recruteurs/', RecruteurController.getAllRecruteurs);

/**
 * @swagger
 * /api/recruteurs/{id}:
 *   get:
 *     summary: Get recruteur by ID
 *     description: Retrieve a single recruteur by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the recruteur to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: The recruteur object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Recruteur'
 *       '404':
 *         description: Recruteur not found
 */
router.get('/api/recruteurs/:id', RecruteurController.getRecruteurById);

/**
 * @swagger
 * /api/recruteurs/{id}:
 *   put:
 *     summary: Update recruteur
 *     description: Update an existing recruteur's details.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the recruteur to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RecruteurInput'
 *     responses:
 *       '200':
 *         description: Recruteur updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Recruteur'
 *       '404':
 *         description: Recruteur not found
 */
router.put('/api/recruteurs/:id', RecruteurController.updateRecruteurById);

/**
 * @swagger
 * /api/recruteurs/{id}:
 *   delete:
 *     summary: Delete recruteur
 *     description: Delete an existing recruteur by their ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the recruteur to delete.
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Recruteur deleted successfully
 *       '404':
 *         description: Recruteur not found
 */
router.delete('/api/recruteurs/:id', RecruteurController.deleteRecruteurById);

module.exports = router;
