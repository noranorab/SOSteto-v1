const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const { userSchema } = require('../schema/userSchema')
const { userInputSchema } = require('../schema/userSchema')

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
      UserInput: userInputSchema,
    }
  },
  security: [
    {
      bearerAuth: [],
    }
  ],
  tags: [
    {
      name: 'Users'
    }
  ]
};

const options = {
  swaggerDefinition,
  apis: ['./controller/routes/userRoute.js'], // Path to the API routes in your Node.js application
};

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app, port) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  app.get('api-docs.json', (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec)
  });
  console.log(`Docs available at http://localhost:${port}/api-docs`)
  console.log(`Docs available at http://localhost:${port}/api-docs`)
}

module.exports = swaggerDocs

