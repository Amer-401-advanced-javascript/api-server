'use strict';

const {server} = require('../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

it('should return 500 when error occur ', ()=> {
  return mockRequest
    .post('/api/v1/products')
    .send()
    .then(data => {
      expect(data.status).toBe(500);
    });
});