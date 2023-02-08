const jwt = require('jsonwebtoken');
// const TOKEN_SECRET = `${process.env.TOKEN_SECRET}`;

const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization;

    if(token) {
      jwt.verify(token, process.env.TOKEN_SECRET, (error, user) => {
        if(error) {
            res.status(403).json('Forbidden');
        }else {
          req.user = user;

          next();
        }
      });
    }else {
      res.status(401).json('Unauthorized');
    }
};

module.exports = authenticateToken;