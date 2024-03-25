const { ObjectId } = require("mongodb");
const { Infirmier, Specialite, User, Ville, Quartier, SpecialiteInfirmier, LangueInfirmier } = require("../../model/schema")



exports.createInfirmier = async (req, res) => {
    try {
        const newInfirmier = {
            nom : req.body.nom,
            prenom: req.body.prenom,
            email : req.body.email,
            mdp: req.body.mdp,
            role: 'infirmier',
            estConnecte: req.body.estConnecte,
            ville: req.body.nom_ville,
            quartier: req.body.nom_quartier,
            telephone: req.body.telephone,
            status: req.body.status,
        }
        const user = await User.create(newInfirmier);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllInfirmiers = async (req, res) => {
    try {
        const users = await User.find({role : 'infirmier'})
        res.status(200).send(users);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getInfirmierById = async (req, res) => {
    try{
        const user = await User.findOne(req.params.id)
        const {nom_ville} = await Ville.findOne(user.ville)
        const {nom_quartier} = await Quartier.findOne(user.quartier)
        const {nom_specialites} = await SpecialiteInfirmier.find({userId : new ObjectId(user._id)})
        const {langue_parlees} = await LangueInfirmier.find({userId : new ObjectId(user._id)})
        const infirmierRep = {
            nom : user.nom,
            prenom: user.prenom,
            email : user.email,
            mdp: user.mdp,
            role: user.role,
            estConnecte: user.estConnecte,
            ville: nom_ville,
            quartier: nom_quartier,
            telephone: user.telephone,
            status: user.status,
            langue_parlee : langue_parlees,
            specialite: nom_specialites
        }
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (!nom_quartier) {
            return res.status(404).json({ message: 'Quartier not found' });
        }
        res.json(infirmierRep);
    }catch{
        res.status(500).json({ message: 'error from server' });
    }  
}