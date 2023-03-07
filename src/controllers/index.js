const login = require('./login');
const { createUser, getAllUsers, getById } = require('./users');
const { create } = require('./category');

module.exports = {
  login,
  createUser,
  getAllUsers,
  getById,
  create,
};