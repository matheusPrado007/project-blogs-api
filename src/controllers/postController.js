require('dotenv/config');
const { postService } = require('../services');

const CREATED = 201;
const INTERNAL_SERVER_ERROR = 500;
const OK_STATUS = 200;
const NOT_FOUND = 404;

const getAllPosts = async (_req, res) => {
  try {
    const posts = await postService.getAll();
    return res.status(OK_STATUS).json(posts);
  } catch (err) {
    res.status(INTERNAL_SERVER_ERROR).json(err.message);
  }
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await postService.getPostById(Number(id));
  if (post) {
    return res.status(OK_STATUS).json(post);
  }
  return res.status(NOT_FOUND).json({ message: 'Post does not exist' });
};

const createPostController = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const payload = req.data;
    const post = { title, content, categoryIds, userId: payload.id };
    const newPost = await postService.createPost(post);

    return res.status(CREATED).json(newPost);
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};

module.exports = {
  createPostController,
  getAllPosts,
  getPostById,
};
