const express = require('express');

const loginRoute = express.Router();
const userRoute = express.Router();

const { login, createUser, getAllUsers } = require('../controllers');
const {
  validateEmail,
  validatePasswordLength,
  validatedisplayNameLength,
} = require('../middlewares/validate');
const { validateToken } = require('../middlewares/validateToken');

loginRoute.post('/', login);

userRoute.post(
  '/',
  validatePasswordLength,
  validatedisplayNameLength,
  validateEmail,
  createUser,
);

userRoute.get('/', validateToken, getAllUsers);

module.exports = { loginRoute, userRoute };
