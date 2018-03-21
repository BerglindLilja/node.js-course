const expect = require('expect');


const utils = require('./utils');

it ('should add two numbers', () => {
  var res = utils.add(33,11);

  expect(res).toBe(44).toBeA('number');
  // if(res !== 44){
  //   throw new Error(`Expected 44, but got ${res}.`);
  //
  // }

});

it('should asynz add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {

    expect(sum).toBe(7).toBeA('number');
    done();
  });

});

it('should async square a number', (done) => {
  utils.asyncSquare(3, (mult) => {
    expect(mult).toBe(9).toBeA('number');
    done();
  });

});

it('should square a number', () => {
  var res = utils.square(3);

  expect(res).toBe(9).toBeA('number');

});

it('should set firstName and lastName', () => {
  var user = {location: 'Philadelphia', age: 25};
  var res = utils.setName(user, 'Andrew Mead');

  expect(res).toInclude({
    firstName: 'Andrew',
    lastName: 'Mead'
  })

});

// it('should expect some values', () => {
//   //expect(12).toNotBe(12);
//   //toNotEqual
//   //expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
//   //expect([2,3,4]).toInclude(3);
//   //toExclude og toInclude
//   expect({
//     name: 'Berglind',
//     age: 24,
//     location: 'Philadelphia'
//   }).toInclude({
//     age:23
//   })
//
// })
