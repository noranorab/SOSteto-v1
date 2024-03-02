const express = require('express');
const connectToDatabase = require('./database'); 
const models = require('./model/schema'); 
const userRoutes = require('./controller/routes/userRoute');
const recruteurRoutes = require('./controller/routes/recruteurRoute')

const app = express();

connectToDatabase();

for (const modelName in models) {
    if (models.hasOwnProperty(modelName)) {
        const Model = models[modelName];
        Model.syncIndexes();
    }
}
app.use('/api/users', userRoutes);
app.use('/api/recruteur', recruteurRoutes)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});