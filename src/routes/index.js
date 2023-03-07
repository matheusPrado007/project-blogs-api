const express = require('express');

const loginRoute = express.Router();
const userRoute = express.Router();

const { login, createUser, getAllUsers, getById } = require('../controllers');
const {
  validatePasswordLength,
  validatedisplayNameLength,
  validateEmail,
  validateToken,
  validateGetId,
} = require('../middlewares');

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

module.exports = { loginRoute, userRoute };
