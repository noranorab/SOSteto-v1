const express = require('express');
const router = express.Router();
const RecruteurController = require('../controllers/recruteurController');

router.post('/', RecruteurController.createRecruteur);
router.post('/', RecruteurController.getAllRecruteur);
router.get('/:id', RecruteurController.getRecruteurById);
router.put('/:id', RecruteurController.updateRecruteur);
router.delete('/:id', RecruteurController.deleteRecruteur);

module.exports = router;