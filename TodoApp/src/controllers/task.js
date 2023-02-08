const taskServices = require('../services/task');

const getTasks = async (req, res) => {
	try {
		const tasks = await taskServices.getTasks();

		res.status(200).json(tasks);
	} catch (error) {
		res.status(500).json(error.message);
	}
};

const getTask = async (req, res) => {
	try {
		const {id} = req.params;

		const task = await taskServices.getTask(id);

		res.status(200).json(task);
	} catch (error) {
		res.status(500).json(error.message);
	}
};

const addTask = async (req, res) => {
	try {
		const {username, description} = req.body;

		await taskServices.addTask(username, description);

		res.status(201).json("Task added successfully");
	} catch (error) {
		res.status(500).json(error.message);
	}
};

const updateTask = async (req, res) => {
	try {
		const {id} = req.params;

		const {description, isComplete} = req.body;

		await taskServices.updateTask(id, description, isComplete);

		res.status(200).json('Task updated successfully');
	} catch (error) {
		res.status(500).json(error.message);
	}
};

const removeTask = async (req, res) => {
	try {
		const {id} = req.params;

		await taskServices.removeTask(id);

		res.status(200).json('Task removed successfully');
	} catch (error) {
		res.status(500).json(error.message);
	}
};

module.exports = { getTasks, getTask, addTask, updateTask, removeTask };