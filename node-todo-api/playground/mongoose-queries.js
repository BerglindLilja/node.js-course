const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5ab8cc9c8bce8ca00712169c';
//
// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
//
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.find({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//
//     return console.log('ID not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

//user.findById
//user not found
//user was found
//error ObjectID

var userID = '5ab4fd40bd3c4fdf0c851616'

User.findById(userID).then((users) => {
  if(!users) {
    return console.log('User ID not found');
  }
  console.log('User by id', users);
}).catch((e) => console.log(e));
