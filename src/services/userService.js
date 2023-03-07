const { User } = require('../models');

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: 'password' },
  });

  return users;
};

const getById = async (id) => {
  const Users = await User.findByPk(id, 
    { attributes: { exclude: 'password' } });

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
