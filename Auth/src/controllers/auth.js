const userServices = require('../services/auth');

const addUser = async (req, res) => {
    try {
        const {username, password} = req.body;

        const user = await userServices.addUser(username, password);
    
        res.status(201).json(user);
    } catch(error) {
      console.log(error);
      res.status(500).json(error);
    }
};

const loginUser = async (req, res) => {
  try {
    const {username, password} = req.body;

    const token = await userServices.loginUser(username, password);

    res.status(200).json(token);
  } catch(error) {
    res.status(500).json(error.message);
  }
};

module.exports = {addUser, loginUser};