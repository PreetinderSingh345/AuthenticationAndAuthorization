const bcrypt = require('bcrypt');
const {User} = require('../../database/models');

const addUser = async (username, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username: username,
        password: hashedPassword
    });

    return user;
};

module.exports = {addUser};