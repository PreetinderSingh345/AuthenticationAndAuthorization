const userServices = require('../services/user');

const addUser = async (req, res) => {
    const {username, password} = req.body;

    res.status(200).json(await userServices.addUser(username, password));
};

module.exports = {addUser};