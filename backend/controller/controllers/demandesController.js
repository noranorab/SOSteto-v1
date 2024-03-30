require('dotenv').config();
const jwt = require('jsonwebtoken');
var ObjectId = require('mongoose').Types.ObjectId;

const { User, Ville, Quartier, Demande } = require('../../model/schema');

exports.countDemandes = async (req, res) => {
    try {
        // Count all demandes with the specified user ID
        const nombreDemandes = await Demande.countDocuments()
        console.log('nombre de deamdnes', nombreDemandes )
        res.status(200).json(nombreDemandes);
      } catch (error) {
        console.error('Erreur nombre demandes:', error);
        throw error;
      }
  }

  
exports.createADemande = async (req, res) => {
    try {
        const demande = req.body;
        const newdemande = {
            id_recruteur: req.body.id_recruteur,
            titre: req.body.titre,
            objet: req.body.objet,
            date: req.body.date,
            heure_debut: req.body.heure_debut,
            heure_fin: req.body.heure_fin,
        }
        const demandeObject = await Demande.create(newdemande)
        res.status(201).json(demandeObject)
    } catch (error) {
        return res.status(500).json({ error: 'Error creating demande' })

    }
}

exports.getAllDemandesFromUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        const demandes = await Demande.find({ id_recruteur: new Object(user._id) });
        res.status(200).json(demandes);
        if (!user) {
            return res.status(404).json({ error: 'No user found' })
        }
    } catch (error) {
        res.status(500).json(error);
    }

}

exports.getDemandeById = async (req, res) => {
    try {
        const demande = await Demande.findById(req.params.demandeId)
        const { nom_ville } = await Ville.findOne(demande.ville)
        const { nom_quartier } = await Quartier.findOne(demande.quartier)
        const demandeRes = {
            _id: demande._id,
            id_recruteur: demande.id_recruteur,
            titre: demande.titre,
            objet: demande.objet,
            date: demande.date,
            heure_debut: demande.heure_debut,
            heure_fin: demande.heure_fin,
            ville: nom_ville,
            quartier: nom_quartier,
        }

        if (!demande) {
            return res.status(404).json({ error: 'No demande found' })
        }
        res.status(200).json(demandeRes);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.getSoinsForDemande = async (req, res) => {
    try {
        const userId = req.params.userId;
        if (!ObjectId.isValid(userId)) {
          return res.status(400).json({ error: 'Invalid user ID' });
        }
    
        const demandeCount = await Demande.countDocuments({ id_recruteur: userId });
        console.log(demandeCount);
        res.status(200).json(demandeCount);
      } catch (error) {
        console.error('Error counting demandes:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
  };
