'use strict';

function paramsHandler (req ,res, next) {
  let model = req.params.model;
  let genericRequire = require(`../lib/models/${model}/${model}-model`);
  req.model = genericRequire;
  next();
  // if( model === 'categories'){ OR we can use switch statement
  //   req.model = categoriesModel;
  //   next();
  // } else if(model === 'products'){
  //   req.model = productsModel;
  //   next();
  // }
}

module.exports = paramsHandler;