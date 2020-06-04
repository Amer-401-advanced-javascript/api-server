'use strict';

module.exports = ( error, req, res,next ) => {
  res.status(500).json({err : error});
};