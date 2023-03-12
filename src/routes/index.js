const express = require('express');

const loginRoute = express.Router();
const userRoute = express.Router();
const categoryRoute = express.Router();
const postRoute = express.Router();

const {
  login,
  createUser,
  getAllUsers,
  getById,
  create,
  getAll,
  createPostController,
  getAllPosts,
  getPostById,
} = require('../controllers');
const {
  validatePasswordLength,
  validatedisplayNameLength,
  validateEmail,
  validateToken,
  validateGetId,
  validatePost,
} = require('../middlewares');
const { validateName } = require('../middlewares/validateCategory');

// LOGIN
loginRoute.post('/', login);

// USER
userRoute.get('/', validateToken, getAllUsers);
userRoute.get('/:id', validateGetId, validateToken, getById);
userRoute.post(
  '/',
  validatePasswordLength,
  validatedisplayNameLength,
  validateEmail,
  createUser,
);

// CATEGORY
categoryRoute.post('/', validateName, validateToken, create);
categoryRoute.get('/', validateToken, getAll);

// POST
postRoute.post('/', validateToken, validatePost, createPostController);
postRoute.get('/', validateToken, getAllPosts);
postRoute.get('/:id', validateToken, getPostById);

module.exports = { loginRoute, userRoute, categoryRoute, postRoute };
