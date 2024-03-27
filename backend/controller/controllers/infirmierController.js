const { ObjectId } = require("mongodb");
const { Infirmier, Specialite, User, Ville, Quartier, SpecialiteInfirmier, LangueInfirmier, InfirmierSoins } = require("../../model/schema")



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
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        console.log(user);

        const specialite = await SpecialiteInfirmier.find({ userId: user._id.valueOf() });
        const languesparlees = await LangueInfirmier.find({ userId: user._id.valueOf() });
        const nom_soin = await InfirmierSoins.find({ id_infirmiere: user._id.valueOf() });
        console.log(specialite)
        const infirmierRep = {
            langue_parlee: languesparlees.length>0 ? languesparlees.map((langue) => langue.langue) : [],
            specialite: specialite.length>0 ? specialite.map((specialite) => specialite.specialite) : [],
            soins: nom_soin.length>0 ? nom_soin.map((soin) => soin.nom_soin) : [],
        };

        res.json(infirmierRep);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error from server' });
    }
};