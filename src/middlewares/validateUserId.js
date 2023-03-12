const NOT_FOUND = 404;
const { userService } = require('../services');

const validateGetId = async (req, res, next) => {
  const { id } = req.params;
  const user = await userService.getById(id);
  if (!user) {
    return res.status(NOT_FOUND).json({
      message: 'User does not exist',
    });
  }
  return next();
};

module.exports = {
  validateGetId,
};