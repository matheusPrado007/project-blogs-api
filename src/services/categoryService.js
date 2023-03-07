const { Category } = require('../models');

const getAll = async () => {
  const categories = await Category.findAll({
    attributes: { exclude: 'password' },
  });

  return categories;
};

const createCategory = async ({ name }) => {
  const newCategory = await Category.create({ name });
  return newCategory;
};

module.exports = {
  createCategory,
  getAll,
};