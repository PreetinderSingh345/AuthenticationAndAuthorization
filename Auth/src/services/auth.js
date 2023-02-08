const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const TOKEN_SECRET = `${process.env.TOKEN_SECRET}`;
const {User} = require('../../database/models');

const addUser = async (username, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        password: hashedPassword
    });

    return user;
};

const loginUser = async(username, password) => {
    const user = await User.findOne({
        where : {
            username
        }
    });

    const hashedPassword = user.password;

    const isPasswordValid = await bcrypt.compare(password, hashedPassword);

    if(!isPasswordValid) {
        throw new Error('Invalid password');
    }

    const token = jwt.sign(username, TOKEN_SECRET);

    return token;    
};

module.exports = {addUser, loginUser};