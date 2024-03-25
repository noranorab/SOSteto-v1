const express = require('express');
const router = express.Router();
const InfirmierController = require('../controllers/infirmierController');

router.get('/api/infirmiers', InfirmierController.getAllInfirmiers);
router.get('/api/infirmiers/:id', InfirmierController.getInfirmierById);
router.post('/api/infirmiers', InfirmierController.createInfirmier);

module.exports = router

