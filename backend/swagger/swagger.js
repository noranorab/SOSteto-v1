const swaggerJSDoc = require('swagger-jsdoc');


const swaggerDefinition = {
swagger: '2.0',
info: {
title: 'SOSteto API',
version: '1.0.0',
description: 'SOSteto API Description',
},
tags: [
    {
      name: 'Users',
    },
  ],
};

const options = {
swaggerDefinition,
apis: ['./controller/routes/userRoute.js'], // Path to the API routes in your Node.js application
};


const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;