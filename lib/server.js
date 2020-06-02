'use strict';

const express = require('express');
const app = express();
const timeStamp = require('../middleware/timestamp');
const logger = require('../middleware/logger');
const notFoundHandler = require('../middleware/404');
const errorandler = require('../middleware/500');

app.use(express.json());

app.use(timeStamp);
app.use(logger);

//////////////////////// InMemoey DB \\\\\\\\\\\\\\\\\\
let categoryDb = [];
let productDb = [];

//////////////////// Routes Definitions \\\\\\\\\\\\\\\\\\\

app.get('/categories', (req, res) => {
  res.status(200).json(categoryDb);
});

app.get( '/categories/:id', ( req, res ) => {
  let specificItemId = req.params.id;  
  categoryDb.forEach(value => {
    console.log(value.id, specificItemId);
    if (value.id.toString() === specificItemId){
      res.status(200).json(value);
    }
  });
});

app.post('/categories', (req, res) => {
  const newItem = req.body;
  newItem.id = categoryDb.length+1;
  categoryDb.push(newItem);
  res.status(200).json(categoryDb);
  
});

app.put('/categories/:id', (req, res) => {
  let specificItemId =req.params.id;
  let updatedProduct = req.body;
  categoryDb.forEach(function (value,idx){
    if(specificItemId === value.id.toString()){
      updatedProduct.id = value.id;
      this[idx] = updatedProduct;      
    }
  }, categoryDb);
  res.status(200).json(categoryDb);
});

app.delete('/categories/:id', (req, res) => {
  let specificItemId = req.params.id;
  categoryDb = categoryDb.filter(value => {
    return value.id.toString() !== specificItemId;
  });
  res.status(200).json(categoryDb);
});



//////////////////////////////////////////////////////////////////////////////////////////

app.get('/products', (req, res) => {
  res.status(200).json(productDb);
});

app.get( '/products/:id', ( req, res ) => {
  let specificItemId = req.params.id;  
  productDb.forEach(value => {
    console.log(value.id, specificItemId);
    if (value.id.toString() === specificItemId){
      res.status(200).json(value);
    }
  });
});

app.post('/products', (req, res) => {
  const newItem = req.body;
  newItem.id = productDb.length+1;
  productDb.push(newItem);
  res.status(200).json(productDb);
});

app.put('/products/:id', (req, res) => {
  let specificItemId =req.params.id;
  let updatedProduct = req.body;
  productDb.forEach(function (value,idx){
    if(specificItemId === value.id.toString()){
      updatedProduct.id = value.id;
      this[idx] = updatedProduct;      
    }
  }, productDb);
  res.status(200).json(productDb);
});

app.delete('/products/:id', (req, res) => {
  let specificItemId = req.params.id;
  productDb = productDb.filter(value => {
    return value.id.toString() !== specificItemId;
  });
  res.status(200).json(productDb);
});




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