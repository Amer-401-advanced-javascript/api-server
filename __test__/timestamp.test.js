'use strict';

const timestampMiddleware = require('../middleware/timestamp');

describe('Timestamp Middleware', ()=> {
  let req = {};
  let res = {};
  let next = jest.fn();
  let date = new Date().toDateString();


  it('insert the current time into the request object', ()=> {
    timestampMiddleware(req, res, next);
    expect(req.requestTime).toEqual(date);
  });

  it('it call the next()', ()=> {
    timestampMiddleware(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});