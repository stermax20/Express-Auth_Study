const { verifyToken } = require('../utils/jwt');

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.sendStatus(401);
    }
    try {
        const user = verifyToken(token);
        req.user = user;
        next();
    } catch (error) {
        res.sendStatus(403);
    }
};

module.exports = authenticateToken;
