const express = require('express');
const userController = require('../controllers/auth');

const userRouter = express.Router();

userRouter.post('/user', userController.addUser);

module.exports = userRouter;