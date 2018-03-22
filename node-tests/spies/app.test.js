const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App', () => {

  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('scould call the spy directly', () => {
    var spy = expect.createSpy();
    spy('Andrew, 25');
    expect(spy).toHaveBeenCalledWith('Andrew', 25);
  });
  it('should call saveUser with user Object', () => {

    var email = 'andrew@example.com';
    var password = '123abc';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });

});
