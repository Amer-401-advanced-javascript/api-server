// 'use strict';

// const express = require('express');
// const route = express.Router();
// const productsObj = require('../lib/models/products/products-model');

// route.get('/products', (req, res, next) => {
//   productsObj.read()
//     .then(data => {
//       res.status(200).json(data);
//     }).catch(next);
// });
  
// route.get( '/products/:id', ( req, res, next ) => {
//   let specificItemId = req.params.id;  
//   productsObj.read(specificItemId)
//     .then(data => {
//       res.status(200).json(data);
//     }).catch(next);
// });
  
// route.post('/products', (req, res, next) => {
//   const newItem = req.body;
//   productsObj.create(newItem)
//     .then( data => {
//       res.status(200).json(data);
//     }).catch(next);
// });
  
// route.put('/products/:id', (req, res, next) => {
//   let specificItemId =req.params.id;
//   let updatedProduct = req.body;
//   productsObj.update(specificItemId, updatedProduct)
//     .then(data => {
//       res.status(200).json(data);
//     }).catch(next);
// });
  
// route.delete('/products/:id', (req, res, next) => {
//   let specificItemId = req.params.id;
//   productsObj.delete(specificItemId)
//     .then(data => {
//       res.status(200).json(data);
//     }).catch(next);
  
// });

// module.exports = route;
  