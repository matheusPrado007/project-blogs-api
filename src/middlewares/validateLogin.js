const BAD_REQUEST = 400;
const CONFLICT = 409;
const { userService } = require('../services');

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  const user = await userService.getByEmail(email);
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i;
  if (user) {
    return res.status(CONFLICT).json({
      message: 'User already registered',
    });
  }
  if (!emailRegex.test(email)) {
    return res.status(BAD_REQUEST).send({
      message: '"email" must be a valid email',
    });
  }
  return next();
};

const validatedisplayNameLength = (req, res, next) => {
  const { displayName } = req.body;
  const displayNameLength = 8;
  if (displayName.length >= displayNameLength) {
    return next();
  }
  return res.status(BAD_REQUEST).send({
    message: '"displayName" length must be at least 8 characters long',
  });
};

const validatePasswordLength = (req, res, next) => {
  const { password } = req.body;
  const passwordLength = 6;
  if (password.length >= passwordLength) {
    return next();
  }
  return res.status(BAD_REQUEST).send({
    message: '"password" length must be at least 6 characters long',
  });
};

module.exports = {
  validateEmail,
  validatedisplayNameLength,
  validatePasswordLength,
};
