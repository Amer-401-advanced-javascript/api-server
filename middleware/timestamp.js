'use strict';

function getTimeStamp ( req, res, next ) {
  let date = new Date().toDateString();
  req.requestTime = date;
  next();
}


module.exports = getTimeStamp;