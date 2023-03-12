const {
  validateEmail,
  validatePasswordLength,
  validatedisplayNameLength,
} = require('./validateLogin');
const { validateToken } = require('./validateToken');

const { validateGetId } = require('./validateUserId');
const { validatePost, validateField } = require('./validatePost');

module.exports = {
  validateEmail,
  validatePasswordLength,
  validatedisplayNameLength,
  validateToken,
  validateGetId,
  validatePost,
  validateField,
};