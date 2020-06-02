'use strict';

const {server} = require('../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Web Server', ()=> {
  it('Respond with 404 on a bad request', ()=> {
    return mockRequest
      .get('/badRequest')
      .then(response =>{
        expect(response.status).toBe(404);
      });
  });

  it('should respond to /products route', ()=> {
    return mockRequest
      .get('/products')
      .then(response => {
        expect(response.status).toBe(200);
      });
  });
  
  it('should respond to /categories route', ()=> {
    return mockRequest
      .get('/categories')
      .then(response => {
        expect(response.status).toBe(200);
      });
  });

  it('should post data ON PRODUCTS ROUTE', ()=> {
    return mockRequest
      .post('/products')
      .send({product :'TV'})
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

  it('should post data using POST on categories route', ()=> {
    return mockRequest
      .post('/categories')
      .send({product :'TV'})
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

  it('should delete data using the DELETE on products route', ()=> {
    return mockRequest
      .delete('/products/2')
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

  it('should delete data using the DELETE on categories route', ()=> {
    return mockRequest
      .delete('/categories/1')
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

  it('should update data using PUT on products route', ()=> {
    return mockRequest
      .put('/products/1')
      .send({name : 'Television'})
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

  it('should update data using PUT on categories route', ()=> {
    return mockRequest
      .put('/categories/1')
      .send({name : 'Games'})
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

});