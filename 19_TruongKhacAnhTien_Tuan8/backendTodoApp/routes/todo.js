const express = require('express');
const todoControllers = require('../controllers/todoControllers');


const routerTodo = express.Router();

routerTodo.get('/todos', todoControllers.todoList)


module.exports = routerTodo;