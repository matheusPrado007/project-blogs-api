const express = require('express');

const loginRoute = express.Router();
const userRoute = express.Router();

const { login, createUser } = require('../controllers');
const {
  validateEmail,
  validatePasswordLength,
  validatedisplayNameLength,
} = require('../middlewares/validate');

loginRoute.post('/', login);

userRoute.post(
  '/',
  validatePasswordLength,
  validatedisplayNameLength,
  validateEmail,
  createUser,
);

module.exports = { loginRoute, userRoute };
