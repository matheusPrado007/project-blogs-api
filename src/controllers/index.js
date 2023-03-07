const login = require('./login');
const { createUser, getAllUsers, getById } = require('./users');

module.exports = {
  login,
  createUser,
  getAllUsers,
  getById,
};