'use strict';

const supergoose = require('@code-fellows/supergoose');
const {server} = require('../lib/server');
const mockRequest = supergoose(server);

describe('Web server', ()=> {

  it('Respond with 404 on a bad request', ()=> {
    return mockRequest
      .get('/badRequest')
      .then(response =>{
        expect(response.status).toBe(404);
      });
  });

  it('test failure on product' ,()=> {
    let obj = {not : 'not'};
    return mockRequest
      .post('/api/v1/products')
      .send(obj)
      .then( data => {
        expect(data.status).toBe(500);
      });
  });

  it('test failure on categories', ()=> {
    let obj = {not : 'not'};
    return mockRequest
      .post('/api/v1/categories')
      .send(obj)
      .then(data => {
        expect(data.status).toBe(500);
      });
  });

  it('should return the whole product entity', ()=> {
    let obj = {
      category: 'cat',
      name: 'hello',
      display_name: 'oh bot its working',
      description: 'testing',
    };
    return mockRequest
      .post('/api/v1/products')
      .send(obj)
      .then(data => {        
        return mockRequest
          .get('/api/v1/products')
          .then(data => {
            let result = data.body;
            Object.keys(obj).forEach(key => {
              expect(result[0][key]).toEqual(obj[key]);
              expect(data.status).toBe(200);
            });
          });
      });
  });

  it('should return the whole categories entity', ()=> {
    let obj = {
      name: 'hello',
      display_name: 'oh bot its working',
      description: 'testing',
    };
    return mockRequest
      .post('/api/v1/categories')
      .send(obj)
      .then(data => {
        return mockRequest
          .get('/api/v1/categories')
          .then(data => {                 
            let result = data.body[0];
            Object.keys(obj).forEach(key => {
              expect(result[key]).toEqual(obj[key]);
              expect(data.status).toBe(200);
            });
          });
      });
  });


  it('should post and create new data on products', ()=> {
    let obj = {
      category: 'cat',
      name: 'hello',
      display_name: 'oh bot its working',
      description: 'testing',
    };
    return mockRequest
      .post('/api/v1/products')
      .send(obj)
      .then( data => {        
        Object.keys(obj).forEach(key => {
          expect(data.body[key]).toEqual(obj[key]);
          expect(data.status).toBe(201);
        });
      });
  });

  it('can put and update the DB', () => {
    let obj = {
      category: 'cat',
      name: 'hello',
      display_name: 'oh bot its working',
      description: 'testing',
    };
    let updatedObj = {
      category: 'updated',
      name: 'updated',
      display_name: 'oh bot its working',
      description: 'testing',
    };
    return mockRequest
      .post('/api/v1/products')
      .send(obj)
      .then(data => {
        let id =  data.body._id;
        return mockRequest
          .put(`/api/v1/products/${id}`)
          .send(updatedObj)
          .then(data => {
            let result = data.body;
            Object.keys(updatedObj).forEach(key => {
              expect(result[key]).toEqual(updatedObj[key]);
            });
        
          });
      
      });
  });
});