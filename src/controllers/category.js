require('dotenv/config');
const { categoryService } = require('../services');

const CREATED = 201;
const INTERNAL_SERVER_ERROR = 500;
const OK_STATUS = 200;

const getAll = async (_req, res) => {
  try {
    const categories = await categoryService.getAll();
    return res.status(OK_STATUS).json(categories);
  } catch (err) {
    res.status(INTERNAL_SERVER_ERROR).json(err.message);
  }
};

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
  getAll,
};
