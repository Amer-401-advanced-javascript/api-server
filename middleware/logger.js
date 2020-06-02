'use strict';

module.exports = (req, res, next) => {

  console.log(`We have a Reqeust which has a Request Path ${req.path}, a Request Method ${req.method} and RequestTime at ${req.requestTime}`);
    
  next();
};