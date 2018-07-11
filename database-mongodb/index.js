var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todolist', { useNewUrlParser: true });

// https://stackoverflow.com/questions/51156334/unhandled-rejection-mongoerror-port-must-be-specified
// Error: DeprecationWarning: current URL string parser is deprecated, 
// and will be removed in a future version. To use the new parser, pass option 
// { useNewUrlParser: true } to MongoClient.connect.

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/todolist');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Now connected to the To Do List DB!');
});

module.exports = db;
