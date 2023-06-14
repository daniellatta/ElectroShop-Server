const express = require('express');
const morgan = require('morgan');
const routerApi = require('./routes/index');
const { boomErrorHandler, errorHanlder, errroHablderDb, logError } = require('./middleware/error.hanlder');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(morgan('dev'));

//Router
routerApi(app);

//middleware
app.use(logError);
app.use(boomErrorHandler);
app.use(errroHablderDb);
app.use(errorHanlder);

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto: ${PORT}`)
});