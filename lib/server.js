'use strict';

const express = require('express');
const app = express();
const timeStamp = require('../middleware/timestamp');
const logger = require('../middleware/logger');
const notFoundHandler = require('../middleware/404');
const errorandler = require('../middleware/500');
//requiring modules
// const categoriesRoute = require('../routes/categories');
// const productsRoute = require('../routes/products');
const modelIdentifierRoute = require('../routes/api-v1');

//express middlewares
app.use(express.json());
//Third Party middlewares

//internal middlewares
app.use(timeStamp);
app.use(logger);

//////////////////////// InMemoey DB \\\\\\\\\\\\\\\\\\

//////////////////// Routes Definitions \\\\\\\\\\\\\\\\\\\
// app.use('/api/v1',categoriesRoute);
// app.use('/api/v1', productsRoute);
app.use('/api/v1', modelIdentifierRoute);
//////////////////////////////////////////////////////////////////////////////////////////





/////////// Error Handlers \\\\\\\\\\\\\\\

app.use(notFoundHandler);
app.use(errorandler);




module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || process.env.PORT || 4000;
    app.listen(PORT, ()=> {console.log(`The server is up and running on ${PORT} port`);});
  },
};