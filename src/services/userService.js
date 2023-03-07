const { User } = require('../models');

const getAll = async () => {
  const Users = await User.findAll();

  return Users;
};

const getById = async (id) => {
  const Users = await User.findByPk(id);

  return Users;
};

const getByEmail = async (email) => User.findOne({ where: { email } });

const createUser = async ({ displayName, email, password, image }) => {
  const newUser = await User.create({ displayName, email, password, image });
  return newUser;
};

module.exports = {
  getAll,
  getById,
  createUser,
  getByEmail,
};