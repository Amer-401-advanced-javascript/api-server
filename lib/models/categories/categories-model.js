'use strict';

const categorySchema = require('./categories-schema');
const Model = require('../model');

class CategoriesModel extends Model {
  constructor(){
    super(categorySchema);
  }
}


module.exports = new CategoriesModel();