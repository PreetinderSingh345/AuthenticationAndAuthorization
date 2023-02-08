const {Task} = require('../../database/models');

const getTasks = async () => {
  const tasks = await Task.findAll();

  return tasks;
};

const getTask = async (id) => {
  const task = await Task.findOne({
    where: {
      id: id
    }
  });

  return task;
};

const addTask = async (username, description) => {
  const created = await Task.create({
    username: username,
    description: description,
    isComplete: false
  });

  return created;
};

const updateTask = async (id, description, isComplete) => {
  const updated = await Task.update({
    description: description,
    isComplete: isComplete
  }, {
    where: {
      id: id
    }
  });

  return updated;
};

const removeTask = async (id) => {
  const deleted = await Task.destroy({
    where: {
      id: id
    }
  });

  return deleted;
};

module.exports = { getTasks, getTask, addTask, updateTask, removeTask };