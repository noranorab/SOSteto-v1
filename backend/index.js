require('dotenv').config();
const express = require('express');
const cors = require('cors');
// connect to database
const connectToDatabase = require('./Database');
// model imports 
const models = require('./model/schema');
const morgan =  require('morgan')

const functions = require("firebase-functions");

// route imports
const userRoutes = require('./controller/routes/userRoute');
const villeRoutes = require('./controller/routes/villeRoute');
const quartierRoutes = require('./controller/routes/quartierRoute');
const imageRoutes = require('./controller/routes/imageRoute')
const roleRoutes = require('./controller/routes/roleRoute')
const infirmierRoutes = require('./controller/routes/infirmierRoute')
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
app.use(cors({
    origin: ['http://localhost:3001', 'http://localhost:8081','http://192.168.8.104:8081', 'exp://asm7ciw-anonymous-8081.exp.direct', 'http://192.168.8.104:3000', 'https://us-central1-sosteto-f1066.cloudfunctions.net/api', "exp://192.168.8.104:8081"]
}));
app.use('/', userRoutes);
app.use('/', villeRoutes);
app.use('/', quartierRoutes);
app.use('/', imageRoutes);
app.use('/', roleRoutes);
app.use('/', infirmierRoutes)
// app.use('/api/recruteurs', recruteurRoutes)


app.use(morgan('combined'))

const port = 3000

app.listen(port, ()=>{
    console.log(`App running on port ${port}`)
    swaggerDocs(app, port)
})

exports.api = functions.https.onRequest(app)