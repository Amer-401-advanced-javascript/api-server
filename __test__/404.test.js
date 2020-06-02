'use strict';

const {server} = require('../lib/server');

// superTest make fake request to the server
const supertest = require('supertest');
const mockRequest = supertest(server);


it('should return 404 on a bad request', () => {
  return mockRequest
    .get('/badRaquest')
    .then(response => {
      expect(response.status).toBe(404);
    }).catch(console.log);
});

// const badRouteMiddleware = require('../middleware/404');

// describe('404 Middleware', () => {
//   let req = {};
//   let res = {};

//   it('Respond with 404 on a bad request', () => {
//     badRouteMiddleware(req, res);
//     expect(res.status).toBe(404);
//   });
// });