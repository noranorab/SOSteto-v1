const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

/**
 * @openapi
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users.
 *     responses:
 *       '200':
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'  # Reference to the User schema
 *       '404':
 *         description: Users not found
 */
router.get('/api/users', UserController.getAllUsers);

/**
 * @openapi
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput'  // Reference to the UserInput schema
 *     responses:
 *       '201':
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'  // Reference to the User schema
 *       '404':
 *         description: User creation failed
 */
router.post('/api/users', UserController.createUser);
    
    // app.put('/api/users/:id', UserController.updateUser);
    // app.delete('/api/users/:id', UserController.deleteUser);

module.exports = router


