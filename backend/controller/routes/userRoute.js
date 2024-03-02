const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');



/**
 * @swagger
 * '/api/users':
 *   post:
 *     summary: Create a new user
 *     description: Create a new user with the provided details.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *              type: object
 *              required:
 *                  - nom
 *                  - prenom
 *                  - email
 *                  - role
 *              properties:
 *                  nom:
 *                    type: string
 *                    description: The last name of the user
 *                  prenom:
 *                    type: string
 *                    description: The first name of the user
 *                  email:
 *                     type: string
 *                     format: email
 *                     description: The email address of the user
 *                  role:
 *                      type: string
 *                      description: the role of the user can be either recruteur or infimier or admin
 *                  image_profile:
 *                      type: string
 *                      description: The url of the user's profile image
 *                  estConnecte:
 *                      type: boolean
 *                      description: Indicates whether the user is currently connected  
 *              example:
 *                  nom: John
 *                  prenom: Doe
 *                  email: john.doe@example.com
 *                  role: user
 *                  image_profile: https://example.com/profile.jpg
 *                  estConnecte: true
 *                  
 *                      
 *     responses:
 *       201:
 *          description: Created
 *       409:
 *          description: Conflict
 *       404:
 *          description: Not Found
 *       500:
 *          description: Server Error
 *     
 */
router.post('/api/users', UserController.createUser);

/**
 * @swagger
 * '/api/users/{id}':
 *   get:
 *     summary: Get user by ID
 *     description: Retrieve a single user by their ID.
 *     tags:
 *      - Users
 *     parameters:
 *         name: id
 *         required: true
 *         description: The ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: The user object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                  - nom
 *                  - prenom
 *                  - email
 *                  - role
 *               properties:
 *                  nom:
 *                    type: string
 *                    description: The last name of the user
 *                  prenom:
 *                    type: string
 *                    description: The first name of the user
 *                  email:
 *                     type: string
 *                     format: email
 *                     description: The email address of the user
 *                  role:
 *                      type: string
 *                      description: the role of the user can be either recruteur or infimier or admin
 *                  image_profile:
 *                      type: string
 *                      description: The url of the user's profile image
 *                  estConnecte:
 *                      type: boolean
 *                      description: Indicates whether the user is currently connected         
 *       '404':
 *         description: User not found
 */
router.get('/api/users/:id', UserController.getUserById);

/**
 * @swagger
 * '/api/users/{id}':
 *   put:
 *     summary: Update user
 *     description: Update an existing user's details.
 *     tags:
 *      - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the user to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               required:
 *                  - nom
 *                  - prenom
 *                  - email
 *                  - role
 *               properties:
 *                  nom:
 *                    type: string
 *                    description: The last name of the user
 *                  prenom:
 *                    type: string
 *                    description: The first name of the user
 *                  email:
 *                     type: string
 *                     format: email
 *                     description: The email address of the user
 *                  role:
 *                      type: string
 *                      description: the role of the user can be either recruteur or infimier or admin
 *                  image_profile:
 *                      type: string
 *                      description: The url of the user's profile image
 *                  estConnecte:
 *                      type: boolean
 *                      description: Indicates whether the user is currently connected                    
 *     responses:
 *       '200':
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '404':
 *         description: User not found
 */
router.put('/api/users/:id', UserController.updateUser);

/**
 * @swagger
 * '/api/users/{id}':
 *   delete:
 *     summary: Delete user
 *     description: Delete an existing user by their ID.
 *     tags:
 *      - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the user to delete.
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: User deleted successfully
 *       '404':
 *         description: User not found
 */
router.delete('/api/users/:id', UserController.deleteUser);

module.exports = router;