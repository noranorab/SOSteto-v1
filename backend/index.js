const express = require('express');
const connectToDatabase = require('./database'); 
const models = require('./model/schema'); 

const app = express();


connectToDatabase();


for (const modelName in models) {
    if (models.hasOwnProperty(modelName)) {
        const Model = models[modelName];
        Model.syncIndexes();
    }
}


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});