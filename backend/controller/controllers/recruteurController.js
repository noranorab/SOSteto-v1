const { Recruteur } = require('../../model/schema')

exports.createRecruteur = async (req, res) => {
    try {
        const recruteur = new Recruteur(req.body)
        await recruteur.save()
        res.status(201).send(recruteur)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.getAllRecruteurs = async (req, res) => {
    try {
        const recruteurs = await Recruteur.find();
        res.status(200).send(recruteurs);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getRecruteurById = async (req, res) => {
    try {
        const recruteur = await Recruteur.findById(req.params._id);
        if (!recruteur) {
            return res.status(404).send('Recruteur not found');
        }
        res.status(200).send(recruteur);
    } catch (error) {
        res.status(500).send(error);
    }
};


exports.updateRecruteurById = async (req, res) => {
    try {
        const recruteur = await Recruteur.findByIdAndUpdate(req.params._id, req.body, { new: true });
        if (!recruteur) {
            return res.status(404).send('Recruteur not found');
        }
        res.status(200).send(recruteur);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteRecruteurById = async (req, res) => {
    try {
        const recruteur = await Recruteur.findByIdAndDelete(req.params._id);
        if (!recruteur) {
            return res.status(404).send('Recruteur not found');
        }
        res.status(200).send('Recruteur deleted successfully');
    } catch (error) {
        res.status(500).send(error);
    }
};
