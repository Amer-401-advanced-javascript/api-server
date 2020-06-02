'use strict';

const loggerMiddleware = require('../middleware/logger');

describe('Logger Middleware', () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeEach( ()=> {
    consoleSpy = jest.spyOn(console,'log').mockImplementation();
  });

  afterEach( ()=> {
    consoleSpy.mockRestore();
  });

  it('call the console.log()', () => {
    loggerMiddleware(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('start the next function', ()=> {
    loggerMiddleware(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});