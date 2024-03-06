const userSchema = {
  type: 'object',
  properties: {
    idUser: {
      type: 'string',
      description: 'The unique identifier for the user.'
    },
    nom: {
      type: 'string',
      description: 'The last name of the user.'
    },
    prenom: {
      type: 'string',
      description: 'The first name of the user.'
    },
    email: {
      type: 'string',
      format: 'email',
      description: 'The email address of the user.'
    },
    mdp: {
      type: 'string',
      description: 'The password of the user.'
    },
    role: {
      type: 'string',
      description: 'The role of the user.'
    },

    estConnecte: {
      type: 'boolean',
      description: 'Indicates whether the user is currently connected.'
    }
  }
};

const userInputSchema = {
  type: 'object',
  required: ['idUser', 'nom', 'prenom', 'password', 'email', 'role'],
  properties: {
    idUser: {
      type: 'string',
      description: 'The unique identifier for the user'
    },
    nom: {
      type: 'string',
      description: 'The last name of the user.'
    },
    prenom: {
      type: 'string',
      description: 'The first name of the user.'
    },
    email: {
      type: 'string',
      format: 'email',
      description: 'The email address of the user.'
    },
    mdp: {
      type: 'string',
      description: 'The password of the user.'
    },
    role: {
      type: 'string',
      description: 'The role of the user.'
    },

    estConnecte: {
      type: 'boolean',
      description: 'Indicates whether the user is currently connected.'
    }
  }
}

const userloginSchema = {
  type: 'object',
  required: ['email', 'password'],
  properties: {

    email: {
      type: 'string',
      format: 'email',
      description: 'The email address of the user.'
    },
    mdp: {
      type: 'string',
      description: 'The password of the user.'
    },

  }
}

module.exports = { userSchema, userInputSchema, userloginSchema }