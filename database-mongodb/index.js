var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todolist');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Now connected to the to do list DB')
});

module.exports = db;