const express = require('express');

const loginRoute = express.Router();
const userRoute = express.Router();
const categoryRoute = express.Router();

const {
  login,
  createUser,
  getAllUsers,
  getById,
  create,
} = require('../controllers');
const {
  validatePasswordLength,
  validatedisplayNameLength,
  validateEmail,
  validateToken,
  validateGetId,
} = require('../middlewares');
const { validateName } = require('../middlewares/validateCategory');

loginRoute.post('/', login);

userRoute.post(
  '/',
  validatePasswordLength,
  validatedisplayNameLength,
  validateEmail,
  createUser,
);

userRoute.get('/', validateToken, getAllUsers);
userRoute.get('/:id', validateGetId, validateToken, getById);

categoryRoute.post('/', validateName, validateToken, create);

module.exports = { loginRoute, userRoute, categoryRoute };
