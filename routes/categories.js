// 'use strict';

// const express = require('express');
// const route = express.Router();
// const categoriesObj = require('../lib/models/categories/categories-model');

// route.get('/categories', (req, res, next) => {
//   categoriesObj.read()
//     .then(data => {
//       res.status(200).json(data);
//     }).catch(next);
    
// });
  
// route.get( '/categories/:id', ( req, res ) => {
//   let specificItemId = req.params.id;  
//   categoriesObj.read(specificItemId)
//     .then(data => {
//       res.status(200).json(data);
//     });
// },
// );
  
// route.post('/categories', (req, res, next) => {
//   const newItem = req.body;  
//   categoriesObj.create(newItem)
//     .then(data => {
//       res.status(200).json(data);
//     }).catch(next);
    
// });
  
// route.put('/categories/:id', (req, res, next) => {
//   let specificItemId =req.params.id;
//   let updatedProduct = req.body;
//   categoriesObj.update(specificItemId, updatedProduct)
//     .then(data => {
//       res.status(200).json(data);
//     }).catch(next);
// });
  
// route.delete('/categories/:id', (req, res, next) => {
//   let specificItemId = req.params.id;
//   categoriesObj.delete(specificItemId)
//     .then(data => {
//       res.status(200).json(data);
//     }).catch(next);
// });


// module.exports = route;