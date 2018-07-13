const db = require('./');
const mongoose = require('mongoose');

const listSchema = mongoose.Schema({
    name: { type: String, require: true } //mongo creates id's for us
});

const List = mongoose.model('List', listSchema); //mongoose model is the same as a table

const todoSchema = mongoose.Schema({
    name: { type: String, require: true},
    list_name: { type: String, require: true }
});

const Todo = mongoose.model('Todo', todoSchema);

module.export = { List, Todo };