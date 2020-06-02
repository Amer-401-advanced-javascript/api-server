'use strict';

module.exports = ( error, req, res ) => {
  res.status(500).json({err : error});
};