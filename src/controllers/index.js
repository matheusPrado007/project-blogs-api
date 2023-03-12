const login = require('./login');
const { createUser, getAllUsers, getById } = require('./users');
const { create, getAll } = require('./category');
const { createPostController, getAllPosts, getPostById } = require('./postController');

module.exports = {
  login,
  createUser,
  getAllUsers,
  getById,
  create,
  getAll,
  createPostController,
  getAllPosts,
  getPostById,
};