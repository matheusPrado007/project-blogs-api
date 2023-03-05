const { userService } = require('../services');
require('dotenv/config');
const { createToken } = require('../auth/authFuctions');

const BAD_REQUEST = 400;
const OK_STATUS = 200;
const INTERNAL_SERVER_ERROR = 500;

const isBodyValid = (email, password) => email && password;
module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!isBodyValid(email, password)) {
      return res.status(BAD_REQUEST).json({
        message: 'Some required fields are missing',
      });
    }
    const user = await userService.getByEmail(email);
    
    if (!user || user.password !== password) {
      return res.status(BAD_REQUEST).json({ message: 'Invalid fields' });
    }
    const { password: _, ...userWithoutPassword } = user.dataValues;
    const token = createToken(userWithoutPassword);

    return res.status(OK_STATUS).json({ email: user.email, token });
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR)
    .json({ message: 'erro Interno', error: error.message });
  }
};
