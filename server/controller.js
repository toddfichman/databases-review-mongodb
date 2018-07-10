const db = require('../database-mongodb/models');

module.exports = {
  fetch: (req, res) => {
    // http://localhost:3000/api/todolist/?name=To+Do+List
    const { listName } = req.query;
    db.Todo.find({ 
      list_name: listName 
    }, (err, todos) => {
      if (err) { console.log(err) };
      res.status(200).send(todos);
    })
  },
  post: (req, res) => {
    const { todo, listName } = req.body;
    new db.Todo({
      name: todo,
      list_name: listName
    }).save((err, newPost) => {
      if (err) { console.log(err) };
      res.status(201).send(newPost);
    })
  },
  delete: (req, res) => {
    const { todo } = req.query;
    db.Todo.remove({
      name: todo
    }, (err, deleted) => {
      res.status(202).send('deleted');
    })
  }
}