'use strict';

module.exports = ( req, res ) => {
  res.status(404);
  res.send('Page Not Found!!');

  // or res.status(404).send( 'NotFound!!')
    
};