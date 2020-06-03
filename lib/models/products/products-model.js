'use strict';

const productSchema = require('./products-schema');
const Model = require('../model');

class ProductsModel extends Model {
  constructor(){
    super(productSchema);
  }
}


module.exports = new ProductsModel();