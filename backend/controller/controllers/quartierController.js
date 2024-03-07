const { Quartier } = require('../../model/schema');

exports.createQuartier = async (req, res) => {
    try {
        const { nom_quartier, nom_ville } = req.body;
        const newQuartier = await Quartier.create({ nom_quartier, nom_ville });
        res.status(201).json(newQuartier);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateQuartier = async (req, res) => {
    try {
        const { id } = req.params;
        const { nom_quartier } = req.body;
        const updatedQuartier = await Quartier.findByIdAndUpdate(id, { nom_quartier }, { new: true });
        res.status(200).json(updatedQuartier);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteQuartier = async (req, res) => {
    try {
        const { id } = req.params;
        await Quartier.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getQuartiersByCity = async (req, res) => {
    try {
        const { nom_ville } = req.params;
        const quartiers = await Quartier.find({ nom_ville });
        res.status(200).json(quartiers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
