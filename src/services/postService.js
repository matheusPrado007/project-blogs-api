const { BlogPost, Category, User, PostCategory } = require('../models');

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: 'password' },
      },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return posts;
};

const getPostById = async (id) => {
  const posts = BlogPost.findOne({
    where: { id },
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return posts;
};

const createPost = async ({ title, content, categoryIds, userId }) => {
  const newPost = await BlogPost.create({ title, content, userId });
  const postCategories = await categoryIds.map((category) => ({
    postId: newPost.id,
    categoryId: category,
  }));
  await PostCategory.bulkCreate([...postCategories]);

  return newPost;
};

module.exports = {
  createPost,
  getAll,
  getPostById,
};
