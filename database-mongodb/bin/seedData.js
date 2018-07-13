const db = require('../models');

const listData = [
  {
    name: 'To Do List',
  },
];

const todoData = [
  {
    name: 'Cook dinner',
    list_name: 'To Do List'
  },
  {
    name: 'Clean house',
    list_name: 'To Do List'
  },
  {
    name: 'Watch TV',
    list_name: 'To Do List'
  },
  {
    name: 'Sleep',
    list_name: 'To Do List'
  },
];

listData.forEach((list) => {
  new db.List({
    name: list.name
  }).save((err, newList) => { //have to use .save whenever you create new element in database
    if (err) { console.log(err) };
    todoData.forEach((todo) => {
      new db.Todo({
        name: todo.name,
        list_name: todo.list_name
      }).save((err, newTodo) => {
        if (err) { console.log(err) };
        console.log(newTodo);
      })
    })
  })
})