'use strict';

const model = require('../lib/models/products/products-model');
require('@code-fellows/supergoose');


describe('Products Model', ()=> {
  it('can read from the database', ()=> {
    let fake = {
      'category': 'cat2222',
      'name':'hello',
      'display_name': 'oh bot its working',
      'description':'testing',
    };
    return model.create(fake)
      .then(data => {
        return model.read(data)
          .then(data => {           
            Object.keys(fake).forEach(key => {
              expect(data[0][key]).toEqual(fake[key]);
            });
          });
      });
  });

  it('can create an entity in the DB', ()=> {
    let fake = {
      'category': 'cat2222',
      'name':'hello',
      'display_name': 'oh bot its working',
      'description':'testing',
    };
    return model.create(fake)
      .then(data => {
        Object.keys(fake).forEach(key =>{
          expect(data[key]).toEqual(fake[key]);
        });
      });
  });

  it('can update an entity in the DB', ()=> {
    let fake = {
      'category': 'cat2222',
      'name':'hello',
      'display_name': 'oh bot its working',
      'description':'testing',
    };
    let updatedFake = {
      'category': 'category',
      'name':'thatsME',
      'display_name': 'test',
      'description':'test',
    };

    return model.create(fake)
      .then(data => {
        return model.update(data._id, updatedFake)
          .then(data => {
            Object.keys(updatedFake).forEach(key => {
              expect(data[key]).toEqual(updatedFake[key]);
            });
          });
      });
  });

  it('can delete the entity from the DB', () => {
    let deletedFake = {
      'category': 'deleted',
      'name':'hello',
      'display_name': 'oh bot its working',
      'description':'testing',
    };

    return model.create(deletedFake)
      .then(data => {
        return model.delete(data._id)
          .then(data => {              
            return model.read(data._id)
              .then(data => {
                Object.keys(deletedFake).forEach(key => {
                  expect(data[key]).not.toEqual(deletedFake[key]);
                });
              });            
          });
      }); 
  });
});
