const { ObjectId } = require("mongodb");
const { Infirmier, Specialite, User, Ville, Quartier, SpecialiteInfirmier, LangueInfirmier, InfirmierSoins, Langue, Soins } = require("../../model/schema")



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

        const specialite = await SpecialiteInfirmier.find({ userId: user._id });
        const specialitesWithName = await Promise.all(specialite.map(async (specialite) => {
            return await Specialite.findById(specialite);
        }))
        console.log(specialitesWithName)
        const languesparlees = await LangueInfirmier.find({ userId: user._id });
        const languesWithName = await Promise.all(languesparlees.map(async (langue)=> {
            return await Langue.findById(langue)
        }))
        console.log(languesWithName)
        const nom_soin = await InfirmierSoins.find({ id_infirmiere: user._id });
        const soinWithName= await Promise.all(nom_soin.map(async (s) => {
            return await Soins.findById(s);
        }))
        console.log(soinWithName)
        const infirmierRep = {
            specialite: specialitesWithName.length>0 ? specialitesWithName.map((specialite) => specialite.nom_specialite) : [],
            langue_parlee: languesWithName.length>0 ? languesWithName.map((langue) => langue.langue) : [],
            soins: soinWithName.length>0 ? soinWithName.map((soin) => soin.nom_soin) : [],
        };

        res.json(infirmierRep);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error from server' });
    }
};