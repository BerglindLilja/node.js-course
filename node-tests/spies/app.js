var db = require('./db');


module.exports.handleSignup = (email, password) => {
  //check ig the email already exists
  db.saveUser({email, password});
  //send the email

};
