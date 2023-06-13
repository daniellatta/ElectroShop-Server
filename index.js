const express = require('express');
const morgan = require('morgan');
const routerApi = require('./routes/index');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(morgan('dev'));

routerApi(app);

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto: ${PORT}`)
});