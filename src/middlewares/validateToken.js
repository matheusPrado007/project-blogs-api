const { verifyToken } = require('../auth/authFuctions');

const UNAUTHORIZED = 401;

const validateToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(UNAUTHORIZED).json({
        message: 'Token not found',
      });
    }
    const payload = verifyToken(authorization);
    req.data = payload.data;
    next();
  } catch (error) {
    res.status(UNAUTHORIZED).json({
      message: 'Expired or invalid token',
    });
  }
};

module.exports = {
  validateToken,
};
