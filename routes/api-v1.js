'use strict';

const express = require('express');
const route = express.Router();
// const categoriesModel = require('../lib/models/categories/categories-model');
// const productsModel = require('../lib/models/products/products-model');
let paramsHandler = require('../middleware/paramshandler');




route.param('model',paramsHandler);




route.get('/:model', handleGetAll);
route.get('/:model/:id', getHandler);
route.post('/:model', postHandler);
route.put('/:model/:id', putHandler);
route.delete('/:model/:id', deleteHandler);



function handleGetAll (req, res, next){
  req.model.read()
    .then(data => {
      res.status(200).json(data);
    }).catch(next);
}

function getHandler( req, res, next) {
  let id = req.params.id;
  req.model.read(id)
    .then( data => {
      res.status(200).json(data);
    }).catch(next);
}
function postHandler(req, res, next){
  let addRecord = req.body;
  req.model.create(addRecord)
    .then(data => {
      res.status(201).json(data);
    }).catch(next);
}

function putHandler(req, res, next){
  let id = req.params.id;
  let record = req.body;
  req.model.update(id, record)
    .then(data => {
      res.status(200).json(data);
    }).catch(next);
}

function deleteHandler(req, res, next){  
  let id = req.params.id;
  req.model.delete(id)
    .then(data => {
      res.status(200).json(data);
    }).catch(next);
}



module.exports = route;

