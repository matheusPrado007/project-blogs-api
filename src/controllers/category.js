require('dotenv/config');
const { categoryService } = require('../services');

const CREATED = 201;
const INTERNAL_SERVER_ERROR = 500;

const create = async (req, res) => {
  try {
    const { name } = req.body;
    await categoryService.createCategory({ name });

    return res.status(CREATED).json({ name });
  } catch (err) {
    res.status(INTERNAL_SERVER_ERROR).json({
      message: 'Erro ao salvar o categoria no banco',
      error: err.message,
    });
  }
};

module.exports = {
  create,
};
