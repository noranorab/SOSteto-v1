const express = require('express');
const router = express.Router();

router.get('/api/demandes/count', DemandeController.countDemandes)
router.get('/api/users/:userId/demandes', DemandeController.getAllDemandesFromUser);
router.get('/api/demandes/:demandeId', DemandeController.getDemandeById);
router.get('/api/demandes/:id/soins', DemandeController.getSoinsForDemande);
router.post('/api/demandes', DemandeController.createADemande);

module.exports = router