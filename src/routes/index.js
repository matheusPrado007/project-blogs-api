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
  getAll,
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

userRoute.get('/', validateToken, getAllUsers);
userRoute.get('/:id', validateGetId, validateToken, getById);
userRoute.post(
  '/',
  validatePasswordLength,
  validatedisplayNameLength,
  validateEmail,
  createUser,
);

categoryRoute.post('/', validateName, validateToken, create);
categoryRoute.get('/', validateToken, getAll);

module.exports = { loginRoute, userRoute, categoryRoute };
