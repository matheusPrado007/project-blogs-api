const { Category } = require('../models');

const BAD_REQUEST = 400;

const validatePost = async (req, res, next) => {
  const { categoryIds, title, content } = req.body;
  const allCategoriesId = await Category.findAll({ attributes: ['id'] });

  const categories = await allCategoriesId.filter((category) =>
    categoryIds.includes(category.id));

  if (categories.length !== categoryIds.length) {
    return res.status(BAD_REQUEST).json({
      message: 'one or more "categoryIds" not found',
    });
  }
  if (!title || !content) {
    return res
      .status(BAD_REQUEST)
      .json({ message: 'Some required fields are missing' });
  }
  return next();
};

module.exports = {
  validatePost,
};
