const express = require('express');
// connect to database
const connectToDatabase = require('./database'); 
// model imports 
const models = require('./model/schema'); 
// route imports
const userRoute = require('./controller/routes/userRoute');
const recruteurRoutes = require('./controller/routes/recruteurRoute')
const swaggerDocs = require('./swagger/swagger');
const app = express();

connectToDatabase();

for (const modelName in models) {
    if (models.hasOwnProperty(modelName)) {
        const Model = models[modelName];
        Model.syncIndexes();
    }
}

app.use('/', userRoute);
// app.use('/api/recruteurs', recruteurRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    swaggerDocs(app, PORT)
});