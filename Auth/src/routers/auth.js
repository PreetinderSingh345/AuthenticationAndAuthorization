const express = require('express');
const userController = require('../controllers/auth');

const userRouter = express.Router();

userRouter.post('/user', userController.addUser);
userRouter.post('/login', userController.loginUser);

module.exports = userRouter;