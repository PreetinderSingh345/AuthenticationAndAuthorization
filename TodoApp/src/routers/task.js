const express = require('express');
const taskController = require('../controllers/task');

const taskRouter = express.Router();

taskRouter.route('/')
  .get(taskController.getTasks)
  .post(taskController.addTask);

taskRouter.route('/:id')
  .get(taskController.getTask)
  .put(taskController.updateTask)
  .delete(taskController.removeTask);

module.exports = taskRouter;