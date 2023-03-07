const login = require('./login');
const { createUser, getAllUsers } = require('./users');

module.exports = {
  login,
  createUser,
  getAllUsers,
};