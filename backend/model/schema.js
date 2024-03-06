const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User
const userSchema = new Schema({
    nom: {
        type: String,
    },
    prenom: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    mdp: {
        type: String,
        required: true
    },
    role: {
        type: String,
    },
    estConnecte: {
        type: String,
    }
});

// Image
const imageSchema = new Schema({
    idUser: { type: Schema.Types.ObjectId, ref: 'User' },
    desc: String,
    data: Buffer
});

// Recruteur
const recruteurSchema = new Schema({
    idUser: { type: Schema.Types.ObjectId, ref: 'User' },
    ville: { type: Schema.Types.ObjectId, ref: 'VilleQuartier' },
    quartier: { type: Schema.Types.ObjectId, ref: 'VilleQuartier' },
    telephone: String
});

// Infirmier
const infirmierSchema = new Schema({
    idUser: { type: Schema.Types.ObjectId, ref: 'User' },
    ville: { type: Schema.Types.ObjectId, ref: 'VilleQuartier' },
    quartier: { type: Schema.Types.ObjectId, ref: 'VilleQuartier' },
    telephone: String,
    langue_parlee: { type: Schema.Types.ObjectId, ref: 'VilleQuartier' },
    specialite: { type: Schema.Types.ObjectId, ref: 'Specialite' }
});

//langue
const langueSchema = new Schema({
    langue: String
})

// Profil Infirmier
const profilInfirmierSchema = new Schema({
    a_propos: String,
    id_disponibilite: { type: Schema.Types.ObjectId, ref: 'Disponibilite' },
    id_cv: { type: Schema.Types.ObjectId, ref: 'Document' }
});

// Session
const sessionSchema = new Schema({
    idSession: { type: Number, required: true, unique: true },
    date_expiration: Date
});

// Demande
const demandeSchema = new Schema({
    id_recruteur: { type: Schema.Types.ObjectId, ref: 'User' },
    titre: String,
    objet: String,
    prix_min: Number,
    prix_max: Number,
    date: Date,
    heure_debut: Date,
    heure_fin: Date
});

// Disponibilité
const disponibiliteSchema = new Schema({
    id_infirmiere: { type: Schema.Types.ObjectId, ref: 'Infirmier' },
    date_debut: Date,
    date_fin: Date,
    heure_debut: Date,
    heure_fin: Date
});

// Rating
const ratingSchema = new Schema({
    id_recruteur: { type: Schema.Types.ObjectId, ref: 'Recruteur' },
    id_infirmiere: { type: Schema.Types.ObjectId, ref: 'Infirmier' },
    score: Number
});

// Commentaires
const commentairesSchema = new Schema({
    id_recruteur: { type: Schema.Types.ObjectId, ref: 'Recruteur' },
    id_infirmiere: { type: Schema.Types.ObjectId, ref: 'Infirmier' },
    objet: String
});

// Document
const documentSchema = new Schema({
    id_infirmier: { type: Schema.Types.ObjectId, ref: 'Infirmier' },
    intitule: String,
    date_remise: Date,
    lieu: String,
    etablissement: String
});

// Tables de références
// ville
const villeSchema = new Schema({
    nom_ville: { type: String, required: true, unique: true },
    code_postal: Number
});

// specialite
const specialiteSchema = new Schema({
    nom_specialite: { type: String, required: true, unique: true }
});

// Quartier
const quartierSchema = new Schema({
    nom_quartier: String,
    nom_ville: { type: Schema.Types.ObjectId, ref: 'Ville' }
});
//ville-quartier

// Soins
const soinsSchema = new Schema({
    nom_soin: { type: String, required: true, unique: true }
});

// Table d'association
// demande-soins
const demandeSoinsSchema = new Schema({
    id_demande: { type: Schema.Types.ObjectId, ref: 'Demande' },
    nom_soin: { type: Schema.Types.ObjectId, ref: 'Soin' }
});

// infirmier-soins
const infirmierSoinsSchema = new Schema({
    id_infirmiere: { type: Schema.Types.ObjectId, ref: 'Infirmier' },
    nom_soin: { type: Schema.Types.ObjectId, ref: 'Soin' }
});

// favoris_demandes
const favorisDemandesSchema = new Schema({
    id_infirmier: { type: Schema.Types.ObjectId, ref: 'Infirmier' },
    id_demande: { type: Schema.Types.ObjectId, ref: 'Demande' }
});

// favoris_infirmiers
const favorisInfirmiersSchema = new Schema({
    id_recruteur: { type: Schema.Types.ObjectId, ref: 'Recruteur' },
    id_infirmier: { type: Schema.Types.ObjectId, ref: 'Infirmier' }
});

// Exporting schemas
module.exports = {
    User: mongoose.model('User', userSchema),
    Image: mongoose.model('Image', imageSchema),
    Recruteur: mongoose.model('Recruteur', recruteurSchema),
    Infirmier: mongoose.model('Infirmier', infirmierSchema),
    ProfilInfirmier: mongoose.model('ProfilInfirmier', profilInfirmierSchema),
    Session: mongoose.model('Session', sessionSchema),
    Demande: mongoose.model('Demande', demandeSchema),
    Disponibilite: mongoose.model('Disponibilite', disponibiliteSchema),
    Rating: mongoose.model('Rating', ratingSchema),
    Commentaires: mongoose.model('Commentaires', commentairesSchema),
    Document: mongoose.model('Document', documentSchema),
    Ville: mongoose.model('Ville', villeSchema),
    Specialite: mongoose.model('Specialite', specialiteSchema),
    Quartier: mongoose.model('Quartier', quartierSchema),
    Soins: mongoose.model('Soins', soinsSchema),
    DemandeSoins: mongoose.model('DemandeSoins', demandeSoinsSchema),
    InfirmierSoins: mongoose.model('InfirmierSoins', infirmierSoinsSchema),
    FavorisDemandes: mongoose.model('FavorisDemandes', favorisDemandesSchema),
    FavorisInfirmiers: mongoose.model('FavorisInfirmiers', favorisInfirmiersSchema),
    Langue: mongoose.model('Langue', langueSchema)
};
