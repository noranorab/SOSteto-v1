const express = require('express');
// connect to database
const connectToDatabase = require('./database'); 
// model imports 
const models = require('./model/schema'); 
// route imports
const userRoutes = require('./controller/routes/userRoute');
const recruteurRoutes = require('./controller/routes/recruteurRoute')
// swagger imports
const swaggerUi = require('swagger-ui-express');

const swaggerSpec = require('./swagger/swagger');

const app = express();

connectToDatabase();

for (const modelName in models) {
    if (models.hasOwnProperty(modelName)) {
        const Model = models[modelName];
        Model.syncIndexes();
    }
}
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/users', userRoutes);
app.use('/api/recruteurs', recruteurRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});