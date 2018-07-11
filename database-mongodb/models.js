const db = require('./');
const mongoose = require('mongoose');

const listSchema = mongoose.Schema({
  name: { type: String, require: true },
});

// Register the listSchema with Mongoose as the 'List' collection.
const List = mongoose.model('List', listSchema);

const todoSchema = mongoose.Schema({
  name: { type: String, require: true },
  list_name: { type: String, require: true },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = { List, Todo };