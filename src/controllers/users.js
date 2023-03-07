require('dotenv/config');
const { userService } = require('../services');
const { createToken } = require('../auth/authFuctions');

const CREATED = 201;
const INTERNAL_SERVER_ERROR = 500;
const OK_STATUS = 200;

const getAllUsers = async (_req, res) => {
  try {
    const users = await userService.getAll();
    return res.status(OK_STATUS).json(users);
  } catch (err) {
    res.status(INTERNAL_SERVER_ERROR).json(err.message);
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getById(id);
  return res.status(OK_STATUS).json(user);
};

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    await userService.createUser({ displayName, email, password, image });
    const user = await userService.getByEmail(email);
    const { password: _, ...userWithoutPassword } = user.dataValues;
    const token = createToken(userWithoutPassword);

    return res.status(CREATED).json({ token });
  } catch (err) {
    res.status(INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao salvar o usuário no banco',
      error: err.message,
    });
  }
};

module.exports = { 
   createUser,
   getAllUsers,
   getById,
 };
