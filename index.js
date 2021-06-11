
const express = require('express');
const expressConfig = require('./config/express')
const databaseConfig = require('./config/database')
const routesConfig = require('./config/routes')
const storage = require('./middlewares/storage')


start();

async function start() {

    const app = express();
    const port = 3000;

    await databaseConfig(app);
    expressConfig(app);
    app.use(await storage());
    routesConfig(app);


    app.listen(port, () => console.log('Server is running on port ' + port))
}

