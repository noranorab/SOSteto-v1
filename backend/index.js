require('dotenv').config();
const express = require('express');
const cors = require('cors');
// connect to database
const connectToDatabase = require('./database');
// model imports 
const models = require('./model/schema');
// route imports
const userRoutes = require('./controller/routes/userRoute');
const villeRoutes = require('./controller/routes/villeRoute');
const quartierRoutes = require('./controller/routes/quartierRoute');
const imageRoutes = require('./controller/routes/imageRoute')
const roleRoutes = require('./controller/routes/roleRoute')
const swaggerDocs = require('./swagger/swagger');
const bodyParser = require('body-parser');
const app = express();

connectToDatabase();

for (const modelName in models) {
    if (models.hasOwnProperty(modelName)) {
        const Model = models[modelName];
        Model.syncIndexes();
    }
}
app.use(bodyParser.json());
app.use(cors({}));
app.use('/', userRoutes);
app.use('/', villeRoutes);
app.use('/', quartierRoutes);
app.use('/', imageRoutes);
app.use('/', roleRoutes);
// app.use('/api/recruteurs', recruteurRoutes)

console.log('JWT_SECRET:', process.env.JWT_SECRET);

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    swaggerDocs(app, PORT)
});