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
      role: {
        type: 'string',
        description: 'The role of the user.'
      },
      image_profile: {
        type: 'string',
        description: 'The URL of the user\'s profile image.'
      },
      estConnecte: {
        type: 'boolean',
        description: 'Indicates whether the user is currently connected.'
      }
    }
};

const userInputSchema = {
    type: 'object',
    required: ['idUser','nom', 'prenom', 'email', 'role'],
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
      role: {
        type: 'string',
        description: 'The role of the user.'
      },
      image_profile: {
        type: 'string',
        description: "The URL of the user's profile image."
      },
      estConnecte: {
        type: 'boolean',
        description: 'Indicates whether the user is currently connected.'
      }
    }
}

module.exports = {userSchema, userInputSchema}