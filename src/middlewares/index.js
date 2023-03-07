const {
  validateEmail,
  validatePasswordLength,
  validatedisplayNameLength,
} = require('./validateLogin');
const { validateToken } = require('./validateToken');

const { validateGetId } = require('./validateUserId');

module.exports = {
  validateEmail,
  validatePasswordLength,
  validatedisplayNameLength,
  validateToken,
  validateGetId,
};