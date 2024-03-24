const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const { userSchema, userOutputSchema } = require('../schema/userSchema')
const { userInputSchema } = require('../schema/userSchema')
const { userloginSchema } = require('../schema/userSchema')
const { villeSchema } = require('../schema/villeSchema')
const { quartierSchema} = require('../schema/quartierSchema')
const {imageSchema} = require('../schema/imageSchema')
const {roleSchema} = require('../schema/roleSchema')

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'SOSteto API',
    version: '1.0.0',
    description: 'SOSteto API Description',
  },
  components: {
    securitySchemas: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      User: userSchema,
      UserOutput: userOutputSchema,
      UserLogin: userloginSchema,
      Ville: villeSchema,
      Quartier: quartierSchema,
      Image: imageSchema,
      Role: roleSchema,
    }
  },
  security: [
    {
      bearerAuth: [],
    }
  ],
  tags: [
    {
      name: 'Users',
      description: 'Endpoints related to user management'
    },
    {
      name: 'Villes',
      description: 'Endpoints related to city management'
    },
    {
      name: 'Quartiers',
      description: 'Endpoints related to district management'
    },
    {
      name: 'Image of User',
      description: 'Endpoints related to users image management'
    },
    {
      name: 'Role of user',
      description: 'Endpoints related to roles management'
    }
  ]
};

const options = {
  swaggerDefinition,
  apis: ['./controller/routes/userRoute.js', './controller/routes/villeRoute.js', './controller/routes/quartierRoute.js','./controller/routes/imageRoute.js',
          './controller/routes/roleRoute.js',
], // Path to the API routes in your Node.js application
};

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app, port) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  app.get('api-docs.json', (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec)
  });
  console.log(`Docs available at http://localhost:${port}/api-docs`)
}

module.exports = swaggerDocs

